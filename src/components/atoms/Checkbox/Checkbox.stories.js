import Checkbox from "./Checkbox";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: "Checkbox id",
    },
    label: {
      control: 'text',
      description: "Checkbox label",
    },
    value: {
      control: 'text',
      description: "Checkbox value",
    },
    name: {
      control: 'text',
      description: "Checkbox name",
    },
    className: {
      control: 'text',
      description: "Checkbox className",
    },
    onchange: {
      action: "changed",
      description: "Checkbox onchange",
    },
  },
};

export const Default = {
  args: {
    id: "checkbox",
    label: "Checkbox",
    value: "checkbox",
    name: "checkbox",
    className: "",
  },
};

