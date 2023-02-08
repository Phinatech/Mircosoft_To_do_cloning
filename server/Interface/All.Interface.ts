import mongoose from "mongoose";

export type TaskData ={
    title?: string;
    date?:string;
    remainder?:string;
    note?:string;
    status?:boolean
}
export interface TaskData2 {
    title?: string;
    date?:string;
    remainder?:string;
    note?:string;
    status?:boolean
}

