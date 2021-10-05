import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
// import ChatFooter from "../Components/ChatFooter"


function ChatFooter() {
    return (
        <Container>
            <Footerr>
                 <ChatInput>
                        <input type= 'text'  placeholder= "Message # Horizon"/>
                 </ChatInput>
                 <SendIconContainer>
                     <Send>
                        <SendIcon /> 
                    </Send>
                 </SendIconContainer>

            </Footerr>
        </Container>
    )
}

export default ChatFooter


const Container = styled.div ``

const Footerr =styled.div    `
border: 1px solid #76767b;
border-radius: 5px;
min-height: 40px;
margin: 15px;
display: flex;
align-items: center;
justify-content: space-between;



`

const ChatInput = styled.div    `
padding-left: 10px;

input{
    background-color: transparent;
    border:none;
    padding-left: 8px;
    padding-right: 8px;
   
    padding-bottom: 4px;
    padding-top: 4px;
}
input: focus{
     outline: none;
}
`

const SendIconContainer = styled.div `
margin-right:   5px;
background-color: green;
border-radius: 5px;
width: 40px;
height: 35px
`

 const Send = styled.div    `

padding-left: 8px;
padding-top: 3px;

 
 `

