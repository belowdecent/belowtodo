type ProjectData = string;
type ContextData = string;

type TodoData = {
  completed: boolean;
  priority: number;

  completionDate?: Date;
  creationDate?: Date;
  dueDate?: Date;

  description: string;
  projects: ProjectData[];
  contexts: ContextData[];

  raw: string;
};
