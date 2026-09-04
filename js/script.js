// =========================================================
// INVITACIÓN XV AÑOS — interactividad
// =========================================================
(function () {
  "use strict";

  /* ---------- abrir sobre ---------- */
  var openBtn = document.getElementById("openInvitation");
  var envelope = document.getElementById("envelope");

  openBtn.addEventListener("click", function () {
    document.body.classList.add("is-open");
    envelope.setAttribute("aria-hidden", "true");
    tryPlayMusic();
    // mueve el foco al inicio del sitio para lectores de pantalla
    var hero = document.getElementById("inicio");
    if (hero) hero.setAttribute("tabindex", "-1");
    setTimeout(function () {
      if (hero) hero.focus();
    }, 850);
  });

  /* ---------- música de fondo ---------- */
  var musicBtn = document.getElementById("musicToggle");
  var audio = document.getElementById("bgMusic");
  var playing = false;

  function setPlayingState(state) {
    playing = state;
    musicBtn.classList.toggle("is-playing", playing);
    musicBtn.setAttribute("aria-pressed", String(playing));
  }

  function tryPlayMusic() {
    var p = audio.play();
    if (p && typeof p.then === "function") {
      p.then(function () { setPlayingState(true); })
       .catch(function () { setPlayingState(false); });
    }
  }

  musicBtn.addEventListener("click", function () {
    if (playing) {
      audio.pause();
      setPlayingState(false);
    } else {
      tryPlayMusic();
    }
  });

  /* ---------- cuenta regresiva ----------
     Fecha real del evento: 30 de octubre de 2026, hora de la misa (6:00 pm).
     Formato: 'AAAA-MM-DDTHH:MM:SS-06:00' (-06:00 = huso horario de Poza Rica/CDMX) */
  var EVENT_DATE = new Date("2026-10-30T18:00:00-06:00");

  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMin = document.getElementById("cd-min");
  var elSec = document.getElementById("cd-sec");

  function pad(n) { return String(n).padStart(2, "0"); }

  function updateCountdown() {
    if (!elDays) return;
    var diff = EVENT_DATE.getTime() - Date.now();
    if (diff < 0) diff = 0;

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMin.textContent = pad(mins);
    elSec.textContent = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---------- animación al hacer scroll ---------- */
  var revealTargets = document.querySelectorAll(
    ".ubicacion .cards, .itinerario .timeline, .familia__grid, .gift-card, .card--hotel"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
  }
})();
