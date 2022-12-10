import React,{useState} from 'react'
import { Header, StatusWrapper, Input } from './styles'
import { ReactComponent as PlusSvg } from '../../assets/plusBtn.svg'

const AddStatus = () => {
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
  };
  
  return (
    <StatusWrapper>
      <Header>
       {wordEntered.length === 0 ? <PlusSvg/> : ''  }
       <Input 
        onChange={handleFilter}
        value={wordEntered}
        placeholder={`Create status`}/>
      </Header>
    </StatusWrapper>
  )
}

export default AddStatus