import * as STYLE from 'styles/widgets'
import profile from 'resources/profile.jpeg'
import { AiOutlineDown } from 'react-icons/ai';


function ProfileWidget() {
  return (
    <STYLE.Profile>
      <STYLE.ProfilePicture src={profile} alt='Profile' />
      <div>
        <STYLE.Name>Cavin Peterson</STYLE.Name>
        Manager
      </div>
      <AiOutlineDown />
    </STYLE.Profile>
    
  );
}

export default ProfileWidget;
