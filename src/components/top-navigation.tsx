import { navigation } from 'data/navigation';
import { HiSquares2X2 } from 'react-icons/hi2';
import { BsBellFill, BsChatLeftTextFill, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { AiOutlineBarChart, AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import * as STYLE from 'styles/top-navigation'
import { useState } from 'react';
import logo from 'resources/logo.png'
import SearchInput from 'widgets/search';
import { Button } from 'styles/widgets';
import ProfileWidget from 'widgets/profile';


function TopNavigation() {
  const [active, setActive] = useState('dashboard');
  return (
    <STYLE.Container>
      <STYLE.Logo src={logo} alt="Tuscot" />
      <SearchInput />
      <STYLE.Right>
        <Button>
          <AiOutlinePlus />
          New Project
        </Button>
        <BsBellFill />
        <ProfileWidget />
      </STYLE.Right>
    </STYLE.Container>
    
  );
}

export default TopNavigation;
