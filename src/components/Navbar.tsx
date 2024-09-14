import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faHome, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cartlength, setCartLength] = useState<number>(0);
    const text = "Hallo, Kopi Kuy."

    const getCartLength = () => {
        setInterval(() => {
            setCartLength(JSON.parse(localStorage.getItem("cart") || '[]').length);
        }, 500);
    };

    useEffect(() => {
        getCartLength();
    }, []);

    return (
        <div className="navbar bg-success px-8 shadow-xl fixed z-50">
            <div className="flex-1">
                <a className='cursor-pointer'>
                    <img
                        src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726073298/Kopi-Kuy-Assets/logo-kopi-kuy.png'
                        width={'100%'}
                        className='w-32'
                    />
                </a>
            </div>

            {location.pathname === "/" && (
                <div className="flex-none items-center gap-4">
                    <button onClick={() => navigate("/shop")} className="btn btn-sm bg-green-900 border-none text-white">
                        <span>Shop</span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>

                    <a href={`https://wa.me/6281385153193?text=${text}`} target='_blank' className="btn btn-sm bg-green-900 border-none text-white">
                        <span>Chat</span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            )}

            {location.pathname === "/shop" && (
                <div className="flex-none items-center gap-4">
                    <button onClick={() => navigate("/")} className="btn btn-sm bg-green-900 border-none text-white">
                        <span>Home</span>
                        <FontAwesomeIcon icon={faHome} />
                    </button>

                    <button onClick={() => navigate("/cart")} className="relative btn btn-sm bg-green-900 border-none text-white">
                        <span>Cart</span>
                        <FontAwesomeIcon icon={faCartShopping} />

                        <span className='min-w-6 h-6 flex justify-center items-center bg-fuchsia-900 text-white rounded-full absolute -top-3 -right-3'>
                            {cartlength}
                        </span>

                    </button>
                </div>
            )}

            {location.pathname === "/cart" && (
                <div className="flex-none items-center gap-4">
                    <button onClick={() => navigate("/")} className="btn btn-sm bg-green-900 border-none text-white">
                        <span>Home</span>
                        <FontAwesomeIcon icon={faHome} />
                    </button>

                    <button onClick={() => navigate("/shop")} className="btn btn-sm bg-green-900 border-none text-white">
                        <span>Shop</span>
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;