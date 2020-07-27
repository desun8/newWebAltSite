import AwardsList from './home/awards-list.js';
import SymbolsAnimation from './home/symbolsAnimation';
import SliderWithTypewrite from './home/SliderWithTypewrite';
import ChangeTheme from './home/changeTheme';
import Counter from './components/counter';
import TextRunner from './components/textRunner';
import RedirectFooter from './home/redirectFooter';

import '../styles/home.scss';


const getCssVar = (name = '', elm = document.documentElement) => {
  return getComputedStyle(elm).getPropertyValue(name);
};

const app = new AwardsList();

// анимация (при скролле) вертикальных символов на главной
const blockDev = document.querySelector('.block--dev');
const symbolsDev = blockDev.querySelectorAll('.block-symbols__item');

const blockSeo = document.querySelector('.block--seo');
const symbolsSeo = blockSeo.querySelectorAll('.block-symbols__item');

const blockDesign = document.querySelector('.block--design');
const symbolsDesign = blockDesign.querySelectorAll('.block-symbols__item');


const devSymbolsAnimation = new SymbolsAnimation(symbolsDev, blockDev);
const seoSymbolsAnimation = new SymbolsAnimation(symbolsSeo, blockSeo);
const designSymbolsAnimation = new SymbolsAnimation(symbolsDesign, blockDesign);

// анимация смены цвета (темы)
const observerElms = [blockSeo, blockDesign];
const observerStyles = {
  [blockSeo.id]: {
    bgColor: getCssVar('c-black-second') || '#262626'
  },
  [blockDesign.id]: {
    bgColor: getCssVar('c-red') || '#ff5000'
  }
};
const observerClassNames = {
  [blockSeo.id]: 'theme-dark',
  [blockDesign.id]: 'theme-orange'
};

const observer = new ChangeTheme(observerElms, observerStyles, observerClassNames);

// анимация набоа текста
// const typewriteElm = document.querySelector('.hero-news__item p');
// const typewriteAnimation = new TypewriteAnimation(typewriteElm);

// простой слайдер
const newsSliderElm = document.querySelector('.hero-news');
const newsSlider = new SliderWithTypewrite(newsSliderElm, 'hero-news__item');
newsSlider.autoplay();

const taglinesSliderElm = document.querySelector('.hero-taglines');
const taglinesSlider = new SliderWithTypewrite(taglinesSliderElm, 'hero-taglines__item');
taglinesSlider.autoplay();


// анимация чисел "счетчик"
const numbersCounter = document.querySelectorAll('.number-count__dynamic');
const counter = new Counter(numbersCounter);


// бегущая строка
const text = document.querySelector('.hero__scroll');
new TextRunner(text);

// редирект в футере
const redirectFooter = document.querySelector('.footer-redirect');
new RedirectFooter(redirectFooter);