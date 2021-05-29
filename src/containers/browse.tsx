import { useEffect, useMemo, useState } from 'react';
import { Card, Header, Player } from '../components';
import * as ROUTES from '../constants/routes';
import { useAuth, useContent } from '../hooks';
import { TMediaItem, TUserProfile } from '../types';
import { selectionMap } from '../utils/selectionMap';
import FooterContainer from './footer';
import Fuse from 'fuse.js';

const DEFAULT_USER_PHOTO = 'images/users/1.png';
const BACKGROUND_IMAGE = 'images/misc/joker1.jpg';
const LOGO = 'images/misc/logo.svg';

const BrowseContainer = ({ profile }: { profile: TUserProfile }) => {
  const { signOut } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');

  const [category, setCategory] = useState<'films' | 'series'>('films');

  const [activeItem, setActiveItem] = useState<TMediaItem | null>(null);

  const content = useContent(category);

  const mappedContent = useMemo(() => selectionMap(content), [content]);

  const [rows, setRows] = useState(mappedContent);

  useEffect(() => {
    const fuse = new Fuse(mappedContent, {
      keys: ['items.title', 'items.genre', 'items.description'],
    });
    if (mappedContent.length > 0 && searchTerm.length > 1) {
      const results = fuse.search(searchTerm).map(({ item }) => item);
      if (results.length > 0) {
        setRows(results);
      }
    } else {
      setRows(mappedContent);
    }
  }, [mappedContent, searchTerm]);

  return (
    <>
      <Header url={BACKGROUND_IMAGE} hideOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={LOGO} />
            <Header.TextButton
              active={category === 'films'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextButton>
            <Header.TextButton
              active={category === 'series'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextButton>
          </Header.Group>
          <Header.Group>
            <Header.Search
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Header.Profile>
              <Header.ProfileImage
                url={profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO}
              />
              <Header.Dropdown>
                <Header.Group>
                  <Header.ProfileImage
                    url={
                      profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO
                    }
                  />
                  <Header.TextButton>{profile.displayName}</Header.TextButton>
                </Header.Group>
                <Header.TextButton onClick={signOut}>
                  Sign out
                </Header.TextButton>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker now.</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Container>
        {rows.map((row) => {
          return (
            <Card key={row.title}>
              <Card.Title>{row.title}</Card.Title>
              <Card.Items>
                {row.items.map((item) => {
                  return (
                    <Card.Item
                      key={item.docId}
                      onClick={() => setActiveItem(item)}
                    >
                      <Card.ItemImage
                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                        alt={item.title}
                      />
                      <Card.Meta>
                        <Card.Subtitle>{item.title}</Card.Subtitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Items>
              {activeItem && row.items.includes(activeItem) && (
                <Card.Feature
                  url={`/images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg`}
                >
                  <Card.Title>{activeItem.title}</Card.Title>
                  <Card.Text>{activeItem.description}</Card.Text>

                  <Card.Group>
                    <Card.Maturity maturity={+activeItem.maturity} />
                    <Card.Subtitle>
                      {activeItem.genre[0].toLocaleUpperCase() +
                        activeItem.genre.slice(1)}
                    </Card.Subtitle>
                  </Card.Group>

                  <Card.FeatureClose onClick={() => setActiveItem(null)}>
                    <img src='/images/icons/close.png' alt='close' />
                  </Card.FeatureClose>
                  <Player>
                    <Player.Button>Play</Player.Button>
                    <Player.Video src='videos/bunny.mp4' controls />
                  </Player>
                </Card.Feature>
              )}
            </Card>
          );
        })}
      </Card.Container>
      <FooterContainer />
    </>
  );
};

export default BrowseContainer;
