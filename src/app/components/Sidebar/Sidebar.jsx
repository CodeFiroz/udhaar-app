"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>

     
       <div className={style.logo}>
            <Image src="/img/logo.svg" width={40} height={40} alt='Udhaar' />
        </div>        

        <nav className={style.nav}>
            <ul>
                <li>
                    <Link href="#"> <i className="fi fi-rr-house-blank"></i> <span>Home</span></Link>
                </li>
                <li>
                    <Link href="#"> <i className="fi fi-rr-file"></i> <span>Report</span></Link>
                </li>
                <li>
                    <Link href="#"> <i className="fi fi-rr-user"></i> <span>Customers</span></Link>
                </li>
                <li>
                    <Link href="#"> <i className="fi fi-rr-receipt"></i> <span>Transaction</span></Link>
                </li>
                <li>
                    <Link href="#"> <i className="fi fi-rr-settings"></i> <span>Settings</span></Link>
                </li>
            </ul>
        </nav>
       </div>



  )
}

export default Sidebar