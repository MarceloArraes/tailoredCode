import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type simpleProjectCard } from "lib/interface";
import Image from "next/image";
import { urlFor } from "lib/sanity";
import { PortableText } from "next-sanity";

export function SimpleCaroussel({
  projects,
}: {
  projects: simpleProjectCard[];
}) {
  console.log("projects on Caroussel", projects);
  return (
    <div className="relative flex w-full items-center justify-center">
      <Carousel className="mx-auto w-full max-w-5xl">
        <CarouselContent>
          {projects?.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-4">
                    <Image
                      className="absolute z-0 h-[300px] w-4/5 rounded-t-lg object-cover transition-transform group-hover:scale-105"
                      height={500}
                      width={500}
                      alt=""
                      src={urlFor(project?.siteImage)?.url() ?? ""}
                    />
                    <div className="z-10 m-4 max-w-lg p-4 text-2xl font-bold shadow-2xl backdrop-blur-2xl">
                      <PortableText
                        value={project?.description}

                        // components={/* optional object of custom components to use */}
                      />
                    </div>
                    {/* <span className="text-4xl font-semibold">
                      {project?.name ?? "pproject"}
                    </span> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center">
          <CarouselPrevious className="relative -left-4" />
          <CarouselNext className="relative -right-4" />
        </div>
      </Carousel>
    </div>
  );
}
