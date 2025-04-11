'use server'

import axios from "axios"

export async function getJobSummary() {
  const res = await axios.get("http://13.233.146.66:5000/api/getJobSummaries");
  // const res = await axios.get("http://127.0.0.1:5000/api/getJobSummaries");
  return res.data;
}

export async function deleteJobSummary(jobID: number) {
  await axios.post('http://13.233.146.66:5000/api/deleteJobSummary', { 'jobID': jobID })
}

export async function addJobJSON(jobs: any) {
  await axios.post('http://13.233.146.66:5000/api/addJobDSJSON', { jobs })
}

export async function addJobCSV(jobs: any) {
  await axios.post('http://13.233.146.66:5000/api/addJobDSCSV', { jobs })
}

export async function shortlistcandidates(files: any, id: any, matchScore: any) {
  let response = await axios.post('http://13.233.146.66:5000/api/shortlist', { files: files, id: id, matchScore: matchScore })
  response = response.data;
  return response;
}

export async function interviewServer(emails: any, recEmail: any, recPass: any, emailSubject: any, text: any) {
  let response = await axios.post('http://13.233.146.66:5000/api/interview', {
    emails: emails,
    recEmail: recEmail,
    recPass: recPass,
    emailSubject: emailSubject,
    text: text
  })
}
