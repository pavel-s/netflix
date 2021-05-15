import FAQs from './../containers/faqs';
import FooterContainer from './../containers/footer';
import HeaderContainer from './../containers/header';
import JumbotronContainer from './../containers/jumbotron';
import GlobalStyles from './../global-styles';

const Home = function () {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FAQs />
      <FooterContainer />
    </>
  );
};

export default Home;
