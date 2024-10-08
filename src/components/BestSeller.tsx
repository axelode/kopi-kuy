import bestSeller from '../json/bestSeller.json';
import ScrollAnimation from 'react-animate-on-scroll';

const BestSeller = () => {
    return (
        <div className="relative w-full min-h-screen flex justify-center items-center p-8 bg-[#EEE6DC]">
            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726077484/Kopi-Kuy-Assets/garis-bawah.png"
                width={"100%"}
                className="absolute w-full bg-white top-0"
            />

            <div className="w-full flex flex-col justify-center items-center z-10">
                <ScrollAnimation animateIn="fadeInDown" animateOut='fadeOutUp'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl text-black font-bold'>Menu Andalan Kami</h1>
                        <p className='text-lg text-black'>Nikmati menu andalan yang menjadi favorit customer kami</p>
                    </div>
                </ScrollAnimation>

                <div className='w-full flex items-center justify-between gap-4 mt-16'>
                    {bestSeller.map((data, index) => (
                        <ScrollAnimation key={index} animateIn="fadeInDown" animateOut='fadeOutUp' delay={500 * index}>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <img
                                    src={data.img}
                                    width={"100%"}
                                    className='w-72 rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out shadow-xl'
                                />

                                <span className='text-xl text-black font-bold'>{data.title}</span>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>

            <img
                src="https://res.cloudinary.com/dbzdxsmvy/image/upload/v1726077484/Kopi-Kuy-Assets/garis-atas.png"
                width={"100%"}
                className="absolute w-full bg-white bottom-0"
            />
        </div>
    );
};

export default BestSeller;