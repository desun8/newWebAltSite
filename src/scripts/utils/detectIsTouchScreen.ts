export default () => {
 if (window.navigator.maxTouchPoints) {
   document.documentElement.classList.add("js-touch-screen")
   return true;
 }


 return false;
}
