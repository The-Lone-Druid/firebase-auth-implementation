import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAuthData } from "../../features/auth/authSlice";
import { auth } from "../../firebase";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const currentUser = useAppSelector(selectAuthData);

  return (
    <div className="p-3 vh-100">
      <h1 className="display-4 fw-bold">{currentUser?.displayName}</h1>
      <h4 className="fw-bold">{currentUser?.email}</h4>
      <button
        className="btn btn-danger"
        onClick={() => {
          auth.signOut().then(() => {
            navigate("/auth/signin");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
