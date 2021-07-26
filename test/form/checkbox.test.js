import { screen } from "@testing-library/dom";
import { createDOM } from "../createDOM";
import { initCheckbox } from "../../src/scripts/pages/form/checkbox";
import { FormDOM } from "./FormDOM";

createDOM();

const values = FormDOM.getCheckboxValues();

beforeEach(() => {
  document.body.innerHTML = FormDOM.getTemplateCheckbox(values);

  initCheckbox(screen.getByTestId("wrapper-checkbox"));
});

test("If checked checkbox 'ALL' than other chekboxs should unchecked", () => {
  const checkboxSite = screen.getByLabelText(values.SITE);
  const checkboxDesign = screen.getByLabelText(values.DESIGN);
  const checkboxAll = screen.getByLabelText(values.ALL);

  checkboxSite.click();
  expect(checkboxSite.checked).toBe(true);

  checkboxDesign.click();
  expect(checkboxSite.checked).toBe(true);
  expect(checkboxDesign.checked).toBe(true);

  checkboxAll.click();
  expect(checkboxSite.checked).toBe(false);
  expect(checkboxDesign.checked).toBe(false);
  expect(checkboxAll.checked).toBe(true);
});

test("unchecked 'ALL' checkbox when another checked", () => {
  const checkboxSite = screen.getByLabelText(values.SITE);
  const checkboxAll = screen.getByLabelText(values.ALL);

  checkboxAll.click();
  expect(checkboxAll.checked).toBe(true);

  checkboxSite.click();
  expect(checkboxSite.checked).toBe(true);
  expect(checkboxAll.checked).toBe(false);
});
