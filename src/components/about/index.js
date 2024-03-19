import styles from './styles.module.css'


export const About = () => {
    return(
        <div id='about' className={`h-screen flex flex-col justify-center items-center font-bold snap-center ${styles.main}`}>
            <h1 className="text-6xl lg:text-9xl animate-fade-in-down name">DAVID GUERRA</h1>
            <p className="text-4xl lg:text-6xl animate-fade-in-down position">Web Developer</p>
        </div>
    )
}