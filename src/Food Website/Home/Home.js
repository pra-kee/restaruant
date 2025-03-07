// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './Home.css'
function Home(){

    return(
    <section className="home-section">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='home-see' id='1'>
            <div className='one'>
                
            <span>Order Now</span>
                    <h1> Delicious Pizza</h1>
                    <Link to="/menu">
                    <button>See More</button></Link>
            </div>
        <div className='two'> 
        <img src="./image/home-img-1.png" alt="" id='one' />
        </div>
        </SwiperSlide>
        
        <SwiperSlide className='home-see' >
            <div className='one'>
            <span>Order Now</span>
            <h1> Crispy Burger</h1>
            <Link to="/menu">
                    <button>See More</button></Link>
            </div>
        <div className='two'> 
        <img src="./image/home-img-2.png" alt=""/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='home-see' >
            <div className='one'>
                
            <span>Order Now</span>
            <h1>Spicy Grill</h1>
            <Link to="/menu">
                    <button>See More</button></Link>
            </div>
        <div className='two'> 
        <img src="./image/home-img-3.png" alt="" id='one'/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='home-see' >
            <div className='one'>
                
            <span>Order Now</span>
            <h1>Chicken briyani</h1>
            <Link to="/menu">
                    <button>See More</button></Link>
            </div>
        <div className='two'> 
        <img className='five' src="./Briyani.png" alt="" id='one' />
        </div>
        </SwiperSlide>
        <SwiperSlide className='home-see' >
            <div className='one'>
                
            <span>Order Now</span>
            <h1>Splice Pizza</h1>
            <Link to="/menu">
                    <button>See More</button></Link>
            </div>
        <div className='two'> 
        <img className='five' src="./pizza-slice..png" alt="" />
        </div>
        </SwiperSlide>
      </Swiper>
        <footer className="home-footer">
            <div className="home-img1">
                <img src="./image/cat-2.png" alt="" />
                <Link to="/menu">
                        <button>View</button></Link>            </div>
            <div className="home-img2" id='2'>
                <img src="./image/cat-1.png" alt=""  />
                <Link to="/menu">
                        <button>View</button></Link>            </div>
            <div className="home-img3" id='3'>
                <img src="./image/cat-3.png" alt="" />
                <Link to="/menu">
                        <button>View</button></Link>
            </div>
        </footer>
    </section>
    )
}

export default Home;

