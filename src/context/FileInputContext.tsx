import { createContext, ReactNode, useId, useState } from 'react';

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
  onRemoveFile: (name: string) => void;
};

interface FileInputProviderProps {
  children: ReactNode;
}

export const FileInputContext = createContext({} as FileInputContextType);

export function FileInputProvider({ children }: FileInputProviderProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  function onRemoveFile(name: string) {
    const filteredFiles = files.filter((file) => name !== file.name);
    setFiles(filteredFiles);
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onRemoveFile }}
    >
      {children}
    </FileInputContext.Provider>
  );
}
