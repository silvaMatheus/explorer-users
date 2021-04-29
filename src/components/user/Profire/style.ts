import styled from 'styled-components';

export const Container = styled.section`
  height:272px;
  display:flex;
  justify-content:center; 
  flex-direction:column;
`;

export const ProfileImg = styled.section`
 display:flex;
    align-items:center;
    
    img{
    width:120px;  
    border-radius:50%;
    }
    div{
      margin-left:32px;
      strong{
        font-size:32px;
      }
      p{
        color:#737380;
        font-size:15px;
      }
    }
`;

export const Rates = styled.section`
margin-top:40px;
  ul{
    display:flex;
    li{
      margin-right:80px;
      list-style:none;
      display:flex;
      justify-content:center;
      flex-direction:column;
      strong{
        font-size:36px;
      }
      span{
        font-size:20px;
      }
    }
  }
`;
