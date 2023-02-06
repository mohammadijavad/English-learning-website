import React, { useState } from "react";
import style from "../../style/datepicker.module.css";
import TriggerExample from "../../../../../../../../utils/Tooltip";
import persianDate from "persian-date";
import { showReservedModal } from "../../../../../../../../app/store/Teacher store/Teacher";
import { useDispatch } from "react-redux";
function Day({
  type,
  text,
  findteacher,
  index,
  nextWekkCount,
  currentWeekDay,
}) {
  const [weekCount, setweekCount] = useState(0);
  const [firstWeek, setFirstWeek] = useState(1);
  const { timeClassForBook } = findteacher;
  const { times } = timeClassForBook[0];
  const { alltime } = times[index];
  const dayofweek = new persianDate().day(); //day of Week
  const month = new persianDate().month(); //month
  const dayofmonth = new persianDate().date(); //Date of Month
  const year = new persianDate().year(); //year
  const dispatch = useDispatch();
  const weekName = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).format("dddd");
  const todayDate = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).format("D");
  const currentDate = new persianDate([
    year,
    month,
    dayofmonth + index + currentWeekDay,
  ]).date();
  const isCurrentDate = currentDate === dayofmonth;
  return (
    <div
      className={`${
        isCurrentDate ? style.activeCureentDate : ""
      } h-100 rounded`}
      style={{ flex: 1, justifyContent: "center", height: "500px" }}
    >
      <div className=" border-4 border-top border-info mx-1 text-center d-flex justify-content-center align-items-center flex-column">
        <span className="mt-2">{weekName}</span>
        <span>{todayDate}</span>
        {isCurrentDate && <span className={style.currentDateBolet}>امروز</span>}
      </div>
      <div className="mt-3 w-100 d-flex justify-content-center align-items-center flex-column">
        {alltime?.map((time, index) =>
          time.isBooked ? (
            <TriggerExample
              key={index}
              text={time.time}
              align="right"
              timeCovert={new persianDate([
                year,
                month,
                dayofmonth + index + currentWeekDay,
              ])
                .toLocale("fa")
                .format(" dddd DD MMMM")}
            >
              <div
                className={`${style.notreserved} curoser position-relative p-2 px-3`}
                onClick={() => dispatch(showReservedModal())}
              >
                <span className="p-1 mx-1">{time.time}</span>
              </div>
            </TriggerExample>
          ) : (
            <TriggerExample
              text={" زمان توسط شخص دیگری رزرو شده است "}
              align="top"
            >
              <div className={`${style.bookedTime} p-2 px-3`}>
                <span className="p-1 mx-1">{time.time}</span>
              </div>
            </TriggerExample>
          )
        )}
      </div>
    </div>
  );
}

export default Day;
