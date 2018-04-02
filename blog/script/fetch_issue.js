const octokit = require('@octokit/rest')();
const _ = require('underscore');
const util = require('util');
const fs = require('fs');

process.on('unhandledRejection', console.dir);

async function loadFile() {
  const readFile = util.promisify(fs.readFile);
  return await readFile('script/md_template.md.tpl', 'utf8');
}

async function fetchIssue() {
  const result = await octokit.issues.getForRepo({owner: "noboru-i", repo: "noboru-i.github.io"});
  const issueList = result.data.map((issue) => {
    return convertInfo(issue);
  });
  return issueList;
}

async function convert() {
  const [template, issueList] = await Promise.all([loadFile(), fetchIssue()]);
  const compiled = _.template(template);
  const markdown = compiled({
    published_date: '2018/04/07',
    tags: _.uniq(issueList.reduce((list, issue) => { return list.concat(issue.tags); }, [])),
    list: issueList
  });

  await fs.writeFile( "output.md" , markdown);
  console.log("done!!");
}

convert();

function convertInfo(issue) {
  return {
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
