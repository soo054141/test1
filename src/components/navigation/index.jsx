import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavWrapper, NavList, NavItem, ProjectName } from "./style";

export default function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link to="/error">Alpha</Link>
        </NavItem>
        <NavItem>
          <Link to="/error">Brabo</Link>
        </NavItem>
        <NavItem>
          <Link to="/error">Charlie</Link>
        </NavItem>
        <NavItem>
          <Link to="/error">Delta</Link>
        </NavItem>
        <NavItem>
          <Link to="/error">Echo</Link>
        </NavItem>
        <NavItem>
          <NavLink to="/result">Result</NavLink>
        </NavItem>
      </NavList>
      <ProjectName>project name</ProjectName>
    </NavWrapper>
  );
}
