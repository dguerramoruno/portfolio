"use client";
import styles from './styles.modules.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub,faEnvelope, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faInbox  } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
  return (
    <div className="h-40 w-15 p-4 m-4 menu bg-gray-400  flex flex-col gap-4">
      <a
        className="text-black opacity-100"
        href="https://www.linkedin.com/in/david-guerra-moruno"
      >
        <FontAwesomeIcon className='transition ease-in-out delay-150 text-gray-600 hover:text-blue-900 hover:scale-125' size="2xl" icon={faLinkedin} />
      </a>
      <a href='https://github.com/dguerramoruno'className=''>
      <FontAwesomeIcon className='transition ease-in-out delay-150 text-gray-600 hover:text-gray-900 hover:scale-125' size='2xl' icon={faGithub}  />
      </a>
      <a href='mailto:dguerramoruno@gmail.com'>
      <FontAwesomeIcon className='transition ease-in-out delay-150 text-gray-600 hover:text-gray-900 hover:scale-125' size='2xl' icon={faInbox} />
      </a>
    </div>
  );
};
