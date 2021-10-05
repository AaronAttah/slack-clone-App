import React from "react";
import {useEffect, useState} from 'react'
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import useStyles from "../styles"

function Header({user, signOut, setGetheaderdiv, headerCont}) {
    const classes = useStyles()
  
    // const getHeaderdiv = () => {

    //     const nowGet = {
    //         headerdiv: document.getElementById("headerdiv"),
            
    //     }

    //     setGetheaderdiv (nowGet.headerdiv)
    // }
   
  


    useEffect(() => {
        // getHeaderdiv();
        
   }, [])


    return (
        <Container id="headerCont" className={`${classes.headerColor}`} >
            <Main>
                <AccessTimeIcon /> {/*time icon */}
                <SearchContainer>
                    <Search>
                        <input type={Text} placeholder={"search...."}></input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon /> {/*questionmark icon */}
            </Main>

            <Usercontainer>
                <Name>
                    {/* {
                        user.name  ///.......///
                    } */}
                </Name>
                {/* <UserImage onClick = {signOut}>   ////.......////
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png" }  alt="user "/>
                </UserImage> */}
            </Usercontainer>
        </Container> 
    );
}

export default Header;

const Container =  styled.div.attrs((/* props */) => ({ tabIndex: 0 })) `
     /* background: #350d36; */
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
     z-index: 10;
     box-shadow:0 1px 0 0 rgb(255 255 255 / 10%);

     &.dark-mode3{
        background-color: #1e184c;
        color: white
    }

`;

const Main = styled.div`
    display: flex;
    margin-left:16px;
    margin-right:16px;
    padding-right: 200px;

    
`;

const SearchContainer = styled.div`
width: 400px;
// border: 1px solid white;
margin-left: 16px;
margin-right: 16px;
`;

const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(104 74 104);
min-width: 100%;
border-radius: 6px;


input{
    background-color: transparent;
    border:none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-bottom: 4px;
    padding-top: 4px;
}
input: focus{
    outline: none;
}

`;

const Usercontainer = styled.div`
display:flex;
align-items: center;
padding-right:16px;
position: absolute;
right: 0;

`

const Name = styled.div`  
padding-right: 16px;
`;

const UserImage = styled.div`
height: 28px;
width: 28px;
cursor:pointer;

img{
    width: 100%
}
`;
