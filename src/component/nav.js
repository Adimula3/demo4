import React, {useRef} from "react";
import '../styles/nav.css'
import {useEffect} from "react";
import {Link} from "react-router-dom";



const Nav = () => {

    const navbarRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const navbar = navbarRef.current

            if (navbar) {
                if (window.scrollY > navbar.offsetTop) {
                    navbar.style.backgroundColor = '#165A4A'
                } else {
                    navbar.style.backgroundColor = 'transparent'
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
     return (
       <>
           <nav ref={navbarRef} style={{ position: 'sticky', top: 0 }} className="navbar navbar-expand-lg">
               <div className="container-fluid">
                   <Link to="/" className="navbar-brand" href="#">Veximó</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                   Resources
                               </a>
                               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <li><Link to="/FaQ" className="dropdown-item" href="#">FAQ</Link></li>
                                   <li><Link to="/Support" className="dropdown-item" href="#">VexiSupport</Link></li>
                               </ul>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                   Products
                               </a>
                               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <li><Link to="/refProgram" className="dropdown-item" href="#">Ref.Program</Link></li>
                                   <li><a className="dropdown-item" href="#">CoinSwap</a></li>
                                   <li><Link to="/giftCard" className="dropdown-item" href="#">GiftCard</Link></li>
                               </ul>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">About</a>
                           </li>
                       </ul>
                       <Link to="/signIn"><button className="btn btn-primary">Sign in</button></Link>
                   </div>
               </div>
           </nav>
       </>
     );
}
export default Nav;
