import { v4 as uuidv4 } from "uuid";
import teacher1 from "../assets/images/users/avatar-1.jpg";
import teacher2 from "../assets/images/users/avatar-2.jpg";
import teacher3 from "../assets/images/users/avatar-3.jpg";
import teacher4 from "../assets/images/users/avatar-4.jpg";
const date = new Date();
const userInfo = [
  {
    userId: uuidv4(),
    name: "جواد محمدی ",
    languages: "us",
    golas: "IELTS",
    siningTime: date,
  },
];
const Teachers = [
  {
    id: uuidv4(),
    name: "name1 fammily1",
    photo: teacher1,
    language: "us",
    level: "متوسط",
    ثxpertise: "IELTS",
    Skills: "زبان عمومی ,IELTS,اسپیکینگ",
    testSession: "آزمایشی",
    onehourPriceSession: 100000,
  },
  {
    id: uuidv4(),
    name: "name1 fammily1",
    photo: teacher2,
    language: "us",
    level: "متوسط",
    ثxpertise: "IELTS",
    Skills: "زبان عمومی ,IELTS,اسپیکینگ",
    testSession: "آزمایشی",
    onehourPriceSession: 100000,
  },
  {
    id: uuidv4(),
    name: "name1 fammily1",
    photo: teacher3,
    language: "us",
    level: "متوسط",
    ثxpertise: "IELTS",
    Skills: "زبان عمومی ,IELTS,اسپیکینگ",
    testSession: "آزمایشی",
    onehourPriceSession: 100000,
  },
  {
    id: uuidv4(),
    name: "name1 fammily1",
    photo: teacher4,
    language: "us",
    level: "متوسط",
    ثxpertise: "IELTS",
    Skills: "زبان عمومی ,IELTS,اسپیکینگ",
    testSession: "آزمایشی",
    onehourPriceSession: 100000,
  },
];
const reservedClasses = [
  {
    id: uuidv4(),
    name: " نازنین امیری ",
    photo: teacher1,
    reserved: 1,
    unreserved: 10,
  },
];
const ComplatedClasses = [
  {
    id: uuidv4(),
    name: " نام تستی",
    photo: teacher2,
    reserved: 1,
    unreserved: 10,
  },
];
const canceledClasses = [
  {
    id: uuidv4(),
    name: "نام تستی",
    photo: teacher4,
    reserved: 1,
    unreserved: 10,
  },
];
const userAchievements = [];
const favoriteProducts = [{ productName: "", id: uuidv4(), price: "" }];
const favoriteTeachers = [
  {
    id: uuidv4(),
    name: "نام تستی",
    photo: teacher3,
    onehourPriceSession: 100000,
    reserved: 1,
    unreserved: 10,
  },
];
const rechargeWallet = [];
const userProgressBar = [];
export {
  userInfo,
  Teachers,
  canceledClasses,
  reservedClasses,
  ComplatedClasses,
  userAchievements,
  favoriteProducts,
  favoriteTeachers,
  rechargeWallet,
  userProgressBar,
};
const sidebarLinks = [
  { id: uuidv4(), line: "/", content: "پروفایل" },
  { id: uuidv4(), line: "/teachers", content: "اساتید" },
  { id: uuidv4(), line: "/favorite-teachers", content: "اساتید مورد علاقه" },
  { id: uuidv4(), line: "/favorite-products", content: "محصولات مورد علاقه" },
  {
    id: uuidv4(),
    line: "/comparison-others",
    content: "مقایسه با دیگران",
  },
];
export { sidebarLinks };
