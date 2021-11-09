import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,  signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import firebaseIntializeApp from '../Firebase/Firebase.init';
import { useHistory, useLocation } from 'react-router';

firebaseIntializeApp() 
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const[user,setUser] =useState({})
    const [error, setError] = useState("");
    const[isLoading, setIsLoading]=useState(true);

    
    //  login with google 

    const loginWithGoogle=()=>{
        setIsLoading(true);
      return  signInWithPopup(auth, provider)
        .then(result=>{
          setUser(result.user) ;
        })
        .finally(()=>setIsLoading(false));
        
    }
    let logout=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser('')
          }).finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
              
            } else {
              setUser("")
            } setIsLoading(false);
          });
    },[])
    return {user, loginWithGoogle,logout,error, 
    isLoading}
};

export default useFirebase;