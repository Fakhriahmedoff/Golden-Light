import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '500+',
            subTitle: 'Strategy and Planning',
        },
        {
            title: '25+',
            subTitle: 'Expert Consultants',
        },
        {
            title: '95%',
            subTitle: 'Client Satisfaction',
        },
        {
            title: '30+',
            subTitle: 'Award Winning',
        },


    ]


    return (
        <section className={`wpo-fun-fact-section  ${props.fnClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12" >
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;