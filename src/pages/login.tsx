import { Header } from '../components';
import FooterContainer from '../containers/footer';
import LoginForm from '../containers/login-form';

const Login = () => {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src='/images/misc/logo.svg' alt='Netflix' />
        </Header.Frame>
        <LoginForm />
        <FooterContainer />
      </Header>
    </>
  );
};

export default Login;
