import SmoothScrollbar from "smooth-scrollbar";

export {};

declare global {
  interface Window {
    grecaptcha: any;
    // Modernizr?: any;
    ymaps?: any;
    RECAPTCHA_KEY: string;
    APP: {
      os: string;
      scrollbar: SmoothScrollbar | undefined;
      isDesktop: boolean;
      isTouchScreen: boolean;
    };
  }
}
