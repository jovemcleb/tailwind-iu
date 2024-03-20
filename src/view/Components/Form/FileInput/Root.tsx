import { ComponentProps } from 'react';

export type RootProps = ComponentProps<'div'>;

export function Root(props: RootProps) {
  return <div className="flex items-start gap-5" {...props} />;
}
