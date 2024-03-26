class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);
    this.addEventClick();
  }
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // console.log(section);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
  addEventClick() {
    this.linkElements.forEach((link) => {
      link.addEventListener('click', this.handleClick);
    });
  }
}

const scroll = new SmoothScroll("a[href^='#']");

const checkBox = document.querySelector('#reset');

window.addEventListener('click', function (e) {
  if (
    e.target != this.document.querySelector('.menu-items') &&
    e.target != this.document.querySelector('#sobre')
  ) {
    checkBox.reset();
  }
});

const mainImg = document.querySelector('.initialImg');

function changeCss() {
  var navElement = document.querySelector('.navbar');
  scrollY > 600
    ? (navElement.style = 'background: black;')
    : (navElement.style = 'background: transparent;  box-shadow: none');
}
window.addEventListener('scroll', changeCss, false);

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const button = document.getElementById('submit');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };

    fetch('https://api.devmass.com.br/form-receive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json(), (button.innerText = 'Enviando...'))
      .then((data) => {
        contactForm.reset(),
          (button.innerText = 'Enviado!'),
          (button.style = 'background-color: green;'),
          setTimeout(() => {
            (button.innerText = 'Enviar'),
              (button.style = 'background-color: #f7a927;');
          }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
