import { AnimatedHeroTitle } from "@/components/AnimatedHeroTitle";
// import { ArtDecoBackground } from "@/components/ArtDecoBacktround";
import { SimpleCaroussel } from "@/components/SimpleCaroussel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const slugs = [
  "audio-bites",
  "esbanjanja",
  "good-beak",
  "customer-ticket-manager",
  "task-tracker",
  "time-capsule",
  "esports-duo-matchmaking",
  "good-beak-animal-food-recipes",
  "my-first-portfolio",
  "event-platformer",
  "bem-paggo-form",
  "web-widget",
  "nutri-notes",
  "geocapital-stock-tracker",
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-none">
      {/* Navigation */}

      {/* <ArtDecoBackground /> */}
      {/* Main Content */}
      <div className="absolute left-5 h-full w-auto border-2 border-yellow-200"></div>
      <div className="absolute left-7 h-full w-auto border-2 border-yellow-200"></div>
      <div className="absolute left-9 h-full w-auto border-2 border-yellow-200"></div>
      <div className="absolute right-5 h-full w-auto border-2 border-yellow-200"></div>
      <div className="absolute right-7 h-full w-auto border-2 border-yellow-200"></div>
      <div className="absolute right-9 h-full w-auto border-2 border-yellow-200"></div>
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <AnimatedHeroTitle />
          <h2 className="text-2xl text-slate-600 dark:text-slate-300 md:text-3xl">
            Made right for your needs
          </h2>
          <Card className="mx-auto inline-flex flex-row items-center bg-white/50 p-3 backdrop-blur-sm dark:bg-slate-800/50">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/MarceloArraes.png" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <h3 className="ml-4 text-lg font-medium">By Marcelo</h3>
          </Card>
        </section>

        {/* Feature Sections */}
        <section className="flex flex-col items-center justify-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-center text-3xl font-semibold">
              Building solutions for a variety of problems
            </h2>
            <SimpleCaroussel />
          </div>

          <div className="flex max-w-2xl flex-1 flex-row">
            {/* Here goes the texts; */}
            <h1 className="self-center whitespace-pre-wrap text-4xl font-bold">
              Latest projects
            </h1>
            <div className="ml-auto flex flex-row gap-5">
              <Card className="border-0 bg-transparent p-2 shadow-none transition hover:translate-x-3">
                <CardHeader>
                  Arriving to a new milestone in my career
                </CardHeader>
                <CardDescription>description</CardDescription>
                <CardContent> content</CardContent>
                <CardFooter>footer April 8, 2024</CardFooter>
              </Card>

              <Card className="transition hover:translate-x-3">
                <CardHeader>
                  Arriving to a new milestone in my career
                </CardHeader>
                <CardDescription>description</CardDescription>
                <CardContent> content</CardContent>
                <CardFooter>footer April 8, 2024</CardFooter>
              </Card>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-center text-3xl font-semibold">
              Creative animations and interactive experiences
            </h2>
            <SimpleCaroussel />
          </div>

          <div className="space-y-8">
            <h2 className="text-center text-3xl font-semibold">
              Fully customizable themes and styling
            </h2>
            <SimpleCaroussel />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 text-center">
          <Card className="mx-auto max-w-md bg-white/50 backdrop-blur-sm dark:bg-slate-800/50">
            <CardContent className="p-6">
              <form className="space-y-4">
                <h2 className="mb-6 text-center text-2xl font-semibold">
                  Stay Updated
                </h2>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-white dark:bg-slate-900"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
