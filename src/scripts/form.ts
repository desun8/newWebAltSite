import initRoot from "./root";
import "../styles/form.scss";
import APP from "./app/APP";
import { checkboxTypes } from "./pages/form/checkbox";
import { fieldInputs } from "./pages/form/fieldInputs";
import { InputFile } from "./pages/form/inputFile";

initRoot();

const form = document.querySelector<HTMLFormElement>(".form")!;
const typesChekboxContainer = form.querySelector<HTMLElement>("#types-data")!;
const contactInputContainer =
  form.querySelector<HTMLElement>("#contacts-data")!;

checkboxTypes(typesChekboxContainer);
fieldInputs(contactInputContainer);
new InputFile(form.querySelector(".form__input-file")!);

if (APP.isDesktop) {
  import("./components/subscribe-banner/index");
} else {
  import("./components/subscribeBlock");
}
