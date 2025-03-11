import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton component", () => {
  it("renders correctly", () => {
    const { container } = render(<Skeleton />);
    expect(container).toMatchSnapshot();
  });
});
