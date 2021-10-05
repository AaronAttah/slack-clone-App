 import React from 'react'
 import styled from 'styled-components'
 import { auth, provider } from "../firebase" /** we will need to import this if we are to create the signIN in thing also for its signOUt which is at the app.js */





function Login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider)        /* what happened here is called 'promise' */
        .then ((result) => {  /**see the result as a kind of a variable that saeves the user login detailsa */
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
 
            }
            // console.log(newUser)
            localStorage.setItem('user', JSON.stringify(newUser));/* using the local storage it has the parameter localstorge.setitem(myData , Data) where mydata is what the browser storage is going to idetify see it as a variable that will store the datas and then the data is the actual information that needs to be stringify else you can not see it as data.stringify at the browser backend but will show as  mydata so therefore my data is seen as user and data is seen as setuser  */
            setUser(newUser);
        })   
        .catch((error) =>{
            alert(error.message)
        })
    }

    return (
        <Container>
              <Content>
                  <SlackImage  src ="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"/>
                  <h1>Sign in Slack</h1>
                  <SignInButton onClick = {() => signIn ()}>
                      Sign in with google
                  </SignInButton>
              </Content>
        </Container>
    )
}

export default Login


const Container = styled.div   `
    width:100%;
    height: 100vh; 
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Content = styled.div `
    background-color: white;
    padding:100px;
    border-radius: 5px;
    box-shadow:  0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
    display:flex;
    flex-direction: column;
    align-items:center; 
`

const SlackImage = styled.img `
width: 100px;
`
const SignInButton = styled.button `
    margin-top: 50px;
    background-color: #0a8d43;
    border-radius: 4px;
    height:40px;
    color: white;
    cursor:pointer;
    font-size: 15px;
`
