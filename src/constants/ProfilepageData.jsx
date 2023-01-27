import { v4 as uuidv4 } from 'uuid'
import teacher1 from '../assets/images/users/avatar-1.jpg'
import teacher2 from '../assets/images/users/avatar-2.jpg'
import teacher3 from '../assets/images/users/avatar-3.jpg'
import teacher4 from '../assets/images/users/avatar-4.jpg'

import teacher1Vedio from '../assets/images/just static data/teacher1.mp4'
import teacher2Vedio from '../assets/images/just static data/teacher2.mp4'
import teacher3Vedio from '../assets/images/just static data/teacher3.mp4'
import teacher4Vedio from '../assets/images/just static data/teacher4.mp4'
const date = new Date()

const Teachers = [
  {
    id: uuidv4(),
    name: 'name1 fammily1',
    photo: teacher1,
    language: 'انگلیسی',
    lang: 'use',
    level: 'متوسط',
    xpertise: 'IELTS',
    Skills: 'زبان عمومی ,IELTS,اسپیکینگ',
    testSession: 'آزمایشی',
    onehourPriceSession: 100000,
    src: teacher1Vedio,
    priceLevel: 'رایگان',
  },
  {
    id: uuidv4(),
    name: 'name1 fammily1',
    photo: teacher2,
    language: 'us',
    level: 'متوسط',
    xpertise: 'IELTS',
    Skills: 'زبان عمومی ,IELTS,اسپیکینگ',
    testSession: 'آزمایشی',
    onehourPriceSession: 100000,
    src: teacher2Vedio,
    priceLevel: 'رایگان',
  },
  {
    id: uuidv4(),
    name: 'name1 fammily1',
    photo: teacher3,
    language: 'us',
    level: 'متوسط',
    xpertise: 'IELTS',
    Skills: 'زبان عمومی ,IELTS,اسپیکینگ',
    testSession: 'آزمایشی',
    onehourPriceSession: 100000,
    src: teacher3Vedio,
    priceLevel: 'رایگان',
  },
  {
    id: uuidv4(),
    name: 'name1 fammily1',
    photo: teacher4,
    language: 'us',
    level: 'متوسط',
    xpertise: 'IELTS',
    Skills: 'زبان عمومی ,IELTS,اسپیکینگ',
    testSession: 'آزمایشی',
    onehourPriceSession: 100000,
    src: teacher4Vedio,
    priceLevel: 'رایگان',
  },
]
const reservedClasses = [
  {
    id: uuidv4(),
    name: ' نازنین امیری ',
    photo: teacher1,
    reserved: 1,
    unreserved: 10,
  },
]
const ComplatedClasses = [
  {
    id: uuidv4(),
    name: ' نام تستی',
    photo: teacher2,
    reserved: 1,
    unreserved: 10,
  },
]
const canceledClasses = [
  {
    id: uuidv4(),
    name: 'نام تستی',
    photo: teacher4,
    reserved: 1,
    unreserved: 10,
  },
]
const userAchievements = []
const favoriteProducts = [{ productName: '', id: uuidv4(), price: '' }]
const favoriteTeachers = [
  {
    id: uuidv4(),
    name: 'نام تستی',
    photo: teacher3,
    onehourPriceSession: 100000,
    reserved: 1,
    unreserved: 10,
  },
]
const rechargeWallet = []
const userProgressBar = []
export {
  Teachers,
  canceledClasses,
  reservedClasses,
  ComplatedClasses,
  userAchievements,
  favoriteProducts,
  favoriteTeachers,
  rechargeWallet,
  userProgressBar,
}
const sidebarLinks = [
  { id: uuidv4(), link: '/', content: 'پروفایل' },
  { id: uuidv4(), link: '/teachers', content: 'اساتید' },
  { id: uuidv4(), link: '/favorite-teachers', content: 'اساتید مورد علاقه' },
  { id: uuidv4(), link: '/favorite-products', content: 'محصولات مورد علاقه' },
  {
    id: uuidv4(),
    link: '/comparison-others',
    content: 'مقایسه با دیگران',
  },
]
export { sidebarLinks }
