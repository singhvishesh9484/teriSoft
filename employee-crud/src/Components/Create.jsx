import React from 'react';
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const Create = ({getData}) => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    const header={"Access-Control-Allow-Orginal":"'"}

    const handleChange1=(e)=>{
          setName(e.target.value)
    }

    const handleChange2=(e)=>{
          setEmail(e.target.value)
    }

    const handleAdd=(el)=>{
        axios.post("http://localhost:8080/users",{
          name:name,
          email:email,
          header
        }).then(()=>{
           getData()
           
        })

  }

  return (
    <Box component="form" noValidate autoComplete="off">
    <FormControl sx={{ width: '25ch' }}>
      <OutlinedInput placeholder="Please enter name" onChange={handleChange1}/>
      <OutlinedInput placeholder="Please enter email" onChange={handleChange2}/>
      <OutlinedInput placeholder="Please enter phone" /><br></br>

      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        //value={value}
        //onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <Button variant="contained" onChange={handleAdd}>Add Detail</Button>
      
    </FormControl>
    
  </Box>
  )
}

export default Create
