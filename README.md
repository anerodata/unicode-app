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

Si quisieramos desplegar en `https://<user>.github.io/unicode-app/`, podemos ejecutar el siguiente script que construye la aplicación en la carpeta `dist`, añade al _stage_ dicho directorio, hace _commit_ y sube el contenido del directorio a la rama `gh-pages`. 

También hace un push a la rama `main` para tener ambas ramas coordinadas.

El _script_ cuenta con que la carpeta donde se va a almacenar el resultado del `build` se llama `dist`

```
./gh-deploy.sh dist "Build for production"
```

Tambien podemos escoger directamente el nombre de la carpeta que vamos a subir a la rama `gh-pages` y el contenido del `commit` de la siguiente manera:

```
./gh-deploy.sh
```

