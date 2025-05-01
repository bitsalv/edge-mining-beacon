
#!/usr/bin/env sh

# arresta in caso di errori
set -e

# build
npm run build

# naviga nella directory di output della build
cd dist

# se stai deployando su un dominio personalizzato
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# se stai deployando su https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# se stai deployando su https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
