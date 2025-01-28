import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: "select",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Icon: Story = {
  args: {
    children: <ChevronRight />,
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: [<MailOpen />, "Login with Email"],
  },
};

export const Loading: Story = {
  args: {
    children: [<Loader2 className="animate-spin" />, "Please wait"],
    disabled: true,
  },
};
