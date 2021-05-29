import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumbotronData from './../../fixtures/jumbo.json';

describe('<Jumbotron />', () => {
  it('render Jumbotron with jumbotronData', () => {
    const { container, queryByText } = render(
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

    // title
    expect(queryByText(jumbotronData[0].title)).toBeTruthy();
    // subtitle
    expect(queryByText(jumbotronData[0].subTitle)).toBeTruthy();
    // image
    expect(document.querySelector('img')).toHaveAttribute(
      'src',
      jumbotronData[0].image
    );

    // all items rendered
    expect(container.firstChild.childNodes.length).toEqual(
      jumbotronData.length
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Jumbotron with jumbotronData with default direction', () => {
    const { container, queryByText } = render(
      <Jumbotron.Container>
        {jumbotronData.map((item) => {
          const direction =
            item.direction === 'row-reverse' ? 'row-reverse' : 'row';
          return (
            <Jumbotron key={item.id}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    );

    // title
    expect(queryByText(jumbotronData[0].title)).toBeTruthy();
    // subtitle
    expect(queryByText(jumbotronData[0].subTitle)).toBeTruthy();
    // image
    expect(document.querySelector('img')).toHaveAttribute(
      'src',
      jumbotronData[0].image
    );

    // all items rendered
    expect(container.firstChild.childNodes.length).toEqual(
      jumbotronData.length
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
