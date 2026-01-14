import { create } from 'zustand';
import type { Task } from '../types/dashboard';
import { tasks } from '../data/mockData';

interface DashboardState {
    tasks : Task[];
}

export const useDashboardStore = create<DashboardState>(()=> ({
    tasks,
}))