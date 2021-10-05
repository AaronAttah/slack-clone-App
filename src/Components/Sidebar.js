import "./Sidebar.css";
import React from 'react'
import styled from "styled-components"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import  { sidebarItemsData } from  '../data/SidebarData'
// import {channelsItemData} from "../data/ChannelsData"
import AddIcon from  '@material-ui/icons/Add';
import db from "../firebase";
import {useHistory} from 'react-router-dom'
import SidebarData from '../data/SidebarData'
// import InboxIcon from  '@material-ui/icons/Inbox';
// import DraftsIcon from  '@material-ui/icons/Drafts';
// import BookmarkBorderIcon from  '@material-ui/icons/BookmarkBorder';
// import PeopleIcon from  '@material-ui/icons/People';
// import AppsIcon from  '@material-ui/icons/Apps';
// import MessageIcon from  '@material-ui/icons/Message';
import useStyles from "../styles"




function Sidebar({rooms, user, changeMOde, sideCont, styleChangeModeCont  }) {
    const classes = useStyles()

    // const changeMOde = changeMOde2

    const history = useHistory ();

    const gotoChannel = (id) =>{
        if(id) {
        // console.log(id)
            history.push(`/room/${id}`)

        }
    }


    
    const addChannel = () => {
        const promptName = prompt("type in your chanel");
        if(promptName) {
            db.collection('rooms').add({
                name: promptName
            })  
        }
    }



const sideContainer = sideCont
 console.log(sideContainer)



 
    return (

         
            <Container  className={`${classes.sidebarColor}`} id="sideCont" >
        <Cont id = "modeChanger">

                <WorskspaceContainer>
                    <Name>
                        AOA HORIZON
                    </Name>
                    <button
                    className="styleChangeMode"
                    id="styleChangeModeCont" 
                    onClick={ changeMOde } 
                    >
                         change mode
                    </button>
                    <NewMessage>
                            <AddCircleOutlineIcon />
                    </NewMessage>
                </WorskspaceContainer>

                <MainChannels>
                    <SidebarData user={user}   />                                         
                </MainChannels>

                <ChannelsContainer>
                    <NewchanelsContainer>
                        <div>
                            Channels
                        </div>
                    <AddIcon onClick={addChannel} />
                    </NewchanelsContainer>

                    <ChanelsListWrapper>

                        {
                            rooms.map(item =>(
                                <ChannelsList onClick={() =>gotoChannel(item.id)}>
                                 # {item.name}
                               </ChannelsList>

                                
                            ))
                        }

{/* 
                            {
                                channelsItemData.map(item => (
                                    <ChannelsList>
                                        {item.text}
                                    </ChannelsList>
                                ))
                            } */}   {/**the coomented ection is the ajax/ json part were i used components to bring this into reality at the channels portion but now am updating using my firebase database */}
                        </ChanelsListWrapper>
                </ChannelsContainer>
            </Cont>  {/**this cont element is jsut to help me wtih switching dsrkmode */}    
             
            </Container>

    );
}

export default Sidebar

    const Cont =styled.div `
   

    `

    const Container = styled.div  `
    /* background: #350d36; */
    /* .dark-mode{
        background-color: black;
        height: 100%;
    } */
    



`
    const WorskspaceContainer = styled.div `
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #532753;
    padding-left:19px;
    padding-right: 4px;
    justify-content: space-between;
`

    const Name = styled.div `
    
`
    const  NewMessage = styled.div  `
    background-color: white;
    height: 36px;
    width:36px;
    display:flex;
    align-items: center;
    justify-content: center; 
     border-radius: 50%;
    color:  #3F0E40;
    fill: #3F0E40;
    
 
`

    const MainChannels = styled.div `
    padding-top : 20px;
    /* :hover{
        background-color: blue;
    } */
    `


const ChannelsContainer = styled.div `

`

const NewchanelsContainer = styled.div `
    // border: 1px solid red;
    display : flex;
	color: rgb(188,171,188);
    padding-left: 21px;
    padding-right:  5px;
	cursor : pointer;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;  
`




const ChanelsListWrapper =styled.div `
    padding-top : px;

`

 const ChannelsList = styled.div `
    color: rgb(188,171,188);
    cursor: pointer;
    padding-top:10px;
    padding-left: 21px;
    :hover{
        background-color: #612961;
    }

 `


