import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR1 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src='{AVTR1}' alt='Avatar one'/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora maxime dolore quae dolorem quisquam blanditiis, repellendus necessitatibus earum quaerat, ipsum et quibusdam, vitae cupiditate doloremque. Odio eaque dolorem nisi itaque!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src='{AVTR1}' alt='Avatar one'/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora maxime dolore quae dolorem quisquam blanditiis, repellendus necessitatibus earum quaerat, ipsum et quibusdam, vitae cupiditate doloremque. Odio eaque dolorem nisi itaque!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src='{AVTR1}' alt='Avatar one'/>
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora maxime dolore quae dolorem quisquam blanditiis, repellendus necessitatibus earum quaerat, ipsum et quibusdam, vitae cupiditate doloremque. Odio eaque dolorem nisi itaque!
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials