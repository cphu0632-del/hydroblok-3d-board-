(function () {
  const dictionaries = window.HYDROBLOK_I18N;
  const products = window.HYDROBLOK_PRODUCTS;
  const supportedLanguages = ['zh', 'en', 'es', 'fr', 'ar', 'ru'];
  const browserLanguage = (navigator.language || 'zh').slice(0, 2).toLowerCase();
  const savedLanguage = localStorage.getItem('hydroblok-catalog-language');
  let currentLanguage = supportedLanguages.includes(savedLanguage)
    ? savedLanguage
    : supportedLanguages.includes(browserLanguage) ? browserLanguage : 'zh';
  let currentFilter = 'all';
  let activeProductId = null;

  const languageSelect = document.getElementById('language-select');
  const productGrid = document.getElementById('product-grid');
  const filterBar = document.getElementById('product-filters');
  const productModal = document.getElementById('product-modal');
  const productModalCard = productModal.querySelector('.modal-card');
  const productModalContent = document.getElementById('product-modal-content');
  const contactModal = document.getElementById('contact-modal');
  const contactModalCard = contactModal.querySelector('.modal-card');

  const groupKeys = {
    all: 'filterAll',
    boards: 'filterBoards',
    pans: 'filterPans',
    components: 'filterComponents',
    accessories: 'filterAccessories'
  };

  function t(key) {
    return dictionaries[currentLanguage][key] || dictionaries.en[key] || key;
  }

  function local(value) {
    if (typeof value === 'string') return value;
    return value[currentLanguage] || value.en || value.zh || '';
  }

  function visualSvg(type) {
    const common = 'viewBox="0 0 360 220" aria-hidden="true"';
    const drawings = {
      board: `<svg ${common}><defs><linearGradient id="g1" x1="0" x2="1"><stop stop-color="#9bf1d3"/><stop offset="1" stop-color="#56cca6"/></linearGradient></defs><path fill="#2d3c49" d="m72 71 196-29 37 24-197 31Z"/><path fill="#78918e" d="m83 92 197-29 25 16-197 31Z"/><path fill="url(#g1)" d="m86 105 196-29 22 15-196 31Z"/><path fill="#78918e" d="m88 131 197-29 18 12-197 31Z"/><path fill="#2d3c49" d="m89 149 197-29 16 11-197 31Z"/><path d="m108 97 197-31M108 110l196-29M107 122l197-31M106 145l197-31"/></svg>`,
      pan: `<svg ${common}><defs><linearGradient id="pg" x1="0" x2="1"><stop stop-color="#a4f5d8"/><stop offset="1" stop-color="#55cda6"/></linearGradient></defs><path fill="url(#pg)" d="m55 82 210-38 46 44-214 56Z"/><path fill="#34434f" d="m55 72 210-37 46 42-214 54Z"/><path d="M55 72 181 92 311 77M97 131l84-39 130-15"/><ellipse cx="181" cy="92" rx="14" ry="8" fill="#eff6f4"/><path d="m97 131 1 13 213-56V77M55 72v10l42 62"/></svg>`,
      lowpan: `<svg ${common}><path fill="#84e7c3" d="m58 92 204-39 43 31-209 50Z"/><path fill="#35444f" d="m58 83 204-39 43 31-209 50Z"/><ellipse cx="177" cy="90" rx="21" ry="12" fill="#eff6f4"/><ellipse cx="177" cy="90" rx="8" ry="5" fill="#637985"/><path d="m96 125 1 9 208-50v-9M58 83v9l38 42"/></svg>`,
      slope: `<svg ${common}><defs><linearGradient id="sg" x1="0" x2="1"><stop stop-color="#263642"/><stop offset="1" stop-color="#536773"/></linearGradient></defs><path fill="#83e8c4" d="m56 89 212-43 39 30-210 57Z"/><path fill="url(#sg)" d="m56 77 212-34 39 30-210 48Z"/><path d="M56 77 97 121 307 73M91 104l180-40"/><rect x="150" y="84" width="73" height="7" rx="3" fill="#c9d7d5" transform="rotate(-9 150 84)"/></svg>`,
      extension: `<svg ${common}><path fill="#79dfba" d="m39 106 238-46 45 23-239 54Z"/><path fill="#35444f" d="m39 94 238-46 45 23-239 54Z"/><path d="m83 125 239-54M39 94v12l44 31M322 71v12"/><path fill="#a9f4da" d="m70 91 41-8 10 7-41 9Z"/></svg>`,
      curb: `<svg ${common}><path fill="#83e6c2" d="m52 120 200-62 31 14-202 70Z"/><path fill="#35444f" d="m52 86 200-58 31 13-202 66Z"/><path fill="#5fcfa9" d="m52 86 29 21v35l-29-22Z"/><path d="m81 107 202-66v31L81 142ZM205 133l89-29 18 8-90 32Z"/><path fill="#35444f" d="m205 119 89-28 18 8-90 31Z"/><path fill="#6bd6b0" d="m205 119 17 11v14l-17-11Z"/></svg>`,
      niche: `<svg ${common}><path fill="#82e4bf" d="M91 47h176v128H91z"/><path fill="#35444f" d="M78 37h176v128H78z"/><path fill="#eff6f4" d="M103 61h126v81H103z"/><path d="M78 37h176v128H78zM103 61h126v81H103z"/><path fill="#6ecfaa" d="m254 37 13 10v128l-13-10Z"/><path d="M104 119h125"/></svg>`,
      bench: `<svg ${common}><path fill="#79dfba" d="m74 83 108-41 107 43-108 49Z"/><path fill="#35444f" d="m74 70 108-41 107 43-108 49Z"/><path fill="#263642" d="m181 121 108-49v42l-108 52Z"/><path fill="#61cfa8" d="m74 70 107 51v45l-107-55Z"/><path d="m74 70 107 51 108-49M181 121v45"/></svg>`,
      accessories: `<svg ${common}><g fill="#34434f"><circle cx="92" cy="91" r="38"/><circle cx="92" cy="91" r="13" fill="#edf5f2"/><rect x="157" y="45" width="15" height="103" rx="7"/><rect x="207" y="45" width="15" height="103" rx="7"/><path d="M263 58h45v70h-45z"/></g><g fill="#82e5c0"><circle cx="92" cy="91" r="27"/><circle cx="92" cy="91" r="13" fill="#edf5f2"/><path d="m151 42 28 5-6 18-18-3ZM201 42l28 5-6 18-18-3ZM271 67h29v10h-29zM271 85h29v10h-29zM271 103h29v10h-29z"/></g><path d="M92 53v76M54 91h76M157 45h15v103h-15zM207 45h15v103h-15zM263 58h45v70h-45z"/></svg>`
    };
    return drawings[type] || drawings.board;
  }

  function updateViewerLinks() {
    document.querySelectorAll('a[href*="viewer/index.html"]').forEach((link) => {
      const url = new URL(link.getAttribute('href'), window.location.href);
      url.searchParams.set('lang', currentLanguage);
      link.setAttribute('href', `./viewer/index.html?${url.searchParams.toString()}`);
    });
  }

  function renderFilters() {
    filterBar.innerHTML = Object.keys(groupKeys).map((group) => `
      <button class="filter-button${currentFilter === group ? ' is-active' : ''}" type="button" data-filter="${group}" aria-pressed="${currentFilter === group}">${t(groupKeys[group])}</button>
    `).join('');
  }

  function renderProducts() {
    const visibleProducts = currentFilter === 'all'
      ? products
      : products.filter((product) => product.group === currentFilter);

    productGrid.innerHTML = visibleProducts.map((product) => {
      const index = String(products.indexOf(product) + 1).padStart(2, '0');
      return `
        <article class="product-card" data-product-id="${product.id}">
          <div class="product-visual">
            <span class="product-index">SERIES ${index}</span>
            ${visualSvg(product.visual)}
          </div>
          <div class="product-card-body">
            <span class="product-category">${local(product.category)}</span>
            <h3>${local(product.title)}</h3>
            <p>${local(product.summary)}</p>
            <div class="product-meta">
              <small>${t('representativeSizes')}: ${product.sizes}</small>
              <button class="product-open" type="button" data-open-product="${product.id}">${t('viewDetails')}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderProductModal(product) {
    const modelButton = product.model === 'board'
      ? `<a class="button button-primary" href="./viewer/index.html?model=board&lang=${currentLanguage}">${t('openBoard3d')}</a>`
      : product.model === 'house'
        ? `<a class="button button-primary" href="./viewer/index.html?model=house&lang=${currentLanguage}">${t('openHouse3d')}</a>`
        : '';

    productModalContent.innerHTML = `
      <div class="product-modal-visual">${visualSvg(product.visual)}</div>
      <span class="product-modal-tag">${local(product.category)}</span>
      <h2 id="product-modal-title">${local(product.title)}</h2>
      <p class="product-modal-summary">${local(product.summary)}</p>
      <div class="detail-grid">
        <div class="detail-cell"><small>${t('productGroup')}</small><strong>${t(groupKeys[product.group])}</strong></div>
        <div class="detail-cell"><small>${t('sizes')}</small><strong dir="ltr">${product.sizes}</strong></div>
        <div class="detail-cell"><small>${t('applications')}</small><strong>${local(product.applications)}</strong></div>
        <div class="detail-cell"><small>${t('systemRelation')}</small><strong>${local(product.relation)}</strong></div>
      </div>
      <p class="modal-note">${t('sourceCaution')}</p>
      ${modelButton ? `<div class="modal-actions">${modelButton}</div>` : ''}
    `;
  }

  function openModal(modal, focusTarget) {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => focusTarget.focus());
  }

  function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!document.querySelector('.modal.is-open')) document.body.classList.remove('modal-open');
  }

  function openProduct(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    activeProductId = productId;
    renderProductModal(product);
    openModal(productModal, productModalCard);
  }

  function applyLanguage(language) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    localStorage.setItem('hydroblok-catalog-language', language);
    const dictionary = dictionaries[language];
    document.documentElement.lang = dictionary.htmlLang;
    document.documentElement.dir = dictionary.dir;
    document.title = dictionary.documentTitle;
    languageSelect.value = language;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) element.textContent = dictionary[key];
    });
    renderFilters();
    renderProducts();
    updateViewerLinks();
    if (productModal.classList.contains('is-open') && activeProductId) {
      const product = products.find((item) => item.id === activeProductId);
      if (product) renderProductModal(product);
    }
  }

  languageSelect.addEventListener('change', (event) => applyLanguage(event.target.value));

  filterBar.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    currentFilter = button.dataset.filter;
    renderFilters();
    renderProducts();
  });

  productGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-open-product]');
    if (button) openProduct(button.dataset.openProduct);
  });

  document.querySelectorAll('[data-open-contact]').forEach((button) => {
    button.addEventListener('click', () => openModal(contactModal, contactModalCard));
  });
  document.querySelectorAll('[data-close-product]').forEach((button) => button.addEventListener('click', () => closeModal(productModal)));
  document.querySelectorAll('[data-close-contact]').forEach((button) => button.addEventListener('click', () => closeModal(contactModal)));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (productModal.classList.contains('is-open')) closeModal(productModal);
    if (contactModal.classList.contains('is-open')) closeModal(contactModal);
  });

  applyLanguage(currentLanguage);
})();
