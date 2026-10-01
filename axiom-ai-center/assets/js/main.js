const root = document.body.dataset.root || '';
const headerSlot = document.querySelector('[data-site-header]');
const footerSlot = document.querySelector('[data-site-footer]');

if (headerSlot) {
  headerSlot.innerHTML = `<a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="nav-wrap"><a class="brand" href="${root}index.html" aria-label="Axiom AI Research Center home"><span class="brand-mark" aria-hidden="true"></span><span>Axiom AI <small>Research Center</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span aria-hidden="true">☰</span><span class="sr-only">Open navigation</span></button><nav class="nav-links" id="primary-nav" aria-label="Primary navigation"><a href="${root}research.html">Research</a><a href="${root}people.html">People</a><a href="${root}publications.html">Publications</a><a href="${root}activities.html">Activities</a><a href="${root}news.html">News</a><a href="${root}about.html">About</a><a class="nav-cta" href="${root}join.html">Get involved</a></nav></div></header>`;
  const page = document.body.dataset.page;
  headerSlot.querySelectorAll('nav a').forEach((link) => {
    if (link.getAttribute('href').endsWith(`${page}.html`)) link.setAttribute('aria-current', 'page');
  });
}

if (footerSlot) {
  footerSlot.innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="${root}index.html"><span class="brand-mark" aria-hidden="true"></span><span>Axiom AI <small>Research Center</small></span></a><p>School of Computing<br>Northbridge University<br>Research Building, Room 410</p></div><div><h3>Explore</h3><a href="${root}research.html">Research</a><a href="${root}people.html">People</a><a href="${root}publications.html">Publications</a></div><div><h3>Participate</h3><a href="${root}activities.html">Activities</a><a href="${root}join.html">Open positions</a><a href="${root}join.html#collaborate">Collaborate</a></div><div><h3>Connect</h3><a href="${root}news.html">News</a><a href="${root}about.html">About</a><a href="mailto:axiom@example.edu">axiom@example.edu</a></div></div><div class="footer-bottom"><span>© <span data-year></span> Axiom AI Research Center</span><span>Sample content for a university lab template</span></div></div></footer>`;
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const filterButtons = document.querySelectorAll('[data-filter]');
const filterItems = document.querySelectorAll('[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    filterButtons.forEach((item) => {
      if (item !== button) item.setAttribute('aria-pressed', 'false');
    });
    filterItems.forEach((item) => {
      item.hidden = category !== 'all' && item.dataset.category !== category;
    });
  });
});
