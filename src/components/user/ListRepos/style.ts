import styled from 'styled-components';

export const ContainerList = styled.section`
  //margin-top:50px;
  height: calc(100vh - 320px);
  overflow:overlay;
`;
export const ContainerHeader = styled.div`
  display:flex;
  align-items:center;
  padding:14px 30px 14px 14px;
  background:#fff;
  width:714px;
  height:112px;
  margin-bottom:16px;
  border-radius: 5px;

  div{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width:100%;
    h3{
      margin-left:20px;
      font-weight:bold;
      color:#3D3D4D;
    }
  }
  a{
      width: 100%;
      color:#C9C9D4;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
`;
