import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  display:'flex',
  position: 'relative',
  borderRadius: '50px',
  border:'2px solid #134B8A',
  marginLeft: 0,
  [theme.breakpoints.up('xs')]: {
    width: '357px',
  },
  [theme.breakpoints.up('md')]: {
    width: '400px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  right:5,
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '280px',
    },
    [theme.breakpoints.up('md')]: {
      width: '320px',
    },
  },
}));

const SearchItem = (props) => {
  const { SearchName, categoriess } = props
  const [search, setSearch] = useState('')

  useEffect(()=>{
    if(categoriess===''){
      setSearch('')
    }
  },[categoriess])

  
  const handleChange = (event) =>{
    setSearch(event.target.value)
    SearchName(event.target.value)
  }
  
  return (
    <Search>
      <StyledInputBase 
        placeholder='Search .... ....'
        value={search}
        onChange={handleChange}
      />
      <SearchIconWrapper>
        <SearchIcon color='disabled'/>
      </SearchIconWrapper>
    </Search>
  )
}

export default SearchItem 