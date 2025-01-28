import type { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
