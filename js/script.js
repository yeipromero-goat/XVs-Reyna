// =========================================================
// INVITACIÓN XV AÑOS — interactividad
// =========================================================
(function () {
  "use strict";

  /* ---------- personalización por familia (?para=Familia+X en la URL) ---------- */
  var params = new URLSearchParams(window.location.search);
  var forFamily = (params.get("para") || "").trim();

  if (forFamily) {
    var envelopeFor = document.getElementById("envelopeFor");
    var heroFor = document.getElementById("heroFor");
    var graciasFor = document.getElementById("graciasFor");

    if (envelopeFor) {
      envelopeFor.textContent = "Para: " + forFamily;
      envelopeFor.hidden = false;
    }
    if (heroFor) {
      heroFor.textContent = "Para: " + forFamily;
      heroFor.hidden = false;
    }
    if (graciasFor) {
      graciasFor.textContent = forFamily;
      graciasFor.hidden = false;
    }
  }

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

  /* ---------- parallax del fondo del hero (img/1.jpeg) ---------- */
  var heroParallaxImg = document.getElementById("heroParallaxImg");
  var heroSection = document.getElementById("inicio");
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroParallaxImg && heroSection && !reduceMotion) {
    var parallaxTicking = false;

    var updateParallax = function () {
      var maxScroll = heroSection.offsetHeight;
      var y = Math.min(window.scrollY || window.pageYOffset, maxScroll);
      heroParallaxImg.style.transform = "translate3d(0," + (y * 0.15).toFixed(1) + "px,0)";
      parallaxTicking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!parallaxTicking) {
          window.requestAnimationFrame(updateParallax);
          parallaxTicking = true;
        }
      },
      { passive: true }
    );
    updateParallax();
  }

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

  /* ---------- animación al hacer scroll: cada bloque entra de izquierda a centro ----------
     Nota técnica: los bloques arrancan con translateX(-100vw) (fuera de pantalla).
     IntersectionObserver no sirve aquí: body tiene overflow-x:hidden (para que no
     salga scroll horizontal) y eso recorta la posición fuera de pantalla ANTES de
     calcular la intersección, sin importar el rootMargin que se le ponga — el
     observer nunca ve el elemento como "intersectando". Por eso se revisa a mano
     solo la posición VERTICAL (rect.top/bottom), que translateX no toca. */
  var revealTargets = Array.prototype.slice.call(
    document.querySelectorAll(".card, .tl-item, .familia__group, .gift-card")
  );
  var revealReduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if (revealReduceMotion) {
    revealTargets.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var checkReveal = function () {
      var vh = window.innerHeight;
      revealTargets = revealTargets.filter(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.85 && rect.bottom > 0) {
          el.classList.add("in-view");
          return false;
        }
        return true;
      });
    };

    var revealTicking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (!revealTicking) {
          window.requestAnimationFrame(function () {
            checkReveal();
            revealTicking = false;
          });
          revealTicking = true;
        }
      },
      { passive: true }
    );
    checkReveal();
  }
})();
