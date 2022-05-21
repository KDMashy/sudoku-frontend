import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            if (window.innerWidth > 600){
              setOpenLinks(openLinks);
            }
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
      }

      useWindowSize();

      const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      }

    return (
        <div className='navbar'>
            <div className='leftside' id={openLinks ? "open" : "close"}>
                <div className='hiddenLinks'>
                <Link to="/" onClick={toggleNavbar}> Kezdőlap </Link>
                <Link to="/subscribe" onClick={toggleNavbar}> Feliratkozás </Link>
                <Link to="/solver" onClick={toggleNavbar}> Sudoku megoldás </Link>
                </div>
            </div>
            <div className='rightside'>
                <Link to="/"> Kezdőlap </Link>
                <Link to="/subscribe"> Feliratkozás </Link>
                <Link to="/solver"> Sudoku megoldás </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar