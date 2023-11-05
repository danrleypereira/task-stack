interface ICardProps {
    name: string;
    tags: string[];
    text: string;
  }

interface IUseLocalStorageProps {
    key: string;
    initialValue: ITask[];
}

interface ITaskProps {
    task: ITask;
    path: number[];
    toggleTaskCompletion: (index: number) => void;
    handleTaskNameChange: (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

interface ICardPopudedProps {
    onClose: () => void;
}

interface ITask {
    text: string;
    completed: boolean;
    subtasks?: ITask[];
}

export type { IUseLocalStorageProps, ITask, ITaskProps, ICardPopudedProps, ICardProps };