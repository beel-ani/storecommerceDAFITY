import React from 'react'
import Announcement from '../componets/Announcement'
import Categories from '../componets/Categories'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import Newsletter from '../componets/Newsletter'
import Products from '../componets/Products'
import Slider from '../componets/Slider'
/* import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { resetCart } from '../redux/cartRedux'


 */


const Home = () => {

   /*  const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(resetCart())
    },[]) */

    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>

        </div>
    )
}

export default Home
