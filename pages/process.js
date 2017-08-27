import React, { Component } from 'react'
import Layout from '../components/layout'


export default class Process extends Component {
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
            <div className="Process container ">
                <section className="grid paddingTop100">
                   <h1>Process</h1> 
                </section>
            </div>     
       </Layout>
    )
  }
}