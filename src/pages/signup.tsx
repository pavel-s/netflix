import { Header } from '../components';
import FooterContainer from '../containers/footer';
import SignUpForm from '../containers/signup-form';

const SignUP = () => {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src='/images/misc/logo.svg' alt='Netflix' />
        </Header.Frame>
        <SignUpForm />
        <FooterContainer />
      </Header>
    </>
  );
};

export default SignUP;
