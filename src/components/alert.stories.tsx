import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import {
  AlertCircle,
  AlertCircleIcon,
  AlertTriangleIcon,
  InfoIcon,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: ["default", "destructive", "error", "warning"],
      control: "select",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render(props) {
    return (
      <Alert {...props}>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Message explaining why the heads up.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render(props) {
    return (
      <Alert {...props}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Message explaining the error.</AlertDescription>
      </Alert>
    );
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
  render(props) {
    return (
      <Alert {...props}>
        <AlertCircleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Message explaining the error.</AlertDescription>
      </Alert>
    );
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render(props) {
    return (
      <Alert {...props}>
        <AlertTriangleIcon className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Message explaining the warning.</AlertDescription>
      </Alert>
    );
  },
};
