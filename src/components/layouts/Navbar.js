import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/desktop_logo.svg.png';

const Navbar = () => {
    const navRef = useRef();
    const mainNav = useRef();

    const toggleNav = () => {
        navRef.current.style.height = navRef.current.style.height === "100vh" ? "3rem" : "100vh";
        mainNav.current.style.display = mainNav.current.style.display === "block" ? "none" : "block";
    }
    return (
        <div className="header">
            <div className="desktop_nav">
                <div className="desktop_top_nav">
                    <div className="desktop_top_nav_details">
                        <div className="join">
                            <i className="fa fa-linkedin-square in" aria-hidden="true"></i>
                            <span>sign in <span style={{ borderLeft: "2px solid #ffff", paddingLeft: "0.7rem" }}>join</span></span>
                        </div>
                    </div>
                    <div className="desktop_logo_container">
                        <img src={Logo} id="desktop_logo" alt="Marvel" />
                    </div>
                    <div className="desktop_top_nav_details">
                        <div className="join">
                            <i className="fa fa-briefcase in" aria-hidden="true"></i>
                            <span>Marvel
                                 <br />
                                  Mastercard® </span>
                            <i className="fa fa-search search" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className="desktop_bottom_nav">
                    <ul className="nav_links no_list">
                        <li>Videos</li>
                        <li><Link to="/captainmarvel"style={{color:"white", textDecoration:"none"}}>Captain Marvel</Link></li>
                        <li><Link to="/comics"style={{color:"white", textDecoration:"none"}}>Comics</Link></li>
                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li>Games</li>
                        <li>News</li>
                        <li>More</li>
                    </ul>
                </div>
            </div>
            <div className="mobile_nav" ref={navRef}>
                <ul className="no_list">
                    <li onClick={toggleNav}><i className="fa fa-bars header_icon"></i></li>
                    <div id="main_mobile_navs" ref={mainNav}>
                        <li onClick={toggleNav}><i className="fa fa-close close_icon"></i></li>
                        <div className="mobile_nav_items">
                            <ul className=".no_list">
                                <li>Videos <span><i className="fa fa-angle-right"></i></span></li>
                                <li><Link to="/captainmarvel"style={{color:"white", textDecoration:"none"}}>Captain Marvel</Link><span><i className="fa fa-angle-right"></i></span></li>
                                <li><Link to="/comics"style={{color:"white", textDecoration:"none"}}>Comics</Link> <span><i className="fa fa-angle-right"></i></span></li>
                                <li>Movies <span><i className="fa fa-angle-right"></i></span></li>
                                <li>Tv Shows <span><i className="fa fa-angle-right"></i></span></li>
                                <li>Games <span><i className="fa fa-angle-right"></i></span></li>
                                <li>News <span><i className="fa fa-angle-right"></i></span></li>
                                <li>Culture & Lifestle </li>
                                <li className="na">Podcasts </li>
                                <li className="na">Shop</li>
                                <li className="na">MarvelMastercard®</li>
                            </ul>
                        </div>
                        <div className="mobile_nav_join">
                            <ul className="no_list mn_join">
                                <li id="mobile_mi"> Marvel Insider</li>
                                <li>Sign in</li>
                                <li>Join</li>
                            </ul>
                        </div>
                        <div className="mobile_bottom">
                        <ul className="mobile_social no_list">
                            <li className="white_hover_pointer"><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-tumblr" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-snapchat" aria-hidden="true"></i></li>
                            <li className="white_hover_pointer"><i className="fa fa-pinterest" aria-hidden="true"></i></li>
                        </ul>

                        <div className="nav_more mobile_marvel_more">
                        <div className="mobile_marvel_insider">
                            <div className="mobile_right_image_container">
                                <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/nav-logos-insider.png" alt="marvel insider" />
                            </div>
                            <div className="mobile_marvel_more_details">
                                <span  className="mobile_head">Marvel Insider</span> <br />
                                <span>Get Rewarded for Being a Marvel</span>
                            </div>
                        </div>
                        <div className="mobile_marvel_insider" style={{ marginTop: "2rem" }}>
                            <div className="mobile_right_image_container">
                                <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mastercard-crop_0-footer-v3.png" alt="marvel insider" />
                            </div>
                            <div className="mobile_marvel_more_details mobile_span" >
                                <span className="mobile_head">Marvel Mastercard</span> <br />
                                <span>6 Car Designs-Unlimited Cashback</span>
                            </div>
                        </div>
                    </div>
                        </div>
                       
                    </div>
                    <li><img src={Logo} id="mobile_logo" alt="Marvel" /></li>
                    <li><i className="fa fa-search header_icon" aria-hidden="true"></i></li>
                </ul>



            </div>

        </div>
    )

}


export default Navbar
