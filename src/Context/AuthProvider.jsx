import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // fast register methrod

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // loging
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscirbe;
    };
  }, []);

  const AuthInfo = {
    createUser,
    signInUser,
    signInGoogle,
    signOutUser,
    loading,
    user,
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
