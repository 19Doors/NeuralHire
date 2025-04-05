"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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

import { AlertCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry"; // Required for parsing
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
import {
  deleteJobSummary,
  addJobJSON,
  addJobCSV,
  shortlistcandidates,
  interviewServer,
} from "./lib/actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useJobStore, useLogStore, useUpdateCheck } from "@/store/store";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDropzone } from "react-dropzone";
import * as pdfjs from "pdfjs-dist";

interface FileWithText {
  file: File;
  text: string;
}

export function Recruit({ jobID }: any) {
  const [files, setFiles] = useState<FileWithText[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [recEmail, setRecEmail] = useState("");
  const [recEmailPass, setRecEmailPass] = useState("");
  const [shortlistedCandidates, setShortlistedCandidates] = useState([]);
  const [matchScore, setMatchScore] = useState(0);
  const [stage, setStage] = useState("shortlist");

  const extractTextFromPDF = async (file: File): Promise<string> => {
    try {
      const arrayBuffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");

        fullText += pageText + "\n";
      }

      return fullText;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      return `Error extracting text: ${error}`;
    }
  };
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsLoading(true);

    try {
      const filesWithText = await Promise.all(
        acceptedFiles.map(async (file) => {
          let text = "";

          if (file.type === "application/pdf") {
            text = await extractTextFromPDF(file);
          } else if (file.type.startsWith("text/")) {
            // For text files, simply read as text
            text = await file.text();
          } else {
            text = `File type ${file.type} not supported for text extraction`;
          }

          return { file, text };
        }),
      );

      setFiles((prev) => [...filesWithText]);
    } catch (error) {
      console.error("Error processing files:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });
  const shortlist = async () => {
    setStage("loading");
    let em: any = await shortlistcandidates(files, jobID, matchScore);
    setShortlistedCandidates(em);
    setStage("interview");
  };
  const interview= async () => {
    setStage("loading");
    await interviewServer(shortlistedCandidates,recEmail,recEmailPass,emailSubject,emailText)
    setStage("DONE")
  };
  useEffect(() => {
    const pdfjsLib = require("pdfjs-dist");
    const PDFJS_VERSION = pdfjsLib.version;
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
  }, []);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer">Begin Recruitment</Button>
      </DialogTrigger>
      {stage == "shortlist" && (
        <DialogContent>
          <DialogTitle>Upload CVs of Candidates</DialogTitle>
	  <div className="flex justify-between">
          <p>Files selected: {files.length}</p>
	  <Button variant="outline" onClick={()=>{setFiles([])}}>Clear Files</Button>
	  </div>
          <div
            {...getRootProps()}
            className="h-[200px] flex justify-center items-center cursor-pointer border border-2 rounded"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="font-bold">Drop the files here ...</p>
            ) : (
              <p className="font-bold">
                Drag 'n' drop some files here, or click to select files.
              </p>
            )}
          </div>
          <Input
            type="number"
            placeholder="Match Score"
            onChange={(e: any) => setMatchScore(e.target.value)}
          />
          <Button onClick={shortlist}>Shortlist</Button>
        </DialogContent>
      )}

      {stage == "loading" && (
        <DialogContent>
          <DialogTitle>LOADING</DialogTitle>
          <div className="flex justify-center items-center font-bold font-spaceG">
            Loading! Please Wait!
          </div>
        </DialogContent>
      )}

      {stage == "interview" && (
        <DialogContent>
          <DialogTitle>Interview Email</DialogTitle>
          <p className="font-bold text-sm">Shortlisted Candidates:</p>
          <div className="flex flex-wrap gap-2 max-h-[100px]">
            {shortlistedCandidates.map((email: any) => {
              return (
                <div
                  key={email}
                  className="text-sm p-2 border rounded rounded-2"
                >
                  {email}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-sm">Recruiting Email Address:</p>
              <Input type="email" placeholder="sakaarsri1904@gmail.com" onChange={(e:any)=>{setRecEmail(e.target.value)}}/>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-sm">
                Recruiting Email Password/App password when 2FA Enabled:
              </p>
              <Input type="email" onChange={(e:any)=>{setRecEmailPass(e.target.value)}}/>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-sm">
		Email Subject
              </p>
              <Input type="text" onChange={(e:any)=>{setEmailSubject(e.target.value)}}/>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold text-sm">Email Content:</p>
              <Textarea onChange={(e:any)=>{setEmailText(e.target.value)}}/>
            </div>
          </div>
          <Button onClick={interview}>Email</Button>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function Logs() {
  const state = useLogStore();
  return (
    <div className="h-1/2 w-full border p-4">
      <p className="text-md font-bold font-spaceG">Logs</p>
      <div>
        {state.logs.map((log, id) => {
          return (
            <div key={id} className="font-bold">
              {log}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function JobAction() {
  let [deleteJobId, setDeleteJobId] = useState(-1);
  let jobsToBeAdded: any = null;
  let [jobsToBeAddedJSON, setJobsToBeAddedJSON] = useState("");
  let [jobsToBeAddedCSV, setJobsToBeAddedCSV] = useState("");
  const [transition, setTransition] = useState(0);

  const logState = useLogStore();
  const uc = useUpdateCheck();
  useEffect(() => {
    console.log(transition);
  }, [transition]);
  const deleteJobAction = async (e: any) => {
    try {
      ("use server");
      await deleteJobSummary(deleteJobId);
      uc.setUC();
      logState.addLog("Job Deletion: Jobs deleted Successfully");
    } catch (e: any) {
      console.error(e);
    }
    setTransition(transition + 1);
    console.log(deleteJobId);
  };

  const addJobsJSON = async (e: any) => {
    try {
      ("use server");
      await addJobJSON(JSON.parse(jobsToBeAddedJSON));
      logState.addLog("Job Addition: Jobs Added Successfully");
      uc.setUC();
    } catch (e: any) {
      logState.addLog("Job Addition: Incorrect JSON Syntax");
    }
    setJobsToBeAddedJSON("");
  };
  const addJobsCSV = async (e: any) => {
    try {
      ("use server");
      await addJobCSV(jobsToBeAddedCSV);
      logState.addLog("Job Addition: Jobs Added Successfully");
      uc.setUC();
    } catch (e: any) {
      logState.addLog("Job Addition: Incorrect JSON Syntax");
    }
    setJobsToBeAddedCSV("");
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
                <Tabs defaultValue="csv">
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
                        <Textarea
                          placeholder='Job Title,Job Description,
			  Software Engineer," Description:
			  We are seeking a skilled Software Engineer to design, develop, and maintain software applications. The ideal candidate will write efficient code, troubleshoot issues, and collaborate with teams to deliver high-quality solutions."
			'
                          onChange={(e) => setJobsToBeAddedCSV(e.target.value)}
                          className="overflow-auto max-h-[200px]"
                        />
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className="cursor-pointer w-full"
                            onClick={addJobsCSV}
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
                          Use JSON [ jobTitle, jobDescr ]
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
                    setDeleteJobId(e.target.value);
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
