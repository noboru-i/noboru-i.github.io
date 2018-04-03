const octokit = require('@octokit/rest')();
const _ = require('underscore');
const util = require('util');
const fs = require('fs');
const path = require("path");
const moment = require('moment');

const githubOwner = 'noboru-i';
const githubRepo = 'noboru-i.github.io';

const publishedDate = moment();
const outputDir = path.join('src/pages/articles', publishedDate.format('YYYY'));
const outputFile = path.join(outputDir, publishedDate.format('YYYY-MM-DD') + '.md');

process.on('unhandledRejection', console.dir);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

octokit.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN
});

async function loadFile() {
  const readFile = util.promisify(fs.readFile);
  return await readFile('script/md_template.md.tpl', 'utf8');
}

async function fetchIssue() {
  const result = await octokit.issues.getForRepo({owner: githubOwner, repo: githubRepo, milestone: 'none'});
  const issueList = result.data.map((issue) => {
    return convertInfo(issue);
  });
  return issueList;
}

async function updateIssue(issue, milestone) {
  return octokit.issues.edit({owner: githubOwner, repo: githubRepo, number: issue.number, milestone: milestone.number});
}

async function updateIssues(issueList) {
  const milestoneResponse = await octokit.issues.createMilestone({owner: githubOwner, repo: githubRepo, title: publishedDate.format('YYYYMMDD'), due_on: publishedDate.format()});
  const milestone = milestoneResponse.data;
  console.log('milestone is created. ' + milestone.url);
  const requests = issueList.map((issue) => {
    return updateIssue(issue, milestone);
  });
  await Promise.all(requests);
  console.log('issues is updated. ' + issueList.map(issue => { return issue.number }));
}

async function convert() {
  const [template, issueList] = await Promise.all([loadFile(), fetchIssue()]);
  if (issueList.length == 0) {
    console.log('issue is nothing.');
    return;
  }
  const compiled = _.template(template);
  const markdown = compiled({
    publishedDate: publishedDate.format('YYYY/MM/DD'),
    tags: _.uniq(issueList.reduce((list, issue) => { return list.concat(issue.tags); }, [])),
    list: issueList
  });

  fs.writeFileSync(outputFile, markdown);
  console.log('file is written. ' + outputFile);
  await updateIssues(issueList);
}

convert();

function convertInfo(issue) {
  return {
    number: issue.number,
    title: issue.title,
    url: getUrl(issue.body),
    content: getContent(issue.body),
    tags: issue.labels.map((label) => { return label.name })
  };
}

function getUrl(body) {
  const lines = body.split(/\r\n|\r|\n/);
  const urlIndex = lines.findIndex((line) => { return line === '## URL'; });
  return urlIndex === -1 ? '' : lines[urlIndex + 1];
}

function getContent(body) {
  const lines = body.split(/\r\n|\r|\n/);
  const contentIndex = lines.findIndex((line) => { return line === '## Content'; });
  if (contentIndex === -1) {
    return '';
  }
  return lines.slice(contentIndex + 1).join('\n');
}
