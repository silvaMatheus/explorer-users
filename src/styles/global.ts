import { createGlobalStyle } from 'styled-components';

import backgroundGithub from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    padding:0 240px;
    overflow:hidden;
    background:#F0F0F5 url(${backgroundGithub}) no-repeat 70% top;
  }

  body,input,button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor:pointer;
  }

  header{
    display:flex;
    top:0px;
    padding-top:30px;
    height:10vh;

    span{
      margin-left:10px;
      color:#737380;
    }
  }
`;
