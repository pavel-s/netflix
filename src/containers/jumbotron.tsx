import { Jumbotron } from '../components';
import jumbotronData from '../fixtures/jumbo.json';

const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumbotronData.map((item) => {
        const direction =
          item.direction === 'row-reverse' ? 'row-reverse' : 'row';
        return (
          <Jumbotron direction={direction} key={item.id}>
            <Jumbotron.Pane direction={direction}>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane direction={direction}>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
};

export default JumbotronContainer;
