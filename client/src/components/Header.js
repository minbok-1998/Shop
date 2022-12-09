import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

const StyledLink = styled(Link)`
  text-decoration-line: none;
  color: #251d1c;
`;

const HeaderCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100vw;
  height: 90px;
  background-color: #fff;
  padding: 0 10vw;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchBar = styled.input.attrs({
  type: "text",
})`
  width: 400px;
  height: 40%;
`;

const LogoImg = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const LoginBtn = styled(LogoImg)`
  font-size: 21px;
  font-weight: bold;
`;

const StyledCartBtn = styled(BsCart2)`
  font-size: 21px;
`;

function Header() {
  return (
    <HeaderCont>
      <SearchBar />
      <StyledLink to={`/`}>
        <LogoImg>Dimple</LogoImg>
      </StyledLink>
      <Wrap>
        <StyledLink to={`/login`}>
          <LoginBtn>Login</LoginBtn>
        </StyledLink>
        <StyledLink to={`/cart`}>
          <StyledCartBtn />
        </StyledLink>
      </Wrap>
    </HeaderCont>
  );
}

export default Header;
