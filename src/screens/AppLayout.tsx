import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../components/Loader";
import { useAppDispatch } from "../app/hooks";
import { setAuthState } from "../features/auth/authSlice";
import Header from "../components/Header";

type Props = {};

const AppLayout = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthState(user));
        setIsLoading(false);
      } else {
        navigate("/auth/signin");
        setIsLoading(false);
      }
    });
  }, [navigate]);

  return (
    <div className="bg-dark text-white vh-100 overflow-hidden d-flex flex-column">
      {isLoading && <Loader type="full" />}
      <Header />
      <div className="overflow-y-auto felx-fill py-5">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
