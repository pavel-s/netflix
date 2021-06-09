import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ProfileSelector from '../../containers/profile-selector';

describe('<ProfileSelector />', () => {
  it('renders ProfileSelector', async () => {
    const user = {
      displayName: 'Bob',
      photoURL: '/images/users/1.png',
    };
    const setProfile = jest.fn();

    const { getAllByText } = render(
      <ProfileSelector user={user} setProfile={setProfile} />,
      {
        wrapper: MemoryRouter,
      }
    );

    // click on profile
    await act(async () => {
      fireEvent.click(getAllByText('Bob')[0]);
    });

    expect(setProfile).toBeCalledTimes(1);
  });
});
