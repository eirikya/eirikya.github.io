/* Velger norsk eller engelsk: ?lang=no|en, så tidligere valg, så språket i nettleseren. */
(function () {
  var root = document.documentElement;
  var KEY = "eg-lang";

  function pick() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q === "no" || q === "nb" || q === "nn") return "nb";
      if (q === "en") return "en";
    } catch (e) {}
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "nb" || saved === "en") return saved;
    } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i] || "").toLowerCase();
      if (/^(nb|nn|no)(-|$)/.test(l)) return "nb";
      if (/^en(-|$)/.test(l)) return "en";
    }
    return "en";
  }

  function apply(lang, save) {
    root.setAttribute("data-lang", lang);
    root.lang = lang;
    var t = document.querySelector('meta[name="title-' + lang + '"]');
    if (t) document.title = t.content;
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-set-lang") === lang ? "true" : "false");
    }
    if (save) {
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }
  }

  apply(pick(), false);

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-lang") || "en", false);
    document.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("[data-set-lang]") : null;
      if (b) apply(b.getAttribute("data-set-lang"), true);
    });
  });
})();
