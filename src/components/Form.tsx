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

function ToRial(str: string) {
  str = str?.replace(/\,/g, "");
  var objRegex = new RegExp("(-?[۰-۹]+)([۰-۹]{3})");

  while (objRegex.test(str)) {
    str = str.replace(objRegex, "$1,$2");
  }

  return str;
}

function removeLeadingZerosIterative(str: string) {
  let i = 0;
  while (i < str?.length && str[i] === "۰") {
    i++;
  }
  // If the entire string consists of zeros, return '0'
  // if (i === str?.length) {
  //   return "۰";
  // }
  return str?.substring(i);
}

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

  const schema: ZodType<FormData> = z.object({
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
    nationalCode: z
      .string({
        required_error: "کد ملی الزامیست!",
      })
      .refine(
        (data) => validateNationalCode(data) === true,
        "کد ملی معتبر نیست."
      ),

    price: z.string({
      required_error: "قیمت الزامیست",
    }),
    message: z.string(),
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
      <section className="bg-gray-2 rounded-xl ">
        <div className="p-8 shadow-lg">
          <form className="space-y-14" onSubmit={handleSubmit(submitData)}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-controlled"
                  color="primary"
                  label="نام"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

            <div className="grid grid-cols-1 gap-x-52 gap-y-14 sm:grid-cols-2">
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
                    sx={{ width: "25em" }}
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
                    sx={{ width: "25em" }}
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
                    sx={{ width: "25em" }}
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
                    sx={{ width: "25em" }}
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
                    type="text"
                    onBlur={(e) => {
                      let regex = new RegExp("/^۰+(?=d)/");
                      let x = e.target.value.replace(/^\u06F0+(?=d)/, "");
                      console.log(x);
                    }}
                    value={ToRial(removeLeadingZerosIterative(field.value))}
                    id="outlined-controlled"
                    color="primary"
                    label="قیمت"
                    sx={{ width: "25em" }}
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
                  {...register("message")}
                  label="توضیحات"
                  sx={{ width: "74em" }}
                  fullWidth
                  multiline
                  minRows={6}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />

            <div className="mt-4">
              <Button variant="contained" type="submit">
                ارسال
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
