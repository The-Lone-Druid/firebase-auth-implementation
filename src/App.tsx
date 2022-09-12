import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./screens/AppLayout";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";

type Props = {};

const App = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/signin" replace />} />
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="/auth/signup" element={<Signup />} />
      {/* All authenticated routes will be insde /home */}
      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      {/* Unavailable routes */}
      <Route
        path="*"
        element={
          <>
            <div>Page not found.</div>
          </>
        }
      />
    </Routes>
  );
};

export default App;
