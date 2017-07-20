import React, { Component } from 'react'
import Link from 'next/link'
import logo from '/../static/img/afrodesiamedia.svg'


class Nav extends Component {
  componentDidMount () {
 
  }
  render () {
    return (
      <section className="Nav">
        <div className="container">
          <nav>
            <div className="logo">
              <img className="img" src="/../static/img/afrodesiamedia.svg" width="30" />
              <Link href="/"> 
                
                  <a>
                    <div>
                        <span className="white">afrodesia</span>
                        <span className="gray">media</span>
                    </div>
                  </a>
                </Link>
              </div>

              <ul>
                <li><Link href='/'><a>home</a></Link></li>
                <li><Link href='/about'><a>about</a></Link> </li>
                <li><Link href='/getting-started'><a>getting started</a></Link> 
                </li>
                <li><Link href='/portfolio'><a>portfolio</a></Link> </li> <li><Link href='/contact'><a>contact</a></Link></li>
                </ul>  
            </nav>
        </div>
      </section>
    )
  }
}

export default Nav
    