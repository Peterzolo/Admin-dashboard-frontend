import React from "react";
import "./User.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {
  LocationSearchingOutlined,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Language,
  PublicSharp,
  LocationOnOutlined,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  createButton: {
    backgroundColor: "#096dd9",
    color: "#ffffff",
  },

  userDisplayIcon: {
    backgroundColor: "#bae7ff",
    borderRadius: "50%",
    padding: "10px",
    fontSize: "14px",
    marginTop: "10px",
  },
  displayUserInfoTitle: {
    marginLeft: "10px",
    marginTop: "15px",
  },
  userDisplayTitle: {
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#096dd9",
    padding: "10px",
    width: "120px",
    color: "white",
    borderRadius: "10px",
  },
  userDisplayTitleCDetals: {
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#096dd9",
    padding: "10px",
    width: "110px",
    color: "white",
    borderRadius: "10px",
  },

  userDetailWrapper: {
    marginTop: "20px",
  },

  userRightImage: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
    marginRight: "20px",
  },
});
const User = () => {
  const classes = useStyles();
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="createUserTitle">Edit User</h1>
        <Link to="/newUser" className = "ceateNewuserBtn">
          <Button className={classes.createButton} variant="contained">
            New Create User
          </Button>
        </Link>

        {/*<button className="createUserBtn">Add A user</button>*/}
      </div>

      <div className="addUserContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              src="https://source.unsplash.com/daily"
              alt=""
              className="userDisplayImage"
            />
            <div className="userDisplayTopTitle">
              <span className="userDisplayTopUsername">John Doe</span>
              <span className="userDisplayProfession">Frontend Engineer</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className={classes.userDisplayTitle}>Account Details</span>

            <div className={classes.userDetailWrapper}>
              <div className="userDisplayInfoContainer">
                <PermIdentity className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>new997txff</span>
              </div>
              <div className={classes.userDisplayTitleCDetals}>
                Contact Details
              </div>

              <div className="userDisplayInfoContainer">
                <PermIdentity className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Date</span>
              </div>
              <div className="userDisplayInfoContainer">
                <PhoneAndroid className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Phone</span>
              </div>
              <div className="userDisplayInfoContainer">
                <MailOutlined className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Email</span>
              </div>
              <div className="userDisplayInfoContainer">
                <Language className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Website</span>
              </div>
              <div className="userDisplayInfoContainer">
                <LocationOnOutlined className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Address</span>
              </div>
              <div className="userDisplayInfoContainer">
                <LocationSearchingOutlined
                  className={classes.userDisplayIcon}
                />
                <span className={classes.displayUserInfoTitle}>
                  State/Province
                </span>
              </div>
              <div className="userDisplayInfoContainer">
                <PublicSharp className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>Country</span>
              </div>
              <div className="userDisplayInfoContainer">
                <PermIdentity className={classes.userDisplayIcon} />
                <span className={classes.displayUserInfoTitle}>GitHub</span>
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="updateUseritem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="new997txff"
                  className="userUpdateInput"
                />
              </div>
              <div className="updateUseritem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="userUpdateInput"
                />
              </div>
              <div className="updateUseritem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="userUpdateInput"
                />
              </div>
              <div className="updateUseritem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="userUpdateInput"
                />
              </div>

              <div className="updateUseritem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  alt=""
                  className={classes.userRightImage}
                />

                <label htmlFor="file">
                  <Publish className="userUpdateicon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
