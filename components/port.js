import React, { Component } from 'react'

export class Port extends Component
    constructor(props){
        super()
       
    }
     state = {portfolio: []}

    componentDidMount(){
        fetch('https://api.afrodesiamedia.com/wp-json/wp/v2/portfolio')
        .then(res => res.json())
        .then(portfolio => this.setState({ portfolio }))
    }
    render(){
        return(
            <div className="Portfolio container ">

                <section className="grid paddingTop100">

                   { this.state.portfolio.map( portfolio => 

                       <article className="grid__col grid__col--1-of-3">
                            <h2 key={portfolio.id}>                   {portfolio.portfolio_title}
                            </h2>
                            <img  role="presentation" src={portfolio.portfolio_image.guid} />
                            <p>{portfolio.portfolio_description}</p>
                        </article>
                    )}   
                </section>

            </div>
        )
    }
}
