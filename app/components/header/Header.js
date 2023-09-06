"use client"

import  { useState } from "react"
import "./header.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"




const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
               <Link  href='/'>Home</Link>
              </li>
              <li>
              <Link  href='/'>Series</Link>
              </li>
              <li>
              <Link  href='/'>Movies</Link>
              </li>
              <li>
              <Link  href='/'>Pages</Link>
              </li>
              <li>
              <Link  href='/'>Prising</Link>
              </li>
              
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
          <i><FontAwesomeIcon icon={faMagnifyingGlass} color="white"  /></i>
          <i><FontAwesomeIcon icon={faBell} color="white"  /></i>
           <i><FontAwesomeIcon icon={faUser} color="white" /></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header


