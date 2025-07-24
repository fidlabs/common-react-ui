import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Slider } from "./slider";

describe("Slider component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Slider defaultValue={[50]} max={100} step={1} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly while disabled", () => {
    const { container } = render(
      <Slider defaultValue={[50]} max={100} step={1} />
    );
    expect(container).toMatchSnapshot();
  });
});
