import { useState } from "react";
import type { IUseLocalStorageProps, ITask } from "../types";

const useLocalStorage = ({ key, initialValue }: IUseLocalStorageProps) => {
  const [storedValue, setStoredValue] = useState<ITask[]>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as ITask[]) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: ITask[] | ((val: ITask[]) => ITask[])) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;
