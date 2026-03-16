/* ── Nav scroll ── */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 48);
}, { passive: true });

/* ── Mobile menu ── */
const burger  = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navMenu.classList.toggle("is-open");
  document.body.style.overflow = navMenu.classList.contains("is-open") ? "hidden" : "";
});
navMenu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  })
);

/* ── Reveal on scroll ── */
const els = document.querySelectorAll(".anim");
const io  = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);
els.forEach(el => io.observe(el));

/* ── Seamless tape ── */
const tape = document.querySelector(".tape-track");
if (tape) tape.innerHTML += tape.innerHTML;
