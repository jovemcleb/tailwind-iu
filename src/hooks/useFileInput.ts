import { useContext } from 'react';
import { FileInputContext } from '../context/FileInputContext';

export function useFileInput() {
  return useContext(FileInputContext);
}
