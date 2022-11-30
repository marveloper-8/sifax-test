import { BsSearch } from 'react-icons/bs';
import * as STYLE from 'styles/widgets'


function SearchInput() {
  return (
    <STYLE.InputContainer>
      <STYLE.Input placeholder='Search' />
      <div><BsSearch /></div>
    </STYLE.InputContainer>
    
  );
}

export default SearchInput;
