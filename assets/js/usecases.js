///*** Developed by SiB Colombia
// based on API Literature by GBIF
// https://techdocs.gbif.org/en/openapi/v1/literature#/
// JS code by David G.
// ***/

// ====== CHART DATA ======
function mergeDataByYear(dataArray) {
 const topicsByYear = {};
 dataArray.forEach((yearData, index) => {
   const year = state.yearStart + index;
   yearData.forEach(item => {
     (item.topics || []).forEach(topic => {
       if (!topicsByYear[topic]) topicsByYear[topic] = {};
       if (!topicsByYear[topic][year]) topicsByYear[topic][year] = 0;
       topicsByYear[topic][year]++;
     });
   });
 });
 return topicsByYear;
}


// ====== CHART ======
function renderChart(topicsByYear) {
 const topics = Object.keys(topicsByYear);
 if (!topics.length) {
   document.getElementById("container").innerHTML =
     `<p style="text-align:center">No hay datos para la gráfica</p>`;
   return;
 }
 const years = [];
 for (let y = state.yearStart; y <= state.yearEnd; y++)
   years.push(y);
 const series = years.map(year => ({
   name: String(year),
   data: topics.map(topic => topicsByYear[topic][year] || 0)
 }));
 Highcharts.chart('use-chart-topics', {
   chart: { type: 'bar' },
   title: {
      text: ''
   },
   xAxis: {
     categories: topics.map(translateTopic),
     title: { text: 'Temas' }
   },
   yAxis: {
     min: 0,
     title: { text: 'Número de publicaciones' }
   },
   plotOptions: {
     series: { stacking: 'normal' }
   },
   series: series,
   credits: { enabled: false }
 });
 let user_chart_title = document.querySelector("#use-chart-title");
 user_chart_title.innerHTML = `Temas en los que se usaron datos ${state.yearStart}–${state.yearEnd}`;
}

// ====== AUTHOR COUNTRIES TO EMOJI FLAGS ======
function translateCountry(code) {
  if (!code) return "";
  const key = String(code).toUpperCase();
  return (
    translations.countries?.[key] ||
    key
  );
}

// ====== TABLE ======
function initTable(data) {
 const tbody = document.querySelector("#use-table tbody");
 tbody.innerHTML = "";
 const label_date_range = document.querySelectorAll(".use_date_range");
 label_date_range.forEach(function(item) {
   item.innerHTML = `${state.yearStart}–${state.yearEnd}`;
 });
 if (!data.length) {
   tbody.innerHTML = `
     <tr>
       <td colspan="6" style="text-align:center; padding:20px;">
         No se encontraron publicaciones con estos filtros
       </td>
     </tr>
   `;
   return;
 }
 data.forEach(item => {
   const tr = document.createElement("tr");
   const authors = formatAuthors(item.authors);
   const titleHTML = item.link
     ? `<a href="${item.link[0]}" target="_blank">${item.title || ""}</a>`
     : item.title || "";
   const authorsHTML = authors.short
     ? `<br><details><summary>${authors.short}</summary><blockquote>${authors.full}</blockquote></details>`
     : "";
   tr.innerHTML = `
     <td>${item.year || ""}</td>
     <td>
       ${titleHTML}
       ${authorsHTML}
     </td>
     <td>${(item.countriesOfResearcher || []).map(translateCountry).join(", ")}</td>
     <td>${item.openAccess ? "Sí" : "No"}</td>
     <td>${(item.countriesOfResearcher || []).map(translateCountry).join(", ")}</td>
     <td>${translateLiteratureType(item.literatureType || "")}</td>
   `;
   tbody.appendChild(tr);
 });
}

// ====== TABLE FILL SELECT FILTER ======
function fillSelect(id, values, placeholder, formatter = v => v) {
  const select = document.getElementById(id);
  if (!select) return;

  select.innerHTML = `<option value="">${placeholder}</option>`;

  values.forEach(value => {
    const option = document.createElement("option");
    option.value = String(value).toLowerCase();
    option.textContent = formatter(value);
    select.appendChild(option);
  });
}

// ====== TABLE BUILD FILTERS ======
function buildDynamicFilters() {
 const years = new Set();
 const topics = new Set();
 const countries = new Set();
 const types = new Set();
 full_data.forEach(item => {
   if (item.year) years.add(item.year);
   (item.topics || []).forEach(t => { if (typeof t === "string") { topics.add(t.trim()); } });
   (item.countriesOfResearcher || []).forEach(c => countries.add(c));
   if (item.literatureType) types.add(item.literatureType);
 });
 fillSelect("use-filter-year", [...years].sort((a, b) => b - a), "Año");
 fillSelect("use-filter-topics", [...topics].sort((a, b) => translateTopic(a).localeCompare(translateTopic(b), "es")),"Tema",translateTopic);
 fillSelect("use-filter-countries", [...countries].sort((a, b) => translateCountry(a).localeCompare(translateCountry(b), "es")),"Países de autores", translateCountry);
 fillSelect("use-filter-type", [...types].sort((a, b) => translateLiteratureType(a).localeCompare(translateLiteratureType(b), "es")),"Tipo",translateLiteratureType);
}

