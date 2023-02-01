la funciondalidad debe cumplir el standar para realizar un buen codigo

categoria de prueba
Prueba funcionales
Prueba unitarias

Prueba no funcionales

Jest : es una herramienta de pruebas

---

# ¿Qué es un test?

Como developers tenemos que garantizar que el codigo escrito cumpla con ciertos requisitos/expectativas. Esto lo hacemos por medio de una prueba (test).

Esto nos asegura:

-   Nuestro codigo cumple con el standar.
-   Enviamos a producción sin errores.
-   Tipos de pruebas
-   Debemos tener en cuenta que existen dos tipos de pruebas:

## Funcionales.

-   Pruebas Unitarias.- Se prueban pequeñas partes de nuestro codigo asegurandonos así que cumplen con lo que se desea. (En una pagina web las pruebas se traducen a probar cada sección de la pagina y todas las interacciones en ellas).

## No funcionales.

Jest
Jest es un framework de JavaScript para pruebas.

## Instalacion de paquetes

'' npm install -D jest ''

## Trabajando con los basicos de Jest

Vamos a estar trabajando con la función “test”, esta recibe dos parametros:

Un string que describe lo que va a pasar.
Función anonima en la cual viene lo que se va a probar.

## La función expect

Contiene dos parametros:

Valor de entrada.
Con lo que el primer parametro va a ser comparado.

## Configuracion

    "scripts": {
    "test": "jest"
    },

## Ejecucion

    npm test // npm run test

## Clase 06

npx jest src/Profesional/04.Curso-de-unitTesting-jest/**test**/index.test.js

    scripts: {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest",
    "test:watch": "jest --watch",
    "eject": "react-scripts eject"
    },

    npm run test:watch

    npx jest --coverage
