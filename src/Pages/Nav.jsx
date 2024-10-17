import { Routes, Route, Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import React, { useLayoutEffect, useRef } from 'react';
import { SkeletonTheme } from "react-loading-skeleton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./Home/Home.js";
// import Contact from '../contact/Contact.js' 
// import Blog from "../blog/Blogs.jsx" 
// import NotFound from "../errors/NotFound.jsx" 
// import Navbar from '../../Components/navbar/Navbar'; 
// import Footer from "../../Components/footer/Footer.jsx" 
// import BlogDetails from "../blog/BlogDetails.jsx"; 
import Header from "../Component/Header/Header.js";
import Footer from "../Component/Footer/Footer.js";


function Nav() {
    const location = useLocation()
    const invalidRoute = location.pathname === '*'

    AOS.init()
    // const{pathname} = useLocation() 
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    const sectionRefs = {
        home: useRef(),
        about: useRef(),
        program: useRef(),
        event: useRef(),
        contact: useRef(),
        blog: useRef(),
    };

    const navigateToHome = () => {
        if (location.pathname.startsWith('/blog')) {
            return <Navigate to="/" />;
        }
    };

    return (
        <>
            {!invalidRoute && <Header sectionRefs={sectionRefs} />}


            <SkeletonTheme baseColor="#076ACD6c" highlightColor="#ff3b456c">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            {navigateToHome()}
                            <Home sections={sectionRefs} />
                        </>
                    } />
                    {/* <Route path='/blog' element={<Blog />} /> 
            <Route path='/blog/blog_details/:id' element={<BlogDetails />} /> 
            <Route path='/contact' element={<Contact />}/>  */}
                    <Route path='*' element={<Home />} />
                </Routes>
            </SkeletonTheme>

            {!invalidRoute && <Footer />}
        </>
    )
}

export default Nav;