import React from 'react'

import Layout from '../components/layout'

export default() =>
  <Layout>
         <div className="About">
    	 <section className="container paddingTop100">
       <div className="grid">
        <article className="grid__col grid__col--5-of-8">

        	<p>
        	i	Quite simply <span>afrodesiamedia</span> works as a small web agency
            centered on building web applications. We can help you
            thru all the phases of the design process.
        	</p>
       </article>

       <aside className="grid__col grid__col--3-of-8">
          <h1>About afrodesiamedia and the things we do!</h1>
      </aside>   

      </div>

      <div className="grid blax-box --no-gutter"> 

         <article className="grid__col grid__col--1-of-3">
            <div className="grid__col--centered icon">
              <h3><span>Sketching/Wireframing</span></h3>
             </div>
              <p>- We start with generating rough ideas and elements to formulate the basic building blocks.
              </p>
         </article>

         <article className="grid__col grid__col--1-of-3">
            <div className="grid__col--centered icon">
              <h3><span>Front End Developments  </span></h3>
             </div>
              <p>- This is the phase where we start fleshing out the building
                    blocks to a more concrete and solid design concept.
              </p>
         </article>

         <article className="grid__col grid__col--1-of-3">
            <div className="grid__col--centered icon">
              <h3><span>Hi-Fi Mockups</span></h3>
             </div>
              <p>- This is the phase where we start fleshing out the building
                    blocks to a more concrete and solid design concept.
              </p>
         </article>

         </div>

        
        </section>
        </div>
  </Layout>
