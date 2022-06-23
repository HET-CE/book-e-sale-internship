import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  addToCart,
  removeBook,
  incrementCount,
  decrementCount,
  setCart,
  setOriginalData,
}) => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setData(cart);
  }, []);

  useEffect(() => {
    setData(cart);
  }, [cart]);

  useEffect(() => {
    let answer = 0;
    data.map((item) => [
      (answer += parseInt(item.price) * parseInt(item.count)),
    ]);
    setAmount(answer);
  }, [data]);

  return (
    <div style={{ width: "70%", margin: "10px auto" }}>
      {!localStorage.getItem("user") ? (
        <div>
          <h1>You need to be login first</h1>
          <Link exact to="/signin">
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
              Sign In
            </button>
          </Link>
          <br />
          <hr />
          <h3>Create an account by below Link if you don't have an account</h3>
          <Link exact to="/signup">
            <button className="btn waves-effect waves-light ">Sign up</button>
          </Link>
        </div>
      ) : (
        <div>
          <h5>
            Amount is -{" "}
            <span style={{ color: "maroon", fontWeight: "bold" }}>
              {amount} Rs.
            </span>
          </h5>
          <button
            className="btn waves-effect waves-light #64b5f6 blue darken-1"
            style={{ marginBottom: "10px" }}
            onClick={() => {
              // setCart([]);
              // console.log(cart);
              // setData([]);
              // console.log(data);
              setOriginalData();
            }}
          >
            Clear Cart
          </button>
          {data.map((item) => {
            return (
              <div className="parent" key={item._id}>
                <div className="left">
                  <img src={item.image} />
                </div>
                <div className="middle">
                  <h5 style={{ fontWeight: "bold" }}>{item.title}</h5>
                  <p>{item.category}</p>
                  <i
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      backgroundColor: "mediumvioletred",
                      marginRight: "8px",
                      cursor: "pointer",
                    }}
                    className="material-icons"
                    onClick={() => incrementCount(item._id)}
                  >
                    add
                  </i>
                  <p className="count">{item.count}</p>
                  <i
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      backgroundColor: "mediumvioletred",
                      marginLeft: "8px",
                      cursor: "pointer",
                    }}
                    className="material-icons"
                    onClick={() => decrementCount(item._id)}
                  >
                    remove
                  </i>
                </div>
                <div className="right">
                  <h5 style={{ fontWeight: "bold" }}>{item.price} Rs.</h5>
                  <p>50% off</p>
                  <a
                    className="waves-effect waves-light btn"
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    onClick={() => removeBook(item._id)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            );
          })}
          <a
            className="waves-effect waves-light btn"
            style={{ width: "100%", cursor: "pointer" }}
          >
            Place Order
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
