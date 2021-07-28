import A11yDialog from "a11y-dialog";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import APP from "@/scripts/app/APP";
import {
  disableScroll,
  enableScroll,
} from "@/scripts/components/smoothScroll/plugins/ModalPlugin";
import { autobind } from "../../decorators/autobind";
import { fileValidation, validation } from "./validation";
import { throttle } from "lodash";

class Dialog {
  elm: HTMLElement;
  dialog: A11yDialog;
  private dialogContent: Element;
  private btnReject: HTMLButtonElement;
  private btnRemove: HTMLButtonElement;
  private title: HTMLElement;

  constructor() {
    this.elm = this.getTemplate();
    this.dialogContent = this.elm.querySelector(".dialog-content")!;
    this.title = this.elm.querySelector("#delete-dialog-title")!;
    this.btnReject = this.elm.querySelector("#reject-dialog-btn")!;
    this.btnRemove = this.elm.querySelector("#delete-dialog-btn")!;

    this.dialog = new A11yDialog(this.elm);

    this.dialog.on("show", () => {
      if (APP.scrollbar) {
        disableScroll(APP.scrollbar);
      } else {
        disablePageScroll(this.elm);
      }
    });
    this.dialog.on("hide", () => {
      if (APP.scrollbar) {
        enableScroll(APP.scrollbar);
      } else {
        enablePageScroll(this.elm);
      }
    });

    this.addHoverEvent();
  }

  private getTemplate() {
    const div = document.createElement("div");
    div.id = "delete-dialog";
    div.classList.add("dialog-container");
    div.setAttribute("aria-labelledby", "delete-dialog-title");
    div.setAttribute("aria-hidden", "true");
    div.dataset.testid = "dialog";

    div.innerHTML = /*html*/ `
      <!-- 2. The dialog overlay -->
      <div class="dialog-overlay  bg-true-black bg-opacity-50" data-a11y-dialog-hide></div>
      <!-- 3. The actual dialog -->
      <div class="dialog-content  grid grid-cols-2 gap-5 w-11/12 max-w-334px py-8 px-6 bg-sun uppercase" role="document">
        <!-- 5. The dialog title -->
        <h1 id="delete-dialog-title" class="sr-only" data-title="Подтвердите удаление файла -"></h1>
        <!-- 6. Dialog content -->
        <h2 class="col-span-full text-lg font-semibold text-center tracking-wide" aria-hidden="true">Точно удалить?</h2>
        <button id="reject-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold bg-black transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Не удалять" data-a11y-dialog-hide data-testid="dialog-no">не точно</button>
        <button id="delete-dialog-btn" class="py-2 px-4 text-lg text-white font-semibold transition-colors focus:outline-none focus-visible:bg-black" type="button" aria-label="Удалить" data-a11y-dialog-hide data-testid="dialog-yes">точно</button>
  </div>
`;

    return div;
  }

  private handleHover(event: Event) {
    if (event.target === this.btnRemove) {
      this.btnRemove.focus();
      this.btnReject.style.backgroundColor = "transparent";
      this.btnRemove.style.backgroundColor = "#131313";
    } else {
      this.btnReject.focus();
      this.btnReject.style.backgroundColor = "";
      this.btnRemove.style.backgroundColor = "";
    }
  }

  private addHoverEvent() {
    const handleHover = throttle(this.handleHover, 100).bind(this);

    this.dialogContent.addEventListener("focusin", handleHover, {
      passive: true,
    });
    this.dialogContent.addEventListener("mouseover", handleHover, {
      passive: true,
    });
    this.dialogContent.addEventListener("mouseleave", handleHover, {
      passive: true,
    });
  }

  addToDOM() {
    if (!document.getElementById(this.elm.id)) {
      document.body.appendChild(this.elm);
    }
  }

  setTitle(name: string) {
    this.title.textContent = `${this.title.dataset.title} ${name}`;
  }

  setBtnClick(cb: () => void) {
    this.btnRemove.onclick = () => cb();
  }
}

export class InputFile {
  private store = new Map();
  private inputElm: HTMLInputElement;
  private listElm: HTMLUListElement;
  private dialog: Dialog;
  private lastTimeFireChange = 0;
  private readonly maxLengthName = 16;

  constructor(private parentElm: HTMLElement) {
    this.inputElm = this.parentElm.querySelector("input[type='file']")!;
    this.listElm = this.parentElm.querySelector("ul")!;

    this.inputElm.addEventListener("change", this.handleChange);

    this.dialog = new Dialog();
    this.dialog.addToDOM();
  }

  private addStoreItem(key: any, value: any) {
    this.store.set(key, value);
  }

  private hasStoreItem(key: any) {
    return this.store.has(key);
  }

  private removeStoreItem(key: any) {
    if (this.store.has(key)) {
      this.store.delete(key);
    }
  }

