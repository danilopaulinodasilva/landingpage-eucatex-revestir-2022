import 'bootstrap';
import '../scss/index.scss';
import './browser';
import './modal';
import './login';
import './alert';
import './register';
import './functions';
import './validation';
import './video';

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { $(".close").click(); })
})