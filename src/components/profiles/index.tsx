import { TRSC } from '../../types';
import {
  Container,
  Title,
  List,
  ListItem,
  User,
  Avatar,
  Name,
} from './styles/profiles';

type TProfiles = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  List: TRSC<typeof List>;
  User: TRSC<typeof User>;
  Avatar: TRSC<typeof Avatar>;
  Name: TRSC<typeof Name>;
};

const Profiles: TProfiles = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Profiles.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Profiles.List = ({ children, ...rest }) => {
  return <List {...rest}>{children}</List>;
};

Profiles.User = ({ children, ...rest }) => {
  return (
    <ListItem>
      <User {...rest}>{children}</User>
    </ListItem>
  );
};

Profiles.Avatar = ({ children, ...rest }) => {
  return <Avatar {...rest} />;
};

Profiles.Name = ({ children, ...rest }) => {
  return <Name {...rest}>{children}</Name>;
};

export default Profiles;
