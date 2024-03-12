import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandlegoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromgoogle = await signInWithPopup(auth, provider);
      console.log(resultFromgoogle);
      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultFromgoogle.user.displayName,
          email: resultFromgoogle.user.email,
          googlePhotoUrl: resultFromgoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      className="w-60 m-auto"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={HandlegoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2 " />
      Continue with Google
    </Button>
  );
}
