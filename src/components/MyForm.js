import React,{useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const MyForm = ({ setQuery }) => {
    const [text,setText]=useState('')

    const handleClick=(e)=>{
        e.preventDefault();
        console.log(text);
        setQuery(text)
    }
  return (
        <Box className="myForm" component="form" sx={{"& > :not(style)": { m: 1, width: "30ch" },}} noValidate autoComplete="off" >
            <TextField label="Add meg a keresendő film címét" color="secondary" focused  onChange={(e)=>setText(e.target.value)}/>
            <Button variant="contained" color="secondary" onClick={handleClick} >Keresés</Button>
        </Box> 
  );
};
