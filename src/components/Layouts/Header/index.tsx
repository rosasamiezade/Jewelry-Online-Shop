import React from 'react';
import {links} from './data';
import logo from '../../../images/812bf84991612fcd324d914c78a5364f.jpg' ;
import {Link} from 'react-router-dom' ;
interface IHeaderProps{

}


const Header:React.FC<IHeaderProps>= ():JSX.Element =>{
 return(
    <>
   <header className="bg-black text-white p-4 flex justify-between items-center shadow-lg h-16">
      <div className="logo">
        <img src={logo} alt="logo" className="w-32 h-auto" />
      </div>
      <ul className="flex space-x-8">
        {links.map((link) => {
          return (
            <li key={link.id} className='text-white'>
              <Link to={link.url} className="text-lg text-white">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
    </>
 )
}


export default Header;