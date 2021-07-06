import Footer from "@/scripts/components/footer";

export const initFooter = () => {
  const footerElm = document.querySelector(".page-footer");

  const footer = new Footer(footerElm);
  footer.init();
};
