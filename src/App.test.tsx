import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modalLogin_root')
document.body.appendChild(modalRoot)

const modalRegisterRoot = document.createElement('div')
modalRegisterRoot.setAttribute('id', 'modal_root')
document.body.appendChild(modalRegisterRoot)

test('when click StartNow, login modal should be shown', async () => {
  render(<App />);
  
  fireEvent.click(await screen.findByRole('start-now-open-login'));

  expect(await screen.findByRole('login-modal')).toBeVisible();

});

test('when click Register, register modal should be shown', async () => {
  render(<App />);

  fireEvent.click(await screen.findByRole('register-open-modal'));

  expect(await screen.findByRole('register-modal'));
})