  private updateStore() {
    this.lastTimeFireChange = Date.now();

    this.updateInputFiles();
    this.validation();
  }

  private updateInputFiles() {
    let list = new DataTransfer();

    this.store.forEach((value: File) => {
      let file = new File([value], value.name, {
        type: value.type,
        lastModified: value.lastModified,
      });
      list.items.add(file);
    });

    this.inputElm.files = list.files;
  }

  private resetInputFiles() {
    this.inputElm.files = new DataTransfer().files;
  }

  private trimFileName(fileName: string) {
    if (fileName.length <= this.maxLengthName) return fileName;

    const match = fileName.match(/([\s\S]+)(\.\D+)$/);
    if (match === null) return fileName;

    const name = match[1];
    const kind = match[2];
    const nameSize = this.maxLengthName - kind.length;
    const trimName = `${name.slice(0, nameSize - 2)}...${name.slice(
      -2
    )}${kind}`;

    return trimName;
  }

  private createListItem(id: string, name: string) {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.type = "button";
    button.id = id;
    button.dataset.testid = id;
    button.classList.add(
      "js-file-input",
      "flex",
      "items-center",
      "w-full",
      "hover:text-sun",
      "focus-visible:text-sun",
      "lg:w-auto"
    );
    button.innerHTML = `
    <span class="icon-file  flex-shrink-0 w-4 h-5 mr-5 lg:w-6 lg:h-7">
      <svg fill="none" viewBox="0 0 17 20" aria-hidden="true">
        <g clip-path="url(#clip0)">
          <path
            fill="#131313"
            d="M9.056 10.335v9.523l8.132-4.761V5.574l-8.132 4.761zm-.925 0L0 5.574v9.523l8.131 4.76v-9.522zM.463 4.762L8.593 0l8.132 4.762-8.131 4.76-8.131-4.76z"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h17v20H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
    <span class="name flex-grow text-left text-dark-grey break-all lg:text-lg" title="${name}" aria-label="Файл — ${name}">
      ${this.trimFileName(name)}
    </span>
    <span class="icon-cross  flex-shrink-0 w-3 h-3 ml-5 transition-colors">
      <svg fill="none" viewBox="0 0 11 11" aria-hidden="true">
        <path
          fill="currentColor"
          d="M11 8.8L7.698 5.5 11 2.2 8.8 0 5.5 3.3 2.2 0 0 2.2l3.3 3.3L0 8.8 2.2 11l3.3-3.3L8.8 11 11 8.8z"
        />
      </svg>
    </span>
    `;

    button.addEventListener("click", this.handleClick);

    li.appendChild(button);

    return li;
  }

  private addItemToList(id: string, name: string) {
    this.listElm.appendChild(this.createListItem(id, name));
  }

  private validation() {
    validation(this.inputElm, fileValidation);

    const isValid = this.inputElm.dataset.valid === "true";
    if (isValid) {
      this.inputElm.classList.remove("has-error");
    } else {
      this.inputElm.classList.add("has-error");
    }
  }

  private showWarnMsg() {
    const elm = this.parentElm.querySelector(".js-error-msg")!;
    const defaultMsg = elm.textContent;
    const msg = "*такой файл уже добавлен";

    elm.textContent = msg;
    this.inputElm.classList.add("has-error");

    setTimeout(() => {
      this.inputElm.classList.remove("has-error");

      setTimeout(() => {
        elm.textContent = defaultMsg;
      }, 500);
    }, 2000);
  }

  @autobind
  private handleChange(event: Event) {
    // В IOS this.updateInputStorage вызывает повторное событие change.
    // Из-за того, что явно задается значение для this.inputElm.files
    const isFireDouble = Date.now() - this.lastTimeFireChange < 100;
    if (isFireDouble) {
      event.preventDefault();
      return;
    }

    const input = <HTMLInputElement>event.target;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const id = `${file.name}-${file.lastModified}-${file.size}`;
      const isFileAlreadyExisting = this.hasStoreItem(id);

      if (isFileAlreadyExisting) {
        this.showWarnMsg();
        this.resetInputFiles();
      } else {
        this.addStoreItem(id, file);
        this.addItemToList(id, file.name);
        this.updateStore();
      }
    }
  }

  @autobind
  private handleClick(event: Event) {
    const btn = <HTMLButtonElement>event.currentTarget;

    this.dialog.setTitle(btn.id);
    this.dialog.setBtnClick(() => this.removeFile(btn));
    this.dialog.dialog.show();
  }

  removeFile(elm: HTMLButtonElement) {
    this.removeStoreItem(elm.id);
    elm.parentElement?.remove();

    this.updateStore();
  }

  clear() {
    const elms =
      document.querySelectorAll<HTMLButtonElement>(".js-file-input")!;
    elms.forEach((elm) => {
      this.removeFile(elm);
    });
  }
}
