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
        style: "#ABE9CE",
        status:"newTask",
        priority:"high"
      },
      {
        id: 2,
        title: "Compare PPC agencies and make a report for Steven",
        date: "3:00h",
        style: "#D8DCFF",
        status:"newTask",
        priority:"high"

      },
      {
        id: 3,
        title: "Meeting with Amanda (PR department)",
        date: "0 : 20h",
        style: "#ABE9CE",
        status:"newTask",
        priority:"low"

      },
      {
        id: 4,
        title: "Get Patrick's approval for homepage new design",
        date: "0:20h",
        style: "#D8DCFF",
        status:"newTask",
        priority:"medium"
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
        style: "#FFDFBA",
        status:"scheduled",
        priority:"medium"
      },
      {
        id: 6,
        title: 'Write a blogpost "7 best strategies for SEO in 2020"',
        date: "3:00h",
        style: "#FEC6B7",
        status:"scheduled",
        priority:"high"
      },
      {
        id: 7,
        title: "New Ad copies for Manamaja",
        date: "0 : 20h",
        style: "#D9E6A2",
        status:"scheduled",
        priority:"low"
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
        style: "#FFDFBA",
        status:"inProgress",
        priority:"medium"
      },
      {
        id: 9,
        title: "Record a video comment about last week's analytics report",
        date: "3:00h",
        style: "#F2BAE1",
        status:"inProgress",
        priority:"medium"
      },
      {
        id: 10,
        title: "Process all resumes for Content Marketer position",
        date: "0:45h",
        style: "#FFDFBA",
        status:"inProgress",
        priority:"low"
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
        style: "#FEC6B7",
        status:"completed",
        priority:"high"
      },
      {
        id: 12,
        title: "Weekly planning session",
        date: "3:00h",
        style: "#D9E6A2",
        status:"completed",
        priority:"medium"
      },
      {
        id: 13,
        title: "Create 5+ target audiences in Facebook for Samsung ...",
        date: "0 : 20h",
        style: "#FFDFBA",
        status:"completed",
        priority:"low"
      },
      {
        id: 14,
        title: "Check FB Banner Design and give feedback",
        date: "0 : 20h",
        style: "#ABE9CE",
        status:"completed",
        priority:"medium"
      },
      {
        id: 15,
        title: "Check email",
        date: "0 : 20h",
        style: "#FEC6B7",
        status:"completed",
        priority:"medium"
      },
    ]
  }

]

