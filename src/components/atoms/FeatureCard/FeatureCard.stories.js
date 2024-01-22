import FeatureCard from "./FeatureCard";

export default {
  title: "Components/Atoms/FeatureCard",
  component: FeatureCard,
  argTypes: {
    title:  "text",
    desc: "text",
    iconType: {
      control: "select",
      options: ["delivery", "checkCircle", "creditCard", "recycled"],
    },
    color: {
      control: "select",
      options: ["primary", "dark-primary", "border-gray", "white", "border-dark"],
      description: "color style",
    },
    background: {
      control: "select",
      options: ["primary", "dark-primary", "border-gray", "white", "border-dark"],
      description: "background style",
    }
  }
};

export const base = {
  args:{
    title: "Free Delivery",
    desc: "Free shipping on all orders",
    color: "primary",
    background: "white",
    iconType: "",
  }
};
export const delivery = {
  args:{
    iconType: "delivery",
    ...base.args,
  }
};