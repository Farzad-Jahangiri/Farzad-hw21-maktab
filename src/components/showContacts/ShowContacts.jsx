import React from "react";
import myStyle from "../style/Style";
import { Card, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

const MyContactCard = (data) => {
  const classes = myStyle();
  return (
    <div>
      <Card className={classes.cardCountact}>
        <div>
          <IconButton aria-label="delete" className={classes.iconButton}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" className={classes.iconButton}>
            <EditIcon />
          </IconButton>
        </div>
        <Typography className={classes.typography} variant="h5" component="p">
          {data.name + " " + data.lastName}
        </Typography>
        <Typography className={classes.typography} variant="h5" component="p">
          {data.relative}
        </Typography>
        <Typography className={classes.typography} variant="h5" component="p">
          {data.email}
        </Typography>
      </Card>
    </div>
  );
};

function ShowContacts(props) {
  return (
    <div className="flex p-5 gap-5 flex-wrap justify-center">      
    </div>
  );
}

export default ShowContacts;
