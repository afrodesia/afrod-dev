import React from 'react'

import Layout from '../components/layout'
import Head from 'next/head'
import logo from '../components/afrodesiamedia.svg'


export default() =>
  <Layout
     headerType='interior' 
        title='Intro | afrodesiamedia'
        description=''
    >

        <div className="Home">
          <section id="1" className="afrodesia-masthead">
                <div className="container paddingTop100 grid">
                        
                    <h1 className="grid__col grid__col--3-of-5 grid__col--centered">We build unique web apps!</h1>
                    <h2 className="grid__col grid__col--3-of-5 grid__col--centered">
                        Discover what good design and practical sense makes for a better user experience.
                    </h2>

                    <a className="btn">Check it out! </a>
                </div>
            </section>


            <section id="2" className="preamble" >

             <div className="container paddingTop100 grid">
                <h2 className="grid__col grid__col--3-of-5 grid__col--centered heading">Inspiring results to communicate your design</h2>
            </div>

            <div className="grey-zone">
                <div className="container paddingTop100 grid">
                    <article className="grid__col grid__col--1-of-3">
                        <div className="grid__col--centered icon">
                            
                        </div>
                        <p>
                        Good design is crafting the User experience in simple path to get them to the things that matters most on your website.
                        </p>
                    </article>
                    <article className="grid__col grid__col--1-of-3">
                        <div className="grid__col--centered icon">
                         
                        </div>
                        <p>
                        Good content enhances the direction you want to prioritize for your consumers to flow thru the website experience.
                        </p>
                    </article>
                    <article className="grid__col grid__col--1-of-3">
                        <div className="grid__col--centered icon">
                          
                        </div>
                        <p>
                        There are things that good design can clear up and implement; are good visual communication and heigharchy.
                        </p>
                    </article>

                </div>

            </div>        

            </section>
            

            <section id="3" className="process" >

                <ul>
                    <li>
                        <article className="container grid">
                            <h3>Design Process</h3>
                            <p>
                                Starts with crafting ideas that will help fuel the visual communication process.
                            </p>
                        </article>
                    </li>

                    <li>
                        <article className="container grid">
                            <h3>User Flow :</h3>
                            <p>
                                Understanding what experience the user could take on going to the relevant desired areas of the website.
                            </p>
                        </article>
                    </li>

                    <li>
                        <article className="container grid">
                            <h3>Content Shaping : </h3>
                            <p>
                                This is where we begin the actual important communication mechanism towards guiding the user to desired locations and areas of interest.
                            </p>
                        </article>
                    </li>

                </ul>

            </section>

    </div>
  </Layout>
