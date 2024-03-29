import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { textType } from "../../types/types"


export default function Header() {

    const checkAdmin = localStorage.getItem('adminAuth')

    const exitAdmin = ()=>{
        localStorage.removeItem('adminAuth')
        window.location.replace('/')
    }

    const [text, setText] = useState<textType[]>([]);
    const [changeText, setChangeText] = useState({11: ''})

    useEffect(()=>{
      axios.get<textType[]>('http://localhost:3100/text')
  .then((res)=> setText(res.data))
  .catch((err)=>console.log(err))
    },[])

    const updateText = () => {
      axios.post('http://localhost:3100/setText', changeText).catch((err)=>console.log(err))
  }

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setChangeText((prev)=>({...prev, [e.target.name]: e.target.value + e.target.innerText}))
  }

  return (
    <header>
    <div className="links">
    
    <a href='#rooms'>номера</a>
    <a href='#about'>о нас</a>
    {!!checkAdmin && <a onClick={()=>exitAdmin()}> выйти из админки</a>}
    </div>
    <div className="name">
      <h6>гостиница</h6>
      <h1>236 метров</h1>
    </div>
    <div className="desc">
      {!!checkAdmin ? 
      
      
      (<>
      <textarea 
      name='11'
       defaultValue={text.length && text.filter(el=>el.id === 11)[0].mainText}
        onChange={(e)=>changeHandler(e)}>
        </textarea>
        <button 
        id='1' 
        onClick={()=>updateText()}>сохранить
        </button>
        </>)
        :
        (<>{text.length && text.filter(el=>el.id === 11)[0].mainText}</>)}
    </div>
   </header>
  )
}
