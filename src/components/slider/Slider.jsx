import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import style from './slider.module.scss';
import {sliderItems} from '../../data'

const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0)
    
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <div className={style.container}>
      <div
        className={`${style.arrow} ${style.left}`}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div className={style.wrapper} style={{transform: `translateX(${slideIndex * -100}vw)`}}>
          {sliderItems.map((item) => (
              <div key={item.id} className={style.slide} style={{backgroundColor: `#${item.bg}`}}>
              <div className={style.imgContainer}>
                <img
                  src={item.img}
                  alt=""
                  className={style.image}
                />
              </div>
              <div className={style.infoContainer}>
                <h1 className={style.title}>{item.title}</h1>
                <p className={style.description}>
                  {item.desc}
                </p>
                <button className={style.btn}>SHOW NOW</button>
              </div>
            </div>
  ))}
        
      </div>
      <div
        className={`${style.arrow} ${style.right}`}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
