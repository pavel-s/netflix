import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../../pages/home';

describe('<Home />', () => {
  it('renders Home page', () => {
    const { container, getByText, getAllByPlaceholderText } = render(<Home />, {
      wrapper: MemoryRouter,
    });

    // Feature
    expect(getByText('Unlimited movies, TV shows, and more.')).toBeTruthy();

    // 2 OptForms
    expect(getAllByPlaceholderText('Email Address').length).toEqual(2);

    // jumbo 1
    expect(getByText('Enjoy on your TV.')).toBeTruthy();

    // jumbo 2
    expect(
      getByText('Download your programmes to watch on the go.')
    ).toBeTruthy();

    // jumbo 3
    expect(getByText('Watch everywhere.')).toBeTruthy();

    // FAQs
    expect(getByText('Frequently Asked Questions')).toBeTruthy();

    // footer
    expect(getByText('8-800-100-9668')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
