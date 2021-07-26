import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import { createDOM } from "../createDOM";
import { FormDOM } from "./FormDOM";

createDOM();

document.body.innerHTML = FormDOM.getTemplateForm();

test("Form submit", () => {
  document.body.innerHTML = `
    <form data-testid="form">
      <input type="text" name="name" data-testid="input" />
    </form>
  `;

  const form = screen.getByTestId("form");
  const input = screen.getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: "Evgeniy",
    },
  });

  const onSubmit = jest.fn();

  form.onsubmit = () => onSubmit();

  fireEvent.submit(form);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ name: "Evgeniy" });
});

// test("Form submit", () => {
//   const onSubmit = jest.fn();
//   const formElm = screen.getByTestId("form");
//   formElm.onsubmit = onSubmit;

//   fireEvent.submit(formElm, {
//     preventDefault: () => {},
//   });

//   expect(onSubmit)

//   // 1. set value to form inputs
//   // 2. validate required inputs
//   // 3. create FormData
//   // 4. expect true
// });
