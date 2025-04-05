'use server'

import axios from "axios"

export async function deleteJobSummary(jobID: number) {
  await axios.post('http://127.0.0.1:5000/api/deleteJobSummary', {'jobID': jobID})
}

export async function addJobJSON(jobs: any) {
  // console.log(jobs);
  await axios.post('http://127.0.0.1:5000/api/addJobDSJSON', {jobs})
}
