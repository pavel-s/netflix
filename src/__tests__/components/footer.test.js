import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer />', () => {
  it('render Footer title, 8 links and text', () => {
    const { container, queryByText, queryAllByText } = render(
      <Footer>
        <Footer.Title>
          Questions? Call <a href='tel:8-800-100-9668'>8-800-100-9668</a>
        </Footer.Title>
        <Footer.Links>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
          <Footer.Link href='#'>Lorem</Footer.Link>
        </Footer.Links>
        <Footer.Text>Netflix Russia</Footer.Text>
      </Footer>
    );

    // title
    expect(container.firstChild.firstChild).toHaveTextContent(
      'Questions? Call 8-800-100-9668'
    );

    // 8 links
    expect(queryAllByText('Lorem').length).toEqual(8);

    // text
    expect(queryByText('Netflix Russia')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
