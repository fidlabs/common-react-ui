import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, ButtonProps } from "./button";

type Variant = NonNullable<ButtonProps["variant"]>;
type Size = NonNullable<ButtonProps["size"]>;

const variants: Variant[] = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];

const sizes: Size[] = ["default", "sm", "lg", "icon"];

const combinations = variants.flatMap((variant) =>
  sizes.map((size) => [variant, size] as [Variant, Size])
);

describe("Button component", () => {
  it.each(combinations)(
    "renders correctly for variant %s and size %s",
    (variant, size) => {
      const { container } = render(
        <Button variant={variant} size={size}>
          Label
        </Button>
      );
      expect(container).toMatchSnapshot();
    }
  );
});
