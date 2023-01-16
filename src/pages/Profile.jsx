import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';

function Profile() {

  const [ user, setUser ] = useState(null)

  const auth =getAuth()

  useEffect(()=> {
    setUser(auth.currentUser)  //displaying curent logged in user
  }, [])


  return (
    user ? <h1>{user.displayName}</h1> : "Not Logged In"
  )
}

export default Profile
