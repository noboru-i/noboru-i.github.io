const octokit = require('@octokit/rest')()

octokit.issues.getForRepo({owner: "noboru-i", repo: "noboru-i.github.io"})
.then(result => {
  const urlList = result.data.map((issue) => {
    return convertToMd(issue);
  });
  console.log(urlList);
})

function convertToMd(issue) {
  return issue.url;
}
