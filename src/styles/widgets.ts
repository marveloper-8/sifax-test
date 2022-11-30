import styled from "styled-components";

// input
export const InputContainer = styled.div`
  border-radius: 15px;
  background: #f7f8f9;
  display: grid;
  grid-template-columns: 1fr 20px;
  width: 300px;
  padding-right: 10px;
  color: #b6b6b6;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  padding: 10px;
  &::placeholder{
    color: #b6b6b6;
  };
`;

// button
export const Button = styled.button`
  border: none;
  outline: none;
  background: #7157da;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
`;

// profile
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const Name = styled.p`
  color: #000;
  margin-top: 0;
  margin-bottom: 5px;
`;
