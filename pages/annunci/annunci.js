// Dati degli annunci forniti dalla consegna
const listaAnnunci = [
  {"id": 1, "name": "Huawei X5", "category": "Elettronica", "price": "120.12", "type": "sell"},
  {"id": 2, "name": "Fiat 500", "category": "Motori", "price": "2000.32", "type": "search"},
  {"id": 3, "name": "Mazza da Baseball", "category": "Sport", "price": "20.15", "type": "sell"},
  {"id": 4, "name": "Bilocale", "category": "Immobili", "price": "30000.54", "type": "search"},
  {"id": 5, "name": "Felpa usata", "category": "Abbigliamento", "price": "10.42", "type": "sell"},
  {"id": 6, "name": "Divani due posti", "category": "Arredamento", "price": "400.64", "type": "search"},
  {"id": 7, "name": "Pala", "category": "Giardinaggio", "price": "30.45", "type": "sell"},
  {"id": 8, "name": "Master of Pupo", "category": "Musica", "price": "15.64", "type": "sell"},
  {"id": 9, "name": "TV Samsung", "category": "Elettronica", "price": "230.42", "type": "sell"},
  {"id": 10, "name": "Ford Puma", "category": "Motori", "price": "25000.02", "type": "sell"},
  {"id": 11, "name": "Pallone da calcio", "category": "Sport", "price": "30.12", "type": "search"},
  {"id": 12, "name": "Trilocale", "category": "Immobili", "price": "55000.54", "type": "sell"},
  {"id": 13, "name": "Sciarpa scolorita", "category": "Abbigliamento", "price": "5.23", "type": "sell"},
  {"id": 14, "name": "Lampada", "category": "Arredamento", "price": "70.65", "type": "sell"},
  {"id": 15, "name": "Concime", "category": "Giardinaggio", "price": "2.45", "type": "search"},
  {"id": 16, "name": "Basso nuovo", "category": "Musica", "price": "300.62", "type": "sell"},
  {"id": 17, "name": "Cuffie Sony", "category": "Elettronica", "price": "120.65", "type": "sell"},
  {"id": 18, "name": "Ducati Monster", "category": "Motori", "price": "12000.13", "type": "sell"},
  {"id": 19, "name": "Pattini", "category": "Sport", "price": "90.64", "type": "search"},
  {"id": 21, "name": "Guanti invernali", "category": "Abbigliamento", "price": "22.04", "type": "sell"},
  {"id": 22, "name": "Scrivania in vetro", "category": "Arredamento", "price": "600.63", "type": "search"},
  {"id": 23, "name": "Secchio", "category": "Giardinaggio", "price": "30.43", "type": "search"},
  {"id": 24, "name": "Compilation Pupo", "category": "Musica", "price": "9.93", "type": "search"},
  {"id": 25, "name": "Auricolari Sennheiser", "category": "Elettronica", "price": "120.93", "type": "sell"},
  {"id": 26, "name": "Fiat 300", "category": "Motori", "price": "2560.42", "type": "sell"},
  {"id": 27, "name": "Set mazze da golf", "category": "Sport", "price": "4320.43", "type": "search"},
  {"id": 28, "name": "Posto augo", "category": "Immobili", "price": "2200.63", "type": "search"},
  {"id": 29, "name": "Zaino Decathlon", "category": "Abbigliamento", "price": "55.55", "type": "sell"},
  {"id": 30, "name": "Comodino", "category": "Arredamento", "price": "210.12", "type": "sell"},
  {"id": 31, "name": "Rastrello", "category": "Giardinaggio", "price": "5.62", "type": "sell"},
  {"id": 32, "name": "Compilation Nino D'Angelo", "category": "Musica", "price": "1.91", "type": "sell"},
  {"id": 33, "name": "IPhone X", "category": "Elettronica", "price": "1300.41", "type": "search"},
  {"id": 34, "name": "Nissan Juke", "category": "Motori", "price": "25420.40", "type": "sell"},
  {"id": 35, "name": "Guanti da palestra", "category": "Sport", "price": "11.54", "type": "search"},
  {"id": 37, "name": "Scarpe Nike", "category": "Abbigliamento", "price": "240.33", "type": "sell"},
  {"id": 38, "name": "Poltrona", "category": "Arredamento", "price": "420.66", "type": "search"},
  {"id": 39, "name": "Semi", "category": "Giardinaggio", "price": "4.43", "type": "sell"},
  {"id": 40, "name": "Biglietto Gods Of Metal", "category": "Musica", "price": "150.65", "type": "search"},
  {"id": 41, "name": "Macbook Pro", "category": "Elettronica", "price": "2340.37", "type": "search"},
  {"id": 42, "name": "Dacia Duster", "category": "Motori", "price": "13350.73", "type": "sell"},
  {"id": 43, "name": "Canoa", "category": "Sport", "price": "520.03", "type": "search"},
  {"id": 44, "name": "Cantina", "category": "Immobili", "price": "20000.12", "type": "sell"},
  {"id": 45, "name": "Jeans", "category": "Abbigliamento", "price": "55.54", "type": "sell"},
  {"id": 46, "name": "Lampadario", "category": "Arredamento", "price": "280.54", "type": "sell"},
  {"id": 47, "name": "Trattore", "category": "Giardinaggio", "price": "12000.09", "type": "sell"},
  {"id": 48, "name": "Plettro", "category": "Musica", "price": "0.99", "type": "sell"},
  {"id": 49, "name": "Modem", "category": "Mimmo", "price": "2.99", "type": "sell"}
];

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

// Inizializzazione della pagina
popoloCategorie();
impostaFiltroPrezzo();
mostraAnnunci(listaAnnunci);