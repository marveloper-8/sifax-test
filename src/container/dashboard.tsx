import { BsSearch } from 'react-icons/bs';
import * as STYLE from 'styles/dashboard'
import profile from 'resources/profile.jpeg'
import { AiOutlineDown, AiOutlineLink, AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { dashboard } from 'data/dashboard';
import { HiOutlineChatBubbleLeft } from 'react-icons/hi2';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';
import { Button, ProfilePicture } from 'styles/widgets';
import { useState } from 'react';


function Dashboard() {
  const [grid, setGrid] = useState(true); 
  return (
    <STYLE.Container>
      <STYLE.TopBar>
        <STYLE.Navigation>
          <STYLE.NavigationTab onClick={() => setGrid(false)} active={!grid}>
            <AiOutlineUnorderedList />
          </STYLE.NavigationTab>
          <STYLE.NavigationTab onClick={() => setGrid(true)} active={grid}>
            <RxDashboard />
          </STYLE.NavigationTab>
          
        </STYLE.Navigation>
        <Button><AiOutlinePlus /></Button>
      </STYLE.TopBar>
      <STYLE.TopBar>
        <STYLE.TopBarLeft><STYLE.Title>Working</STYLE.Title> (03)</STYLE.TopBarLeft>
        <IoEllipsisHorizontalOutline />
      </STYLE.TopBar>
      {dashboard.map((item: any) => {
        return (
          <STYLE.Items>
            <STYLE.Title>{item.name}</STYLE.Title>
            <p>{item.description}</p>
            <STYLE.TagContainer>
              {item.tags.map((item: any) => {
                return (
                  <STYLE.Tag tag={item.tag}>{item.name}</STYLE.Tag>
                )
              })}
            </STYLE.TagContainer>
            <STYLE.BottomContainer>
              <STYLE.BottomContainerLeft>
                <AiOutlineLink />
                <STYLE.BottomContainerLeftChat>3 <HiOutlineChatBubbleLeft /></STYLE.BottomContainerLeftChat>
              </STYLE.BottomContainerLeft>
              <div>
                {item.profiles.map((item: any, index: number) => {
                  return (
                    <STYLE.ProfilePictureWrapper position={index}>
                      <ProfilePicture src={item} />
                    </STYLE.ProfilePictureWrapper>
                  )
                })}
                
              </div>
            </STYLE.BottomContainer>
          </STYLE.Items>
        )
      })}
    </STYLE.Container>
  );
}

export default Dashboard;
