import { create } from 'zustand';

interface LogState {
  logs: string[]; // An array of log messages
  addLog: (message: string) => void; // Function to add a new log
  clearLogs: () => void; // Function to clear all logs
}
interface updateCheck {
  uc: boolean,
  setUC: () => void;
}
interface jobsInterface {
  jobs: any;
  setJobs: (state: any) => void;
}
export const useLogStore = create<LogState>((set) => ({
  logs: [],

  addLog: (message) =>
    set((state) => ({
      logs: [`[${new Date().toLocaleTimeString()}] ${message}`, ...state.logs],
    })),

  clearLogs: () =>
    set({
      logs: [], // Reset to an empty array
    }),
}));

export const useJobStore= create<jobsInterface>((set) => ({
  jobs: "",
  setJobs: (job) =>
    set((state) => ({
      jobs: state
    })),
}));

export const useUpdateCheck = create<updateCheck>((set)=> ({
  uc: false,
  setUC: () =>
    set((state) => ({
      uc: true
    }))
}))

