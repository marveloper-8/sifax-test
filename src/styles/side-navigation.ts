import styled from "styled-components";

export const Container = styled.nav`
  flex: 100px;
  background: #fff;
  padding: 25px;
`;

export const NavigationList = styled.ul`
  margin-top: 50px;
  padding: 0;
  text-decoration: none;
`;

export const NavigationListItem = styled.li<any>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  color: ${props => props.active ? '#7157da' : '#b6b6b6'};
  font-weight: 500;
  cursor: pointer;
`;

export const Logo = styled.img`
  display: block;
  margin: auto;
  width: 200px;
`;