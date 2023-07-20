import React, { useState, useContext, useEffect } from "react";
import UseContext from "../UseContext";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import myStyle from "../style/Style";
import { useDispatch } from "react-redux";
import { addCountact, EditeCountact } from "../../app/countactSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(09\d{8})$|^(\+989\d{10})$|^(0[1-8]{1}[0-9]{9})$/;

function GetData() {
  const Style = myStyle();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [relative, setRelative] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [checkEdit, setCheckEdit] = useState({
    check: false,
    id: "",
    myElement: "",
  });

  const Edit = (data, myElement) => {
    setFirstName(data.name);
    setLastName(data.family);
    setPhoneNumber(data.phone_number);
    setRelative(data.relative);
    setEmail(data.email);
    setCheckEdit({ check: true, id: data.phone_number, myElement: myElement });
  };

  const { setChenge } = useContext(UseContext);

  useEffect(() => {
    setChenge((e) => Edit);
  }, []);

  const dispatch = useDispatch();

  const Clear = () => {
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setRelative("");
    setEmail("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      (errorEmail !== "" &&
        errorName !== "" &&
        errorLastName !== "" &&
        errorPhoneNumber !== "") ||
      (firstName === "" &&
        lastName === "" &&
        phoneNumber === "" &&
        email === "")
    ) {
      alert("لطفا همه مقادیر را پر کنید");
      return;
    }

    if (checkEdit.check) {
      const contact = {
        previousId: checkEdit.id,
        id: phoneNumber,
        name: firstName,
        family: lastName,
        phone_number: phoneNumber,
        relative: relative,
        email: email,
      };
      dispatch(EditeCountact(contact));
      Clear();
      checkEdit.myElement.className = checkEdit.myElement.className
        .split(" ")
        .filter((className) => className !== Style.editCountactShow)
        .join(" ");

      toast.success("Contact saved");
      setCheckEdit({ check: false, id: "" });
      return;
    }
    const contact = {
      id: phoneNumber,
      name: firstName,
      family: lastName,
      phone_number: phoneNumber,
      relative: relative,
      email: email,
    };

    dispatch(addCountact(contact));
    Clear();
    toast.success("Contact saved");
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
          value={firstName}
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
          value={lastName}
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
          value={phoneNumber}
          label="شماره تماس"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            if (!phonePattern.test(phoneNumber)) {
              setErrorPhoneNumber(Style.errorInput);
            } else {
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
            value={relative}
            onChange={(e) => setRelative(e.target.value)}
          >
            <MenuItem value="مخاطب عادی">
              <em>هیچ کس</em>
            </MenuItem>
            <MenuItem value="دوست">دوست</MenuItem>
            <MenuItem value="همکار">همکار</MenuItem>
            <MenuItem value="اعضای خانواده">اعضای خانواده</MenuItem>
            <MenuItem value="آشنا">آشنا</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={`${Style.input} ${errorEmail}`}
          type="email"
          variant="outlined"
          id="Name"
          label="Email"
          value={email}
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
      <ToastContainer />
    </div>
  );
}

export default GetData;
