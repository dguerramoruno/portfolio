'use client'
import { useEffect, useState } from 'react'
import styles from './styles.modules.css'

export const About = () => {
    return(
        <div className='h-screen flex flex-col justify-center items-center font-bold'>
            <h1 className="text-9xl animate-fade-in-down">DAVID GUERRA</h1>
            <p className="text-6xl animate-fade-in-down">Web Developer</p>
        </div>
    )
}