import { render } from "@testing-library/react";
import { InfoIcon } from "lucide-react";
import { describe, expect, it } from "vitest";
import { Alert, AlertDescription, AlertProps, AlertTitle } from "./alert";

type Variant = NonNullable<AlertProps["variant"]>;

const variants: Variant[] = ["default", "destructive", "error", "warning"];

describe("Button component", () => {
  it.each(variants)("renders correctly for variant %s", (variant) => {
    const { container } = render(
      <Alert variant={variant}>
        <InfoIcon />
        <AlertTitle>{variant} Alert</AlertTitle>
        <AlertDescription>
          Description of altert of variant {variant}
        </AlertDescription>
      </Alert>
    );
    expect(container).toMatchSnapshot();
  });
});
