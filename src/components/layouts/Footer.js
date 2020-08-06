import React from 'react';
import MobileLogo from '../../images/mobile_logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="desktop_footer">
                    <div className="footer_top">
                        <div className="footer_left">
                            <div className="footer_logo">
                                <img src={MobileLogo} alt="Marvel" height="110" width="80" />
                            </div>
                            <div className="footer_first_links">
                                <nav>
                                    <ul>
                                        <li className="grey_hover_pointer">About Marvel</li>
                                        <li className="grey_hover_pointer">Help/Faqs</li>
                                        <li className="grey_hover_pointer">Careers</li>
                                        <li className="grey_hover_pointer">Internships</li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="footer_second_links">
                                <nav>
                                    <ul>
                                        <li>Advertising</li>
                                        <li>Marvelhq.com</li>
                                        <li>Redeem Digital Comics</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer_right">
                            <div className="marvel_more">
                                <div className="marvel_insider">
                                    <div className="right_image_container">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="marvel insider" />
                                    </div>
                                    <div className="marvel_more_details">
                                        <span>Marvel Insider</span> <br />
                                        <span>Get Rewarded for Being a Marvel</span>
                                    </div>
                                </div>
                                <div className="marvel_insider" style={{ marginTop: "2rem" }}>
                                    <div className="right_image_container">
                                        <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mastercard-crop_0-footer-v3.png" alt="marvel insider" />
                                    </div>
                                    <div className="marvel_more_details" >
                                        <span>Marvel Mastercard</span> <br />
                                        <span>6 Car Designs-Unlimited Cashback</span>
                                    </div>
                                </div>
                            </div>
                            <div className="marvel_follow">
                                <span>FOLLOW MARVEL</span>
                                <ul>
                                    <li className="white_hover_pointer"><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-tumblr" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-youtube-play" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-snapchat" aria-hidden="true"></i></li>
                                    <li className="white_hover_pointer"><i className="fa fa-pinterest" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer_bottom">
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy Policy</li>
                        <li>Your Californa Privacy Rights</li>
                        <li>Do Not Sell My Info</li>
                        <li>Childrens online Privacy Policy</li>
                        <li>License Agreement</li>
                        <li>Interes-Based Ads</li>
                        <li>Marvel Insider Terms</li>
                        <li>©2020 MARVEL</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer
