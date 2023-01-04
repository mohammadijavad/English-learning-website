import { v4 as uuidv4 } from 'uuid'
import { Dashboard, Profile, Lessons, Teachers } from '../screens/index'
export const Routers = [
  {
    path: '/',
    id: uuidv4(),
    componet: <Dashboard />,
    breadcrumb: ' داشبورد   ',
  },
  {
    path: '/information',
    id: uuidv4(),
    componet: <Profile />,
    breadcrumb: '/ حساب کاربری ',
  },
  {
    path: '/lessons',
    id: uuidv4(),
    componet: <Lessons />,
    breadcrumb: '/ کلاس ها',
  },
  {
    path: '/teachers',
    id: uuidv4(),
    componet: <Teachers />,
    breadcrumb: ' / استادزبان آنلاین  ',
  },
]
