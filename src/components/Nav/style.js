import styled, { css } from "styled-components";

const navInnerStyle = css`
  font-size: 20px;
  line-height: 24px;
`;

export const NavWrapper = styled.nav`
  width: 92.778vw;
  height: 78px;
  margin: 0 auto;
  margin-top: 23px;
  background: #fcfefe;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 30.45px;
`;

export const NavItem = styled.li`
  ${navInnerStyle}
  width: 109.8px;
  font-weight: 500;
  text-align: center;

  .active {
    font-weight: 700;
    text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ProjectName = styled.div`
  ${navInnerStyle}
  margin-right: 27px;
  font-weight: 700;
  color: #0d9991;
`;
