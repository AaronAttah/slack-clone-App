import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import useStyles from "../styles";
 import "./Chat.css";

// import clsx from "clsx";

function Chat({ user, setGetheyfunc, chatContainer }) {
    const classes = useStyles();

    let { channelId } =
        useParams(); /**the use params is used to get some  or extract some parameters  from the browsers URL..... in this case we said "let{ChannelId} = useparams" means let us get a parameter whose name is channelId from useparams. */
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        db.collection("rooms")
            .doc(channelId)
            .collection("message")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => {
                /**OnSnapsot here means to capture  datas and save as snapshot this data  is in orderBy and orderby is in a collection called messages and which in turn is in a doc called channelId and this chanel is in db collection called rooms*/
                let messages = snapshot.docs.map((doc) => doc.data());
                // console.log(messages)
                setMessages(messages);
            });
    };

    const sendMessage = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo,
            };

            db.collection("rooms")
                .doc(channelId)
                .collection("message")
                .add(payload);
            // console.log(payload)
        }
    };

    const getChannel = () => {
        db.collection("rooms")
            .doc(channelId)
            .onSnapshot((snapshot) => {
                /**here snapsot means to capture datas and  save it as snapshot, this data is in a doc called channeld and this doc is in a db collection called rooms*/
                setChannel(snapshot.data());
                // console.log(snapshot.data())
            });
    };
    // const hey = () => {
    //     const newget = {
    //         getme: document.getElementById("getChatContainer"),
    //     };

    //     setGetchatdiv(newget.getme);
    // };

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId]);

    return (
        <Container
            className="chatAreaCont"
            id="chatContainer"
        >
            <Header>
                <Channel>
                    <ChannelName>
                        #{channel && channel.name}
                        {/** what also happened here is an if statement short saying if there is channel then show channel.item  */}
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div style={{ paddingRight: 5 }}>Details</div>
                    <Info />
                </ChannelDetails>
            </Header>

            <MessageContainer className={classes.colorMode2}>
                {messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))}
            </MessageContainer>
            <ChatInput sendMessage={sendMessage} />
        </Container>
    );
}

export default Chat;

// const Container = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
const Container = styled.div`
    /* background: #f4f4fc; */
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`;

const Header = styled.div`
    border-bottom: 1px solid rgb(83, 39, 83, 0.13);
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Channel = styled.div``;

const ChannelName = styled.div`
    font-weight: 700;
`;

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`;

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #606060;
`;
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`;

const MessageContainer = styled.div`
    // display:flex;
    // flex-direction: column;
    overflow-y: scroll;
`;
