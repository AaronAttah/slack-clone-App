import MessageIcon from  '@material-ui/icons/Message';
import InboxIcon from  '@material-ui/icons/Inbox';
import DraftsIcon from  '@material-ui/icons/Drafts';
import BookmarkBorderIcon from  '@material-ui/icons/BookmarkBorder';
import PeopleIcon from  '@material-ui/icons/People';
import AppsIcon from  '@material-ui/icons/Apps';
import styled from "styled-components"
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


// import PeopledropdownData from './PeopledropdownData'
import Groupdropdowndata from './Groupdropdowndata'




 import React from 'react'
 
 function SidebarData({user}) {

    // console.log(user)

    const check = () => {
        console.log (" i am working");
        const pgcont = document.getElementById("pgcont");
        console.log(pgcont);
        if (pgcont.style.display ==="block" ){
            pgcont.style.display ="none";
        }
        else{
            pgcont.style.display = "block";
        }
        

        // const what = PgdropdownData()
        
    }



     return (
       <div> 
         <MainChannels>
               
                                   

            <Thread>
                    <MessageIcon  />
                    Thread
            </Thread>

            <Alldms>
                 <InboxIcon />
                  All DMs
            </Alldms>

            <Mentions>
                <DraftsIcon />
                 Mentions & Reactions
            </Mentions>

            <Saveitems>
                <BookmarkBorderIcon />
                Save Items
            </Saveitems>

             <People onClick = {check}>
                  <PeopleIcon />
                  People & Groups
             </People>

                <PGContainer id="pgcont"  style = {{display: 'none'}}>
                    <PdropdownCont>
                             
                                <PeopleContainer>
                                     <PersonOutlineOutlinedIcon />
                                    {/* {user.name}  //...//     */}
                                    <FiberManualRecordIcon 
                                    style={{ fontSize:"10", color:"green" }} 
                                    id ="onlinebtn" /> 
                                                         
                                </PeopleContainer>
                                
                     

                    </PdropdownCont>


                    <Gdropdowncont>
                        {

                        Groupdropdowndata.map(gdropdown =>(
                                <GroupContainer>
                                    {gdropdown.icon}
                                    {gdropdown.text}
                                </GroupContainer>

                            ))
                        }

                    </Gdropdowncont>

                </PGContainer>


              <More>
                <AppsIcon />
                LotsMore
              </More>
         </MainChannels>
         </div> 
     )
 }


 
 export default SidebarData
 

 const MainChannels = styled.div `
 padding-top : 20px;
 /* :hover{
     background-color: blue;
 } */
 `






 const Thread = styled.div `

 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `
 
 const Alldms = styled.div `
 
 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `
 const Mentions = styled.div `
 
 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `
 const Saveitems = styled.div `
 
 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `
 const People = styled.div `
 
 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `
  const More = styled.div `
 color: rgb(188,171,188);
     display: grid;
     grid-template-columns: 15% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px;
     // border: 1px solid red;
     cursor : pointer;
     :hover{
         background-color: #612961;
     }
 
 `


const PGContainer = styled.div ``

 const PdropdownCont = styled.div `
 color: white;
 margin-left:50px;
 

 `
 const Gdropdowncont = styled.div `
 color: whitesmoke;
 margin-top: 10px;
 margin-left:50px;
 `


 const PeopleContainer = styled.div `
   display:flex ;
     /* grid-template-columns: 15% auto; */
     height: 28px;
     align-items: center; 
     padding-left: 17px; 
     /* justify-content: space-between; */
     /* width:150px; */

     #onlinebtn{
       margin-left: 5px;
       margin-top:5px;
     }
    
 `
 const GroupContainer = styled.div `
   display: grid;
     grid-template-columns: 10% auto;
     height: 28px;
     align-items: center; 
     padding-left: 19px; 
    
 `


//  const OnlineTracker = styled.span ``