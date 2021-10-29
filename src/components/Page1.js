import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../redux/actions/product.action";

const Page1 = (props) => {
  const { user } = useAuth();
  const productReducer = useSelector(({ productReducer }) => productReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mt-5">
        <h2>Page1</h2>
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
        <hr />
        <p>
          <Link to="/page2">Page2</Link>
        </p>
      </div>
    </>
  );
};

export default Page1;
