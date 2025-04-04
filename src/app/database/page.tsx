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

export default async function Database() {
  let jobDescriptions = await fetch(
    "http://127.0.0.1:5000/api/getJobDescriptions",
  );
  let jobDescriptionsJSON = await jobDescriptions.json();
  let jobSummaries = await fetch("http://127.0.0.1:5000/api/getJobSummaries");
  let jobSummariesJSON = await jobSummaries.json();

  return (
    <div>
      <Table className="w-1/3 border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-14 font-bold text-center">JobID</TableHead>
            <TableHead className="w-50 text-center font-bold">Title</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <div className="">
        <Table className="w-1/3 border">
          <TableBody>
            {jobSummariesJSON.map((job: any, id: number): any => {
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
                      <SheetTitle>{job.title}</SheetTitle>
                    </SheetHeader>
                    <div className="mx-4 flex flex-col gap-y-2">
                      <div>
                        <p className="font-bold">Role Description</p>
                        <p className="text-sm ">{job.description}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-bold">Educational Qualifications</p>
                        <p className="text-sm">{job.eduQual}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-bold">Required Experiences</p>
                        <p className="text-sm">{job.reqExp}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-bold">Responsibilities</p>
                        <p className="text-sm">{job.resp}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-bold">Key Skills</p>
                        <p className="text-sm">{job.reqSkills}</p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
