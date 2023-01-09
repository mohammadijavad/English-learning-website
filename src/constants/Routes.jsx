import { v4 as uuidv4 } from "uuid";

import {
  Dashboard,
  Profile,
  Lessons,
  Teachers,
  FavoriteTeachers,
  FavoriteProducts,
  Ecommer,
  Movies,
  TeacherInfo,
} from "../screens/index";
export const Routers = [
  {
    path: "/",
    id: uuidv4(),
    componet: <Dashboard />,
    breadcrumb: " داشبورد   ",
  },
  {
    path: "/information",
    id: uuidv4(),
    componet: <Profile />,
    breadcrumb: "/ حساب کاربری ",
  },
  {
    path: "/lessons",
    id: uuidv4(),
    componet: <Lessons />,
    breadcrumb: "/ کلاس ها",
  },
  {
    path: "/teachers",
    id: uuidv4(),
    componet: <Teachers />,
    breadcrumb: " / استادزبان آنلاین  ",
  },
  {
    path: "/teachers/:id",
    id: uuidv4(),
    componet: <TeacherInfo />,
    breadcrumb: " / جزئیات ",
  },
  {
    path: "/favorite-teachers",
    id: uuidv4(),
    componet: <FavoriteTeachers />,
    breadcrumb: " / اساتید مورد علاقه ",
  },
  {
    path: "/favorite-products",
    id: uuidv4(),
    componet: <FavoriteProducts />,
    breadcrumb: " / محصولات مورد علاقه ",
  },
  {
    path: "/e-commer",
    id: uuidv4(),
    componet: <Ecommer />,
    breadcrumb: " /فروشگاه",
  },
  {
    path: "/movies",
    id: uuidv4(),
    componet: <Movies />,
    breadcrumb: " / تماشای ویدیو",
  },
];
