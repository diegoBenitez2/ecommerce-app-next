import ProductCard from "./ProductCard";
import Photo from '@assets/images/Photo.png';

export default {
  title: "Components/Atoms/ProductCard",
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: "ProductCard id",
    },
    title: {
      control: 'text',
      description: "The Dandy chair",
    },
    urlImage: {
      description: "ProductCard name",
    },
    altImage: {
      control: 'text',
      description: "ProductCard image",
    },
    price: {
      control: 'text',
      description: "ProductCard price",
    },
    addShoppingCard: {
      action: "clicked",
      description: "ProductCard onclick",
    },
  },
};

export const Default = {
  args: {
    id: "1",
    title: "Product 1",
    urlImage: Photo,
    altImage: "Product 1",
    price: "10.00",
  },
};

