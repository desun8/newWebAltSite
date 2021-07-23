import { fireEvent, screen } from "@testing-library/dom";
import { fieldInputs } from "../../src/scripts/pages/form/fieldInputs";
import { createDOM } from "../createDOM";
import { FormDOM } from "./FormDOM";

createDOM();

document.body.innerHTML = FormDOM.getTemplateContactInput();

describe("Check form input field validation", () => {
  fieldInputs(screen.getByTestId("wrapper-contacts"));

  describe("Input 'name'", () => {
    const input = screen.getByLabelText("Имя");

    it("should fail validat input 'name'", () => {
      expect(input.dataset.valid).toBe(undefined);

      fireEvent.change(input, {
        target: {
          value: "s",
        },
      });
      expect(input.dataset.valid).toBe("false");
    });

    it("should success validat input 'name'", () => {
      fireEvent.change(input, {
        target: {
          value: "Evgeniy",
        },
      });
      expect(input.dataset.valid).toBe("true");
    });
  });

  describe("Input 'tel'", () => {
    const input = screen.getByLabelText("Телефон");

    it("should fail validat input 'tel'", () => {
      expect(input.dataset.valid).toBe(undefined);

      fireEvent.change(input, {
        target: {
          value: "",
        },
      });
      expect(input.dataset.valid).toBe("false");

      fireEvent.change(input, {
        target: {
          value: "79098055927",
        },
      });
      expect(input.dataset.valid).toBe("false");
    });

    it("should success validat input 'tel'", () => {
      fireEvent.change(input, {
        target: {
          value: "+7 (909) 805 59 27",
        },
      });

      expect(input.dataset.valid).toBe("true");
    });
  });

  describe("Input 'email'", () => {
    const input = screen.getByLabelText("Email");

    it("should fail validat input 'email'", () => {
      expect(input.dataset.valid).toBe(undefined);

      fireEvent.change(input, {
        target: {
          value: "mymail@gmail",
        },
      });
      expect(input.dataset.valid).toBe("false");

      fireEvent.change(input, {
        target: {
          value: "test@mail.ком",
        },
      });
      expect(input.dataset.valid).toBe("false");

      fireEvent.change(input, {
        target: {
          value: "test@mail",
        },
      });
      expect(input.dataset.valid).toBe("false");

      fireEvent.change(input, {
        target: {
          value: "@mail.ru",
        },
      });
      expect(input.dataset.valid).toBe("false");
    });

    it("should success validat input 'email'", () => {
      fireEvent.change(input, {
        target: {
          value: "example@mail.com",
        },
      });
      expect(input.dataset.valid).toBe("true");
    });
  });
});

describe("Check form input field required", () => {
  const ERROR_CLASS = "has-error";

  describe("Input 'name'", () => {
    const input = screen.getByLabelText("Имя");

    it("should fail required input 'name'", () => {
      fireEvent.change(input, { target: { value: "s" } });
      expect(input.classList.contains(ERROR_CLASS)).toBe(true);
    });

    it("should success required input 'name'", () => {
      fireEvent.change(input, { target: { value: "Evgeniy" } });
      expect(input.classList.contains(ERROR_CLASS)).toBe(false);
    });
  });

  describe("Input 'tel'", () => {
    const input = screen.getByLabelText("Телефон");

    it("should fail required input 'tel'", () => {
      fireEvent.change(input, { target: { value: "" } });

      expect(input.classList.contains(ERROR_CLASS)).toBe(true);

      fireEvent.change(input, { target: { value: "79098055927" } });

      expect(input.classList.contains(ERROR_CLASS)).toBe(true);
    });

    it("should success required input 'tel'", () => {
      fireEvent.change(input, { target: { value: "+7 (909) 805 59 27" } });
      expect(input.classList.contains(ERROR_CLASS)).toBe(false);
    });
  });
});
