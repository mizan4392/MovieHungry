import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Button, Center, Grid, Text } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";
import { CarouselImageMeta } from "./CarouselImageMeta.component";
type Props = {};

export default function Slider({}: Props) {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      mx="auto"
      withIndicators
      height={600}
      // plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          radius="sm"
          className="carousel-img"
        >
          <CarouselImageMeta
            duration="130min"
            movieName="Iron Man 1"
            genre={["Action", "Triller"]}
            rating={8.9}
            videQuality="HD"
            shortDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtbXl8ZW58MHx8MHx8&w=1000&q=80"
          radius="sm"
          className="carousel-img"
        >
          <CarouselImageMeta
            duration="130min"
            movieName="Iron Man 2"
            genre={["Action", "Triller"]}
            rating={8.9}
            videQuality="HD"
            shortDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          radius="sm"
          className="carousel-img"
        >
          <CarouselImageMeta
            duration="130min"
            movieName="Iron Man 3"
            genre={["Action", "Triller"]}
            rating={8.9}
            videQuality="HD"
            shortDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </BackgroundImage>
      </Carousel.Slide>
    </Carousel>
  );
}
