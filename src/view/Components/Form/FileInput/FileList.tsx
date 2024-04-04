import { useFileInput } from '../../../../hooks/useFileInput';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FileItem } from './FileItem';

export function FileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size }) => (
        <FileItem key={name} name={name} size={size} state="progress" />
      ))}
    </div>
  );
}
