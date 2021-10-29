import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="container mt-5">
        <h2>Home</h2>
        <p><Link to="/page1">Page1</Link></p>
        <p><Link to="/page2">Page2</Link></p>
      </div>
    </>
  );
};

export default Home;
