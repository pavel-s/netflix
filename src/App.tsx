import FAQs from './containers/faqs';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import GlobalStyles from './global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <JumbotronContainer />
      <FAQs />
      <FooterContainer />
    </>
  );
}

export default App;
