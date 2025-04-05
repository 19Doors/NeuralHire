'use server'

import axios from "axios"

export async function deleteJobSummary(jobID: number) {
  await axios.post("http://13.233.146.66/api/deleteJobSummary", { jobID: jobID });
}

export async function addJobJSON(jobs: any) {
  await axios.post("http://13.233.146.66/api/addJobDSJSON", { jobs });
}

export async function addJobCSV(jobs: any) {
  await axios.post("http://13.233.146.66/api/addJobDSCSV", { jobs });
}

export async function shortlistcandidates(files: any, id: any, matchScore: any) {
  let response = await axios.post("http://13.233.146.66/api/shortlist", {
    files: files,
    id: id,
    matchScore: matchScore,
  });
  return response.data;
}

export async function interviewServer(emails: any, recEmail: any, recPass: any, emailSubject: any, text: any) {
  await axios.post("http://13.233.146.66/api/interview", {
    emails: emails,
    recEmail: recEmail,
    recPass: recPass,
    emailSubject: emailSubject,
    text: text,
  });
}
