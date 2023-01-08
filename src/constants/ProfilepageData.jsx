import { v4 as uuidv4 } from 'uuid'
import teacher1 from '../assets/images/users/avatar-1.jpg'
import teacher2 from '../assets/images/users/avatar-2.jpg'
import teacher3 from '../assets/images/users/avatar-3.jpg'
import teacher4 from '../assets/images/users/avatar-4.jpg'
const date = new Date()
const userInfo = [
  {
    userId: uuidv4(),
    name: 'جواد محمدی ',
    languages: 'us',
    golas: 'IELTS',
    siningTime: date,
  },
]
const Teachers = [
  {
    id: uuidv4(),
    name: 'name1 fammily1',
    photo: teacher1,
    language: 'us',
    level: 'متوسط',
    ثxpertise: 'IELTS',
    Skills: 'زبان عمومی ,IELTS,اسپیکینگ',
    testSession: 'آزمایشی',
    onehourPriceSession: 100000,
  },
]
const reservedClass = []
const reservedClasses = []
const ComplatedClasses = []
const userAchievements = []
const favoriteProducts = []
const favoriteTeachers = []
const rechargeWallet = []
const userProgressBar = []
export {
  userInfo,
  Teachers,
  reservedClass,
  reservedClasses,
  ComplatedClasses,
  userAchievements,
  favoriteProducts,
  favoriteTeachers,
  rechargeWallet,
  userProgressBar,
}
