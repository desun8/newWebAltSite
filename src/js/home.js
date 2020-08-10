import AwardsList from './home/awards-list.js';
import SymbolsAnimation from './home/symbolsAnimation';
import SliderWithTypewrite from './home/SliderWithTypewrite';
import ChangeTheme from './home/changeTheme';
import Counter from './components/counter';
import TextRunner from './components/textRunner';
import RedirectFooter from './home/redirectFooter';

import HomeApp from './app/homeApp';
import '../styles/home.scss';

const app = new HomeApp();
app.init();

// редирект в футере
const redirectFooter = document.querySelector('.footer-redirect');
new RedirectFooter(redirectFooter);