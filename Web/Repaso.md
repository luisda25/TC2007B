# Repaso de módulo web

## React

- DOM y Virtual DOM: DOM modifica toda la página y Virtual DOM solo lo que tenga ese componente
- JSX
- Componentes: son funciones que te regresan codigo de html, hay dos tipos, de clase y funcionales, antes de los hooks se usaban los de clase, hacen lo mismo pero para class tienes que hacer el render, actualmente es obsoleto, los funcionales son hacer el componente uno mismo.
- JSX: HTML + Javascript
- Typescript: Javascript con tipos
- Javascript: Lenguaje de programación (web)

### Ventajas de Typescript
- Misma sintaxis que Javascript
- Señala los errores de compilación.
- Mejora la lectura

### <Admin>
Es el componente raíz de react-admin. Children son recursos y rutas 

### <Resources>
Componente que define las rutas de CRUD: Create, Read, Update, Delete. Los métodos de react-admin:
- List, que muestra todos los datos
- Create: Crea un nuevo dato
- Edit: Update y Delete
- Show: Muestra solo un dato

## Accesibilidad
El diseño de producto para que cualquier persona lo pueda usar. El objetivo principal es ayudar a personas con alguna discapacidad, pero es para que cualquier persona pueda usarlo.

- Accesibilidad Web: Diseñar páginas para hacer el contenido más usable y que puedan navegar, contribuir e interactuar con la página.

### Tipos de accesibilidad
- Visual Impairment: Ajustar el tamaño de la fuente, esto puede ser con shortcuts del teclado.
- Auditory Impairment: Closed captions y lenguaje de señas.
- Discapacidad física: Control de voz y en caso de parcial shortcuts de teclado.

### Web Accesibility Initiative (WAI)
Iniciative a nivel mundial que crea estandares y materiales de apoyo para entender e implementar la accesibilidad

### Principios
- Perceptible: que puedas ver donde se encuentra la información de una manera sencilla. navegación amigable
- Operable: Buen funcionamiento de la página, que funcionen todos los componentes
- Entendible: Lenguaje menos técnico o simple para que cualquier persona pueda entender el texto
- Robusto: que pueda adaptarse a nuevas tecnologías y que funcione los shortcuts y se puedan implementar en otros sistemas.

### Tips
- Imagenes descriptivas
- Colores simples
- Hecho para uso de solo teclado
- Escrito en lenguaje simple
- Simple and consistent layouts
- Botones descriptivos
- Dar suficiente tiempo para realizar una ccion
- Estructura de contenido usando HTML5
- Oraciones simples y puntos clave
- Links descriptivos y encabezados

## Testing
Sirve para evaluar la funcionalidad de un sistema.

Partes del ciclo del sistema:
- Análisis
- Diseño
- Implementación
- Pruebas
- Evaluación

### Plan de pruebas
Documento que especifica las pruebas que se llevaran a cabo donde se definen casos y metodos para satisfacer el objetivo principal. El plan no estatico es cuando podemos actualizar este documento.

Test plan features
1. Objetivo
2. Enfoque
3. Metodología de pruebas
4. Asunciones
5. Riesgos
6. Plan de mitigación
7. Rol y responsabilidades
8. Agenda
9. Seguimiento de defectos
10. Ambiente de pruebas
11. Criterio de entrada y salida
12. Entregables

### Pasos para plan de pruebas
1. Analizar la aplicación: como el objetivo de la pagina, quien lo va a usar, cuales son las funcioens y como funciona
2. Estrategia de diseño: Enfoque de la prueba, gente involucrada, metodos a usar, riesgos y plan de mitigación.
3. Objetivos de diseño: Definir los objetivos de las pruebas, que queremos lograr con ellas.
4. Dieseño de criterio: criterios de entrada y salida, condiciones para las pruebas.
5. Plan de recursos: dinero, gente, software, hardware y la infraestructura.
6. Ambiente de plan de pruebas: dispositivos, software y sistemas operativos
7. Agenda: Darle fecha y duración a las pruebas.
8. Determinar entregables: Lista de documentos y herrramientas que apoyan a las tareas de las pruebas.

### Tipos de pruebas
- Unit Testing: Se prueban los componentes individualmente
- Integration testing: Se prueban los componentes juntos, completos






