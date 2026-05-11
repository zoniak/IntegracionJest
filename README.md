# API REST de Gestión de Payasos 
## Pruebas de Integración con Jest y Postman
Este proyecto consiste en el testeo con pruebas de integracion de una aplicacion con Frontend, Backend y BBDD utilizando Node.js, Express y SQLite. El objetivo principal es que el alumnado aprenda a configurar un entorno de backend, gestionar una base de datos local y realizar pruebas de integración robustas.

### Configuración del Proyecto
Sigue estos pasos para inicializar el entorno de trabajo:

1. npm init -y //esto es para crear servidor node
2. npm install --save-dev jest //instalar framework JEST para testeo

Para la bbdd:

1. npm install sqlite3 sqlite

Usar la extension extensión "SQLite Viewer" de Florian Klampfer

Instalar express:

1. npm install express

Para lanzar el proyecto:  
node .\src\controller\payasosController.js

Empezar testeando la API Rest del controller (usar la herramienta POSTMAN para probar la api del controller)  

Ejemplo de consulta para el post:

    {
        "name": "Donald Trump",
        "email": "payasos@casablanca.com",
        "arma": "demagogo"
    }

Para el frontend vamos a instalar cors:

1. npm install cors

### Soluciones problemas:  
No ejecuta el js del controller - ejecutar con node y la ruta del archivo
La base de datos aparece en otro lugar - La base de datos sqlite aparece en la ruta desde donde ejecutas el controller.js

### Aclaraciones:
El controller no es el archivo que se encarga de ejecutar un servidor pero por simplificacion se ha puesto en dicha parte
