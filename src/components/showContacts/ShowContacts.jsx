import React,{useContext} from "react";
import UseContext from "../UseContext";
import myStyle from "../style/Style";
import { Card, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector,useDispatch } from "react-redux";
import {deleteCountact} from '../../app/countactSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyContactCard = (props) => {
  const dispatch = useDispatch();
  const classes = myStyle();

  const DeleteCountactHandler = (event) => {
    const myElementId = event.target.parentNode.parentNode.parentNode.id;
    const confirmed = window.confirm("آیا از حذف این مخاطب اطمینان دارید؟");
    if(confirmed){
      dispatch(deleteCountact(myElementId));
      toast.error("Contact deleted!!");
    }
  };

  const {chenge,setChenge} = useContext(UseContext);

  const EditCountact = (event)=>{
    const myElement = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    myElement.className=`${myElement.className} ${classes.editCountactShow}`;
    let name = myElement.querySelector("#name").innerHTML;
    let family = myElement.querySelector("#family").innerHTML;
    let email = myElement.querySelector("#email").innerHTML;
    let relative = myElement.querySelector("#relative").innerHTML;
    let phonNumber = myElement.id;
    const data = {
      name:name,
      family:family,
      email:email,
      relative:relative,
      phone_number:phonNumber
    }
    chenge(data,myElement)
  }
  return (
    <div>
      <Card id={props.data.id} className={`${classes.cardCountact}`}>
        <div>
          <IconButton
            onClick={DeleteCountactHandler}
            aria-label="delete"
            className={classes.iconButton}
            id={props.data.id}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={EditCountact} className={classes.iconButton}>
            <EditIcon />
          </IconButton>
        </div>
        <Typography className={classes.typography} variant="h5" component="p">
          {/* {props.data.name + " " + props.data.family} */}
          <span id="name">{props.data.name}</span>
          <span> </span>
          <span id="family">{props.data.family}</span>
        </Typography>
        <Typography className={classes.typography} variant="h5" component="p">
          <span id="relative">{props.data.relative}</span>
        </Typography>
        <Typography className={classes.typography} variant="h5" component="p">
          <span id="email">{props.data.email}</span>
        </Typography>
      </Card>
    </div>
  );
};

function ShowContacts() {
  const contacts = useSelector((state) => JSON.parse(state.countact.countacts));
  return (
    <div className="flex p-5 gap-5 flex-wrap justify-center">
      {contacts.map((countact, index) => (
        <MyContactCard key={index} data={countact} />
      ))}
      <ToastContainer />
    </div>
  );
}

export default ShowContacts;
