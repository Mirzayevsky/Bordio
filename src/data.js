import { COLUMN_STATUS } from "./Constants/type";
const {newTask,inProgress,scheduled,completed}= COLUMN_STATUS


export const data = [
  {
    id:"newTask",
    label:"New task",
    status:newTask,
    items:[
      {
        id: 1,
        title: "Check email",
        date: "0:20h",
        bg: "#ABE9CE",
      },
      {
        id: 2,
        title: "Compare PPC agencies and make a report for Steven",
        date: "3:00h",
        bg: "#D8DCFF",
      },
      {
        id: 3,
        title: "Meeting with Amanda (PR department)",
        date: "0 : 20h",
        bg: "#ABE9CE",
      },
      {
        id: 4,
        title: "Get Patrick's approval for homepage new design",
        date: "0:20h",
        bg: "#D8DCFF",
      },
    ]
  },
  {
    id:"scheduled",
    label:"Scheduled",
    status:scheduled,
    items:[
      {
        id: 5,
        title: "Check email",
        date: "0:20h",
        bg: "#FFDFBA",
      },
      {
        id: 6,
        title: 'Write a blogpost "7 best strategies for SEO in 2020"',
        date: "3:00h",
        bg: "#FEC6B7",
      },
      {
        id: 7,
        title: "New Ad copies for Manamaja",
        date: "0 : 20h",
        bg: "#D9E6A2",
      },
    ]
  },
  {
    id:"inProgress",
    label:"In progress",
    status:inProgress,
    items:[
      {
        id: 8,
        title: "Check email",
        date: "0:20h",
        bg: "#FFDFBA",
      },
      {
        id: 9,
        title: "Record a video comment about last week's analytics report",
        date: "3:00h",
        bg: "#F2BAE1",
      },
      {
        id: 10,
        title: "Process all resumes for Content Marketer position",
        date: "0:45h",
        bg: "#FFDFBA",
      },
      
    ]
  },
  {
    id:"completed",
    label:"Completed",
    status:completed,
    items:[
      {
        id: 11,
        title: "Check email",
        date: "2:30h",
        bg: "#F0F0F0",
      },
      {
        id: 12,
        title: "Weekly planning session",
        date: "3:00h",
        bg: "#F0F0F0",
      },
      {
        id: 13,
        title: "Create 5+ target audiences in Facebook for Samsung ...",
        date: "0 : 20h",
        bg: "#F0F0F0",
      },
      {
        id: 14,
        title: "Check FB Banner Design and give feedback",
        date: "0 : 20h",
        bg: "#F0F0F0",
      },
      {
        id: 15,
        title: "Check email",
        date: "0 : 20h",
        bg: "#F0F0F0",
      },
    ]
  }

]

