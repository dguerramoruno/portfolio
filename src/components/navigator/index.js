'use client'
import styles from './styles.modules.css'
import Link from 'next/link'
import { useState,useEffect } from 'react';



export const Navigator = () => { 

    const [date, setDate] = useState("00:00:00");
    useEffect(() => {
       let intervalId = setInterval(() => {setDate(new Date().toLocaleTimeString())},500)
        return () => {
            clearInterval(intervalId)
        }
      },[]);
    return (
        <nav className='p-6 w-screen flex justify-between bg-gray-900 text-gray-300 fixed' >
            <h1 className='text-2xl font-black drop-shadow-md items-center'>David Guerra, Desarrollador WEB</h1>
            <div className=''>
                <Link className="mr-4" href="/about">About me</Link>
                <Link className="mr-4" href="/projects">Projects</Link>
                <Link className="mr-4" href="/contact">Contact</Link>
            </div>
            <div>
                <span>{date}</span>
            </div>
        </nav>
    )
}