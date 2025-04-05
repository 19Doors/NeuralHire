'use server'

import axios from "axios"

let url = "http://13.233.146.66/"
export async function deleteJobSummary(jobID: number) {
  await axios.post(url+'api/deleteJobSummary', {'jobID': jobID})
}

export async function addJobJSON(jobs: any) {
  // console.log(jobs);
  await axios.post(url+'api/addJobDSJSON', {jobs})
}

export async function addJobCSV(jobs: any) {
  // console.log(jobs);
  await axios.post(url+'api/addJobDSCSV', {jobs})
}

export async function shortlistcandidates(files: any, id:any ,matchScore:any) {
  let response = await axios.post(url+'api/shortlist', {files:files, id:id, matchScore:matchScore})
    response=response.data;
  return response;
}

export async function interviewServer(emails: any, recEmail:any ,recPass:any, emailSubject:any, text:any) {
  let response = await axios.post(url+'api/interview', {emails:emails, recEmail:recEmail, recPass:recPass,emailSubject:emailSubject, text:text})
}
