import Footer from "@/scripts/components/footer";

export const initFooter = () => {
  const footerElm = document.querySelector(".page-footer");

  if (footerElm) {
    const footer = new Footer(footerElm);
    footer.init();
  }
};
