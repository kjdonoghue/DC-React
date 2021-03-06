import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function IconButtons(props) {
  const classes = useStyles();

  
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/books/${id}`, {
        method: "DELETE", 
        }).then(response => response.json())
        .then(result => {
            if (result.success)
            props.onDelete()
        })
  }

 
  return (
    <div className={classes.root}>
     <IconButton aria-label="delete">
        <DeleteIcon onClick={() => handleDelete(props.id)}/>
      </IconButton>
    </div>
  );
}

export default IconButtons