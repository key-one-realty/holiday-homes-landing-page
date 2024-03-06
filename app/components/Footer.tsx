import Image from 'next/image';
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#577D54] w-full flex justify-center items-center'>
            <div className='max-w-[81.481vw] py-5 w-full flex flex-col justify-center items-center'>
                <div className='inner-footer flex flex-col w-full lg:flex-row justify-between items-center lg:items-start  gap-10 lg:gap-32 p-10 md:p-6 border-b border-white'>
                    <div className='footer-logos lg:w-[207px] flex flex-col gap-7'>
                        <div className='w-full'>
                            <Image src='/holiday-homes-1.png' alt='logo' width={207} height={51.06} />
                        </div>
                        <div className='reviews&license flex justify-center items-center'>
                            <div>
                                <Image src='/awards_reviews.svg' alt='reviews' width={173} height={117} />
                            </div>
                        </div>
                    </div>
                    <div className='footer-links flex flex-wrap lg:flex-nowrap justify-center items-start gap-10 md:gap-x-20 text-center lg:text-left lg:gap-10 text-white'>
                        <div className='footer-links-inner flex flex-col gap-10'>
                            <h3 className='font-bold'>Explore</h3>
                            <ul className='font-light text-center lg:text-left flex flex-col items-center lg:items-start justify-center gap-10 text-sm'>
                                <li>
                                    <a href=''>Home</a>
                                </li>
                                <li>
                                    <a href=''>Services</a>
                                </li>
                                <li>
                                    <a href=''>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-links-inner flex flex-col gap-10'>
                            <h3 className='font-bold'>Categories</h3>
                            <ul className='font-light text-center lg:text-left flex flex-col items-center lg:items-start  justify-center gap-10 text-sm'>
                                <li>
                                    <a href='https://www.holidayhomes.com/'>Rent a Home</a>
                                </li>
                                <li>
                                    <a href='https://www.holidayhomes.com/'>List Your Home</a>
                                </li>
                                <li>
                                    <a href='https://www.holidayhomes.com/'>Blogs</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-links-inner flex flex-col gap-10'>
                            <h3 className='font-bold'>You can also visit</h3>
                            <ul className='font-light text-center lg:text-left flex flex-col  items-center lg:items-start  justify-center gap-10 text-sm'>
                                <li>
                                    <a href='https://keyonerealtygroup.com/'>Top Real Estate Brokerage in Dubai</a>
                                </li>
                                <li>
                                    <a href='https://keyoneproperties.com/'>Top Property Management in Dubai</a>
                                </li>
                                <li>
                                    <a href='https://keyonedesignsolution.com/'>Top Interior Design Company in Dubai</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='footer-bottom flex gap-7 justify-between items-center w-full py-5 text-gray-50'>
                    <div className='footer-bottom-left flex justify-center items-center gap-5'>
                        <div>
                            <Image src='/twitter.svg' alt='twitter' width={20} height={20} />
                        </div>
                        <div>
                            <Image src='/linkedin.svg' alt='linkedin' width={20} height={20} />
                        </div>
                        <div>
                            <Image src='/facebook.svg' alt='facebook' width={20} height={20} />
                        </div>
                    </div>
                    <div className='footer-bottom-right flex justify-center items-center gap-10'>
                        <p className='font-light text-right text-xs md:text-sm'>© 2024 Holiday Homes. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;