import { IconHeadset, IconHome, IconShop } from "@/components/icons";

export const navigations = [
  {
    id: 0,
    title: "Home",
    path: "/",
    icon: <IconHome />,
  },
  {
    id: 1,
    title: "Shop",
    path: "/shop?name=&ingredients=&categories=",
    icon: <IconShop />,
  },
  {
    id: 2,
    title: "Contact Us",
    path: "/contact-us",
    icon: <IconHeadset />,
  },
];
