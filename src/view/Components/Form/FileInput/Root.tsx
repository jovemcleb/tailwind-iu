import { ComponentProps } from 'react';
import { FileInputProvider } from '../../../../context/FileInputContext';

export type RootProps = ComponentProps<'div'>;

export function Root(props: RootProps) {
  return (
    <FileInputProvider>
      <div className="flex items-start gap-5" {...props} />
    </FileInputProvider>
  );
}
