import { SimpleCaroussel } from "@/components/SimpleCaroussel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur-sm dark:bg-slate-900/75">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NavigationMenu className="h-16">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] space-y-2 p-4">
                    <NavigationMenuLink className="block rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                      Web Development
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                      Mobile Apps
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                      Custom Solutions
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <h1 className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Tailored Code
          </h1>
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
        <section className="space-y-16">
          <div className="space-y-8">
            <h2 className="text-center text-3xl font-semibold">
              Building solutions for a variety of problems
            </h2>
            <SimpleCaroussel />
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
    </main>
  );
}
