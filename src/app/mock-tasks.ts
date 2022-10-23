import { Task } from "./Model/Task"
export const TASKS : Task[]= [
    {
        id: 1,
        text: 'Doctors appoinment', 
        day: 'May 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Metting at School', 
        day: 'May 6th at 3:30pm',
        remainder: true, 
    },
    {
        id: 3,
        text: 'Food shopping', 
        day: 'May 7th at 1:30pm',
        remainder: false,
    },
    {
        id: 4,
        text: 'Meatting with Teacher', 
        day: 'May 8th at 2:30pm',
        remainder: true,
    },
    {
        id: 5,
        text: 'Spacial day', 
        day: 'May 8th at 4:30pm',
        remainder: true,
    }
]