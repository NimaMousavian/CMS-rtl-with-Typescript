import { useState } from "react";
import { DatePicker as DPicker } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers";
import { PickersYear } from "@mui/x-date-pickers/YearCalendar/PickersYear";
import toPersianDigits from "../../utils/toPersianDigit";
import moment from "moment-jalaali";

const DatePicker = () => {
  const [date, setDate] = useState(moment());
  moment.loadPersian({ dialect: "persian-modern" });

  function PersianPickersDay(props) {
    const { day, selected, outsideCurrentMonth, ...other } = props;

    return (
      <PickersDay
        {...other}
        day={day}
        selected={selected}
        outsideCurrentMonth={outsideCurrentMonth}
        sx={{
          fontSize: "1rem",
        }}
      >
        {toPersianDigits(day.format("jDD"))}
      </PickersDay>
    );
  }

  function CustomPickersYear(props) {
    const { year, selected, ...other } = props;
    return (
      <PickersYear {...other} year={year} selected={selected}>
        {toPersianDigits(year)}
      </PickersYear>
    );
  }

  return (
    <>
      <DPicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
        // onAccept={(data) => onAccept(data)}
        localeText={{ okButtonLabel: "تایید" }}
        slots={{ day: PersianPickersDay }}
      />
    </>
  );
};

export default DatePicker;
