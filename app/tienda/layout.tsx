import Image from 'next/image';
import React from 'react'

function LayoutTienda({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="relative h-80">
                <Image
                    src={"/instagram/Insta 3.jpg"}
                    alt="instagram 3"
                    fill
                    className="object-cover aspect-video"
                />
                <div className="bg-black/30 absolute inset-0" />
                <h3 className="text-white text-6xl font-bold absolute inset-0 flex justify-center items-center">
                    Tienda
                </h3>
            </div>
            {children}
        </div>
    );
}
    
export default LayoutTienda
