import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modalLogin_root')
document.body.appendChild(modalRoot)

const modalpassword = document.createElement('div')
modalpassword.setAttribute('id', 'modalPassword_root')
document.body.appendChild(modalpassword);

test('when click StartNow, login modal should be shown', async () => {
    render(<App />);
  
    fireEvent.click(await screen.findByRole('start-now-open-login'));

    expect(await screen.findByRole('login-modal')).toBeVisible();

});

test('When click forgot password button, password modal should be shown', async () => {
    render(<App />);

    fireEvent.click(await screen.findByRole('start-now-open-login'));
    fireEvent.click(await screen.findByRole('forgot-password-btn'));

    expect(await screen.findByRole('password-modal')).toBeVisible();

})

test('When click send, if email doesnt exist, error message', async () => {
    render(<App />);
    
    fireEvent.click(await screen.findByRole('start-now-open-login'));
    fireEvent.click(await screen.findByRole('forgot-password-btn'));
    fireEvent.click(await screen.findByRole('send-btn'));

    expect(await screen.findByRole('email-getBack-password-error')).toBeVisible();

})