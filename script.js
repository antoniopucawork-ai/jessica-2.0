const thoughts = document.querySelectorAll(".thought");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.45,
  },
);

thoughts.forEach((thought) => {
  observer.observe(thought);
});

/* ========================================
   ANIMAZIONE JESSICA
======================================== */

const reveals = document.querySelectorAll(
  ".reveal, .reveal-photo, .reveal-name, .reveal-text",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

reveals.forEach((item) => {
  revealObserver.observe(item);
});
const revealTitles = document.querySelectorAll(".reveal-title");

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

revealTitles.forEach((title) => {
  titleObserver.observe(title);
});
// ========================================
// COSTELLAZIONE TEMI
// ========================================

const areas = document.querySelectorAll(".area");

const areasObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

areas.forEach((area) => {
  areasObserver.observe(area);
});
// ========================================
// FOTO STUDIO
// ========================================

const studioImage = document.querySelector(".studio-image-wrapper");

const studioObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

if (studioImage) {
  studioObserver.observe(studioImage);
}
// ========================================
// METODO DI LAVORO
// ========================================

const methodElements = document.querySelectorAll(
  ".reveal-method, .reveal-method-text",
);

const methodObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

methodElements.forEach((element) => {
  methodObserver.observe(element);
});
// ========================================
// VALORI DEL PERCORSO
// ========================================

const values = document.querySelectorAll(".value");

const valuesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

values.forEach((value) => {
  valuesObserver.observe(value);
});
// ========================================
// SEZIONE FINALE
// ========================================

const finalElements = document.querySelectorAll(
  ".final-title, .education, .contacts"
);

const finalObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.2,
  }
);

finalElements.forEach((element) => {

  finalObserver.observe(element);

});