// ====== TABLE FILTERS ======
function initFilters() {
 const ids = [
   "use-filter-title",
   "use-filter-year",
   "use-filter-topics",
   "use-filter-openaccess",
   "use-filter-countries",
   "use-filter-type"
 ];
 ids.forEach(id => {
   const el = document.getElementById(id);
   if (!el) return;
   el.addEventListener(
     el.tagName === "SELECT" ? "change" : "input",
     applyFilters
   );
 });
}


// ====== TABLE - APPLY FILTERS ======
function applyFilters() {
 const title = document.getElementById("use-filter-title").value.toLowerCase();
 const year = document.getElementById("use-filter-year").value;
 const topics = document.getElementById("use-filter-topics").value.toLowerCase();
 const open_access = document.getElementById("use-filter-openaccess").value;
 const countries = document.getElementById("use-filter-countries").value.toLowerCase();
 const type = document.getElementById("use-filter-type").value.toLowerCase();
 filtered_data = full_data.filter(item => {
   return (
     (!title || (item.title || "").toLowerCase().includes(title)) &&
     (!year || String(item.year) === year) &&
     (!topics || (item.topics || []).some(t => String(t).toLowerCase() === topics)) &&
     (!open_access || String(item.openAccess) === open_access) &&
     (!countries || (item.countriesOfResearcher || []).some(c => String(c).toLowerCase() === countries)) &&
     (!type || String(item.literatureType || "").toLowerCase() === type)
   );
 });
 current_page = 1;
 //updateResultsCount(filtered_data.length);
 //updateStatistics(filtered_data);
 renderPaginatedTable();
}


// ====== TABLE - REDER PAGINATED ======
function renderPaginatedTable() {
 const start = (current_page - 1) * rows_per_page;
 const end = start + rows_per_page;
 const page_data = filtered_data.slice(start, end);
 initTable(page_data);
 renderPaginationControls();
 updateTableCount(); // 👈 aquí
}


// ====== TABLE - REDER PAGINATION CONTROLS ======
function renderPaginationControls() {
 const total_pages = Math.ceil(filtered_data.length / rows_per_page);
 const container = document.getElementById("use-pagination");
 if (!total_pages) {
   container.innerHTML = "";
   return;
 }
 container.innerHTML = `
   <button ${current_page === 1 ? "disabled" : ""} class="button" onclick="changePage(${current_page - 1})">
     ←
   </button>
   <span>Página ${current_page} de ${total_pages}</span>
   <button ${current_page === total_pages ? "disabled" : ""} class="button" onclick="changePage(${current_page + 1})">
     →
   </button>
 `;
}


// ====== TABLE - CHANGE PAGE ======
function changePage(page) {
 current_page = page;
 renderPaginatedTable();
}


// ====== TABLE - UPDATE COUNTER ======
function updateTableCount() {
 const el = document.getElementById("use-table-count");
 if (!filtered_data.length) {
   el.textContent = "Sin resultados";
   return;
 }
 const start = (current_page - 1) * rows_per_page + 1;
 const end = Math.min(current_page * rows_per_page, filtered_data.length);
 el.textContent = `Mostrando ${start}–${end} de ${filtered_data.length} resultados`;
}


// ====== TABLE - RESULTS COUNTER ======
function updateResultsCount(count) {
 const el = document.getElementById("results-count");
 el.textContent = `${count} resultados`;
}


// ====== AUTHORS ======
function formatAuthors(authors, max = 1) {
 if (!Array.isArray(authors)) {
   return { short: "", full: "" };
 }
 const list = authors
   .map(a => `${a.firstName || ""} ${a.lastName || ""}`.trim())
   .filter(Boolean);
 const full = list.join(", ");
 const short =
   list.length > max
     ? `${list.slice(0, max).join(", ")} <i>et al</i>.`
     : full;
 return { short, full };
}


// ====== UPDADE STATISTICS ======
function updateStatistics(data) {
  // 📚 Publicaciones (antes "citaciones")
  const totalPublications = data.length;

  // 👥 Autores únicos
  const authorsSet = new Set();

  data.forEach(item => {
    const authors = formatAuthors(item.authors);

    if (authors.full) {
      authors.full.split(",").forEach(a => {
        const name = a.trim();
        if (name) authorsSet.add(name);
      });
    }
  });

  const totalAuthors = authorsSet.size;

  // 🔓 % acceso abierto
  const openAccessCount = data.filter(item => item.openAccess === true).length;
  const openAccessPercent = totalPublications
    ? Math.round((openAccessCount / totalPublications) * 100)
    : 0;

  // 🎯 Actualizar DOM
  updateStatCard("publicaciones", totalPublications.toLocaleString("es-CO"));
  updateStatCard("autores(as)", totalAuthors.toLocaleString("es-CO"));
  updateStatCard("acceso abierto", openAccessPercent + " %");
}


