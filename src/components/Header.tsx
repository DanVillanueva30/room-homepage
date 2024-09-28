import { useEffect, useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if(isMenuOpen) {
            document.body.classList.add('overflow-y-hidden');
            document.getElementById('carousel')?.classList.add('-z-[1]');
        } else {
            document.body.classList.remove('overflow-y-hidden');
            document.getElementById('carousel')?.classList.remove('-z-[1]');
        }
    }, [isMenuOpen]);
    return (
        <>
            <header className="bg-transparent absolute z-40 p-8 lg:p-10 flex gap-8 lg:gap-10 items-center">
                <div className="flex items-center gap-8">
                    <button onClick={toggleMenu} className="lg:hidden focus:outline-none z-40">
                        <img 
                            src={isMenuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"} 
                            alt="Menu icon" 
                            className={`w-4 h-4 ${isMenuOpen ? 'mt-[5px]' : 'mt-0'}`}
                        />
                    </button>
                    <img src="/logo.svg" alt="App logo" className="ml-4" />
                </div>
                <nav className={`fixed top-0 left-0 w-full bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:transform-none lg:relative lg:bg-transparent lg:flex items-center z-[1]`}>
                    
                    <div className="flex justify-end lg:justify-start lg:flex-row gap-4 p-8 lg:p-0">
                        <a href="#" className="text-black lg:text-white text-lg relative group">
                            Home
                            <span className="w-5 h-[2px] block bg-black lg:bg-white mx-auto absolute left-0 right-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="text-black lg:text-white text-lg relative group">
                            Shop
                            <span className="w-5 h-[2px] block bg-black lg:bg-white mx-auto absolute left-0 right-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="text-black lg:text-white text-lg relative group">
                            About
                            <span className="w-5 h-[2px] block bg-black lg:bg-white mx-auto absolute left-0 right-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#" className="text-black lg:text-white text-lg relative group">
                            Contact
                            <span className="w-5 h-[2px] block bg-black lg:bg-white mx-auto absolute left-0 right-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </nav>
            </header>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[2]" onClick={toggleMenu}></div>
            )}
        </>
    );
}
