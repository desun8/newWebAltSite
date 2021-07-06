import detectIsTouchScreen from '@/scripts/utils/detectIsTouchScreen';
import getOS from '@/scripts/utils/getOS';
import { isDesktop } from '@/scripts/utils/mediaQueryEvent';

const APP: Window["APP"] = {
  os: getOS(),
  isDesktop,
  scrollbar: undefined,
  isTouchScreen: detectIsTouchScreen()
};

export default APP;