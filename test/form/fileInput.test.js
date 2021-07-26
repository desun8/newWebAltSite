import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import { initInputFile } from "../../src/scripts/pages/form/inputFile";
import { createDOM } from "../createDOM";
import { FormDOM } from "./FormDOM";

global.DataTransfer = function () {
  let files = [];

  this.files = {
    get() {
      return files;
    },
  };

  this.items = {
    get() {
      return files;
    },

    add(file) {
      files.push(file);
    },
  };
};

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
    const inputFile = initInputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;
    const file = pngFile;

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    const fileName = file.name;
    expect(store.get(fileName)).toBe(file);
    expect(screen.getByTestId(fileName)).toBeInTheDocument();
  });

  it("should add button (contain file-name) to list when add multiply new file", () => {
    const inputFile = initInputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;

    [pngFile, textFile].forEach((newFile) => {
      fireEvent.change(input, {
        target: {
          files: [newFile],
        },
      });

      const fileName = newFile.name;

      expect(store.get(fileName)).toBe(newFile);
      expect(screen.getByTestId(fileName)).toBeInTheDocument();
    });
  });

  it("should show dialog by button click", () => {
    const inputFile = initInputFile(screen.getByTestId("wrapper-file"));
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");
    const file = pngFile;

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    const fileName = file.name;

    fireEvent.click(screen.getByTestId(fileName));
    expect(dialog.hasAttribute("aria-hidden")).toBe(false);
  });

  it("should hidden dialog by dialog button-no click", () => {
    const inputFile = initInputFile(screen.getByTestId("wrapper-file"));
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");
    const file = pngFile;

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    const fileName = file.name;

    fireEvent.click(screen.getByTestId(fileName));
    fireEvent.click(screen.getByTestId("dialog-no"));
    expect(dialog.hasAttribute("aria-hidden")).toBe(true);
  });

  it("should remove file by dialog button-yes click", () => {
    const inputFile = initInputFile(screen.getByTestId("wrapper-file"));
    const store = inputFile.store;
    const input = inputFile.inputElm;
    const dialog = screen.getByTestId("dialog");
    const file = pngFile;

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    const fileName = file.name;

    const button = screen.getByTestId(fileName);
    fireEvent.click(screen.getByTestId(fileName));

    fireEvent.click(screen.getByTestId("dialog-yes"));
    expect(store.has(fileName)).toBe(false);
    expect(button).not.toBeInTheDocument();
    expect(dialog.hasAttribute("aria-hidden")).toBe(true);
  });
});
