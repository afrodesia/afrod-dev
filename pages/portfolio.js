import React, { Component } from 'react'
import Layout from '../components/layout'


export default class Portfolio extends Component {
  constructor(props){
        super()
       
    }
     state = {portfolio: []}

    // componentDidMount(){
    //     fetch('https://api.afrodesiamedia.com/wp-json/wp/v2/portfolio')
    //     .then(res => res.json())
    //     .then(portfolio => this.setState({ portfolio }))
    // }

  render () {
    return (
       <Layout>
            <div className="Portfolio container ">
              <h1>Portfolio</h1>
              <section className="grid paddingTop100">
              </section>
            </div>     
       </Layout>
    )
  }
}