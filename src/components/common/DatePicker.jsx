import React, { useState } from "react";
import { DatePicker as DPicker } from "@mui/x-date-pickers/DatePicker";
import { Calendar } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import * as rmdp from "react-multi-date-picker";
// import InputIcon from "react-multi-date-picker/components/input_icon";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import opacity from "react-element-popper/animations/opacity";

import moment from "moment-jalaali";

// import "react-multi-date-picker/styles/colors/purple.css";

const DatePicker = () => {
  const [date, setDate] = useState(moment());
  moment.loadPersian({ dialect: "persian-modern" });
  moment.loadPersian({ usePersianDigits: true });

  return (
    <>
      {/* <DPicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
        // onAccept={(data) => onAccept(data)}
        localeText={{ okButtonLabel: "تایید" }}
        // slots={{ day: PersianPickersDay }}
        slotProps={{
          day: {
            sx: {
              fontSize: "1rem",
            },
          },
        }}
      /> */}
      {/* <Calendar calendar={persian} locale={persian_fa} /> */}
      <rmdp.default
        value={date}
        className=" purple"
        render={<CustomComponent />}
        format="YYYY/MM/DD  HH:mm"
        calendar={persian}
        locale={persian_fa}
        plugins={[<TimePicker position="bottom" mStep={5} hideSeconds />]}
        calendarPosition="bottom-center"
        monthYearSeparator=" "
        animations={[opacity()]}
      />
    </>
  );
};

class CustomComponent extends React.Component {
  render() {
    const new_date = new rmdp.DateObject({
      calendar: persian,
      locale: persian_fa,
    });
    return (
      <div className="relative">
        <input
          defaultValue={new_date}
          className="border focus:border-2 border-slate-300 hover:border-slate-600 focus:border-primary-main h-[54px] rounded-md p-2"
          onFocus={this.props.onFocus}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <span className="absolute bottom-3 left-1 hover:bg-zinc-100 cursor-pointer p-2 rounded-full">
          <InsertInvitationIcon
            className=" text-zinc-500"
            onClick={this.props.onFocus}
          />
        </span>
      </div>
    );
  }
}

export default DatePicker;
