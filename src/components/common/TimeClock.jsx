import { useState } from "react";
import { TimeClock as TClock } from "@mui/x-date-pickers";
import moment from "moment-jalaali";
import { TextField, Box } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

const TimeClock = () => {
  const [time, setTime] = useState(moment("2024-01-01T12:00:00"));
  moment.loadPersian({ dialect: "persian-modern" });
  moment.loadPersian({ usePersianDigits: true });
  console.log("time", time.format("HH:mm"));
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <MobileTimePicker
          defaultValue={moment("2024-01-01T12:00:00")}
          localeText={{ okButtonLabel: "تایید" }}
        />
        <TimePicker
          defaultValue={moment("2024-01-01T12:00:00")}
          localeText={{ okButtonLabel: "تایید" }}
          // label="With Time Clock"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </Box>
    </>
  );
};

export default TimeClock;
