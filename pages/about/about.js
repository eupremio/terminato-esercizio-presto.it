// 1. Array di oggetti (aggiunti campi materia/info per il retro)
const insegnanti = [
  {
    id: 1,
    nome: "alessio",
    img: "data:image/jpeg;base64,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",
    materia: "Matematica & Fisica",
  },
  {
    id: 2,
    nome: "luca",
    img: "https://img.magnific.com/free-photo/young-male-posing-isolated-against-blank-studio-wall_273609-12356.jpg?semt=ais_hybrid&w=740&q=80",
    materia: "Informatica & Web",
  },
  {
    id: 3,
    nome: "giorgia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpK1j32cSZ8h073fnWNmM89tTJYUA1-cdxlhAosTwQVJzvov9Cpa3tAg&s=10",
    materia: "Letteratura",
  },
  {
    id: 4,
    nome: "luigi",
    img: "https://img.magnific.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740&q=80",
    materia: "Lingua Inglese",
  },
  {
    id: 5,
    nome: "conny",
    img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
    materia: "Storia dell'Arte",
  },
  {
    id: 6,
    nome: "ciliwanga",
    img: "https://static.vecteezy.com/system/resources/thumbnails/054/007/161/small/a-young-man-with-a-backpack-and-white-shirt-photo.jpg",
    materia: "Scienze Naturali",
  },
];

const container = document.querySelector(".menu-container");
const mainCircle = document.getElementById("mainCircle");
const teacherCard = document.getElementById("teacherCard");
const cardInner = document.getElementById("cardInner");
const cardPhoto = document.getElementById("cardPhoto");
const cardName = document.getElementById("cardName");
const cardBackInfo = document.getElementById("cardBackInfo");

let isOpen = false;
const radius = 140;

// 2. Generazione dinamica dei cerchi satellite nel DOM
const elements = insegnanti.map((docente, index) => {
  const circle = document.createElement("div");
  circle.classList.add("sub-circle");
  circle.textContent = docente.nome;

  if (docente.img) {
    circle.style.backgroundImage = `url('${docente.img}')`;
    circle.textContent = "";
  }

  container.appendChild(circle);

  // Calcolo posizione circolare
  const total = insegnanti.length;
  const angle = index * (360 / total) * (Math.PI / 180);
  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));

  // Click sul singolo docente per caricare i dati
  circle.addEventListener("click", (e) => {
    e.stopPropagation();

    // Se la carta era già ruotata sul retro, la rimette sul fronte prima di cambiare docente
    cardInner.classList.remove("flipped");

    // Aggiorna foto nel fronte
    if (docente.img) {
      cardPhoto.style.backgroundImage = `url('${docente.img}')`;
      cardPhoto.textContent = "";
    } else {
      cardPhoto.style.backgroundImage = "none";
      cardPhoto.textContent = docente.nome.charAt(0);
    }

    // Aggiorna testo fronte e retro
    cardName.textContent = docente.nome;
    cardBackInfo.textContent =
      docente.materia || "Nessun dettaglio disponibile.";

    // Mostra la card
    teacherCard.classList.add("visible");
  });

  return {
    element: circle,
    x: x,
    y: y,
  };
});

// 3. NUOVO: Gestione del FLIP al click sulla card stessa
cardInner.addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});

// 4. Gestione del click sul cerchio centrale principale
mainCircle.addEventListener("click", () => {
  isOpen = !isOpen;

  elements.forEach((item, index) => {
    if (isOpen) {
      setTimeout(() => {
        item.element.classList.add("active");
        item.element.style.transform = `translate(${item.x}px, ${item.y}px) scale(1)`;
      }, index * 40);
    } else {
      item.element.classList.remove("active");
      item.element.style.transform = `translate(0px, 0px) scale(0.2)`;
    }
  });

  // Se chiudiamo il menu principale, nascondiamo la card e la resettiamo
  if (!isOpen) {
    teacherCard.classList.remove("visible");
    cardInner.classList.remove("flipped");
  }
});
