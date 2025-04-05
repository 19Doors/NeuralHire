"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileMinus2, FilePlus2 } from "lucide-react";
import { deleteJobSummary, addJobJSON } from "./lib/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function JobAction() {
  let deleteJobId: number = 0;
  let jobsToBeAdded: any = null;
  let [jobsToBeAddedJSON, setJobsToBeAddedJSON] = useState("");
  const deleteJobAction = async (e: any) => {
    try {
      ("use server");
      await deleteJobSummary(deleteJobId);
    } catch (e: any) {
      console.error(e);
    }
    console.log(deleteJobId);
  };
  const addJobsJSON = async (e: any) => {
    try {
      ("use server");
      // console.log(jobsToBeAddedJSON);
      // console.log(JSON.parse(jobsToBeAddedJSON))
      await addJobJSON(JSON.parse(jobsToBeAddedJSON));
    } catch (e: any) {
      console.error(e);
    }
    setJobsToBeAddedJSON("")
  }
  const addJobsAction = (e: any) => {
    console.log(jobsToBeAdded);
  };
  return (
    <div className="flex w-full justify-between">
      <div></div>
      <div className="flex flex-col">
        <div className="flex gap-x-2">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="cursor-pointer font-bold">
                  <FilePlus2 />
                  Add Job
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Job</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="json">
                  <TabsList>
                    <TabsTrigger value="csv">CSV</TabsTrigger>
                    <TabsTrigger value="json">JSON</TabsTrigger>
                  </TabsList>
                  <TabsContent value="csv">
                    <Card>
                      <CardHeader>
                        <CardTitle>CSV</CardTitle>
                        <CardDescription>
                          Use CSV [ Job Title, Job Description ]
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea placeholder="" />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className="cursor-pointer w-full"
                          >
                            Submit
                          </Button>
                        </DialogClose>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="json">
                    <Card>
                      <CardHeader>
                        <CardTitle>JSON</CardTitle>
                        <CardDescription>
                          Use JSON [ Job Title, Job Description ]
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder='[{
			      "jobTitle": "Software Engineer",
			      "jobDescr": "Description..."
			    }]'
                          onChange={(e) => {
                            setJobsToBeAddedJSON(e.target.value);
                          }}
			  className="overflow-auto max-h-[100px]"
                        />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className="cursor-pointer w-full"
			    onClick={addJobsJSON}
                          >
                            Submit
                          </Button>
                        </DialogClose>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
                <DialogFooter></DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="cursor-pointer font-bold"
                >
                  <FileMinus2 />
                  Remove Job
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Remove Job</DialogTitle>
                  <DialogDescription>
                    Remove Job(s) via JOB ID only.
                  </DialogDescription>
                </DialogHeader>
                <Input
                  type="number"
                  onChange={(e: any) => {
                    deleteJobId = e.target.value;
                  }}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer"
                      onClick={deleteJobAction}
                    >
                      Submit
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
function Navbar() {
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
export { Navbar, JobAction };
