import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../redux/actions/product.action";

const Page2 = (props) => {
  const { user, setUser } = useAuth();
  const [input, setInput] = useState(user)
  const { handleSubmit, register, errors, setError, formState } = useForm();

  const productReducer = useSelector(({ productReducer }) => productReducer);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log("Submit - Btn");

    setUser(data.name);
  };

  return (
    <>
      <div className="container mt-5 p-5" style={{ backgroundColor: "#CCC" }}>
        <h2>Page2</h2>
        <p>currentUser = {user}</p>
        <p>Product Qty: = {productReducer.qty}</p>

        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => dispatch(productActions.add())}
          >
            Product +
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={() => dispatch(productActions.rem())}
          >
            Product -
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(productActions.clear(0))}
          >
            Product Clear
          </button>
        </div>
        <br/>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="sampleText" className="form-label">
            ChangeName:
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="sampleText"
            ref={register()}
            value={input}
            onChange={({target})=>{setInput(target.value)}}
          />
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </form>

        <hr />
        <p>
          <Link to="/page1">Page1</Link>
        </p>
      </div>

    </>
  );
};

export default Page2;
