import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { z, ZodType } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validateNationalCode from "../utils/nationalCodeVerify";

function numberWithCommas(x: string) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const allowOnlyNumber = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};

const Form = () => {
  // const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [message, setMessage] = useState("");

  interface FormData {
    name: string;
    email: string;
    mobilePhone: string;
    phone: string;
    nationalCode: string;
    price: string;
    message: string;
  }

  const schema: ZodType<FormData> = z
    .object({
      name: z
        .string({ required_error: "نام الزامیست" })
        .min(1, { message: "نام الزامیست!" }),
      email: z.string().email({ message: "ایمیل نامعتبر است" }),
      mobilePhone: z
        .string()
        .min(11, { message: "تلفن همراه معتبر نیست" })
        .max(11, { message: "تلفن همراه معتبر نیست" }),
      phone: z.string({
        required_error: "تلفن الزامیست!",
      }),
      nationalCode: z.string({
        required_error: "کد ملی الزامیست!",
      }),
      // .min(10, { message: "کد ملی معتبر نیست" })
      // .max(10, { message: "کد ملی معتبر نیست" }),
      price: z.string({
        required_error: "قیمت الزامیست",
        invalid_type_error: "قیمت باید عدد باشد",
      }),
      message: z.string(),
    })
    .refine((data) => {
      return data.nationalCode;
    });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("it worked", data);
  };
  return (
    <>
      <section className="bg-gray-2 rounded-xl m-10">
        <div className="p-8 shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            {/* <TextField
              id="outlined-controlled"
              color="primary"
              label="نام"
              //   value={name}
              //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              //     setName(event.target.value);
              //   }}
              error
              helperText=" لطفا نام را وارد نمایید. "
            /> */}
            {/* <FormControl variant="standard">
              <InputLabel htmlFor="component-simple">Name</InputLabel>
              <Input
                componentsProps={{ ...register("name") }}
                id="component-simple"
                defaultValue="Composed TextField"
              />
            </FormControl> */}
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-controlled"
                  color="primary"
                  label="نام"
                  //   value={name}
                  //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  //     setName(event.target.value);
                  //   }}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-controlled"
                    color="primary"
                    {...register("email")}
                    label="ایمیل"
                    // value={email}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //   setEmail(event.target.value);
                    // }}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="mobilePhone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-controlled"
                    color="primary"
                    {...register("mobilePhone")}
                    label="تلفن همراه"
                    // value={mobilePhone}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //   setMobilePhone(event.target.value);
                    // }}
                    error={!!errors.mobilePhone}
                    helperText={errors.mobilePhone?.message}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-controlled"
                    color="primary"
                    {...register("phone")}
                    label="تلفن"
                    // value={phone}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //   setPhone(event.target.value);
                    // }}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                )}
              />
              <Controller
                name="nationalCode"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-controlled"
                    color="primary"
                    {...register("nationalCode")}
                    label="کد ملی"
                    // value={nationalCode}
                    // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //   setNationalCode(event.target.value);
                    // }}
                    error={!!errors.nationalCode}
                    helperText={errors.nationalCode?.message}
                  />
                )}
              />
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    // type="number"
                    onChange={(e) =>
                      field.onChange?.(parseInt(e.target.value, 10))
                    }
                    value={numberWithCommas(field.value)}
                    id="outlined-controlled"
                    color="primary"
                    label="قیمت"
                    // type="number"
                    //   value={name}
                    //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    //     setName(event.target.value);
                    //   }}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                  />
                )}
              />
            </div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="standard-multiline-flexible"
                  //   value={message}
                  {...register("message")}
                  label="توضیحات"
                  fullWidth
                  multiline
                  minRows={6}
                  //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  //     setMessage(event.target.value);
                  //   }}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />

            <div className="mt-4">
              <Button variant="contained">ارسال</Button>
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
