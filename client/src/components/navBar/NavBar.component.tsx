import React, { ReactElement, useState } from "react";
import "./NavBar.css";
import NavLogo from "../../assets/logo.png";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Button, Popover, Typography } from "@mui/material";

interface Props {}

export default function NavBar({}: Props): ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="navBar">
      <div className="container">
        <div className="left">
          <img src={NavLogo} alt="movie hungry" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <Button
              color="inherit"
              endIcon={<ArrowDropDown />}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            ></Button>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              classes={{
                paper: "options",
              }}
            >
              <span>Settings</span>
              <span>Logout</span>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
