/* eslint-disable no-lone-blocks */
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import db from "./firebase";
import { auth } from "./firebase";
import useStyles from "./styles";

{
    /**from line  14 - 33 is actually the collections of what i  have on my firedatabase which is all saved in my getChanel function but is hooked with my usestate hook, so basically i can collect data from users and save it on my database were is inturn posted/ loaded back to the user */
}

function App() {
    const classes = useStyles();

    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [getchatdiv, setGetchatdiv] = useState();
    const [getheaderdiv, setGetheaderdiv] = useState();
    const [showheader, setShowheader] = useState(true);

    const getChannels = () => {
        db.collection("rooms").onSnapshot((snapshot) => {
            {
                /** the rooms here is used here as like a variable (but its a const as it was declared in a usestate) to save in the db.collection so instead of using db.collection we decided to be using the rooms  */
            }
            setRooms(
                snapshot.docs.map((doc) => {
                    {
                        /**the set room is from the usestate which is used to reset/update the usestate */
                    }
                    return { id: doc.id, name: doc.data().name };
                })
            );
        });
    };
    const signOut = () => {
        /**why we had to props the sign out from the header to this place was for ease access with the useState  */
        auth.signOut().then(() => {
            localStorage.removeItem("user");
            setUser(null);
        });

        /**the set user set to null is to remove the user data from the  usestate*/
    };
    //  get holding of diff tags/element of components by  sending the below consts as props
    const sideCont = document.getElementById("sideCont");
    const headerCont = document.getElementById("headerCont");
    const chatContainer = document.getElementById("chatContainer");
    const styleChangeModeCont = document.getElementById("styleChangeModeCont");

    const changeMOde = (e) => {
        e.preventDefault();
        console.log("click is working");
        console.log(sideCont, headerCont);
        console.log(headerCont);
        console.log(chatContainer);
        console.log(styleChangeModeCont);

        const saveMOde = {
            sideCont: sideCont.classList.toggle(classes.activeSideCont),
            headCont: headerCont.classList.toggle(classes.activeHeaderCont),
            ChatCont: chatContainer.classList.toggle("activeChatAreaColor"),
            styleCont: styleChangeModeCont.classList.toggle(
                "activeStyleChangeModeCont"
            ),
        };

        window.localStorage.setItem("theme", JSON.stringify(saveMOde));
    };

    useEffect(() => {
        getChannels();
    }, []);

    // so basically what am going to do since i can get
    // the header, sedebar and the chat bar from the app.js
    //i will aign to them same classs name using classes.name
    //  then create a makestyle
    // meanwhile
    //i will  write the onclick function in the app bar and
    //pass it as a prop the the  side bar were the button is
    //

    return (
        <div className="App">
            <Router>
                {/* { */}
                {/* !user ?                     //....//
                <Login  setUser={setUser}  />
                : */}
                <Container>
                    {showheader && (
                        <Header
                            signOut={signOut}
                            user={user}
                            setGetheaderdiv={setGetheaderdiv}
                            headerCont={headerCont}
                        />
                    )}
                    <Main>
                        <Sidebar
                            rooms={rooms}
                            //   user={user}  //....//
                            //   getchatdiv ={getchatdiv}
                            //   getheaderdiv = {getheaderdiv}
                            changeMOde={changeMOde}
                            sideCont={sideCont}
                            styleChangeModeCont={styleChangeModeCont}
                        />
                        <Switch>
                            <Route path="/room/:channelId">
                                <Chat
                                    user={user}
                                    chatContainer={chatContainer}
                                />
                            </Route>
                            <Route path="/">
                                <WelcomeText
                                //  className={`${classes.chatAreaColor}`}
                                >
                                    Select or Create a Channel to get
                                    Started....
                                </WelcomeText>
                            </Route>
                        </Switch>
                    </Main>
                </Container>
                {/* } */}
            </Router>
        </div>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
    // background: blue;
    display: grid;
    grid-template-columns: 400px auto;
`;
const WelcomeText = styled.div``;
