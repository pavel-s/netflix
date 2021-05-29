import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading />', () => {
  it('render Loading with user image', () => {
    const { container } = render(<Loading src='/images/users/1.png' />);

    expect(container.querySelector('img')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Loading without image and with custom size', () => {
    const { container } = render(<Loading src={null} size='300px' />);

    expect(container.querySelector('img')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
