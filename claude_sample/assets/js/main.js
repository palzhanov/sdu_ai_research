// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Publications filter (only runs on pages with #pub-search)
  var search = document.getElementById("pub-search");
  var topic = document.getElementById("pub-topic");
  if (!search) return;

  function filter() {
    var q = search.value.trim().toLowerCase();
    var t = topic ? topic.value : "";
    document.querySelectorAll(".pub").forEach(function (li) {
      var text = li.textContent.toLowerCase();
      var topics = (li.dataset.topics || "").split(" ");
      var show = (!q || text.indexOf(q) !== -1) && (!t || topics.indexOf(t) !== -1);
      li.hidden = !show;
    });
    // hide year headings with no visible entries
    document.querySelectorAll(".pub-year").forEach(function (sec) {
      sec.hidden = !sec.querySelector(".pub:not([hidden])");
    });
  }
  search.addEventListener("input", filter);
  if (topic) topic.addEventListener("change", filter);
});
