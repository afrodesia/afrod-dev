import React from 'react'
import Layout from '../components/layout'

export default() =>
  <Layout>
          <div className="GettingStarted container">
                <section className="grid paddingTop10">
                     
                    <fieldset className="grid__col grid__col--3-of-5">
                    <h1> Getting Started</h1>

                    <input type="text" />
                    <label className="label-control">
                        What is your Name ?
                    </label>

                    <input type="email" />
                    <label className="label-control">
                        Please add and email
                    </label>

                    <input type="text" />
                    <label className="label-control">
                        your phone number please
                    </label>

                    <input type="text" />
                    <label className="label-control">
                        The name of your company
                    </label>

                    <input type="text" />
                    <label className="label-control">
                        your role in the company
                    </label>
                    <input type="password" />
                    <label className="label-control">password</label>

                    <input type="telephone" />
                    <label className="label-control">telephone</label>
                    
                   

                    <div className="btn-cont">
                        <button className="btn">
                       Submit
                     </button>
                    </div>
                    </fieldset>
                    
                </section>
            
            
            </div>

  </Layout>
