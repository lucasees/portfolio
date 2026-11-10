// =============================================================
//  TUS PROYECTOS
//  Para agregar uno nuevo: copia un bloque { ... } y pegalo
//  donde quieras que aparezca (el orden de la lista es el de la web).
//  Campos:
//   - titulo:      nombre del proyecto (el mismo que en el CV)
//   - pregunta:    la pregunta de negocio que responde (es el titular de la tarjeta)
//   - cifra:       el resultado clave, corto (ej. "−31,5%")
//   - cifraTexto:  qué significa esa cifra, en una frase
//   - datos:       origen de los datos (ej. "Datos reales · 18 tiendas" o "Dataset simulado")
//   - stack:       tecnologías separadas por " · "
//   - github:      URL del repo
//   - imagen:      ruta del gráfico o captura (si falta, usa imagenes/proyectoN.png según la posición)
//   - caso:        ruta a la página del caso dentro de la web (opcional; añade "Ver caso")
//   - principal:   true para mostrarla a lo ancho, como caso destacado (usar en una sola)
// =============================================================

const PROYECTOS = [
  {
    titulo: "Análisis Comercial de un Distribuidor Industrial B2B/B2C",
    pregunta: "¿Dónde pierde margen un distribuidor industrial?",
    cifra: "5",
    cifraTexto: "oportunidades de negocio cuantificadas tras limpiar ~100.000 líneas de pedido: clientes en fuga, ventas cruzadas sin ofrecer y descuentos no autorizados.",
    datos: "Dataset simulado · ~100.000 pedidos",
    stack: "Python · Excel/Power Query · SQL Server · Power BI",
    github: "https://github.com/lucasees/proyecto6-analisis-comercial-industrial",
    imagen: "imagenes/proyecto6.png",
    caso: "casos/industrial.html",
    principal: true,
  },
  {
    titulo: "Mapa de Inversión Inmobiliaria de Valencia",
    pregunta: "¿Qué barrios de Valencia cuestan más de lo que deberían?",
    cifra: "−8,3%",
    cifraTexto: "El Calvari, el barrio más infravalorado según el modelo de precio (MAE 244 €/m²).",
    datos: "Datos reales · 33.622 viviendas",
    stack: "Python · geopandas · LightGBM · scikit-learn · folium · Power BI",
    github: "https://github.com/lucasees/proyecto5-inmobiliario-valencia",
    imagen: "imagenes/valencia-sobrevaloracion.png",
    caso: "casos/valencia.html",
  },
  {
    titulo: "Predicción de Demanda con Machine Learning",
    pregunta: "¿Cuánto le cuesta a un supermercado equivocarse al predecir la demanda?",
    cifra: "−31,5%",
    cifraTexto: "de error frente a repetir la venta de la semana anterior (−62,7% frente al promedio histórico).",
    datos: "Datos reales · 18 tiendas",
    stack: "Python · LightGBM · scikit-learn",
    github: "https://github.com/lucasees/proyecto4-demanda-favorita",
    imagen: "imagenes/favorita-costo-error.png",
    caso: "casos/favorita.html",
  },
  {
    titulo: "Análisis de Churn con Python",
    pregunta: "¿Por qué se van los clientes de una telco?",
    cifra: "42,7%",
    cifraTexto: "de fuga en contratos mensuales, frente al 2,8% en contratos de dos años.",
    datos: "Dataset público · 7.043 clientes",
    stack: "Python · pandas · seaborn",
    github: "https://github.com/lucasees/proyecto3-churn-analysis",
    imagen: "imagenes/proyecto4.png",
  },
  {
    titulo: "Análisis Comercial B2B",
    pregunta: "¿Qué clientes B2B valen más y cuáles se están enfriando?",
    cifra: "RFM",
    cifraTexto: "segmentación y cohortes de retención sobre 1.747 registros en 5 tablas, con tablero de KPIs.",
    datos: "Dataset simulado · 1.747 registros",
    stack: "SQL Server · Power BI",
    github: "https://github.com/lucasees/proyecto1-analisis-b2b",
    imagen: "imagenes/proyecto2.png",
  },
  {
    titulo: "E-Commerce Analytics — Google Merchandise Store",
    pregunta: "¿Qué canal vende y cuál solo trae visitas?",
    cifra: "5,3%",
    cifraTexto: "de conversión en Referral, frente al 1,3% general, en 903.653 sesiones.",
    datos: "Datos reales · Google Analytics 2016-2017",
    stack: "BigQuery · SQL · Looker Studio",
    github: "https://github.com/lucasees/proyecto2-ecommerce-analytics",
    imagen: "imagenes/proyecto3.png",
  },
];
