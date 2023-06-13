// create a story for the button component

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "default",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

// create a story for each permutation of the button component

export const DefaultSmall: Story = {
  args: {
    variant: "default",
    size: "sm",
  },
};

export const DefaultMedium: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};

export const DefaultLarge: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    size: "sm",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    size: "default",
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "lg",
  },
};

export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "sm",
  },
};

export const OutlineMedium: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
};

export const OutlineLarge: Story = {
  args: {
    variant: "outline",
    size: "lg",
  },
};

export const DestructiveSmall: Story = {
  args: {
    variant: "destructive",
    size: "sm",
  },
};

export const DestructiveMedium: Story = {
  args: {
    variant: "destructive",
    size: "default",
  },
};

export const DestructiveLarge: Story = {
  args: {
    variant: "destructive",
    size: "lg",
  },
};

export const GhostSmall: Story = {
  args: {
    variant: "ghost",
    size: "sm",
  },
};

export const GhostMedium: Story = {
  args: {
    variant: "ghost",
    size: "default",
  },
};

export const GhostLarge: Story = {
  args: {
    variant: "ghost",
    size: "lg",
  },
};

export const LinkSmall: Story = {
  args: {
    variant: "link",
    size: "sm",
  },
};

export const LinkMedium: Story = {
  args: {
    variant: "link",
    size: "default",
  },
};

export const LinkLarge: Story = {
  args: {
    variant: "link",
    size: "lg",
  },
};
