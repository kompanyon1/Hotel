import { ChangeEvent, useEffect, useState } from "react";

import styles from "./corp1.module.css";
import axios from "axios";
import { textType } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/bundle";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function Corp1() {
  const [text, setText] = useState<textType[]>([]);
  const [changeText, setChangeText] = useState({
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const checkAdmin = localStorage.getItem("adminAuth");

  useEffect(() => {
    axios
      .get<textType[]>(`${import.meta.env.VITE_URL}/text`)
      .then((res) => setText(res.data))
      .catch((err) => console.log(err));
  }, []);

  const updateText = () => {
    axios
      .post(`${import.meta.env.VITE_URL}/setText/corp1`, changeText)
      .catch((err) => console.log(err));
  };

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setChangeText((prev) => ({
      ...prev,
      [e.target.name]: e.target.value + e.target.innerText,
    }));
  };

  return (
    <>
      <div style={{ margin: "10px" }}>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          на главную
        </a>
        <a>комната 1</a>
        <a>комната 2</a>
        <a>комната 3</a>
        <a>комната 4</a>
      </div>
      {!!checkAdmin && (
        <button onClick={updateText}>сохранить изменения</button>
      )}
      <div className={styles.container}>
        <h1>Корпус 1</h1>
        <div className={styles.title}>Комната № 1</div>

        <div className={styles.images}>
          <div className={styles.block1}>
            <div className={styles.swiper}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                navigation
                pagination={{ el: "", clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={styles.swiper_container}
              >
                <SwiperSlide>
                  <img
                    src={`${import.meta.env.VITE_URL}/img/corp1room1_1.jpg`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${import.meta.env.VITE_URL}/img/corp1room1_2.jpg`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${import.meta.env.VITE_URL}/img/corp1room1_3.jpg`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_URL}/img/corp1room1_4.jpg`}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img
                    src={`${import.meta.env.VITE_URL}/img/corp1room1_5.jpg`}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {!!checkAdmin && <p>corp1room1_1.jpg</p>}
          </div>
          <div className={styles.block2}>
            <div>
              <img src={`${import.meta.env.VITE_URL}/img/corp1room1_2.jpg`} />
              {!!checkAdmin && <p>corp1room1_2.jpg</p>}
              <img src={`${import.meta.env.VITE_URL}/img/corp1room1_3.jpg`} />
              {!!checkAdmin && <p>corp1room1_3.jpg</p>}
            </div>
            <div>
              <img src={`${import.meta.env.VITE_URL}/img/corp1room1_4.jpg`} />
              {!!checkAdmin && <p>corp1room1_4.jpg</p>}
              <img src={`${import.meta.env.VITE_URL}/img/corp1room1_5.jpg`} />
              {!!checkAdmin && <p>corp1room1_5.jpg</p>}
            </div>
          </div>
        </div>
        <div className={styles.info}>
          {!!checkAdmin ? (
            <>
              <div className={styles.about}>
                <textarea
                  name="3"
                  defaultValue={
                    text.length && text.filter((el) => el.id === 3)[0].mainText
                  }
                  onChange={changeHandler}
                ></textarea>
              </div>
            </>
          ) : (
            <>
              <div className={styles.about}>
                <div>
                  {text.length && text.filter((el) => el.id === 3)[0].mainText}
                </div>
                <div>
                  удобства:
                  <div>
                    <ul>
                      <li>2 спальных места</li>
                      <li>телевизор</li>
                      <li>wifi</li>
                      <li>вешалка</li>
                      <li>123</li>
                      <li>123</li>
                      <li>123</li>
                      <li>123</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <p>123</p> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
