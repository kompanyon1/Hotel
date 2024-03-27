
export default function Header() {

    const checkAdmin = localStorage.getItem('adminAuth')

    const exitAdmin = ()=>{
        localStorage.removeItem('adminAuth')
        window.location.replace('/')
    }
  return (
    <header>
    <div>
    <a href='/'>на главную</a>
    <a href='#rooms'>номера</a>
    <a href='#media'>медиа</a>
    <a href='#about'>о нас</a>
    {!!checkAdmin && <a onClick={()=>exitAdmin()}> выйти из админки</a>}
    </div>
   </header>
  )
}
