import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const NavigationList = styled.ul`
  margin-top: 100px;
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
  width: 150px;
  height: auto;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #b6b6b6;
`;