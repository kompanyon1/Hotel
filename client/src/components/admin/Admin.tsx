import { ChangeEvent, useState } from "react";

import styles from './admin.module.css'


export default function Admin() {

const [logAdmin, setLogAdmin] = useState({login: '', password: ''})

const admin = localStorage.getItem('admin')
const authAdmin = JSON.parse(admin || '{}')


function auth(){
  if (logAdmin.login === authAdmin.login && logAdmin.password === authAdmin.password){
    authAdmin.isAdmin = true;
    localStorage.setItem('adminAuth', JSON.stringify(authAdmin))
    window.location.replace('/')
  } else {
    console.log('неправильные данные')
  }
}

const changeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
  setLogAdmin((prev)=>({...prev, [e.target.name]: e.target.value}))
}
   

  return (
    <>
    
    <div className={styles.container}>
     
        <input onChange={changeHandler} name="login" placeholder="login"/>
        <input onChange={changeHandler} name="password" placeholder="password"/>
        <button onClick={()=>auth()}>login</button>
      
    </div>
    </>
  )
}
