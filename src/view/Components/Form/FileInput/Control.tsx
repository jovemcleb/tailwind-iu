import { ChangeEvent, ComponentProps } from 'react';
import { useFileInput } from '../../../../hooks/useFileInput';

export type ControlProps = ComponentProps<'input'>;

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected({ target }: ChangeEvent<HTMLInputElement>) {
    if (!target.files?.length) {
      return '';
    }

    const files = Array.from(target.files);

    onFilesSelected(files);
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      onChange={handleFilesSelected}
    />
  );
}
