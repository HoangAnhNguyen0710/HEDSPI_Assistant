import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RoomIcon from "@mui/icons-material/Room";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { getDocumentNum } from "../../service/api";
import { useEffect } from "react";

const FilterForm = (props) => {
  const [filter, setFilter] = useState({
    subject_name: "",
    subject_code: "",
    year: 0,
    semester_1: 0,
    semester_2: 0,
    program: "", // hệ đào tạo 4 hay 5 năm ???
  });

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const clearChange = (e) => {
    if(e.target.name === "year") setFilter({ ...filter, [e.target.name]: 0 })
    else
    setFilter({ ...filter, [e.target.name]: "" });
  }

  const handleSubmit = (e) => {
    const fullFilter = filter;
    if(filter.year === 0)  {
      fullFilter.semester_1 = 1;
      fullFilter.semester_2 = 10
    } else{
      fullFilter.semester_1 = (filter.year * 2) - 1;
      fullFilter.semester_2 = filter.year * 2
    }
    e.preventDefault();
    props.setFilterVal(fullFilter)
    // getDocumentNum('all', fullFilter).then((res)=> alert(res.data))
  };
  return (
    <>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="w-full py-3 pb-4">
          <TextField
            fullWidth
            id="input-with-icon-adornment"
            label="Tìm kiếm theo tên học phần"
            value={filter.subject_name}
            placeholder="Nhập tên học phần"
            size="small"
            name="subject_name"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="w-full py-2 pb-4">
          <TextField
            fullWidth
            id="outlined-required"
            label="Tìm kiếm theo mã học phần"
            value={filter.subject_code}
            placeholder="Nhập mã học phần"
            size="small"
            name="subject_code"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoomIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-main p-3 rounded-md"
        >
          SEARCH
        </button>
        <label className="py-4 font-medium">Chương trình</label>
        <RadioGroup name="program" value={filter.program} onChange={handleChange} onDoubleClick={clearChange}>
          <FormControlLabel
            control={<Radio value="K64 đổ về trước"/>}
            label="Từ K64 trở về trước"
          />
          <FormControlLabel
            control={<Radio value="Từ K65 trở đi"/>}
            label="Từ K65 trở đi"
          />
        </RadioGroup>
        <label className="py-4 font-medium">Thời gian</label>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={filter.year}
          name="year"
          onChange={handleChange}
          onDoubleClick={clearChange}
        >
          <FormControlLabel value={1} control={<Radio />} label="Năm 1" />
          <FormControlLabel value={2} control={<Radio />} label="Năm 2" />
          <FormControlLabel value={3} control={<Radio />} label="Năm 3" />
          <FormControlLabel value={4} control={<Radio />} label="Năm 4" />
          <FormControlLabel value={5} control={<Radio />} label="Năm 5" />
        </RadioGroup>
      </form>
    </>
  );
};

export default FilterForm;
