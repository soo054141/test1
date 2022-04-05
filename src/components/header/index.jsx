import React from "react";
import { HeaderWrapper, LogoIcon } from "./style";
import logo from "../../images/HITS_logo 1.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoIcon src={logo} />
    </HeaderWrapper>
  );
}
