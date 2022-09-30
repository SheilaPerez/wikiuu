import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../../../App';
import LoginModal from '../../LoginModal';

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modalLogin_root')
document.body.appendChild(modalRoot)

test('when click StartNow, login modal should be shown', async () => {
    render(<App />);
  
    fireEvent.click(await screen.findByRole('start-now-open-login'));

    expect(await screen.findByRole('login-modal')).toBeVisible();

});

test('when click register button if email or password is wrong, error', async () => {
    render(<LoginModal handleClickCloseLoginBtn={() => { }} handleClickForgetPassword={() => {}} handleClickCloseLoginModal={() => {}} handleClickRegister={() => {}} />)
    
    fireEvent.click(await screen.findByRole('startSession-clicked'));

    expect(await screen.findByRole('email-input-error')).toBeVisible();
    expect(await screen.findByRole('password-input-error')).toBeVisible();
});

test('when email and password are correct, no show error message', async () => {
    render(<LoginModal handleClickCloseLoginBtn={() => { }} handleClickForgetPassword={() => {}} handleClickCloseLoginModal={() => {}} handleClickRegister={() => {}} />)

    
    fireEvent.change(await screen.findByRole('email-input'), { target: { value: 'email' } });
    fireEvent.change(await screen.findByRole('password-input'), { target: { value: 'password' } });
    fireEvent.click(await screen.findByRole('startSession-clicked'));

    expect(await screen.queryByRole('email-input-error')).not.toBeInTheDocument();
    expect(await screen.queryByRole('password-input-error')).not.toBeInTheDocument();
})