# Nomada WiFi TG

La aplicación está hecha con frontend y backend por separado, ambos usando typescript.

## Frontend

[Hecho con nextjs](./app/README.md)

## Backend

[Hecho con nestjs](./backend/README.md)

## Ejecución

Se puede ejecutar fácilmente la aplicación usando Docker compose, el único requerimiento es tener Docker instalado en el sistema.

```bash
docker compose up --build
```

Si desea ejecutar por separado, ejecute los siguientes comandos:

**ASEGURESE DE EJECUTAR EL FRONTEND EN EL PUERTO 3001 Y EL BACKEND EN EL PUERTO 3000 PARA FUNCIONAR CORRECTAMENTE**

```bash
cd ./app
PORT=3001 npm run dev
```

```bash
cd ./backend
npm run start:dev
```

o si desea ejecutar en modo `production`, debe construir primero el proyecto y luego ejecutarlo, así:

```bash
cd ./app
npm run build
PORT=3001 npm run start
```

```bash
cd ./backend
npm run build
npm run start
```
