npm run build

git config --global user.email ishikura.noboru@gmail.com
git config --global user.name "CircleCI"

tar zcvf $CIRCLE_ARTIFACTS/backup.tar.gz public/*

cd public
git init
git remote add origin git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git

cp ../circle.yml circle.yml

git add --force .
git commit -m "Release $CIRCLE_BUILD_NUM"
git push -f origin master:master
