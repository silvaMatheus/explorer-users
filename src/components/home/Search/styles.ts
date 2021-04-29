import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center; 
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight:bold;
  color:#3A3A3A;
  margin:70px 0 40px;
`;

export const Form = styled.form`

input{
  font-weight:400px;
  height:52px;
  width:500px;
  background:#fff;
  border-radius:5px 0 0px 5px;
  border:none;
  padding:25px;
}

button{
  width:210px;
  height:52px;
  background:#04D361;
  padding:0 19px;
  border:none;
  border-radius:0 5px 5px 0;
  color:#fff;
}

`;