// ====== UPDADE CARD ======
function updateStatCard(labelText, value) {
  const cards = document.querySelectorAll("#use-statistics .statistic");
  cards.forEach(card => {
    const description = card.querySelector(".feature-description p");
    const valueEl = card.querySelector(".feature-title p");
    if (!description || !valueEl) return;
    const text = description.textContent.toLowerCase().trim();
    if (text === labelText) {
      valueEl.textContent = value;
    }
  });
}


// ====== CONFIG ======
const year_current = new Date().getFullYear();
const year_previous = year_current - 1;
const year_min = 2012;
// ====== TOPIC TRANSLATIONS ======
let translations = {
  topics: {},
  literatureTypes: {}
};
async function loadTranslations() {
  try {
    const response = await fetch("../../assets/js/usecases.json");
    translations = await response.json();
  } catch (error) {
    console.error("Error cargando traducciones:", error);
    translations = {
      topics: {},
      literatureTypes: {}
    };
  }
}

function translateTopic(topic) {
  return (
    translations.topics?.[topic] ||
    topic.replace(/_/g, " ")
  );
}

function translateLiteratureType(type) {
  return (
    translations.literatureTypes?.[type] ||
    type.replace(/_/g, " ")
  );
}

const state = {
 yearStart: year_previous,
 yearEnd: year_current
};
let full_data = [];
let current_page = 1;
const rows_per_page = 5;
let filtered_data = [];


// ====== INIT SELECTS ======
function initYearSelectors() {
 const start_select = document.getElementById("use-year-start");
 const end_select = document.getElementById("use-year-end");
 const current_year = new Date().getFullYear();
 for (let y = current_year; y >= year_min; y--) {
   start_select.innerHTML += `<option value="${y}">${y}</option>`;
   end_select.innerHTML += `<option value="${y}">${y}</option>`;
 }
 start_select.value = state.yearStart;
 end_select.value = state.yearEnd;
 start_select.addEventListener("change", onYearChange);
 end_select.addEventListener("change", onYearChange);
}


// ====== HANDLE YEAR CHANGE ======
function onYearChange() {
 const start = parseInt(document.getElementById("use-year-start").value);
 const end = parseInt(document.getElementById("use-year-end").value);
 if (start > end) {
   alert("El año inicial no puede ser mayor que el final");
   return;
 }
 state.yearStart = start;
 state.yearEnd = end;
 init(); // 🔄 recarga todo
}


// ====== FETCH ======
async function fetchData(year) {
 const url = `https://api.gbif.org/v1/literature/search?year=${year}&relevance=GBIF_USED&countriesOfResearcher=CO&countriesOfCoverage=CO&limit=1000`;
 try {
   const res = await fetch(url);
   const data = await res.json();
   return data.results || [];
 } catch (err) {
   console.error("Error fetching data:", err);
   return [];
 }
}


// ====== INIT ======
async function init() {
 await loadTranslations();
 const chart_title = document.getElementById("use-chart-title");
 const chart_topics = document.getElementById("use-chart-topics");
 const tbody = document.querySelector("#use-table tbody");
 const loading = `<section class="has-text-centered"><button class="button is-loading "></button> <strong>Cargando datos...</strong></section>`;
 chart_title.innerHTML = "";
 chart_topics.innerHTML = loading;
 tbody.innerHTML = loading;
 const promises = [];
 for (let y = state.yearStart; y <= state.yearEnd; y++)
   promises.push(fetchData(y));
 const results = await Promise.all(promises);
 updateUI(results);
 buildDynamicFilters();
}


// ====== UI ======
function updateUI(dataArray) {
 const chartData = mergeDataByYear(dataArray);
 renderChart(chartData);
 full_data = mergeResults(dataArray);
 filtered_data = [...full_data];
 updateResultsCount(filtered_data.length);
 current_page = 1;
 renderPaginatedTable();
 updateStatistics(filtered_data);
 initFilters();
}


// ====== MERGE ======
function mergeResults(dataArray) {
 return dataArray.flat().map(item => ({
   title: item.title,
   year: item.year,
   topics: item.topics || [],
   openAccess: item.openAccess ?? false,
   countriesOfResearcher:
     item.countriesOfResearcher ||
     item.countriesOfAuthors ||
     [],
   countriesOfCoverage: item.countriesOfCoverage || [],
   literatureType:
     item.literatureType ||
     item.type ||
     "",
   authors: item.authors,
   // 🔗 link al recurso
   link: item.websites
 }));
}


// ====== START ======
initYearSelectors();
init();
