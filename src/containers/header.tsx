import { Feature, Header, OptForm } from '../components';
import * as ROUTES from '../constants/routes';

const HeaderContainer = () => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src='/images/misc/logo.svg' alt='Netflix' />
        <Header.SignButton to={ROUTES.LOGIN}>Sign In</Header.SignButton>
      </Header.Frame>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder='Email Address' />
          <OptForm.Button>Get Started</OptForm.Button>
        </OptForm>
      </Feature>
    </Header>
  );
};

export default HeaderContainer;
