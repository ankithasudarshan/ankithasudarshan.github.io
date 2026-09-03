/* Ankitha Sudarshan — personal site. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- news: show only the first N, reveal the rest on click ---- */
  var newsList = document.querySelector(".news");
  var moreBtn = document.querySelector(".news__more");
  if (newsList && moreBtn) {
    var limit = parseInt(newsList.getAttribute("data-visible") || "5", 10);
    var items = Array.prototype.slice.call(newsList.children);
    if (items.length <= limit) {
      moreBtn.hidden = true;
    } else {
      items.forEach(function (li, i) {
        if (i >= limit) li.classList.add("is-hidden");
      });
      moreBtn.addEventListener("click", function () {
        items.forEach(function (li) { li.classList.remove("is-hidden"); });
        moreBtn.hidden = true;
      });
    }
  }

  /* ---- highlight the nav link for the section in view ---- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var byId = {};
    navAnchors.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = byId[en.target.id];
        if (a) a.style.color = en.isIntersecting ? "var(--accent)" : "";
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
