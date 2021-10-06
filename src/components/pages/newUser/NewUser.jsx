import React from "react";
import "./NewUser.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  newUserForm: {
    display: "flex",
    flexWrap: "wrap",
  },

  newUserItem: {
    width: "400px",

    //backgroundColor: "rgb(207, 205, 205)",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
});

const NewUser = () => {
  const classes = useStyles();
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Add New New</h1>

      <form className={classes.newUserForm}>
        <div className={classes.newUserItem}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={classes.newUserItem}>
          <input type="text" placeholder="Full name" />
        </div>
        <div className={classes.newUserItem}>
          <input type="email" placeholder="Email" />
        </div>
        <div className={classes.newUserItem}>
          <input type="password" placeholder="password" />
        </div>
        <div className={classes.newUserItem}>
          <input type="text" placeholder="Phone" />
        </div>
        <div className={classes.newUserItem}>
          <input type="text" placeholder="Address" />
        </div>
        <div className={classes.newUserItem}>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className={classes.newUserItem}>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
