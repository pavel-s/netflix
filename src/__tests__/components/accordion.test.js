import { fireEvent, render } from '@testing-library/react';
import { Accordion } from '../../components';
import faqData from './../../fixtures/faqs.json';

describe('<Accordion />', () => {
  it('renders Accordion with FAQ data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    // accordion title
    expect(getByText('Frequently Asked Questions')).toBeTruthy();

    // item header
    const header = getByText(faqData[1].header);
    expect(header).toBeTruthy();

    // item body hidden
    const body = getByText(faqData[1].body).parentElement;
    expect(body).toBeTruthy();
    expect(body).toHaveClass('closed');

    // header with + icon
    expect(header.lastChild).toHaveAttribute('src', '/images/icons/add.png');

    // click on header, icon changed, body open
    fireEvent.click(header);
    expect(header.lastChild).toHaveAttribute(
      'src',
      '/images/icons/close-slim.png'
    );
    expect(body).toHaveClass('open');

    // click again
    fireEvent.click(header);
    expect(header.lastChild).toHaveAttribute('src', '/images/icons/add.png');
    expect(body).toHaveClass('closed');

    expect(container.firstChild).toMatchSnapshot();
  });
});
