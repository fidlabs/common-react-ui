import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

describe("Select component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            <SelectItem value="option-1">Option 1</SelectItem>
            <SelectItem value="option-2">Option 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    expect(container).toMatchSnapshot();
  });
});
