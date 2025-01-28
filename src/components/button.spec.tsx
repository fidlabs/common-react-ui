import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button component", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>Label</Button>);
    expect(container).toMatchSnapshot();
  });
});
