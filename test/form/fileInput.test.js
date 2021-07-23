import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import { InputFile } from "../../src/scripts/pages/form/inputFile";
import { createDOM } from "../createDOM";
import { FormDOM } from "./FormDOM";

createDOM();

const pngFile = new File(["(⌐□_□)"], "image.png", { type: "image/png" });
const textFile = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

beforeEach(() => {
  document.body.innerHTML = FormDOM.getTemplateInputFile;
});

describe("Input File", () => {
  it("should add button (contain file-name) to list when add new file", () => {
    const inputFile = new InputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;

    fireEvent.change(input, {
      target: {
        files: [pngFile],
      },
    });

    const fileName = input.files[0].name;
    expect(store.get(fileName)).toBe(pngFile);
    expect(screen.getByTestId(fileName)).toBeInTheDocument();
  });

  it("should add button (contain file-name) to list when add multiply new file", () => {
    const inputFile = new InputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;

    [pngFile, textFile].forEach((newFile) => {
      fireEvent.change(input, {
        target: {
          files: [newFile],
        },
      });

      const fileName = input.files[0].name;

      expect(store.get(fileName)).toBe(newFile);
      expect(screen.getByTestId(fileName)).toBeInTheDocument();
    });
  });

  it("should show dialog by button click", () => {
    const inputFile = new InputFile(screen.getByTestId("wrapper-file"));
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");

    fireEvent.change(input, {
      target: {
        files: [pngFile],
      },
    });

    const fileName = input.files[0].name;

    fireEvent.click(screen.getByTestId(fileName));
    expect(dialog.hasAttribute("aria-hidden")).toBe(false);
  });

  it("should hidden dialog by dialog button-no click", () => {
    const inputFile = new InputFile(screen.getByTestId("wrapper-file"));
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");

    fireEvent.change(input, {
      target: {
        files: [pngFile],
      },
    });

    const fileName = input.files[0].name;

    fireEvent.click(screen.getByTestId(fileName));
    fireEvent.click(screen.getByTestId("dialog-no"));
    expect(dialog.hasAttribute("aria-hidden")).toBe(true);
  });

  it("should remove file by dialog button-yes click", () => {
    const inputFile = new InputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");

    fireEvent.change(input, {
      target: {
        files: [pngFile],
      },
    });

    const fileName = input.files[0].name;

    const button = screen.getByTestId(fileName);
    fireEvent.click(screen.getByTestId(fileName));

    fireEvent.click(screen.getByTestId("dialog-yes"));
    expect(store.has(fileName)).toBe(false);
    expect(button).not.toBeInTheDocument();
    expect(dialog.hasAttribute("aria-hidden")).toBe(true);
  });
});
