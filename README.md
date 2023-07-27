# Convertidor de signos Unicode a caracteres en notación de escape

Para levantar la herramienta en local hay que instalar node y ejecutar estos comandos:

1. Instalar paquetes:

```
npm install
```

2. Desplegar la herramienta en local:

```
npm run dev
```

3. Podemos construir la aplicación en el directorio `dist` con:

```
npm run dist
```

Si quisieramos desplegar en `https://<user>.github.io/unicode-characters-parser/`, podemos ejecutar en la carpeta raíz del repositorio el siguiente script que realiza las siguientes tareas:

1. Construye la aplicación en la carpeta `dist`.
2. Añade al _stage_ dicho directorio.
3. hace `commit` con el mensaje que escribamos.
4. Establece el contenido del directorio en la rama `gh-pages`.
5. Hace un `push` a la rama `main` para tener ambas ramas coordinadas.

El _script_ cuenta con que la carpeta donde se va a almacenar el resultado del `build` se llama `dist`

```
./gh-deploy.sh
```

Podemos evitar escribir el `commit` en el prompt del terminal y parametrizar su contenido de la siguiente manera:

```
./gh-deploy.sh "Build for production"
```

