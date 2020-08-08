import React, { Component } from 'react';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NavBar extends Component {
    render() {
        return (
            <NavWrapper  className='navbar navbar-expand-sm navbar-dark px-sm-4'>
                    <Link to = '/'>
                         <div><FontAwesomeIcon icon = {faBars} className = 'fa-3x ' /></div>
                    </Link>
                <ul className= 'navbar-nav align-items-center'>
                        <li className = 'nav-item ml-5'>
                            <Link to = '/' className = 'nav-link'>
                              <div >products</div>
                            </Link>
                        </li>
                </ul>
                <Link to = '/cart' className = 'ml-auto'>
                    <ButtonContainer>
                    <span className = 'mr-2' > 
                        <FontAwesomeIcon icon = {faCartPlus} text = 'james'></FontAwesomeIcon> my cart
                    </span>    
                    </ButtonContainer>    
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
      color: var(--mainVoilet) !important;
      font-size:1.5rem;
      margin: 0 0 0 20px;
      text-transform: capitalize;
  }
`

export default NavBar
