const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

const createElement = (type, classes, id, textContent) => {
  const el = document.createElement(type);
  const content = document.createTextNode(textContent);

  el.appendChild(content);
  el.classList.add(...classes);
  id = id || null;
  if (id !== null) el.setAttribute('id', id);

  return el;
};
// Example: Update the img src for the logo

// Header
const HeaderLinks = document.querySelectorAll('header nav a');
const HeaderNav = document.querySelector('header nav');
HeaderLinks.forEach((node, i) => {
  node.textContent = siteContent.nav[`nav-item-${i + 1}`];
  node.style.color = 'green';
});

// Header -- prepend an element

// Header -- append a child element

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// CTA
const ctaH1 = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');

ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta['img-src']);

// Main Content
const Headings = ['features', 'about', 'services', 'product', 'vision'];
const MainContent = document.querySelectorAll('.main-content .text-content');
const MainContentImage = document.querySelector('#middle-img');
MainContent.forEach((section, i) => {
  section.children[0].textContent = siteContent['main-content'][`${Headings[i]}-h4`];
  section.children[1].textContent = siteContent['main-content'][`${Headings[i]}-content`];
});
MainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact
const Contact = document.querySelector('.contact');
for (let i = 0; i < Contact.children.length; i++) {
  Contact.children[i].textContent = siteContent.contact[Object.keys(siteContent.contact)[i]];
}

// Footer
const Copyright = document.querySelector('footer p');
Copyright.textContent = siteContent.footer.copyright;
