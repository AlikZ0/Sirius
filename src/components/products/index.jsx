import React from "react";
import './style.css'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { profileActions } from "../../state/profile/actions";
import { useNavigate } from "react-router-dom";
import {ROUTER_NAMES} from "../../routers"


const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    
    const [getUsers, setUsers] = useState([])
    //   debugger

    const GoTo = (e) => {
        if (e) {
           
            navigate(ROUTER_NAMES.PRODUCTS)
        } else {
          
            navigate(ROUTER_NAMES.LOGIN)
        }

    }
    // useEffect(() => {
    //     let ignore = false;

    //     fetch('https://dummyjson.com/posts/1')
    //         .then(res => res.json())
    //         .then(res => {
    //             if (!ignore) {
    //                 let result = res

    //                 console.log(result)

    //                 setUser({ constr: result })

    //             }
    //         });

    //     return () => {
    //         //ignore = true
    //     }
    //     // console.log(getUser.constr.tags);
    // }, [])
const InfoFromBackend=()=>{
    let ignore = false;
   
    fetch('https://dummyjson.com/posts/')
        .then(res => res.json())
        .then(res => {
            if (!ignore) {
                let result = res

              //  console.log(result.posts)

                setUsers( result)

            }
        });
}

    useEffect(() => {
        // let ignore = false;

        // fetch('https://dummyjson.com/posts/')
        //     .then(res => res.json())
        //     .then(res => {
        //         if (!ignore) {
        //             let result = res

        //             console.log(result.posts)

        //             setUsers( result)

        //         }
        //     });

        // return () => {
        //     //ignore = true
        // }
        
       
       
    }, [])
    useEffect(()=>{
       // debugger
        InfoFromBackend()
    },[])
   // console.log(getUsers);

    const Change=(el)=>{
        dispatch({type:profileActions.MANAGE_LIST_GENDER, payload:el})
        navigate(ROUTER_NAMES.GET_LIST)
       // console.log(el);
    
       
    }
    return <div style={{backgroundColor:"beige",width:"100%",height:"190vh"}}>
        <div className="G-flex-space-around">
           <button onClick={(e)=>{GoTo(true)}} >Profile</button>
           <button onClick={(e)=>{GoTo(false)}}>Logout</button>
        </div>
        
            
            
      {getUsers.posts? <div style={{margin:"0px auto",width:"100%"}} className=" G-flex-space-around" >
        {getUsers.posts.map((item,id)=>{
           return <div className="G-product G-flex-space-evenly"  style={{margin:"15px"}} key={item.id}  onClick={(e)=>{Change(item)}}>
            {item.title }
            <h2> {item.tags[0]},{item.tags[1]},{item.tags[2]}</h2>
            
            </div>
        })}
        </div>:""}
   
   
       
    </div>


}


export default Products