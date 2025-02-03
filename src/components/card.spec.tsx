import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardContent>
          <p>Text in the card content.</p>
        </CardContent>

        <CardFooter>
          <Button>Footer Button</Button>
        </CardFooter>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });
});
