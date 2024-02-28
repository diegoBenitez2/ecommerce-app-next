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
      options: ['small', 'medium', 'wFull'],
      description: 'Size of the button',
      value: 'small',
    },
    variant: {
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
    variant: 'primary',
    hasIcon: true,
  },
};
export const Secondary = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    hasIcon: false,
  },
};

export const Tertiary = {
  args: {
    ...Primary.args,
    variant: 'tertiary',
  },
};
export const Fourty = {
  args: {
    ...Primary.args,
    variant: 'fourty',
  },
};
export const Fifty = {
  args: {
    ...Primary.args,
    variant: 'fifty',
  },
};
export const widthFull = {
  args: {
    ...Primary.args,
    variant: 'fourty',
    size: 'w-full',
  }
};
export const Disabled = {
  args: {
   ...Primary.args,
    disabled: true,
    variant: 'secondary'
  },
};