export interface TaskInterface {
  id?: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  createdAt: Date;
  updatedAt: Date;
}
