import React, { useRef, useEffect } from 'react';
import slider_1 from '../images/slider_1.jpg';
import slider_2 from '../images/slider_2.jpg';
import slider_3_1 from '../images/slider_3_1.jpg';
import slider_4_1 from '../images/slider_4_1.jpg';
import './Home.css';

function Home() {
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);

  const moveSlider = (direction) => {
    const sliderList = sliderRef.current.querySelector('.list');
    const thumbnailList = thumbnailRef.current.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderList.querySelector('.item'));
      thumbnailRef.current.appendChild(thumbnailList[0]);
      sliderRef.current.classList.add('next');
    } else {
      sliderList.prepend(sliderList.querySelector('.item:last-child'));
      thumbnailRef.current.prepend(thumbnailList[thumbnailList.length - 1]);
      sliderRef.current.classList.add('prev');
    }

    sliderRef.current.addEventListener(
      'animationend',
      () => {
        sliderRef.current.classList.remove(direction);
      },
      { once: true }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider('next');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="list">
        <div className="item">
         
          <div>
           
          </div>
        </div>
        <div className="item">
          <img src={slider_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_3_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
        <div className="item">
          <img src={slider_4_1} alt="" />
          {/* <div className="content">
            <div style={{ color: "black" }} className="title">GRAVE INJUSTICE</div>
            <div style={{ color: "red" }} className="type">IN JUSTICES</div>
            <div style={{ color: "green" }} className="type">SYSTEM</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        <div className="item">
          <img src={slider_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
        </div>
        <div className="item">
          <img src={slider_3_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_4_1} alt="" />
        </div>
        <div className="item">
          <img src={slider_2} alt="" />
        </div>
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
        <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
      </div>
    </div>
  );
}

export default Home;
