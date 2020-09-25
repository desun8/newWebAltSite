import getOS from '../utils/getOS';
import { isDesktop } from '../utils/mediaQueryEvent';

const APP = {
  os: getOS(),
  isDesktop,
  blogFilter: undefined, // { elm, top }  Filter.vue
  config: { // FIXME: удалить?
    mqlMobile: window.matchMedia('(max-width: 60em)')
  }
};

export default APP;