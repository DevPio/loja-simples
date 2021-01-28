import React,{useState,useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/all';
import styled from 'styled-components';
import {ContextCart} from '../../App';

import 
{
Navbar,
NavbarBrand,
NavbarToggler,
Container,
Collapse


} from 'reactstrap';
import Modal from '../Modal/ModalCart';

const Circle = styled.div`
    width:15px;
    height:15px;
    background-color:#ff3535;
    border-radius:50%;
    font-size:10px;
    font-weight:bold;
    text-align:center;
    position:absolute;
    top: 1.9px;
   
    left: 16px;

`

const Header = (props) =>{
    const contex = useContext(ContextCart)
    const [toggle, setToggle] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    

    return(
       
            <Navbar color='light' light expand='md'>
                <Container>
            
                <NavbarBrand style={{position:'relative',cursor:'pointer'}} onClick={()=>setToggleModal(!toggleModal)}>
                        <AiOutlineShoppingCart />
                        {props.cart > 0 &&
                            <Circle>{props.cart}</Circle>
                        }
                        
                </NavbarBrand>
        
                <NavbarToggler  onClick={()=>setToggle(!toggle) } />
                <Collapse isOpen={toggle} navbar />
                
                    <Modal modalOpen={toggleModal} contex={contex} closeInnerModal={(value=>setToggleModal(value))}/>
                </Container>
            </Navbar>
         
    )
}

export default Header;