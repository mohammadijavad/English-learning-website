import {
  BsPieChart,
  BsAppIndicator,
  BsReverseLayoutSidebarReverse,
} from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
export const lists = [
  {
    index: 0,
    id: uuidv4(),
    title: "داشبورد",
    icon: <BsPieChart className="iconSidebarTab" />,
    children: [
      {
        id: uuidv4(),
        title: "داشبورد دانش آموز",
        to: "/profile",
      },
      {
        id: uuidv4(),
        title: "انتخاب استاد",
        to: "/profile/teachers",
      },
      {
        id: uuidv4(),
        title: "اساتید مورد علاقه",
        to: "/profile/favorite-teachers",
      },
      {
        id: uuidv4(),
        title: "محصولات مورد علاقه",
        to: "/profile/favorite-products",
      },
      {
        id: uuidv4(),
        title: "تنظیمات پروفایل",
        to: "/profile/setting",
      },
      {
        id: uuidv4(),
        title: " صفحه 404",
        to: "/profile/notfind",
      },
    ],
  },
  {
    index: 1,
    id: uuidv4(),
    title: "برنامه ها",
    icon: <BsAppIndicator className="iconSidebarTab" />,
    children: [
      {
        id: uuidv4(),
        title: "فیلم ها ",
        to: "profile/movies",
      },
      {
        id: uuidv4(),
        title: "فروشگاه",
        to: "profile/e-commer",
      },
    ],
  },
  {
    index: 2,
    id: uuidv4(),
    title: "نمایش",
    icon: <BsReverseLayoutSidebarReverse className="iconSidebarTab" />,
    children: [
      {
        id: uuidv4(),
        title: "افقی",
        event: "horizontal",
      },
    ],
  },
];
export const pages = [
  {
    id: 1,
    title: "داشبورد",
    icon: <BsPieChart />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
  {
    id: 2,
    title: "برنامه ها",
    icon: <BsAppIndicator />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
  {
    id: 3,
    title: "نمایش",
    icon: <BsReverseLayoutSidebarReverse />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
];
export const components = [
  {
    id: 1,
    title: "داشبورد",
    icon: <BsPieChart />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
  {
    id: 2,
    title: "برنامه ها",
    icon: <BsAppIndicator />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
  {
    id: 3,
    title: "نمایش",
    icon: <BsReverseLayoutSidebarReverse />,
    children: [
      {
        id: 1,
        title: "",
        to: "",
      },
    ],
  },
];
