import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper, NavList, NavItem, ProjectName } from "./style";

export default function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>Alpha</NavItem>
        <NavItem>Brabo</NavItem>
        <NavItem>Charlie</NavItem>
        <NavItem>Delta</NavItem>
        <NavItem>Echo</NavItem>
        <NavItem>
          <NavLink to="/result">Result</NavLink>
        </NavItem>
      </NavList>
      <ProjectName>project name</ProjectName>
    </NavWrapper>
  );
}
