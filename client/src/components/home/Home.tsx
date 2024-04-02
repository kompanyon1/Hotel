import { ChangeEvent, useEffect, useState } from 'react'
import Header from '../header/Header'
import styles from './home.module.css'
import {textType} from '../../types/types'
import axios from 'axios'


export default function Home() {
  const [text, setText] = useState<textType[]>([])
  const [changeText, setChangeText] = useState({1: '', 2: '', 11: ''})
  
console.log(text)

useEffect(()=>{
  axios.get<textType[]>(`${import.meta.env.VITE_URL}/text`)
  .then((res)=> setText(res.data))
  .catch((err)=>console.log(err))
},[])


  const checkAdmin = localStorage.getItem('adminAuth')
  
  const updateText = () => {
      axios.post(`${import.meta.env.VITE_URL}/setText`, changeText).catch((err)=>console.log(err))
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
      {!!checkAdmin && <form method='POST' action={`${import.meta.env.VITE_URL}/upload`} encType='multipart/form-data'>
          <input type='file'  name='image' />
          <input type='submit' value="загрузить фото"/>
        </form>}
      <div className={styles.mainImages}>
        <div className={styles.divCorp1}>
        {!!checkAdmin ?
         (<><div className={styles.divCont}><a href='/corp1'>Корпус 1</a><div className={styles.mainImg1}><img src={`${import.meta.env.VITE_URL}/img/corp1.jpg`} width={'300px'}/>
         
         </div></div></>)
          :
           (<><div  className={styles.divCont}><a href='/corp1'>Корпус 1</a><div className={styles.mainImg1}><img src={`${import.meta.env.VITE_URL}/img/corp1.jpg`}/></div></div></>)}
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
        
        {!!checkAdmin ? (<><div className={styles.divCont}><div className={styles.mainImg2}><img src={`${import.meta.env.VITE_URL}/img/corp2.jpg`} /></div><a href='/corp2' >Корпус 2</a></div></>)
        :(<><div  className={styles.divCont}><a href='/corp2' >Корпус 2</a><div className={styles.mainImg2}><img src={`${import.meta.env.VITE_URL}/img/corp2.jpg`} /></div></div></>)}
        
      
      </div>
      
      </div>
      </section>
     </section>
     
     </div>
    </>
  )
}
