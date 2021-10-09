import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo2.png'

import ins1 from '../../images/instragram/1.jpg'
import ins2 from '../../images/instragram/2.jpg'
import ins3 from '../../images/instragram/3.jpg'
import ins4 from '../../images/instragram/4.jpg'
import ins5 from '../../images/instragram/5.jpg'
import ins6 from '../../images/instragram/6.jpg'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/">
                                    <img src={Logo} alt="blog"/>
                                </Link>
                            </div>
                            <p>Management consulting includes a broad range of activities, and the many firms and their members often define these practices.</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-location"></i>7 Green Lake Street Crawfordsville, IN 47933</li>
                                    <li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>
                                    <li><i className="fi flaticon-send"></i>Consultar@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single">Advanced Analytics</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Corporate Finance</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Information Technology</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Customer Strategy</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Change Management</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Projects</h3>
                            </div>
                            <ul className="d-flex">
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins1} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins2} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins3} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins4} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins5} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins6} alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2021 Consultar by <Link onClick={ClickHandler} to="/home">wpOceans</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;