#!/bin/sh
# Usage: ./gh-pages-deploy.sh dist "Build for production"

# Comprobar si el usuario esta en el top level de trabajo
repo_root=$(git rev-parse --show-toplevel)
current_dir=$(pwd)
if [ $current_dir != $repo_root ]; then
  echo "Error: debes moverte al nivel superior del árbol de trabajo para desplegar en la rama gh-pages"
  exit 1
fi

# Construir directorio
npm run build

# Añadir dist al stage
git add dist

# Commitear cambios
commit_message=$1
while [ -z "$commit_message" ]; do
  echo "Introduce un mensaje para el commit. Ej: Build for production"
  read commit_message
done
git commit -m "$commit_message"

# Desplegar directorio dist en gh-pages
git subtree push --prefix dist origin gh-pages

# Push del commit en main
git push
