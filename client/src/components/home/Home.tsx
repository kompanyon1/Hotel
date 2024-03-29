import { ChangeEvent, useEffect, useState } from 'react'
import Header from '../header/Header'
import styles from './home.module.css'
import {textType} from '../../types/types'
import axios from 'axios'


export default function Home() {
  const [text, setText] = useState<textType[]>([])
  const [changeText, setChangeText] = useState({1: '', 2: '', 11: ''})
  
  

useEffect(()=>{
  axios.get<textType[]>('http://localhost:3100/text')
  .then((res)=> setText(res.data))
  .catch((err)=>console.log(err))
},[])


  const checkAdmin = localStorage.getItem('adminAuth')
  
  const updateText = () => {
      axios.post('http://localhost:3100/setText', changeText).catch((err)=>console.log(err))
  }

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setChangeText((prev)=>({...prev, [e.target.name]: e.target.value + e.target.innerText}))
  }

 

  return (
    <>
    <Header/>
    <div className={styles.container}>
     <section id={styles.main}>

      <section id='rooms'>
      {!!checkAdmin && <form method='POST' action='http://localhost:3100/upload' encType='multipart/form-data'>
          <input type='file'  name='image' />
          <input type='submit' value="загрузить фото"/>
        </form>}
      <div className={styles.mainImages}>
        <div className={styles.divCorp1}>
        {!!checkAdmin ?
         (<><a href='/corp1'><div className={styles.mainImg1}><img src='http://localhost:3100/img/corp1.jpg' width={'300px'}/>
         
         <div>corp1.jpg</div></div></a></>)
          :
           (<><a href='/corp1'><div className={styles.mainImg1}><img src='http://localhost:3100/img/corp1.jpg'/><div>Корпус 1</div></div></a></>)}
        {!!checkAdmin ? 
        (<><textarea name='1' defaultValue={text.length && text.filter(el=>el.id === 1)[0].mainText} className={styles.text1} onChange={(e)=>changeHandler(e)}></textarea><button id='0' onClick={()=>updateText()}>сохранить</button></>)
        :
        (<div className={styles.text1}> {text.length && text.filter(el=>el.id === 1)[0].mainText}</div>)}
        </div>
        <div className={styles.divCorp2}>
        {!!checkAdmin ? 
        (<><textarea name='2' defaultValue={text.length && text.filter(el=>el.id === 2)[0].mainText} onChange={(e)=>changeHandler(e)} className={styles.text2}></textarea><button id='1' onClick={()=>updateText()}>сохранить</button></>)
        :
        (<div className={styles.text2}> {text.length && text.filter(el=>el.id === 2)[0].mainText}</div>)}
        
        {!!checkAdmin ? (<><a href='/corp2'><div className={styles.mainImg2}><img src='http://localhost:3100/img/corp2.jpg' /><div>corp2.jpg</div></div></a></>):(<><a href='/corp2'><div className={styles.mainImg2}><img src='http://localhost:3100/img/corp2.jpg' /><div>Корпус 2</div></div></a></>)}
        
      
      </div>
      
      </div>
      </section>
     </section>
     
     </div>
    </>
  )
}
