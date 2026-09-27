// Dati degli annunci forniti dalla consegna
let listaAnnunci = [];

// Selezione degli elementi dal DOM
const grigliaAnnunci = document.querySelector(".grigliaAnnunci");
const campoCategoria = document.querySelector(".campoCategoria");
const campoTesto = document.querySelector(".campoTesto");
const campoPrezzo = document.querySelector(".campoPrezzo");
const valorePrezzo = document.querySelector(".valorePrezzo");
const pulsanteReset = document.querySelector(".pulsanteReset");

// Inserisce le categorie nel menu a tendina evitando i duplicati
const popoloCategorie = () => {
  const listaCategorie = [];
  listaAnnunci.forEach((annuncio) => {
    if (!listaCategorie.includes(annuncio.category)) {
      listaCategorie.push(annuncio.category);
    }
  });
  listaCategorie.forEach((categoria) => {
    const opzioneCategoria = document.createElement("option");
    opzioneCategoria.value = categoria;
    opzioneCategoria.textContent = categoria;
    campoCategoria.appendChild(opzioneCategoria);
  });
};

// Calcola il prezzo massimo e imposta l'input range
const impostaFiltroPrezzo = () => {
  const prezzi = listaAnnunci.map((annuncio) => Number(annuncio.price));
  const prezzoMassimo = Math.ceil(Math.max(...prezzi));
  campoPrezzo.max = prezzoMassimo;
  campoPrezzo.value = prezzoMassimo;
  valorePrezzo.textContent = prezzoMassimo;
};

// Mostra le schede degli annunci a schermo
const mostraAnnunci = (annunciDaMostrare) => {
  grigliaAnnunci.innerHTML = "";
  if (annunciDaMostrare.length === 0) {
    grigliaAnnunci.innerHTML = `<div class="col-12"><p class="text-muted fs-5">Nessun annuncio trovato.</p></div>`;
    return;
  }
  annunciDaMostrare.forEach((annuncio) => {
    const colonna = document.createElement("div");
    colonna.classList.add("col");
    const testoTipo = annuncio.type === "sell" ? "Vendo" : "Cerco";
    const badgeColore = annuncio.type === "sell" ? "bg-success" : "bg-warning text-dark";
    colonna.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h3 class="card-title h5 text-truncate">${annuncio.name}</h3>
            <p class="card-subtitle mb-2 text-muted small">${annuncio.category}</p>
          </div>
          <div class="mt-3">
            <p class="card-text fs-4 fw-bold text-success mb-2">€ ${annuncio.price}</p>
            <span class="badge ${badgeColore}">${testoTipo}</span>
          </div>
        </div>
      </div>
    `;
    grigliaAnnunci.appendChild(colonna);
  });
};

// Filtra gli annunci in base ai tre campi di input
const applicaFiltri = () => {
  const categoriaSelezionata = campoCategoria.value;
  const testoCercato = campoTesto.value.toLowerCase().trim();
  const prezzoSelezionato = Number(campoPrezzo.value);
  valorePrezzo.textContent = prezzoSelezionato;
  const annunciFiltrati = listaAnnunci.filter((annuncio) => {
    const corrispondeCategoria = categoriaSelezionata === "tutte" || annuncio.category === categoriaSelezionata;
    const corrispondeNome = annuncio.name.toLowerCase().includes(testoCercato);
    const corrispondePrezzo = Number(annuncio.price) <= prezzoSelezionato;
    return corrispondeCategoria && corrispondeNome && corrispondePrezzo;
  });
  mostraAnnunci(annunciFiltrati);
};

// Ripristina tutti i filtri allo stato iniziale
const resettaFiltri = () => {
  campoCategoria.value = "tutte";
  campoTesto.value = "";
  impostaFiltroPrezzo();
  mostraAnnunci(listaAnnunci);
};

// Eventi di ascolto
campoCategoria.addEventListener("change", applicaFiltri);
campoTesto.addEventListener("input", applicaFiltri);
campoPrezzo.addEventListener("input", applicaFiltri);
pulsanteReset.addEventListener("click", resettaFiltri);

// Recupera gli annunci dal file JSON
fetch("../../annunci.json")
  .then((response) => response.json())
  .then((data) => {
    listaAnnunci = data;

    console.log({ listaAnnunci });

    // Inizializzazione della pagina
    popoloCategorie();
    impostaFiltroPrezzo();
    mostraAnnunci(listaAnnunci);
  });