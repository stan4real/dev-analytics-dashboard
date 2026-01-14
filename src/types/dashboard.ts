export type TaskStatus = 'todo' | 'in_progress' | 'completed' | 'failed';

export interface Task {
    id: string;
    title: string;
    project: string;
    tech: string;
    status: TaskStatus;
    date: string; 
}

