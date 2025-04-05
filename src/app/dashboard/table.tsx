"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CandidateRDrop, JobAction, Logs, Recruit } from "../components";
import { FolderX } from "lucide-react";
import { useJobStore, useUpdateCheck } from "@/store/store";
import { useCallback, useEffect, useState } from "react";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import axios from "axios";
import { getJobSummary } from "../lib/actions";

export default function DBB() {
  const [jobSummariesJSON, setJobSummariesJSON] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSummaries = async () => {
    try {
      const data = await getJobSummary();
      setJobSummariesJSON(data);
    } catch (e) {
      console.error("Failed to load job summaries", e);
      setJobSummariesJSON([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummaries();
  }, []);

  return (
    <div className="flex w-full">
      <div className="h-screen w-1/3">
        <Table className="h-full w-full border">
          <TableHeader>
            <TableRow className="bg-primary">
              <TableHead className="w-14 font-bold text-center text-primary-foreground">
                JobID
              </TableHead>
              <TableHead className="w-50 text-center font-bold text-primary-foreground">
                Title
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="max-h-screen">
          <Table className="w-full border">
            <TableBody>
              {jobSummariesJSON.length != 0 &&
                jobSummariesJSON.map((job: any, id: number): any => {
                  return (
                    <Sheet key={id}>
                      <SheetTrigger asChild>
                        <TableRow key={id}>
                          <TableCell className="min-w-14 text-center">
                            {job.jobId}
                          </TableCell>
                          <TableCell className="overflow-auto font-bold text-center">
                            {job.title}
                          </TableCell>
                        </TableRow>
                      </SheetTrigger>
                      <SheetContent className="">
                        <SheetHeader>
                          <SheetTitle className="text-primary text-2xl font-spaceG font-bold -mb-6">
                            {job.title}
                          </SheetTitle>
                        </SheetHeader>
                        <div className="mx-4 flex flex-col gap-y-2 overflow-auto">
                          <div>
                            <p className="font-bold">Role Description</p>
                            <p className="text-sm">{job.description}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-bold">
                              Educational Qualifications
                            </p>
                            <p className="text-xs">{job.eduQual}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-bold">Required Experiences</p>
                            <p className="text-xs">{job.reqExp}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="font-bold">Responsibilities</p>
                            <p className="text-xs">{job.resp}</p>
                          </div>
                          <Separator />
                          <div className="">
                            <p className="font-bold">Key Skills</p>
                            <div className="flex flex-wrap gap-2 overflow-auto">
                              {job.reqSkills
                                .split(",")
                                .map((skill: any, id: number): any => (
                                  <div
                                    key={id}
                                    className="text-xs font-medium px-3 py-1 rounded bg-yellow-100 border rounded-xl border-2"
                                  >
                                    {skill}
                                  </div>
                                ))}
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <Recruit jobID={job.jobId} />
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        {jobSummariesJSON.length == 0 && (
          <div className="h-[80vh] border w-full flex flex-col justify-center items-center">
            <FolderX />
            <p className="text-sm font-medium">
              No Jobs Found! Begin by adding new jobs.
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full ">
        <div className="h-1/2 w-full border p-4 flex">
          <JobAction js={fetchSummaries}/>
          <Button className="ml-2" onClick={()=> fetchSummaries()}>
            Reload Summaries
          </Button>
        </div>
        <Logs />
      </div>
    </div>
  );
}
