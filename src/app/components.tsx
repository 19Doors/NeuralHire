"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
  interface NavItem {
    name: string;
    url: string;
  }
  type NavItemList = NavItem[];

  const navigationItems: NavItemList = [
    { name: "Home", url: "/" },
    { name: "Dashboard", url: "/dashboard" },
    { name: "Database", url: "/database" },
  ];
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="w-full border-b flex justify-between pb-1">
      <Link href="/" legacyBehavior passHref>
        <p className="font-bold text-xl cursor-pointer pt-1">NeuralHire</p>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item: NavItem, id: number): any => {
            return (
              <NavigationMenuItem key={id} className="">
                <Link href={item.url} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className="font-bold">{item.name}</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            {isDark == false && (
              <Button
                className="cursor-pointer"
                variant="ghost"
                onClick={() => {
                  setTheme("dark");
                  setIsDark(true);
                }}
              >
                <Moon />
              </Button>
            )}
            {isDark == true && (
              <Button
                className="cursor-pointer"
                variant="ghost"
                onClick={() => {
                  setTheme("light");
                  setIsDark(false);
                }}
              >
                <Sun />
              </Button>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
