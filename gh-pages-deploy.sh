#!/bin/sh
#
# Comprobar si el usuario esta en el top level de trabajo
repo_root=$(git rev-parse --show-toplevel)
current_dir=$(pwd)
if [ $current_dir != $repo_root ]; then
  echo "Error: debes moverte al nivel superior del árbol de trabajo para desplegar en la rama gh-pages"
  exit 1
fi

# Obtener el directorio que se va a construir
deploy_dir=$1
while [ -z $deploy_dir ]; do
  echo 'Escribe el nombre de la carpeta a desplegar. Ej: dist'
  read deploy_dir
done

# Construir directorio
npm run build

# Obtener mensaje de commit
commit_message=$2
while [ -z $commit_message ]; do
  echo "Introduce un mensaje para el commit. Ej: build for production"
  read commit_message
done

# Desplegar directiorio
git add $deploy_dir
git commit -m $commit_message

# Push en la rama del commit con el contenido del directorio construido
git subtree push --prefix $deploy_dir origin gh-pages

# Push del commit en main
git push
