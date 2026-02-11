import { MenuScale } from "iconoir-react"
import "../assets/styles/Nav.css"
import useModuelStore from "../store/ModuleStore"
import { useEffect, useRef, useState } from "react";

type ScreenSize = number;
type NavResponsiveStyle = {
    height: string;
    opacity?: number;
}
export default function Navigation() {
    const isNavOpen = useModuelStore((state) => state.isNavOpen)
    const openNav = useModuelStore((state) => state.openNav)
    const closeNav = useModuelStore((state) => state.closeNav)
    const navRef = useRef<HTMLDivElement>(null);
    const [navResponsiveStyle, setNavResponsiveStyle] = useState<NavResponsiveStyle>({
        height: '50px',
        opacity: 1
    });

    
    useEffect(() => {
        const handleResize = () => {
            
            if (!navRef.current) return;
            if (window.innerWidth > 900) {
                setNavResponsiveStyle({
                    height: '50px',
                    opacity:1
                })
            } 
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 


    const handleNavToggle = () => {
        const screenSize: ScreenSize = window.innerWidth;
        if (screenSize > 600) return;
        if (isNavOpen) {
            setNavResponsiveStyle({
                height: '50px',
                opacity: 1
            })
            closeNav()
        } else {
            setNavResponsiveStyle({
                height: '250px',
                opacity: .9
            })
            openNav()
        }
    }
    return (
        <div ref={navRef}  >
            <div className="navigation" style={navResponsiveStyle}>
                <div className="nav-bar">
                    <MenuScale width={32} height={32} onClick={handleNavToggle} />
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                </ul>
                <div className="nav-actions">
                    {/* <a href="#">LET'S CONNECT</a> */}
                </div>
            </div>
        </div>
    )
}