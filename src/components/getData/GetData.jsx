import React from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import myStyle from "../style/Style";

function GetData() {
  const Style = myStyle();
  return (
    <div>
      <form className={Style.form} noValidate autoComplete="off">
        <TextField
          className={Style.input}
          variant="outlined"
          id="Name"
          label="نام..."
        />
        <TextField
          className={Style.input}
          variant="outlined"
          id="Name"
          label="نام خانوادگی"
        />
        <TextField
          className={Style.input}
          type="number"
          variant="outlined"
          id="Name"
          label="شماره تماس"
        />
        <FormControl variant="outlined" className={Style.input}>
          <InputLabel id="demo-simple-select-outlined-label">نسبت</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            
            //   onChange={handleChange}
            label="نسبت"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>دوست</MenuItem>
            <MenuItem value={20}>دایی</MenuItem>
            <MenuItem value={30}>عمو</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={Style.input}
          type="email"
          variant="outlined"
          id="Name"
          label="Email"
        />
        <Button className={Style.button} variant="contained" color="primary" disableElevation>
          اضافه کردن
        </Button>
      </form>
    </div>
  );
}

export default GetData;
