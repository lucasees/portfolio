// =============================================================
//  TUS PROYECTOS
//  Para agregar uno nuevo: copia un bloque { ... } y pegalo
//  al final de la lista. La web lo dibuja sola.
//  Campos:
//   - titulo:      nombre del proyecto
//   - stack:       tecnologias separadas por " · "
//   - descripcion: 1-2 frases explicando el proyecto
//   - metricas:    lista de resultados clave (badges)
//   - github:      URL del repo
//   - destacado:   true para resaltar la tarjeta (opcional)
// =============================================================

const PROYECTOS = [
  {
    titulo: "Mapa de Inversión Inmobiliaria de Valencia",
    stack: "Python · GeoPandas · LightGBM · Folium · scikit-learn",
    descripcion:
      "Análisis de 33.622 viviendas reales de Valencia (idealista18) para detectar barrios con mejor rentabilidad de alquiler y anomalías de valoración, con un mapa de calor interactivo.",
    metricas: [
      "33.622 viviendas",
      "Modelo MAE 244 €/m² (14,3%)",
      "Top rentabilidad: Ciutat Fallera 7,50%",
      "Infravalorado: El Calvari −8,3%",
    ],
    github: "https://github.com/lucasees/proyecto5-inmobiliario-valencia",
    destacado: true,
  },
  {
    titulo: "Predicción de Demanda con Machine Learning",
    stack: "Python · LightGBM",
    descripcion:
      "Modelo de previsión de demanda para retail con datos reales de Corporación Favorita (18 tiendas), traduciendo el error de predicción a impacto económico real.",
    metricas: [
      "Mejora del baseline 62,6% (MAE)",
      "27,6 M$ de ahorro estimado en 8 meses",
      "Understock vs. sobrestock",
    ],
    github: "https://github.com/lucasees/proyecto4-demanda-favorita",
    destacado: true,
  },
  {
    titulo: "Análisis Comercial B2B",
    stack: "SQL Server · Power BI",
    descripcion:
      "Segmentación RFM, análisis de cohortes e identificación de tendencias y desviaciones sobre 1.747 registros B2B, con un cuadro de mando de KPIs comerciales.",
    metricas: [
      "1.747 registros · 5 tablas",
      "Segmentación RFM y cohortes",
      "Dashboard de KPIs en Power BI",
    ],
    github: "https://github.com/lucasees/proyecto1-analisis-b2b",
  },
  {
    titulo: "E-Commerce Analytics (GA4)",
    stack: "BigQuery · Looker Studio · GA4",
    descripcion:
      "Datos reales de Google Merchandise Store: comportamiento de usuario, conversión por canal y revenue, con cuadro de mando público en Looker Studio.",
    metricas: [
      "8 consultas SQL en BigQuery",
      "Conversión por canal y revenue",
      "Dashboard público en Looker Studio",
    ],
    github: "https://github.com/lucasees/proyecto2-ecommerce-analytics",
  },
  {
    titulo: "Análisis de Churn con Python",
    stack: "Python · pandas · scikit-learn",
    descripcion:
      "Análisis exploratorio de 7.043 clientes de telecomunicaciones para identificar las principales palancas de retención y reducción de la fuga de clientes.",
    metricas: [
      "7.043 clientes analizados",
      "Churn 26,5%",
      "42,7% en contratos mensuales vs. 2,8% bianuales",
    ],
    github: "https://github.com/lucasees/proyecto3-churn-analysis",
  },
];
