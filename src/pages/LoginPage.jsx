import React from 'react';
import Joi from 'joi';
import { validateProps } from '../utils/validation';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
 
const loginPagePropsSchema = Joi.object({
  loginSuccess: Joi.func().required(),
});

function LoginPage({ loginSuccess }) {
  validateProps(loginPagePropsSchema, { loginSuccess }, 'LoginPage');

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section className='login-page'>
      <h2>Silakan masuk untuk melanjutkan ...</h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
    </section>
  );
}
 
export default LoginPage;