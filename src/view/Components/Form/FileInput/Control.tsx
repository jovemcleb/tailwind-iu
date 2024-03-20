import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from '../../../../hooks/useFileInput';

export type ControlProps = ComponentProps<'input'>;

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected({ target }: ChangeEvent<HTMLInputElement>) {
    if (!target.files?.length) {
      return '';
    }

    const files = Array.from(target.files);

    onFilesSelected(files, multiple);
  }

  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
}
