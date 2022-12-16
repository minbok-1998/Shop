import React from "react";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import OrderBtn from "./components/OrderBtn";

const Cont = styled.div`
  width: 62%;
  margin: 0 auto;
`;

export default function Cart() {
  return (
    <Cont>
      <CartItem />
      <OrderBtn />
    </Cont>
  );
}
