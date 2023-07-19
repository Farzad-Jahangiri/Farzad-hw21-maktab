import React, { useState } from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import myStyle from "../style/Style";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(09\d{8})$|^(\+989\d{10})$|^(0[1-8]{1}[0-9]{9})$/;

function GetData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relative, setRelative] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");

  const Style = myStyle();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className={Style.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={`${Style.input} ${errorName}`}
          variant="outlined"
          id="firstName"
          label="نام..."
          onChange={(e) => {
            setFirstName(e.target.value);
            if (e.target.value.length < 2) {
              setErrorName(Style.errorInput);
            } else {
              setErrorName("");
            }
          }}
        />
        <TextField
          className={`${Style.input} ${errorLastName}`}
          variant="outlined"
          id="lastName"
          label="نام خانوادگی"
          onChange={(e) => {
            setLastName(e.target.value);
            if (e.target.value.length < 5) {
              setErrorLastName(Style.errorInput);
            } else {
              setErrorLastName("");
            }
          }}
        />
        <TextField
          className={`${Style.input} ${errorPhoneNumber}`}
          type="number"
          variant="outlined"
          id="phoneNummber"
          label="شماره تماس"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            if(!phonePattern.test(phoneNumber)){
                setErrorPhoneNumber(Style.errorInput);
            }else{
                setErrorPhoneNumber("");
            }
        }}
        />
        <FormControl variant="outlined" className={Style.input}>
          <InputLabel id="demo-simple-select-outlined-label">نسبت</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="relative"
            //   onChange={handleChange}
            label="نسبت"
            onChange={(e) => setRelative(e.target.value)}
          >
            <MenuItem value="">
              <em>هیچ کس</em>
            </MenuItem>
            <MenuItem value={1}>دوست</MenuItem>
            <MenuItem value={2}>همکار</MenuItem>
            <MenuItem value={3}>اعضای خانواده</MenuItem>
            <MenuItem value={4}>آشنا</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={`${Style.input} ${errorEmail}`}
          type="email"
          variant="outlined"
          id="Name"
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            if (!emailPattern.test(email)) {
              setErrorEmail(Style.errorInput);
            } else {
              setErrorEmail("");
            }
          }}
        />
        <Button
          type="submit"
          className={Style.button}
          variant="contained"
          color="primary"
          disableElevation
        >
          اضافه کردن
        </Button>
      </form>
    </div>
  );
}

export default GetData;
