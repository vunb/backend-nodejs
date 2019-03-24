import * as mongoose from "mongoose";

export interface IToDo extends mongoose.Document {
  _id: string;
  __v: number;
  text: string;
  isDone: boolean;
}

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  isDone: Boolean
});

export default mongoose.model<IToDo>('ToDo', ToDoSchema);

