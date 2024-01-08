# Subir un paquete de bit a github packages

## 1- Crear un token de acceso personal
Para crear un token de acceso personal, ve a la página de configuración de tu cuenta de GitHub y sigue estos pasos:
## 2- Configurar el archivo .npmrc
Corre el comando en la terminal en local para subir directo a github packages:
```
npm config set -- //npm.pkg.github.com/:_authToken=TOKEN
```

## 3- Subir paquete a github packages
Primero debes taggear el paquete con un número de versión, luego subirlo a github packages con el comando:
```text
bit link
bit publish yasniel1408-myorg.my-scope/hello-world
```