import React,  {useState} from 'react'
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput({sendMessage}) {

    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput('')
        // console.log('i am working')
    }




    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)} /**here as the value is targeted we took the value and save it in usetate and where we sent as an argument  through the sendmessage */
                        type="text"
                        value = {input}
                        placeholder="message here..." 
                    />

                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    );
}

export default ChatInput;

const Container = styled.div`
    // background-color: orange;
    padding: 0px 20px 24px 20px;
    
`;
const InputContainer = styled.div`
    border: 1px solid #8d8d8e;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        // justify-content: space-between;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`;

const SendButton = styled.button`
    background: green; 
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background-color: #148567;
    }
`;

const Send = styled(SendIcon)`
    color: #d9d9d9;
`;
