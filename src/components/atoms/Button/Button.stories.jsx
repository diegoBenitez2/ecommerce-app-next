import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    text : {
      description: 'Label of the button',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'w-full'],
      description: 'Size of the button',
      value: 'small',
    },
    iconColor: {
      control: 'color',
      description: 'Color of the icon',
      value: '#fff',
    },
    style: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'fourty', 'fifty'],
      description: 'Style background al foreground of the button',
      value: 'tertiary',
    },
    onclick: {
      action: 'clicked',
      description: 'Action when the button is clicked',
    }
  },
};

export const Primary = {
  args: {
    text: 'Button',
    disabled: false,
    style: 'primary',
  },
};
export const Secondary = {
  args: {
    ...Primary.args,
    style: 'secondary',
  },
};

export const Tertiary = {
  args: {
    ...Primary.args,
    style: 'tertiary',
  },
};
export const Fourty = {
  args: {
    ...Primary.args,
    style: 'fourty',
  },
};
export const Fifty = {
  args: {
    ...Primary.args,
    style: 'Fifty',
  },
};
export const widthFull = {
  args: {
    ...Primary.args,
    style: 'fourty',
    size: 'w-full',
  }
};
export const Disabled = {
  args: {
   ...Primary.args,
    disabled: true,
    style: 'secondary'
  },
};