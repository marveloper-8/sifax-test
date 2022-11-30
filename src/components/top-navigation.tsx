import { BsBellFill} from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import * as STYLE from 'styles/top-navigation'
import logo from 'resources/logo.png'
import SearchInput from 'widgets/search';
import { Button } from 'styles/widgets';
import ProfileWidget from 'widgets/profile';


function TopNavigation() {
  return (
    <STYLE.Container>
      <STYLE.Logo src={logo} alt="Tuscot" />
      <SearchInput />
      <STYLE.Right>
        <Button>
          <AiOutlinePlus />
          New Project
        </Button>
        <STYLE.Notification>
          <BsBellFill />
          <STYLE.NotificationBadge />
        </STYLE.Notification>
        <ProfileWidget />
      </STYLE.Right>
    </STYLE.Container>
    
  );
}

export default TopNavigation;
