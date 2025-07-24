import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta = {
  title: "Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
    disabled: true,
  },
};
