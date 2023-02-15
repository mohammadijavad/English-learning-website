import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  showAlertHandlerSuccess,
  showAlertHandlerError,
} from '../../../utils/alerts';
const TEACHER_URL = ' http://localhost:3100/Teachers';
const USER_URL = ' http://localhost:3100/user';
const BaseURL = ' http://localhost:3100/userClassesList';
const initialState = {
  teachers: [],
  teacher: {},
  classListSelectedOnProfile: [],
  classListTestingSelected: [],
  showModal: false,
  stateShowModalSetTime: false,
  user: [],
  status: 'idle', // 'idle' | 'loading' | 'sucess' | 'faild'
  error: null,
  selectTime: [],
  step: 0,
  modeDatepicker: false,
  countSelectUserAllow: 0,
  counter: 0,
  totalCount: 0,
};
export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async () => {
    const response = await axios.get(TEACHER_URL);
    return response.data;
  }
);

export const addTofavoriteTeacher = createAsyncThunk(
  'teacher/addTofavoriteTeacher',
  async (intial) => {
    const { id, isFavorite } = intial;
    const response = await axios.patch(`${TEACHER_URL}/${id}`, {
      isFavorite: isFavorite,
    });
    return response.data;
  }
);
export const addToClassListStudent = createAsyncThunk(
  'teacher/addToClassListStudent',
  async (intial) => {
    const { mode, finalDataPushToUserProfile } = intial;
    let { id, nameTeacher, photoTeacher, selectTimeArray, modeClass } =
      finalDataPushToUserProfile;
    !modeClass ? (modeClass = 'testing') : (modeClass = 'private');
    if (modeClass === 'testing') {
      const response = await axios({
        baseURL: 'http://localhost:3100/',
        method: 'post',
        url: 'userClassesListTesting',
        headers: { 'content-type': 'text/json' },
        data: {
          id,
          nameTeacher,
          photoTeacher,
          selectTimeArray,
          modeClass,
        },
      });
      return response;
    } else {
      if (mode === 'post') {
        const response = await axios({
          method: 'post',
          baseURL: 'http://localhost:3100/',
          url: 'userClassesList',
          AxiosHeaders: {
            'cache-control': 'no-cache',
            'content-length': '479',
            'content-type': 'application/json; charset=utf-8',
            expires: '-1',
            pragma: 'no-cache',
          },
          data: {
            id,
            nameTeacher,
            photoTeacher,
            selectTimeArray,
            modeClass,
          },
        });
        return response;
      } else {
        const response = await axios({
          method: 'patch',
          baseURL: 'http://localhost:3100/',
          url: `userClassesList/${id}`,
          AxiosHeaders: {
            'cache-control': 'no-cache',
            'content-length': '479',
            'content-type': 'application/json; charset=utf-8',
            expires: '-1',
            pragma: 'no-cache',
          },
          data: {
            selectTimeArray,
          },
        });
        return response;
      }
    }

    // return response.data;
  }
);

const teachersSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    favoriteTeacher(state, action) {
      const teachers = state.teachers;
      const findTeacher = teachers.findIndex(
        (teacher) => teacher.id === action.payload.id
      );
      state.teachers[findTeacher].isFavorite = !action.payload.isFavorite;
    },
    showReservedModal(state, action) {
      state.showModal = action.payload;
    },
    showModalSetClassTimeHandler(state, action) {
      state.stateShowModalSetTime = action.payload;
    },
    setSelectTimeForClassesHandler(state, action) {
      state.counter = state.counter + 1;
      state.totalCount = state.counter * state.totalCount;
      const classTimelist = state.selectTime;
      if (action.payload !== false) {
        state.selectTime = [...classTimelist, action.payload];
      } else {
        state.selectTime = [];
      }
    },
    removeSelectTimeForClassesHandler(state, action) {
      state.counter = state.counter - 1;
      state.totalCount = state.counter * state.totalCount;
      const selectTimeId = action.payload;
      const removeTime = state.selectTime.filter(
        (time) => time.id !== selectTimeId.id
      );
      state.selectTime = removeTime;
    },
    stepModalToSelectTime(state, action) {
      state.step = action.payload;
    },
    modeDatepickerHandler(state, action) {
      state.modeDatepicker = action.payload;
    },
    typeClassedSelectedCountSelectTime(state, action) {
      state.countSelectUserAllow = action.payload.count;
      state.totalCount = action.payload.price;
    },
    setCounterHandler(state, action) {
      state.counter = action.payload;
      state.totalCount = action.payload;
    },
    setDiscountHandler(state, action) {
      state.totalCount = action.payload;
    },
    findTeacherHandler(state, action) {
      const findTeacher = state.teachers.find(
        (teacher) => teacher.id === action.payload
      );
      state.teacher = findTeacher;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTeachers.pending, (state, action) => {
        state.status = 'loading';
      })

      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTofavoriteTeacher.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Update could not complete');

          return;
        }
        const { id } = action.payload;
        const teachers = state.teachers;
        const findTeacher = teachers.findIndex((teacher) => teacher.id === id);
        state.teachers[findTeacher].isFavorite = !action.payload.isFavorite;
      })
      .addCase(addToClassListStudent.pending, (state, action) => {
        state.status = 'loading';
      })

      .addCase(addToClassListStudent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { nameTeacher } = action.payload.data;

        let textMessage = `کلاس شما با استاد ${nameTeacher} رزرو شد`;
        showAlertHandlerSuccess(textMessage);
      })
      .addCase(addToClassListStudent.rejected, (state, action) => {
        state.status = 'failed';
        let textMessage = 'مشکلی پیش آمده ';
        showAlertHandlerError(textMessage);
      });
  },
});
export const selectAllTeacher = (state) => state.teacher.teachers;
export const selectSteps = (state) => state.teacher.step;
export const selectmodeDatepicker = (state) => state.teacher.modeDatepicker;
export const getTeacherStatus = (state) => state.teacher.status;
export const getTeacherError = (state) => state.teacher.error;
export const getModalShow = (state) => state.teacher.showModal;
export const selectTimeClasessSelect = (state) => state.teacher.selectTime;
export const selectTotalCount = (state) => state.teacher.totalCount;
export const getTeacher = (state) => state.teacher.teacher;
export const countSelectedClassType = (state) =>
  state.teacher.countSelectUserAllow;
export const counterSelectTime = (state) => state.teacher.counter;
export const showModalSetClassTime = (state) =>
  state.teacher.stateShowModalSetTime;

export const {
  favoriteTeacher,
  showReservedModal,
  showModalSetClassTimeHandler,
  setSelectTimeForClassesHandler,
  stepModalToSelectTime,
  modeDatepickerHandler,
  removeSelectTimeForClassesHandler,
  typeClassedSelectedCountSelectTime,
  setCounterHandler,
  setDiscountHandler,
  findTeacherHandler,
} = teachersSlice.actions;
export default teachersSlice.reducer;
