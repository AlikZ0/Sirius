import React, { useState } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { profileActions } from "../../state/profile/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTER_NAMES } from "../../routers"


// import logo from "../img/google.png"
import './style.css'

const HeaderComponents = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [flag, setFlag] = useState(true)


  const handleChange = (e) => {
    navigate(ROUTER_NAMES.PRODUCTS)

  }


  const [user, setUser] = useState({})

  const profile = useSelector(state => state.profileReducer.profile)

  const loginInfo = () => {

   
    if (profile) {
      setUser(profile)
    }
  }
  function hendandleCallbackResponse(response) {
    //console.log("Encoded Jwt id tocen" + response.credential);
    var userObj = jwtDecode(response.credential)
   // console.log(userObj);
    setUser(userObj)
    setFlag(!flag)

    dispatch({ type: profileActions.MANAGE_USER_INFO, payload: userObj })
    document.getElementById("singInDiv").hidden = true
  }
  useEffect(() => {

    window.google.accounts.id.initialize({
      client_id: "595565949248-qlfscdfq9g1s35ktj17l8pg3b5qimkpr.apps.googleusercontent.com",
      callback: hendandleCallbackResponse
    })
    window.google.accounts.id.renderButton(
      document.getElementById("singInDiv"),
      { theme: "outline", size: "large" }
    )

    loginInfo()
  }, [])

  const SingOut = (e) => {
    setUser({})
    document.getElementById("singInDiv").hidden = false
    setFlag(!flag)
    // console.log(user);

  }

  return <div style={{ display: "grid" }}>

    <div className="G-flex-center-100vh" id="singInDiv"></div>

    <div className="G-flex-center-25vh">
      {user.name ?
        <div className="G-flex-between">
          <div>
            <img src={user.picture} alt=""></img>
            <h3>{user.name}</h3>
          </div>
          <button className="G-button" onClick={(e) => { SingOut(e) }}>Sing out</button>
          <button className="G-button" onClick={handleChange}>PRODUCTS</button>
        </div> : ""}
    </div>

  </div>



}
export default HeaderComponents