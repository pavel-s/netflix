import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature />', () => {
  it('renders Feature with populated data', () => {
    const { container, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
      </Feature>
    );

    // title
    expect(queryByText('Unlimited movies, TV shows, and more.')).toBeTruthy();

    // subtitle
    expect(queryByText('Watch anywhere. Cancel anytime.')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
