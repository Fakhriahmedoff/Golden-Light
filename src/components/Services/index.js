import React from 'react'
import {Link} from 'react-router-dom'

import srvimg1 from '../../images/icon/clipboard.svg'
import srvimg2 from '../../images/icon/briefcase.svg'
import srvimg3 from '../../images/icon/chart.svg'
import srvimg4 from '../../images/icon/badge.svg'
import srvimg5 from '../../images/icon/goal.svg'
import srvimg6 from '../../images/icon/handshake.svg'


const Services = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


     const service = [
         {
            sIcon:srvimg1,
            title:'Strategy and Planning',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         {
            sIcon:srvimg2,
            title:'Corporate Finance',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         {
            sIcon:srvimg3,
            title:'Market Research',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         {
            sIcon:srvimg4,
            title:'Business Analysis',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         {
            sIcon:srvimg5,
            title:'Consumer Markets',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         {
            sIcon:srvimg6,
            title:'Insurance',
            des:'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities.',      
            link:'/service-single',
         },
         
     ]


    return(
        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Services</span>
                            <h2>Explore Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        <img src={service.sIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;