import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
  it('renders Profiles with populated data', () => {
    const { container, queryByText, queryByTestId } = render(
      <Profiles>
        <Profiles.Title>Who is watching?</Profiles.Title>
        <Profiles.List data-testid='list'>
          <Profiles.User>
            <Profiles.Avatar
              src='images/users/1.png'
              data-testid='image-mike'
            />
            <Profiles.Name>{'Mike'}</Profiles.Name>
          </Profiles.User>
          <Profiles.User>
            <Profiles.Avatar src='images/users/2.png' />
            <Profiles.Name>{'Steve'}</Profiles.Name>
          </Profiles.User>
          <Profiles.User>
            <Profiles.Avatar src='images/users/3.png' />
            <Profiles.Name>{'Bob'}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    // user 1 avatar
    expect(queryByTestId('image-mike')).toHaveAttribute(
      'src',
      'images/users/1.png'
    );

    // user 1 name
    expect(queryByText('Mike')).toBeTruthy();

    // all users rendered
    expect(queryByTestId('list')?.childNodes.length).toEqual(3);

    expect(container.firstChild).toMatchSnapshot();
  });
});
