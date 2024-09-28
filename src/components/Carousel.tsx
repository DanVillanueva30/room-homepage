import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions } from "flowbite";
import { images } from "../data";
import { useEffect, useRef, useState } from "react";
import 'flowbite/dist/flowbite.css';
import CarouselImage from "./CarouselImage";

export default function ImageCarousel() {
    const carouselRef = useRef<Carousel | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const carouselElement: HTMLElement = document.getElementById('carousel')!;
        const items : CarouselItem[] = images.map((_, index) => ({
            position: index,
            el: document.getElementById(`carousel-item-${index}`)!
        }));
        
        const options : CarouselOptions = {
            defaultPosition: 0,
            onChange:(carousel) => {
                setActiveIndex(carousel.getActiveItem().position)
            }
        }
        carouselRef.current = new Carousel(carouselElement, items, options);

    }, []);

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    const handleNext = () => {
        carouselRef.current?.next();
    };
    return (
        <div className="xl:grid xl:grid-cols-5">
            <div 
                className=" relative xl:col-start-1 xl:col-end-4 min-[2500px]:max-w-max"
                id="carousel"
                data-carousel="static"
            >
                <div className="relative aspect-w-16 aspect-h-14  lg:aspect-h-11 2xl:aspect-h-18 10xl:w-[900px] overflow-x-hidden">
                    {images.map((image, index) => (
                        <CarouselImage 
                            key={index} 
                            image={image} 
                            id={`carousel-item-${index}`}
                            isActive={index === activeIndex}
                        />
                    ))}
                </div> {/**Images container */}



                <div className="inline-block absolute z-40 right-0 bottom-0 xl:-right-[156px] ">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="py-4 lg:py-5 px-5 lg:px-8 bg-black hover:bg-darker-gray transition-colors"
                    >
                        <img src="/icon-angle-left.svg" alt="Navigation icon" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="py-4 lg:py-5 px-5 lg:px-8 bg-black hover:bg-darker-gray transition-colors"
                    >
                        <img src="/icon-angle-right.svg" alt="Navigation icon" />
                    </button>
                </div>{/**nav buttons */}
            </div>{/** Carousel container */}

            <div className="xl:col-start-4 xl:col-end-6 xl:flex xl:items-center">
                <div className="py-10 lg:py-14 px-6 lg:px-10 xl:py-0 xl:px-20">
                    <h2 className="text-3xl lg:text-4xl mb-4 font-bold">{images[activeIndex].heading}</h2>
                    <p className="text-dark-gray">  
                        {images[activeIndex].description}
                    </p>

                    <a href="#" className="group tracking-[.3em] flex gap-6 pt-6 text-xl items-center  font-semibold uppercase hover:text-dark-gray">
                        Shop now
                        <img src="/icon-arrow.svg" alt="Arrow Icon" className=" group-hover:opacity-60"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
