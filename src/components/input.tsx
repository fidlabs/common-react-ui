import type { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <input {...props} />;
}
