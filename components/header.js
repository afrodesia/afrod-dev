import React, { Component } from 'react'
import Link from 'next/link'
import logo from '/../static/img/afrodesiamedia.svg'


class HeaderNav extends Component {
  componentDidMount () {
 
  }
  render () {
    return (
      <div className="Nav">
        <header>
          <div className="inner">
            <nav>
              <a href="#" className="logo">NO JS</a>
              <input type="checkbox" id="nav" /><label></label>
              <ul>
                <li><a href="#">Home</a></li>       
                <li>
                  <a href="#">Work</a>
                  <ul>
                    <li><a href="#">Web</a></li>
                    <li><a href="#">Print</a></li>      
                  </ul>
                </li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
           
          </div>
        </header>  
      </div>
    )
  }
}

export default HeaderNav
    