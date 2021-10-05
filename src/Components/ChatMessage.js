import React from 'react'
import styled from 'styled-components'




function ChatMessage({ text, name, image, timestamp, }) {


    return (
        <Container id='take'>
            <UserAvatar>
                <img src ={image} alt='user pix'/>
            </UserAvatar>
            <MessageContent>
                <Name >
                   #{name}
                <span>{new Date(timestamp.toDate()).toUTCString()}</span>

                </Name> 

                <Text>
                    {text}
                </Text>
                <Submitbuton>
                    {/* <button onClick={changeColor}></button> */}
                </Submitbuton>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage


const Container =  styled.div   `
    /* background-color: orange; */
    border-bottom: 1px solid #beb5be;
    padding: 8px 20px;
    display:flex;



    // .jesus{
    //     background-color: brown;
    // }
`
const UserAvatar = styled.div `
    width: 36px;
    height:36px;
    border-radius: 2px;
    overflow:hidden;

    img {
        width: 100%
    }
`

const  MessageContent = styled.div `
display: flex;
flex-direction: column;
// align-items: center;
margin-left:8px;
`

const Name = styled.span `
    font-weight:900;
    font-size:15px;
    line-height: 1.4;
     span {
        font-weight: 400;
        margin-left: 5px;
        color: rgb(97, 96, 97);
        font-size :13px;

     }
`

const Text = styled.span `

`



const Submitbuton = styled.div ``