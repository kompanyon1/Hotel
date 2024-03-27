import { ChangeEvent, useEffect, useState } from 'react'
import Header from '../header/Header'
import styles from './corp2.module.css'
import axios from 'axios'
import { textType } from '../../types/types'

export default function Corp2() {

const [text, setText] = useState<textType[]>([])
const [changeText, setChangeText] = useState(
  {
    7: '',
    8: '', 
    9: '', 
    10: ''})

  const checkAdmin = localStorage.getItem('adminAuth')
  
  useEffect(()=>{
    axios.get<textType[]>('http://localhost:3100/text')
    .then((res)=> setText(res.data))
    .catch((err)=>console.log(err))
  },[])


  const updateText = () => {
    axios.post('http://localhost:3100/setText/corp2', changeText).catch((err)=>console.log(err))
}

const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  setChangeText((prev)=>({...prev, [e.target.name]: e.target.value + e.target.innerText}))
}



  return (
    <>
    <Header/>
    {!!checkAdmin && <button onClick={updateText}>сохранить изменения</button>}
    <div className={styles.container}>
        <h1>Корпус 1</h1>
        <div className={styles.title}>
          Комната № 1
        </div>
        <div className={styles.images}>
          <div className={styles.block1}>
          <img src='http://localhost:3100/img/corp2room1_1.jpg'/>
          {!!checkAdmin && <p>corp2room1_1.jpg</p>}
          </div>
          <div className={styles.block2}>
            <div>
            <img src='http://localhost:3100/img/corp2room1_2.jpg'/>
            {!!checkAdmin && <p>corp2room1_2.jpg</p>}
          <img src='http://localhost:3100/img/corp2room1_3.jpg'/>
          {!!checkAdmin && <p>corp2room1_3.jpg</p>}
            </div>
          <div>
          <img src='http://localhost:3100/img/corp2room1_4.jpg'/>
          {!!checkAdmin && <p>corp2room1_4.jpg</p>}
          <img src='http://localhost:3100/img/corp2room1_5.jpg'/>
          {!!checkAdmin && <p>corp2room1_5.jpg</p>}
          </div>
          </div>
        </div>
        <div className={styles.info}>
          {!!checkAdmin ? 
          (<><div className={styles.about}><textarea name='7' defaultValue={text.length && text.filter(el=>el.id === 7)[0].mainText} onChange={changeHandler}></textarea></div></>)
          :
          (<><div className={styles.about}>{text.length && text.filter(el=>el.id === 7)[0].mainText}</div></>)}
        </div>
        <div className={styles.title}>
          Комната № 2
        </div>
        <div className={styles.images}>
          <div className={styles.block1}>
          <img src='http://localhost:3100/img/corp2room2_1.jpg'/>
          {!!checkAdmin && <p>corp2room2_1.jpg</p>}
          </div>
          <div className={styles.block2}>
            <div>
            <img src='http://localhost:3100/img/corp2room2_2.jpg'/>
            {!!checkAdmin && <p>corp2room2_2.jpg</p>}
          <img src='http://localhost:3100/img/corp2room2_3.jpg'/>
          {!!checkAdmin && <p>corp2room2_3.jpg</p>}
            </div>
          <div>
          <img src='http://localhost:3100/img/corp2room2_4.jpg'/>
          {!!checkAdmin && <p>corp2room2_4.jpg</p>}
          <img src='http://localhost:3100/img/corp2room2_5.jpg'/>
          {!!checkAdmin && <p>corp2room2_5.jpg</p>}
          </div>
          </div>
        </div>
        <div className={styles.info}>
        {!!checkAdmin ? 
          (<><div className={styles.about}><textarea name='8' defaultValue={text.length && text.filter(el=>el.id === 8)[0].mainText}></textarea></div></>)
          :
          (<><div className={styles.about}>{text.length && text.filter(el=>el.id === 8)[0].mainText}</div></>)}
        </div>

        <div className={styles.title}>
          Комната № 3
        </div>
        <div className={styles.images}>
          <div className={styles.block1}>
          <img src='http://localhost:3100/img/corp2room3_1.jpg'/>
          {!!checkAdmin && <p>corp2room3_1.jpg</p>}
          </div>
          <div className={styles.block2}>
            <div>
            <img src='http://localhost:3100/img/corp2room3_2.jpg'/>
            {!!checkAdmin && <p>corp2room3_2.jpg</p>}
          <img src='http://localhost:3100/img/corp2room3_3.jpg'/>
          {!!checkAdmin && <p>corp2room3_3.jpg</p>}
            </div>
          <div>
          <img src='http://localhost:3100/img/corp2room3_4.jpg'/>
          {!!checkAdmin && <p>corp2room3_4.jpg</p>}
          <img src='http://localhost:3100/img/corp2room3_5.jpg'/>
          {!!checkAdmin && <p>corp2room3_5.jpg</p>}
          </div>
          </div>
        </div>
        <div className={styles.info}>
        {!!checkAdmin ? 
          (<><div className={styles.about}><textarea name='9' defaultValue={text.length && text.filter(el=>el.id === 9)[0].mainText}></textarea></div></>)
          :
          (<><div className={styles.about}>{text.length && text.filter(el=>el.id === 9)[0].mainText}</div></>)}
        </div>

        <div className={styles.title}>
          Комната № 4
        </div>
        <div className={styles.images}>
          <div className={styles.block1}>
          <img src='http://localhost:3100/img/corp2room4_1.jpg'/>
          {!!checkAdmin && <p>corp2room4_1.jpg</p>}
          </div>
          <div className={styles.block2}>
            <div>
            <img src='http://localhost:3100/img/corp2room4_2.jpg'/>
            {!!checkAdmin && <p>corp2room4_2.jpg</p>}
          <img src='http://localhost:3100/img/corp2room4_3.jpg'/>
          {!!checkAdmin && <p>corp2room4_3.jpg</p>}
            </div>
          <div>
          <img src='http://localhost:3100/img/corp2room4_4.jpg'/>
          {!!checkAdmin && <p>corp2room4_4.jpg</p>}
          <img src='http://localhost:3100/img/corp2room4_5.jpg'/>
          {!!checkAdmin && <p>corp2room4_5.jpg</p>}
          </div>
          </div>
        </div>
        <div className={styles.info}>
        {!!checkAdmin ? 
          (<><div className={styles.about}><textarea name='10' defaultValue={text.length && text.filter(el=>el.id === 10)[0].mainText}></textarea></div></>)
          :
          (<><div className={styles.about}>{text.length && text.filter(el=>el.id === 10)[0].mainText}</div></>)}
        </div>
    </div>
    </>
  )
}
