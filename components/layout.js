import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Inquiry from '../components/inquiry'

import stylesheet from '../static/scss/index.scss'


class Layout extends Component{

  render(){

  const { description, children, headType, title} = this.props

  return( 
      <div>
        <Head title={title} description={description}>

          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          <link href="/static/css/index.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
          <Nav />
            { children }

        <footer id="" className="footer">
            <div className="container paddingTop100 grid">
            
            <div className="grid__col grid__col--4-of-12">
            <Inquiry />
            </div>

            <div className="grid__col grid__col--8-of-12">
             <span>
                afrodesiamedia | 2017
              </span>
            </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Layout