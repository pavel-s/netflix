import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TRSC } from '../../types';
import {
  Container,
  Button,
  Close,
  Video,
  Overlay,
  LockBody,
} from './styles/player';
import ReactDOM from 'react-dom';

type TPlayer = TRSC<typeof Container> & {
  Button: TRSC<typeof Button>;
  Video: TRSC<typeof Video>;
};

const PlayerContext = createContext<{
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}>({ show: false, setShow: () => null });

const Player: TPlayer = ({ children, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <PlayerContext.Provider value={{ show, setShow }}>
      <Container {...rest}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Button = function PlayerButton({ children, ...rest }) {
  const { show, setShow } = useContext(PlayerContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prevShowRef = useRef(show);

  useEffect(() => {
    // focus on button when close video player
    if (!show && prevShowRef.current) {
      buttonRef.current?.focus();
    }
    prevShowRef.current = show;
  }, [show]);

  return (
    <Button {...rest} onClick={() => setShow((show) => !show)} ref={buttonRef}>
      {children}
    </Button>
  );
};

Player.Video = function PlayerVideo({ children, ...rest }) {
  const { show, setShow } = useContext(PlayerContext);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (show) {
      videoRef.current?.focus();
    }
  }, [show]);

  return show
    ? ReactDOM.createPortal(
        <Overlay
          onClick={() => setShow(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setShow(false);
            }
          }}
          data-testid='player'
        >
          <LockBody />
          <Video
            onClick={(e) => e.stopPropagation()}
            ref={videoRef}
            data-testid='netflix-player'
            {...rest}
          >
            {children}
          </Video>
          <Close>
            <img src='/images/icons/close-slim.png' alt='Close' />
          </Close>
        </Overlay>,
        document.body
      )
    : null;
};

export default Player;
