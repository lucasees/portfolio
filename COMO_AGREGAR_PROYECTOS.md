# Cómo agregar un proyecto a mi portfolio

Guía paso a paso. Cada vez que termine un proyecto nuevo, sigo estos pasos.
Toco `projects.js` y agrego UNA imagen en la carpeta `imagenes/`.

URL de mi portfolio: https://lucasees.github.io/portfolio/
(La URL es SIEMPRE la misma. Agregar proyectos o imágenes nunca la cambia.)

---

## PASO 1 — Abrir el archivo de proyectos

El único archivo que edito es:

```
/Users/lucas/Desktop/Lucas/Personal/portfolio/projects.js
```

Lo abro con el editor que prefiera (VS Code, TextEdit, etc.).
Forma rápida desde la terminal:

```bash
cd ~/Desktop/Lucas/Personal/portfolio
open -a "Visual Studio Code" projects.js
```

Si no tengo VS Code, uso:

```bash
open -e projects.js
```

---

## PASO 2 — Pegar el bloque del proyecto nuevo

Dentro del archivo veo una lista que empieza con `const PROYECTOS = [` y termina con `];`.

Copio este bloque y lo pego JUSTO ANTES del `];` final:

```js
  {
    titulo: "Nombre de mi proyecto nuevo",
    stack: "Python · SQL · Power BI",
    descripcion:
      "Una o dos frases explicando qué hace el proyecto y qué resolví.",
    metricas: [
      "Métrica clave 1",
      "Métrica clave 2",
      "Métrica clave 3",
    ],
    imagen: "imagenes/mi-proyecto-nuevo.png",
    github: "https://github.com/lucasees/mi-repo-nuevo",
    destacado: true,
  },
```

### Reglas para que NO se rompa

- El bloque entero va entre `{` y `}` y SIEMPRE termina con una coma `,`.
- `titulo`: el nombre del proyecto, entre comillas `"..."`.
- `stack`: las tecnologías separadas por ` · ` (ese punto medio se hace con
  `Opt + Shift + 9` en Mac). Ej: `"Python · pandas · scikit-learn"`.
- `descripcion`: 1 o 2 frases, entre comillas.
- `metricas`: una lista. Pongo las que quiera, cada una entre comillas y con coma.
- `imagen`: la ruta a la captura del proyecto (ver PASO 2b). Va entre comillas.
  Si la omito, la web intenta buscar `imagenes/proyecto{número}.png` por orden;
  para no depender del orden, mejor SIEMPRE ponerla con nombre propio.
- `github`: la URL del repo, entre comillas.
- `destacado: true`: OPCIONAL. Resalta la tarjeta. Si NO lo quiero, BORRO esa línea entera.

### Cómo queda (ejemplo real)

```js
const PROYECTOS = [
  {
    titulo: "Mapa de Inversión Inmobiliaria de Valencia",
    // ... (proyectos que ya existen) ...
  },

  // 👇 MI PROYECTO NUEVO PEGADO AQUÍ, ANTES DEL ];
  {
    titulo: "Análisis de Ventas Retail 2026",
    stack: "BigQuery · Looker Studio",
    descripcion:
      "Dashboard de ventas con datos reales de retail, analizando estacionalidad y márgenes por categoría.",
    metricas: [
      "120.000 transacciones",
      "Margen medio 23%",
      "Dashboard público en Looker Studio",
    ],
    imagen: "imagenes/ventas-retail-2026.png",
    github: "https://github.com/lucasees/mi-repo-retail",
  },
];   // 👈 este corchete y punto y coma quedan al final SIEMPRE
```

Guardo el archivo: `Cmd + S`.

---

## PASO 2b — Guardar la imagen del proyecto

Cada tarjeta muestra una imagen arriba (un dashboard o gráfico del proyecto).
Guardo una captura en la carpeta `imagenes/`:

```
/Users/lucas/Desktop/Lucas/Personal/portfolio/imagenes/mi-proyecto-nuevo.png
```

- El nombre del archivo tiene que coincidir con lo que puse en `imagen:` en el PASO 2.
- Horizontal, sin cromo de ventana (nada de barra del navegador ni menús), sin datos
  personales. Cuanto más nítida, mejor.
- Si no pongo imagen, la tarjeta igual funciona pero sale sin foto (queda descolgada
  respecto a las demás), así que conviene siempre ponerla.

---

## PASO 3 — Verlo antes de publicar (opcional pero recomendado)

Abro la web localmente para revisar que se vea bien:

```bash
cd ~/Desktop/Lucas/Personal/portfolio
open index.html
```

Se abre en el navegador. Bajo hasta la sección "Proyectos" y compruebo que
aparezca la tarjeta nueva. Si algo se ve mal, vuelvo al PASO 2 y reviso comas/comillas.

---

## PASO 4 — Publicar (subir a internet)

Desde la terminal, dentro de la carpeta del portfolio, ejecuto estos 4 comandos
uno por uno:

```bash
cd ~/Desktop/Lucas/Personal/portfolio
git add projects.js imagenes/
git commit -m "Agrego proyecto: Análisis de Ventas Retail 2026"
git push
```

Qué hace cada comando:
- `cd ~/Desktop/Lucas/Personal/portfolio` → entro a la carpeta del portfolio.
- `git add projects.js imagenes/` → marco el archivo de proyectos Y la imagen nueva para subir.
- `git commit -m "..."` → guardo el cambio con un mensaje (cambio el texto por el nombre de mi proyecto).
- `git push` → lo subo a GitHub.

En **1 o 2 minutos** el proyecto aparece solo en:
https://lucasees.github.io/portfolio/

(Si no aparece enseguida, recargo con `Cmd + Shift + R` para vaciar la caché.)

---

## Resumen ultra-rápido

1. Abrir `projects.js`
2. Pegar un bloque `{ ... },` antes del `];` (con su campo `imagen:`)
2b. Guardar la captura en `imagenes/` con el mismo nombre que puse en `imagen:`
3. (Opcional) `open index.html` para revisar
4. `git add projects.js imagenes/` → `git commit -m "..."` → `git push`

Listo. Toco `projects.js` y agrego la imagen en `imagenes/`.
