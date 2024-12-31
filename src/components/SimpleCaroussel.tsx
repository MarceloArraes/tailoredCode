import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SimpleCaroussel() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Carousel className="mx-auto w-full max-w-md">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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
