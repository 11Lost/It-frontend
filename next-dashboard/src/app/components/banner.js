
import Image from "next/image";
import { fetchImages } from "./fetch-banner";

export default async function Banner() {
    const bannerData = await fetchImages();
    
    // Safely access the image path with proper URL construction
    const imageData = bannerData?.TopBanner?.[0]?.image;

    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
            {/* Background Image - Using HTML img since Next.js Image has issues with Strapi */}
            <img
                src={imageData}
                alt="Banner Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
        </div>
    );
}