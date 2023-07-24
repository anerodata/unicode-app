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

Podemos construir la aplicación en el directorio `dist` con:

```
npm run dist
```

Al construir en `dist` la aplicacion se despliega en https://anerodata.github.io/unicode-app/ ejecutando:

```
git add dist && git commit -m "Build for production"
```

Y subiendo el resultado a la rama `gh-pages` ejecutando el _script_ de _bash_:

`./gh-deploy.sh`


