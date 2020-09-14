import getOS from '../utils/getOS';

const APP = {
  os: getOS(),
  isDesktop: !window.matchMedia('(max-width: 60em)').matches,
  config: { // FIXME: удалить?
    mqlMobile: window.matchMedia('(max-width: 60em)')
  }
};

export default APP;