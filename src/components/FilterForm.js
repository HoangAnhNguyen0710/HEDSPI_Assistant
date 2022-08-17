import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RoomIcon from '@mui/icons-material/Room';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const FilterForm = (props) => {
  const [filter, setFilter] = useState({
    name:"",
    ID:"",
    year:"",
    note:"", // hệ đào tạo 4 hay 5 năm ???
  })

  const handleChange = (e) => {
      setFilter({...filter, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/companies/all`)
    .then((res)=> console.log(res))
    .catch((err) => console.log(err));
  }
  return (
    <>
    <form className='flex flex-col w-full' onSubmit={handleSubmit}>
      <div className='w-full py-3 pb-4'>
      <TextField
          fullWidth
          id="input-with-icon-adornment"
          label="Tìm kiếm theo tên học phần"
          value={filter.name}
          placeholder="Nhập tên học phần"
          size='small'
          name='name'
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon/>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className='w-full py-2 pb-4'>
      <TextField
          fullWidth
          id="outlined-required"
          label="Tìm kiếm theo mã học phần"
          value={filter.ID}
          placeholder="Nhập mã học phần"
          size='small'
          name='ID'
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RoomIcon/>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <button type='submit' className='w-full text-white bg-main p-3 rounded-md'>SEARCH</button>
      <label className='py-4 font-medium'>Chương trình</label>
      <FormGroup>
          <FormControlLabel
            control={
              <Checkbox  onChange={handleChange} name="engineer" />
            }
            label="Từ K64 trở về trước"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} name="bachelor" />
            }
            label="Từ K65 trở đi"
          />
        </FormGroup>
        <label className='py-4 font-medium'>Thời gian</label>
        <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="" control={<Radio />} label="Tất cả" />
    <FormControlLabel value={1} control={<Radio />} label="Năm 1" />
    <FormControlLabel value={2} control={<Radio />} label="Năm 2" />
    <FormControlLabel value={3} control={<Radio />} label="Năm 3" />
    <FormControlLabel value={4} control={<Radio />} label="Năm 4" />
    <FormControlLabel value={5} control={<Radio />} label="Năm 5" />
  </RadioGroup>
    </form>
    </>
  )
}

export default FilterForm