import styled from "styled-components";

export const Container = styled.div`
  background: #f9f8f8;
  padding: 30px;
`;

export const Navigation = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
`;

export const NavigationTab = styled.div<any>`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  ${props => props.active ? `
    background: #dbf6fe;
    color: #6dd9fa;
    border: 1px solid #6dd9fa;
  ` : `
    background: #fff;
    color: #b6b6b6;
    border: 1px solid #fff;
  `};
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  color: #b6b6b6;
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Items = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 30px;
  color: #b6b6b6;
  font-size: 12px;
`;

export const Title = styled.h2`
  color: #000;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

export const Tag = styled.span<any>`
  padding: 7.5px;
  font-weight: 500;
  font-size: 10px;
  border-radius: 5px;
  ${props => props.tag === 'ios' ? `
    background: #ffebd4;
    color: orange;
  ` : props.tag === 'android' ? `
    background: #b1f3de;
    color: green;
  ` : props.tag === 'branding' ? `
    background: #eeeff8;
    color: purple;
  ` : props.tag === 'website' ? `
    background: #dbf5fd;
    color: blue;
  ` : ``};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomContainerLeft = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const BottomContainerLeftChat = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProfilePicture = styled.img<any>`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid white;
  position: relative;
  ${props => props.position === 1 ? `
    right: 5px;
  ` : props.position === 2 ? `
    right: 5px;
  ` : props.position === 3 ? `
    right: 5px;
  ` : ``};
`;

export const ProfilePictureWrapper = styled.span<any>`
  position: relative;
  ${props => props.position === 1 ? `
    right: 5px;
  ` : props.position === 2 ? `
    right: 10px;
  ` : props.position === 3 ? `
    right: 15px;
  ` : ``};
`;