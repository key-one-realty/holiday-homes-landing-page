import Image from 'next/image';
import React from 'react'

const LoadingIcon = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="loading-icon relative w-[100px] h-[100px] animate-spin text-accent-purple">
                <Image src="/tube-spinner.svg" className='text' alt="loading" fill />
            </div>
        </div>
    )
}

export default LoadingIcon;