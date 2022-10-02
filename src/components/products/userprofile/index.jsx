
import React from "react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../../routers"
import { useSelector } from "react-redux";


const UserProfile = () => {
    const profile = useSelector(state => state.profileList.profile)
    const navigate = useNavigate()

    const [get, set] = useState({
        el: false,
        constr: {}

    })

    const GoTo = (e) => {
        if (e) {
          
            navigate(ROUTER_NAMES.PRODUCTS)
        } else {
           
            navigate(ROUTER_NAMES.LOGIN)
        }

    }

    useEffect(() => {
       
       set({ el: true, constr: profile })
    }, [])



    return <div style={{ width: '100%', height: "100vh", background: "aliceblue" }}>
        <div className="G-flex-space-around" >
            <button onClick={(e) => { GoTo(true) }}  style={{ background: "aliceblue"}} >Profile</button>
            <button onClick={(e) => { GoTo(false) }} style={{ background: "aliceblue"}}>Logout</button>
        </div>

        {get.el ? <div className="" style={{ margin: '0px auto', maxWidth: "1200px" }}>
            <h2> {get.constr.title}</h2>
            <h3 style={{ textAlign: "end" }}> {get.constr.tags[0]},{get.constr.tags[1]},{get.constr.tags[2]}</h3>


            <p> {get.constr.body}</p>


        </div> : ""}


    </div>
}

export default UserProfile