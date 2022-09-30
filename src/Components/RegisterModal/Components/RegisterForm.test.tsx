import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../../App";

const modalRegisterRoot = document.createElement('div')
modalRegisterRoot.setAttribute('id', 'modal_root')
document.body.appendChild(modalRegisterRoot)

test('when click Register, register modal should be shown', async () => {
    render(<App />);
  
    fireEvent.click(await screen.findByRole('register-open-modal'));
  
    expect(await screen.findByRole('register-modal'));
})
  
test('when click RegisterFormBtn if some input is incorrect, error', async () => {
    render(<App />);

    fireEvent.click(await screen.findByRole('register-open-modal'));
    fireEvent.change(await screen.findByRole('password-repeat-input'), { target: { value: 'password' } });
    fireEvent.click(await screen.findByRole('register-form-btn'));

    expect(await screen.findByRole('input-name')).toBeVisible();
    expect(await screen.findByRole('input-surname')).toBeVisible();
    expect(await screen.findByRole('email-error')).toBeVisible();
    expect(await screen.findByRole('password-error')).toBeVisible();
    expect(await screen.findByRole('same-password-error')).toBeVisible();

})