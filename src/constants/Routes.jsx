import { v4 as uuidv4 } from 'uuid'

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
  SettingProfile,
  Notfind,
  SaveClass,
  Linter,
} from '../screens/index'

export const Routers = [
  {
    path: '/profile',
    id: uuidv4(),
    componet: <Dashboard />,
    breadcrumb: ' داشبورد   ',
  },
  {
    path: '/profile/information',
    id: uuidv4(),
    componet: <Profile />,
    breadcrumb: '/ حساب کاربری ',
  },
  {
    path: '/profile/lessons',
    id: uuidv4(),
    componet: <Lessons />,
    breadcrumb: '/ کلاس ها',
  },
  {
    path: '/profile/teachers',
    id: uuidv4(),
    componet: <Teachers />,
    breadcrumb: ' / استادزبان آنلاین  ',
  },
  {
    path: '/profile/teachers/:id',
    id: uuidv4(),
    componet: <TeacherInfo />,
    breadcrumb: ' / جزئیات ',
  },
  {
    path: '/profile/checkout/:id',
    id: uuidv4(),
    componet: <SaveClass />,
    breadcrumb: ' / ثبت کلاس ',
  },
  {
    path: '/profile/favorite-teachers',
    id: uuidv4(),
    componet: <FavoriteTeachers />,
    breadcrumb: ' / اساتید مورد علاقه ',
  },
  {
    path: '/profile/favorite-products',
    id: uuidv4(),
    componet: <FavoriteProducts />,
    breadcrumb: ' / محصولات مورد علاقه ',
  },
  {
    path: '/profile/e-commer',
    id: uuidv4(),
    componet: <Ecommer />,
    breadcrumb: ' /فروشگاه',
  },
  {
    path: '/profile/movies',
    id: uuidv4(),
    componet: <Movies />,
    breadcrumb: ' / تماشای ویدیو',
  },
  {
    path: '/profile/setting',
    id: uuidv4(),
    componet: <SettingProfile />,
    breadcrumb: ' /  تنظیمات پروفایل',
  },
  {
    path: '/profile/linter',
    id: uuidv4(),
    componet: <Linter />,
    breadcrumb: ' /   جعبه لاینتر',
  },
]
