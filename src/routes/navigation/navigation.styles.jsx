import styled from "styled-components";
import { Link } from "react-router-dom";
// import {ReactComponent as CrwnLogo} from '../../assets/pstgems.svg';

import {ReactComponent as CrwnLogo} from '../../assets/pstgemsLogo.svg'


export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    `;

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 30%;
      ${'' /* padding: 10px; */}
      display: flex;
      justify-content: flex-start;
      align-items: space-between;
      margin: 0;
`;

export const StyledLogo = styled(CrwnLogo)`
width: 300px;
height: auto;
display: flex;
align-items: center;
`;

export const NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ${'' /* background-color: white; */}
`;

export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
        ${'' /* color: white; */}
`;


  