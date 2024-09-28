import { ImageData } from "../data"

type CarouselImageProps = {
    image: ImageData;
    id: string;
    isActive: boolean;
}

export default function CarouselImage({ image, id, isActive }: CarouselImageProps) {
    return (
        <div 
            className="absolute inset-0 duration-700 ease-in-out" 
            id={id} 
            data-carousel-item={isActive ? "active" : ""}
        >
            <picture>
                <source media="(min-width:768px)" srcSet={image.desktopSrc} type="image/jpeg" />
                <source media="(max-width:767px)" srcSet={image.mobileSrc} type="image/jpeg" />
                <img
                    loading="lazy"
                    decoding="async"
                    src={image.mobileSrc}
                    alt="Carousel image"
                    className="w-full h-full object-cover"
                />
            </picture>
        </div>
    )
}
