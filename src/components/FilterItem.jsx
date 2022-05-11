import { styled } from "@mui/material/styles";
import { MenuItem, Select, FormControl } from "@mui/material";
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
  display:'flex',
  borderRadius: '50px',
  alignItems:'center',
  justifyContent:'end',
  border:'2px solid #134B8A',
  height:'40px',
  [theme.breakpoints.up('xs')]: {
    width: '357px',
    marginRight:0,
  },
  [theme.breakpoints.up('md')]: {
    width: '210px',
    marginRight:'6%',
  },
}));

const FilterWrap = styled(Select)(({ theme }) => ({
  color: 'inherit',

  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px solid #484850",
    
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "0px solid #484850",
  },

  [theme.breakpoints.up('xs')]: {
    width:'357px',
  },
  [theme.breakpoints.up('md')]: {
    width:'210px',
  },
}));

const FilterItem = (props) => {
  const { SelectCategory , SearchItem } = props
  const [category , setCategory] = useState([])


  const handleChange = (event) => {
    setCategory(event.target.value)
    SelectCategory(event.target.value,SearchItem)
  }

  return (
      <Search m="auto">
        <FormControl>
          <FilterWrap
            value={category}
            displayEmpty
            onChange={handleChange}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em style={{color:'GrayText'}}>Select Category</em>;
              }
              return selected
            }}
            >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="Bakery">Bakery</MenuItem>
            <MenuItem value="Cafe">Cafe</MenuItem>
            <MenuItem value="Restaurant">Restaurant</MenuItem>
          </FilterWrap>
        </FormControl>
      </Search>

  );
};

export default FilterItem;
