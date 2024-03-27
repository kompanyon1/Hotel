import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Corp1 from './components/corp1/Corp1'
import Corp2 from './components/corp2/Corp2'
import Admin from './components/admin/Admin';
import { adminType } from './types/types';



function App() {



const admin:adminType = {
  login: 'admin',
  password: 'admin',
  isAdmin: false
}

localStorage.setItem('admin', JSON.stringify(admin))


  return (
    <>
     
    
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/corp1' element={<Corp1/>}/>
      <Route path='/corp2' element={<Corp2/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path="*" element={<Home />}/>
     </Routes>
     <section id='about'>
    <footer>
    <YMaps>
    <div>
      <Map className='map' defaultState={{ center: [52.127714, 107.238834], zoom: 16}} >
      <Placemark geometry={[52.127714, 107.238834]}/>
      <ZoomControl options={{}}/>
      </Map>
    </div>
  </YMaps>
  <div className='contacts'>
    <p>Адрес: Ул. Пушкина, дом Колотушкина 54</p>
    <p>Телефон: 8 800 555 35 35</p>
    <p>Как проехать до нас из <a href='https://search.biletavto.ru/Улан-Удэ/Ильинка/'>Улан-Удэ в Ильинку</a></p>
    <p>Купить билеты из <a href='https://search.biletavto.ru/Ильинка/Улан-Удэ/'>Ильинки в Улан-Удэ</a></p>
    <p>Расписание всех рейсов на автобусы доступны по ссылке <a href='https://biletavto.ru/'>biletavto.ru</a></p>
    
  </div>
    </footer>
     </section>
    </>
  )
}

export default App
