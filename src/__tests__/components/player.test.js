import { fireEvent, render } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player />', () => {
  it('renders Player with bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button>Play</Player.Button>
        <Player.Video src='/videos/bunny.mp4' />;
      </Player>
    );

    // overlay hidden
    expect(queryByTestId('player')).toBeFalsy();

    // open
    fireEvent.click(getByText('Play'));

    // click on video, no effect
    fireEvent.click(queryByTestId('netflix-player'));
    expect(queryByTestId('player')).toBeTruthy();

    // close
    fireEvent.click(queryByTestId('player'));
    expect(queryByTestId('player')).toBeFalsy();

    // open again
    fireEvent.click(getByText('Play'));
    expect(queryByTestId('player')).toBeTruthy();

    // close with Escape key
    fireEvent.keyDown(queryByTestId('player'), { key: 'Escape' });
    expect(queryByTestId('player')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
