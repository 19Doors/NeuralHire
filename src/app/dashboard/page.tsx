import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { FileMinus2, FilePlus2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex w-full justify-between">
      <div></div>
      <div className="flex gap-x-2">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FilePlus2 />
                Add Job
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Job</DialogTitle>
                <DialogDescription>
                  Add Job(s) via CSV format only!
                </DialogDescription>
              </DialogHeader>
              <Textarea />
              <DialogClose as>
                <Button variant="outline">Submit</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FileMinus2 />
                Remove Job
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
