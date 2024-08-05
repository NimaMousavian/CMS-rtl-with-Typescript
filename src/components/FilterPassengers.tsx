import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { TextField, Grid, Divider, Button } from "@mui/material";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

interface GridItem {
  id: number;
  label: string;
  innerElement: JSX.Element;
  elementId: FormItems;
}

interface FormData {
  fullName: string;
  nationalCode: string;
  organization: string;
  section: string;
  mobilePhone: string;
  gender: string;
  shift: string;
}

type FormItems =
  | "fullName"
  | "nationalCode"
  | "organization"
  | "section"
  | "mobilePhone"
  | "gender"
  | "shift";

const FilterPassengers = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      nationalCode: "",
      organization: "",
      section: "",
      mobilePhone: "",
      gender: "",
      shift: "",
    },
  });

  const gridItems: GridItem[] = [
    {
      id: 1,
      label: "نام و نام خانوادگی",
      innerElement: (
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="fullName"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "fullName",
    },
    {
      id: 2,
      label: "کد ملی",
      innerElement: (
        <Controller
          name="nationalCode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="nationalCode"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "nationalCode",
    },
    {
      id: 3,
      label: "سازمان",
      innerElement: (
        <Controller
          name="organization"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="organization"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "organization",
    },
    {
      id: 4,
      label: "بخش",
      innerElement: (
        <Controller
          name="section"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="section"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "section",
    },
    {
      id: 5,
      label: "تلفن همراه",
      innerElement: (
        <Controller
          name="mobilePhone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="mobilePhone"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "mobilePhone",
    },
    {
      id: 6,
      label: "جنسیت",
      innerElement: (
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="gender"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "gender",
    },
    {
      id: 7,
      label: "شیفت",
      innerElement: (
        <Controller
          name="shift"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="shift"
              variant="outlined"
              sx={{ marginRight: "10rem", width: "20rem" }}
            />
          )}
        />
      ),
      elementId: "shift",
    },
  ];

  const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
    console.log("filter passenger data: ", data);

  return (
    <div className="mb-7 w-full">
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex items-center">
            <span className="rounded-full bg-primary-main p-3 text-slate-50 ml-5">
              <FilterAltOutlinedIcon />
            </span>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px" }}>
              فیلتر اطلاعات
            </Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails sx={{ marginTop: "1rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} sx={{ p: 3 }}>
              {gridItems.map((item) => (
                <Grid item xs={12} lg={6} key={item.id}>
                  <div className="flex flex-row justify-between items-center">
                    <Typography noWrap>{item.label}</Typography>
                    {item.innerElement}
                  </div>
                </Grid>
              ))}
            </Grid>
            <Divider />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, textAlign: "right" }}
            >
              فیلتر اطلاعات
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterPassengers;
