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

# Obtener mensaje de commit
commit_message=$1
while [ -z "$commit_message" ]; do
  echo "Introduce un mensaje para el commit. Ej: Build for production"
  read commit_message
done

# Desplegar directorio dist
git add dist
git commit -m "$commit_message"

# Push en la rama del commit con el contenido del directorio construido
git subtree push --prefix dist origin gh-pages

# Push del commit en main
git push
