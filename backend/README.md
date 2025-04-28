# Backend de aplicación.

El backend se crea con Nestjs, Prisma y Typescript.

## Popular datos

Se crea un script "semilla" para popular la base de datos con datos de prueba.

```bash
npx prisma db seed
```

## Base de datos

Se usa prisma ORM para gestionar la base de datos. Y prisma client para interactuar con la base de datos. Por simplicidad se utiliza sqlite, sin embargo, la migración a una base de datos como PostgreSQL o MySQL es fácil de realizar gracias a Prisma.

## Uso nestjs

Se aprovechan los guards, interceptores y pipes para mejorar la seguridad y la funcionalidad de la aplicación. Se crea la base robusta para seguir añadiendo funcionalidades.

## Autenticación

La autenticación se realiza usando la librería Passport. Usando las estrategias `local` y `jwt`. Se integran los guards de Passport para proteger las rutas.

## Validación

Se usa `class-validator` para validar los datos de entrada.

## Testing

Se usa Jest para realizar pruebas unitarias y de integración.

Para ejecutar las pruebas unitarias:

```bash
npm run test
```
