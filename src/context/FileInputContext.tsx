import { createContext, ReactNode, useId, useState } from 'react';

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[]) => void;
};

interface FileInputProviderProps {
  children: ReactNode;
}

export const FileInputContext = createContext({} as FileInputContextType);

export function FileInputProvider({ children }: FileInputProviderProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      {children}
    </FileInputContext.Provider>
  );
}
