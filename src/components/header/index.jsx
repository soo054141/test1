import { NavLink } from "react-router-dom";
import { HeaderWrapper, LogoIcon } from "./style";
import logo from "../../images/HITS_logo 1.png";

export default function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <LogoIcon src={logo} />
      </NavLink>
    </HeaderWrapper>
  );
}
