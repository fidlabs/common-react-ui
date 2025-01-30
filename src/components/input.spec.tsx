import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input component", () => {
  it("renders correctly", () => {
    const { container } = render(<Input placeholder="Email" />);
    expect(container).toMatchSnapshot();
  });
});
