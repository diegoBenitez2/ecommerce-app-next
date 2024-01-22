import React from 'react';
import { Collapse } from './Collapse';


export default {
  title: 'Components/Atoms/Collapse',
  component: Collapse,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    content: { control: 'object' },
  },
};


export const Default = {
  args: {
    label: 'Click para expandir',
    content: <>
    <li className="py-2 text-left text-dark-primary flex items-center">
      item 1
    </li>
    <li className="py-2 text-left text-dark-primary flex items-center">
      item 2
    </li>
    <li className="py-2 text-left text-dark-primary flex items-center">
      item 3
    </li>
    <li className="py-2 text-left text-dark-primary flex items-center">
      item 4
    </li>
  </>,
  }
};

export const CustomContent = {
  args: {
    ...Default.args,
    content: <div>Contenido personalizado aquí</div>,
  }
};
