import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectAuthData } from "../features/auth/authSlice";

type Props = {};

const Header = (props: Props) => {
  const currentUser = useAppSelector(selectAuthData);

  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg shadow p-3">
      <div className="container">
        <Link to={"/dashboard"} className="navbar-brand fw-bold fs-4">
          MoneyBhai
        </Link>
        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item me-2">
            <NavLink to={"/dashboard"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/dashboard/profile"} className="nav-link">
              <div className="profile-img">
                <img
                  src={
                    currentUser?.photoURL
                      ? currentUser?.photoURL
                      : "https://picsum.photos/seed/picsum/200/300"
                  }
                  alt=""
                  className="rounded-circle border border-3 border-secondary"
                  height={40}
                  width={40}
                />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
