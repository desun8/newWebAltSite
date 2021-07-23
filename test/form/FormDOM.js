import jsdom from "jsdom";

export class FormDOM {
  static getTemplateCheckbox(values) {
    return /* html */ `
    <div data-testid="wrapper-checkbox">
      <div class="form__checkbox relative">
        <input
          id="site"
          class="absolute t-0 l-0 w-full h-full opacity-0"
          type="checkbox"
          name="type"
          value="${values.SITE}"
        />
        <label
          for="site"
          class="
            inline-block
            w-full
            py-6
            px-9
            text-sm text-center
            leading-none
            uppercase
            shadow-collapsing
            transition-colors
            lg:py-5 lg:px-7 lg:text-xl lg:leading-none
          "
        >${values.SITE}</label>
      </div>
      <div class="form__checkbox relative">
        <input
          id="design"
          class="absolute t-0 l-0 w-full h-full opacity-0"
          type="checkbox"
          name="type"
          value="${values.DESIGN}"
        />
        <label
          for="design"
          class="
            inline-block
            w-full
            py-6
            px-9
            text-sm text-center
            leading-none
            uppercase
            shadow-collapsing
            transition-colors
            lg:py-5 lg:px-7 lg:text-xl lg:leading-none
          "
        >${values.DESIGN}</label>
      </div>
      <div class="form__checkbox relative">
        <input
          id="all"
          class="absolute t-0 l-0 w-full h-full opacity-0"
          type="checkbox"
          name="type"
          value="${values.ALL}"
        />
        <label
          for="all"
          class="
            inline-block
            w-full
            py-6
            px-9
            text-sm text-center
            leading-none
            uppercase
            shadow-collapsing
            transition-colors
            lg:py-5 lg:px-7 lg:text-xl lg:leading-none
          "
        >${values.ALL}</label>
      </div>
    </div>
  `;
  }

  static getTemplateContactInput() {
    return /*html*/`
      <div data-testid="wrapper-contacts">
        <div class="form__input form-field">
          <input id="name" type="text" name="name" data-validation="text" required/>
          <label for="name">Имя</label>
        </div>

        <div class="form__input form-field">
          <input id="tel" type="text" name="tel" data-validation="tel" required/>
          <label for="tel">Телефон</label>
        </div>

        <div class="form__input form-field">
          <input id="company" type="text" name="company"/>
          <label for="company">Компания</label>
        </div>

        <div class="form__input form-field">
          <input id="email" type="email" name="Email" data-validation="email"/>
          <label for="email">Email</label>
        </div>
      </div>
    `;
  }

  static getTemplateInputFile() {
    return /* html */ `
      <div data-testid="wrapper-file">
        <div>
          <input id="files" type="file" name="file" data-testid="files" />
        </div>

        <ul data-testid="list"></ul>
      </div>
    `;
  }
}
