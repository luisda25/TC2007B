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
1. Objetivo: describe el punto del plan de pruebas y lista las pruebas a realizar
2. Enfoque: define los escenarios que se van y los que no se van a probar
3. Metodología de pruebas: definir que metodos se usaran para probar el sistema, se basan en los requerimientos de la aplicación
4. Asunciones: hacer hipotesis de las pruebas
5. Riesgos: Riesgos que puedan ocurrir en la prueba
6. Plan de mitigación: plan de reserva por si ocurre algún riesgo
7. Rol y responsabilidades: Lista de los miembros y sus responsabilidades
8. Agenda: inicio y fin de cada actividad con relación a las pruebas
9. Seguimiento de defectos: comunicación entre identificador y el que arregla el problema para luego volver a hacer la prueba
10. Ambiente de pruebas: Lista de hardware y software al usar en la prueba
11. Criterio de entrada y salida: condiciones que debe tener para empezar o terminar la prueba
12. Entregables: Reporte de la prueba para el cliente

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
1. Unit Testing: Se prueban los componentes individualmente. 
La ventaja es que no se necesitan otros componentes para proibar este. Desventaja que no vamos a identificar todos los errores del sistema.
2. Integration testing: Se prueban los componentes juntos, completos.
- Big bang: se prueba todo el sistema en conjunto. Es bueno para aplicaciones pequeñas. Para probarlo se debe esperar a que todos los modulos esten terminados.
- Bottom-up: de los modulos mas pequeños ir integrando poco a poco los más grandes
- Top-down; de los modulos grandes, ir integrando poco a poco los más pequeños

### Pruebas de usabilidad
Que tan bien puede usar el usuario el producto para cumplir una tarea de manera eficiente, efectiva y satisfactoria.

Componentes:
- Learnability
- Efficiency
- Memorability
- Errors
- Satisfaction

#### Jakob's ten usability heuristics
1. Visibility of system status: El diseño debe de informar al usuario de lo que está pasando
2. Match between system and the Real World: El diseño debe de hablar de una manera en que el usuario pueda entenderlo, sin tecnicismos.
3. User Control and Freedom: Asegurar que ciertas acciones no hayan sido por accidente, confirmar la selección del usuario.
4. Consistency and Standards: Consistencia con las palabras para las acciones y los lugares de los botones.
5. Error prevention: Buenos mensajes de error para prevenir problemas.
6. Recognition rather than Recall: evitar que los usuarios tengan que estar recordando la información haciendoselas visible.
7. Flexibility and Efficiency of use: Atajos para mejorar la navegación de un usuario experto.
8. Aesthetic and minimalist design: No se debe contener información que no sea relevante.
9. Recognize, Diagnose, and Recover from errors: Los errores de mensaje deben aparecer explicados en lenguaje normal. no mandar errores de codigos.
10. Help and Documentation: Documentacion por si hay alguna duda del sistema, algo tipo faqs etc...

## Componentes y Hooks

#### Componentes
Los componentes son funciones de javascript que regresan HTML (JSX markup). Deben tener el nombre empezando por mayúscula, pueden hacer render de otros compoenentes. Tienen dos tipos: de clase y funcionales.

### Hooks
Los hooks son funciones que permiten crear o accesar estados de react y del ciclo de vida en los componentes

##### Hooks básicos

- useState: el valor que reciba el hook se declara como el valor inicial hasta que se vuelva a declarar con la funcion set.
- useEffect: Realiza efectos secundarios en la funcion de los componentes despues de cada render
- useMediaQuery: analiza el temaño de la pantalla actual.
- warnWhenUnsavedChanges: Pregunta al usuario para confirmar un cambio antes de salir de la página.
- useNotify: hace display de una notificación en la parte inferior de la pantalla.









