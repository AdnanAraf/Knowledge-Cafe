import React from "react";

const SpentTime = (props) => {
  const cart = props.cart;
  // console.log(cart);
  let total = 0;

  for (const product of cart) {
    total = total + parseInt(product.readtime);
  }
  return (
    <div>
      <h1>Spent time on read:{total}min</h1>
    </div>
  );
};

export default SpentTime;
