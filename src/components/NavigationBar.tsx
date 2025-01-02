import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur-sm dark:bg-slate-900/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="h-16">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-primary">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[200px] space-y-2 p-4">
                  <NavigationMenuLink className="block rounded-md p-2 text-primary hover:bg-slate-100 dark:hover:bg-slate-800">
                    Web Development
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block rounded-md p-2 text-primary hover:bg-slate-100 dark:hover:bg-slate-800">
                    Mobile Apps
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block rounded-md p-2 text-primary hover:bg-slate-100 dark:hover:bg-slate-800">
                    Custom Solutions
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
