import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    alternate: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(props) {
    return (
      <Card {...props} className="w-[320px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardContent>
          <p>Long text in card content that should span multiple lines.</p>
        </CardContent>

        <CardFooter>
          <Button>Footer Button</Button>
        </CardFooter>
      </Card>
    );
  },
};
