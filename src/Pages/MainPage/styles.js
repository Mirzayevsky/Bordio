import { createGlobalStyle } from "styled-components";


export const MainPageWrapper = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* font-family: 'Roboto', sans-serif; */
}
html{
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar{
    width: 0;
  }
.ant-picker-dropdown{
  width: 426px !important;
  height: 278px;
} 
`
