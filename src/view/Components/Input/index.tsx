import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>
export function Prefix(props: PrefixProps) {
  return <div {...props}></div>
}

type ControlProps = ComponentProps<'input'>
export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    />
  )
}

interface RootProps extends ComponentProps<'div'> {
  className?: string
}

export function Root(props: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
