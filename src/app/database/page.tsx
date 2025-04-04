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
    <Tabs defaultValue="jobDesc">
      <TabsList>
        <TabsTrigger value="jobDesc" className="cursor-pointer">jobDescriptions</TabsTrigger>
        <TabsTrigger value="jobSumm" className="cursor-pointer">jobSummaries</TabsTrigger>
      </TabsList>
      <TabsContent value="jobDesc">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14 font-bold">JobID</TableHead>
              <TableHead className="w-50 text-left font-bold">Title</TableHead>
              <TableHead className="text-left font-bold">Description</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="">
          <Table>
            <TableBody>
              {jobDescriptionsJSON.map((job: any, id: number): any => {
                return (
                  <TableRow key={id}>
                    <TableCell className="min-w-14 text-center">{job.jobId}</TableCell>
                    <TableCell className="overflow-auto font-bold">{job.title}</TableCell>
                    <TableCell className="max-w-screen overflow-auto">{job.description}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
      <TabsContent value="jobSumm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14 font-bold">JobID</TableHead>
              <TableHead className="w-50 font-bold">Title</TableHead>
              <TableHead className="w-100 font-bold">Description</TableHead>
              <TableHead className="w-50 font-bold">Key Skills</TableHead>
              <TableHead className="w-50 font-bold">Required Experiences</TableHead>
              <TableHead className="w-50 font-bold">Educational Qualifications</TableHead>
              <TableHead className="w-50 font-bold">Resposibilities</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="">
          <Table>
            <TableBody>
              {jobSummariesJSON.map((job: any, id: number): any => {
                return (
                  <TableRow key={id}>
                    <TableCell className="min-w-14 text-center">{job.jobId}</TableCell>
                    <TableCell className="max-w-50 overflow-auto font-bold">{job.title}</TableCell>
                    <TableCell className="max-w-100 overflow-auto">{job.description}</TableCell>
                    <TableCell className="max-w-50 overflow-auto">{job.reqSkills}</TableCell>
                    <TableCell className="max-w-50 overflow-auto">{job.reqExp}</TableCell>
                    <TableCell className="max-w-50 overflow-auto">{job.eduQual}</TableCell>
                    <TableCell className="max-w-50 overflow-auto">{job.resp}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </Tabs>
  );
}
