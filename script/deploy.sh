npm run build

git config --global user.email ishikura.noboru@gmail.com
git config --global user.name "CircleCI"

mkdir $CIRCLE_ARTIFACTS/public
cp public/* $CIRCLE_ARTIFACTS/public/

cd public
git init
git remote add origin git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git

echo 'general:' > circle.yml
echo '  branches:' >> circle.yml
echo '    ignore:' >> circle.yml
echo '      - master' >> circle.yml

git add --force .
git commit -m "Release $CIRCLE_BUILD_NUM"
git push -f origin master:master
