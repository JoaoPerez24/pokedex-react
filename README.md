# Pokédex

Aplicación web de una sola página (SPA) que consume la [PokéAPI](https://pokeapi.co/) para mostrar los 151 Pokémon de la primera generación, con búsqueda en cliente y vista de detalle.

Proyecto realizado como prueba técnica.

## Funcionalidades

- Listado de los 151 Pokémon de la primera generación, con imagen y nombre.
- Búsqueda en cliente por nombre, filtrando en tiempo real.
- Vista de detalle de cada Pokémon (imagen, tipos, altura y peso) al seleccionarlo.
- Manejo de los estados de interfaz: cargando, error, lista vacía y sin resultados.

## Stack

| Capa | Tecnología |
|---|---|
| Librería de interfaz | React |
| Lenguaje | TypeScript |
| Herramienta de build | Vite |
| Estilos | CSS plano |
| Datos | PokéAPI (pública) |

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Luego abre la dirección que indique la terminal (por defecto `http://localhost:5173`).

## Decisiones técnicas

### ¿Por qué la PokéAPI?

Elegí la PokéAPI por dos motivos. El primero, práctico: ya había trabajado con ella en ejercicios del grado, así que conocía la estructura de sus datos y pude centrar el esfuerzo en aprender React —que era lo nuevo para mí— en lugar de enfrentarme a la vez a una API desconocida. El segundo, personal: es un dominio que me resulta cercano y motivador, y eso me ayudó a cuidar más el resultado. Además es gratuita, no requiere registro ni clave de API, y devuelve datos ricos (imágenes, tipos, estadísticas) ideales para montar tanto un listado como una vista de detalle.

### Stack: React + TypeScript con Vite

Usé Vite como herramienta para crear y servir el proyecto. Vite levanta un servidor de desarrollo con recarga instantánea al guardar, lo que agiliza mucho el trabajo, y se encarga de empaquetar la app optimizada para producción. Opté por Vite en lugar de Create React App (CRA) porque CRA está actualmente descontinuado y Vite es la alternativa recomendada por su mayor rapidez de arranque y recarga. TypeScript lo usé porque el propio encargo lo pedía, y además su tipado me resultó familiar viniendo de Java.

### Estrategia de datos: traer todo una vez y filtrar en cliente

La aplicación pide los 151 Pokémon de la primera generación una sola vez al arrancar y guarda esa lista en memoria. La búsqueda filtra sobre esos datos ya cargados, en el navegador, sin volver a llamar a la API. Tomé esta decisión por dos razones. La primera es que el encargo pedía explícitamente "búsqueda en cliente", y filtrar en local es justo eso. La segunda es de eficiencia: con un conjunto de datos pequeño y fijo, llamar a la API en cada pulsación de tecla generaría muchísimas peticiones innecesarias, sería más lento y cargaría sin motivo una API gratuita. Filtrar en memoria es instantáneo y no consume red.

### Vista de detalle: cambio de vista mediante estado

Para mostrar el detalle de cada Pokémon opté por gestionar la vista con una variable de estado (`seleccionado`): si no hay ninguno elegido se muestra la cuadrícula, y al seleccionar uno se muestra su ficha. Descarté dos alternativas habituales de forma consciente. La primera, react-router, que habría dado a cada Pokémon una URL propia, pero introducía conceptos de enrutado que añadían complejidad innecesaria para una app de dos vistas. La segunda, una ventana modal, que también descarté por la complejidad añadida de su gestión (cierre, accesibilidad, scroll). El enfoque por estado era el más simple, suficiente para el alcance del proyecto, y se apoyaba en herramientas de React que ya manejaba.

## Herramientas utilizadas (incluida IA)

Me apoyé de forma importante en IA durante todo el proyecto, usándola como herramienta de aprendizaje guiado. Partía sin experiencia previa en React, y la IA me permitió entrar a la tecnología entendiendo cada parte del proceso a medida que la construía, en lugar de limitarme a copiar código. Mi prioridad fue asimilar de verdad lo que escribía: comprender por qué se usa cada pieza (estado, efectos, renderizado) antes de pasar a la siguiente. Considero que saber integrar la IA en el flujo de trabajo es hoy una habilidad necesaria, y la usé buscando aprender, no solo terminar.

## Qué dejé fuera (y por qué)

Prioricé construir una base sólida y comprendida por encima de añadir funcionalidades extra. Con más tiempo habría incorporado:

- **URLs propias para cada Pokémon** mediante react-router, que es el estándar en este tipo de aplicaciones.
- **Un backend propio** (por ejemplo con Docker u otra tecnología similar), como plantea el bonus del encargo.
- **Soporte para más generaciones** mediante paginación.

Dejé estas mejoras fuera de forma consciente: preferí asentar los fundamentos de React entendiéndolos bien, de cara a poder afrontar proyectos más ambiciosos en el futuro con esa base, en lugar de abarcar más de lo que podía comprender en el tiempo disponible.