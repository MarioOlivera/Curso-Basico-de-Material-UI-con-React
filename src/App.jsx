import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import Searcher from './components/Searcher/index'
import UserCard from "./containers/userCard";

import {getGitHubUser} from './services/users'

const App = () => {

  const [userState, setUserState] = useState('marioolivera')
  const [inputUser, setInputUser] = useState(userState)
  const [notFound, setNotFound] = useState(false)

  const getingUser = async (user) => {

    const userResponse  = await getGitHubUser(user)

    if(userState === 'octocat')
    {
      localStorage.setItem('octocat', userResponse)
    }

    if(userResponse.message === 'Not Found')
    {
      const {octocat} = localStorage
      setInputUser(octocat)
      setNotFound(true)
    }
    else
    {
      setUserState(userResponse)
    }
  }

  console.log("userState", userState)

  useEffect(() => {
    getingUser(inputUser)
  },[inputUser])

  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius:  '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center"
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser}></Searcher>
      <UserCard userState={userState}></UserCard>
    </Container>
  )
};

export default App;