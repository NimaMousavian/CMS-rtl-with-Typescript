import React, { useState, FC } from "react";
import { z, ZodType } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { prefix } from "stylis";

interface CarPlateData {
  firstSegment: string;
  secondSegment: string;
  thirdSegment: string;
  fourthSegment: string;
}
type SubmitType = (i: CarPlateData) => void;
interface Props {
  onSubmit: SubmitType;
}

const CarPlate: FC<Props> = ({ onSubmit }) => {
  const initialValue = (): CarPlateData => {
    const data: CarPlateData = {
      firstSegment: "",
      secondSegment: "",
      thirdSegment: "",
      fourthSegment: "",
    };
    return data;
  };

  const [data, setData] = useState<CarPlateData | undefined>(() =>
    initialValue()
  );

  const [firstSegment, setFirstSegment] = useState("");
  const [secondSegment, setSecondSegment] = useState("");
  const [thirdSegment, setThirdSegment] = useState("");
  const [fourthSegment, setFourthSegment] = useState("");

  const [isPublic, setIsPublic] = useState(false);
  // const schema: ZodType<CarPlateData> = z.object({
  //   preFix: z.number().int().positive().gte(10).lte(99),
  //   char: z.string().min(1).max(1),
  //   postFix: z.number().int().positive().gte(100).lte(999),
  //   code: z.number().int().positive().gte(10).lte(99),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<CarPlateData>({ resolver: zodResolver(schema) });

  // const handleChange = (
  //   target: EventTarget & HTMLInputElement,
  //   name: string
  // ) => {
  //   const dt: CarPlateData = { ...data };
  //   dt[name] = target.value;
  // };

  const handleSubmit = () => {
    const data: CarPlateData = {
      firstSegment,
      secondSegment,
      thirdSegment,
      fourthSegment,
    };
    console.log(data);

    onSubmit(data);
  };

  return (
    <>
      <div
        className="w-72 h-16 bg-contain flex items-center"
        style={{
          backgroundImage: `url("images/pelak-bg${
            isPublic ? "-public" : ""
          }.png")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <form
          className="flex flex-row gap-2 justify-between items-center"
          // onSubmit={(e) => handleSubmit(e)}
        >
          <input
            // {...register("code", { valueAsNumber: true })}
            type="text"
            name="fourthSegment"
            value={fourthSegment}
            onChange={(e) => {
              setFourthSegment(e.target.value);
              handleSubmit();
            }}
            maxLength={2}
            className="w-12 h-9  p-3 text-xl rounded-md mr-1 mt-2 border border-slate-200 focus:border-slate-400"
          />
          <input
            // {...register("postFix", { valueAsNumber: true })}
            type="text"
            name="thirdSegment"
            value={thirdSegment}
            onChange={(e) => {
              setThirdSegment(e.target.value);
              handleSubmit();
            }}
            maxLength={3}
            className="w-16 h-10 p-3 text-xl rounded-md mr-2 border border-slate-200 focus:border-slate-400"
          />
          <input
            // {...register("char")}
            type="text"
            name="secondSegment"
            value={secondSegment}
            onChange={(e) => {
              setSecondSegment(e.target.value);
              if (e.target.value === "ع" || e.target.value === "ت")
                setIsPublic(true);
              else setIsPublic(false);
              handleSubmit();
            }}
            maxLength={1}
            className="w-12 h-10 p-3 text-xl rounded-md border border-slate-200 focus:border-slate-400"
          />
          <input
            // {...register("preFix", { valueAsNumber: true })}
            type="text"
            name="firstSegment"
            value={firstSegment}
            onChange={(e) => {
              setFirstSegment(e.target.value);
              handleSubmit();
            }}
            maxLength={2}
            className="w-14 h-10 p-3 text-xl rounded-md ml-8 border border-slate-200 focus:border-slate-400"
          />
          {/* <input type="submit" value="تایید" /> */}
        </form>
      </div>
    </>
  );
};

export default CarPlate;
