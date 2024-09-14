import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["Kopi Kuy", "Gak Ngopi Gak Kuy!"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false
        });

        return (() => {
            typed.destroy();
        });
    }, []);

    return (
        <div className='flex items-center justify-between p-8 pt-24'>
            <div className='w-[50%] flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <h1 ref={typedElement} className='text-4xl text-black font-bold'></h1>
                    <img
                        src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726075851/Kopi-Kuy-Assets/icon-kopi.svg'
                        width={"100%"}
                        className='w-12'
                    />
                </div>

                <p className='text-black text-xl'>
                    Kopi Kuy merupakan sebuah startup kopi retail yang ingin menyajikan high quality Coffee untuk para pelanggannya.
                </p>

                <div className='flex flex-col gap-4 mt-12'>
                    <span className='text-black text-lg'>Dapat dibeli melalui :</span>
                    <div className='flex items-center gap-2'>
                        <img
                            src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726073299/Kopi-Kuy-Assets/bukalapak.png'
                            width={"100%"}
                            className='w-12 cursor-pointer animate__animated animate__pulse animate__slow animate__infinite'
                        />

                        <img
                            src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726073299/Kopi-Kuy-Assets/shopee.png'
                            width={"100%"}
                            className='w-12 cursor-pointer animate__animated animate__pulse animate__slow animate__infinite'
                        />

                        <img
                            src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726073299/Kopi-Kuy-Assets/tokopedia.png'
                            width={"100%"}
                            className='w-12 cursor-pointer animate__animated animate__pulse animate__slow animate__infinite'
                        />
                    </div>
                </div>
            </div>

            <div className='w-[50%] flex justify-end items-center'>
                <img
                    src='https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726075541/Kopi-Kuy-Assets/header-img.png'
                    width={"100%"}
                    className='w-[90%]'
                />
            </div>
        </div>
    );
};

export default Header;