"use client"
import { Button } from "@/components/ui/button";
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

export default function Dashboard() {
  let deleteJobId:number = 0;
  let jobsToBeAdded:any = null;
  const deleteJobAction = (e:any) => {
    console.log(deleteJobId)
  }
  const addJobsAction = (e:any) => {
    console.log(jobsToBeAdded)
  }
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
                  <DialogDescription>
                    Add Job(s) via CSV format only!{" "}
                    <b>[ JobTitle, JobDescription ]</b>
                  </DialogDescription>
                </DialogHeader>
                <Textarea />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="cursor-pointer"
                    >
                      Submit
                    </Button>
                  </DialogClose>
                </DialogFooter>
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
                <Input type="number" onChange={(e:any)=>{deleteJobId=e.target.value}}/>
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
