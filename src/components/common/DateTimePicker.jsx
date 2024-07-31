import { useState } from "react";
import { DateTimePicker as DTPicker } from "@mui/x-date-pickers/DateTimePicker";
import { PickersDay } from "@mui/x-date-pickers";
import moment from "moment-jalaali";
import toPersianDigits from "../../utils/toPersianDigit";

const DateTimePicker = ({ onAccept }) => {
  const [dateTime, setDateTime] = useState(moment("2024-01-01T12:00:00"));
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

  return (
    <>
      <DTPicker
        value={dateTime}
        onChange={(newValue) => setDateTime(newValue)}
        onAccept={(data) => onAccept(data)}
        localeText={{ okButtonLabel: "تایید" }}
        slots={{ day: (props) => PersianPickersDay(props) }}
      />
    </>
  );
};

export default DateTimePicker;
