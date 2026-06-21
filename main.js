// Renderiza las tarjetas de proyectos desde projects.js
const grid = document.getElementById("proyectos-grid");

const githubIcon =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>';

grid.innerHTML = PROYECTOS.map((p) => {
  const metrics = p.metricas.map((m) => `<span>${m}</span>`).join("");
  const flag = p.destacado ? '<span class="card__flag">Destacado</span>' : "";
  return `
    <article class="card ${p.destacado ? "card--featured" : ""}">
      ${flag}
      <h3 class="card__title">${p.titulo}</h3>
      <p class="card__stack">${p.stack}</p>
      <p class="card__desc">${p.descripcion}</p>
      <div class="card__metrics">${metrics}</div>
      <a class="card__link" href="${p.github}" target="_blank" rel="noopener">
        ${githubIcon} Ver en GitHub
      </a>
    </article>`;
}).join("");

// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();
