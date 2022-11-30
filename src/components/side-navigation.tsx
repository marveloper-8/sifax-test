import { navigation } from 'data/navigation';
import { HiSquares2X2 } from 'react-icons/hi2';
import { BsChatLeftTextFill, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { AiOutlineBarChart, AiOutlineUnorderedList } from 'react-icons/ai';
import * as STYLE from 'styles/side-navigation'
import { useState } from 'react';

const icons = (value: any) => {
  if(value === 'dashboard') return <HiSquares2X2 />
  if(value === 'projects') return <BsFillFileEarmarkTextFill />
  if(value === 'task') return <AiOutlineUnorderedList />
  if(value === 'message') return <BsChatLeftTextFill />
  if(value === 'analytics') return <AiOutlineBarChart />
}

function SideNavigation() {
  const [active, setActive] = useState('dashboard');
  return (
    <STYLE.Container>
      <STYLE.NavigationList>
        {navigation.map((item: any) => {
          return (
            <STYLE.NavigationListItem 
              active={active === item.route} 
              onClick={() => setActive(item.route)}
            >
              {icons(item.route)}
              {item.name}
            </STYLE.NavigationListItem>
          )
        })}
      </STYLE.NavigationList>
    </STYLE.Container>
    
  );
}

export default SideNavigation;
