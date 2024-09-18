import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram , FaLinkedin } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const medias = [
    {
        id:1,
        logo:AiFillInstagram,
        link:'https://www.instagram.com'

    },
    {
        id:2,
        logo:FaTelegram,
        link:'https://www.telegram.com'
    },
    {
        id:3,
        logo:FaLinkedin,
        link:'https://www.linkedin.com'
    },
    {
        id:4,
        logo:FaPhoneSquareAlt,
        link:'tel:+989108841417'
    }
]

export const quickLinks = [
    { id: 1, name: 'HOME', path: '/' },
    { id: 2, name: 'ABOUT US', path: '/about' },
    { id: 3, name: 'CONTACT US', path: '/contact' },
    { id: 4, name: 'PRODUCTS', path: '/shop' }
  ];