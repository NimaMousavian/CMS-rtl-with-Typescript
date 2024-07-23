import React, { useState } from "react";
const Form = () => {
  // const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   setData({
  //     name: "",
  //     email: "",
  //     mobilePhone: "",
  //     phone: "",
  //     nationalCode: "",
  //     message: "",
  //   });
  // }, []);

  //   const schema = Joi.object().keys({
  //     name: Joi.string(),
  //   });

  // const handleChange = (target) => {
  //   const dt = { ...data };
  //   dt[target.name] = target.value;
  //   setData(dt);
  // };
  return (
    <>
      <section className="bg-gray-2 rounded-xl">
        <div className="p-8 shadow-lg">
          <form className="space-y-4">
            <div className="w-full">
              <label className="sr-only" htmlFor="name">
                نام
              </label>
              <input
                className="input input-solid max-w-full"
                placeholder="نام"
                type="text"
                id="name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  ایمیل
                </label>
                <input
                  className="input input-solid"
                  placeholder="آدرس ایمیل"
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="mobilePhone">
                  تلفن همراه
                </label>
                <input
                  className="input input-solid text-right"
                  placeholder="تلفن همراه"
                  type="tel"
                  id="mobilePhone"
                  value={mobilePhone}
                  name="mobilePhone"
                  onChange={(e) => setMobilePhone(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  تلفن همراه
                </label>
                <input
                  className="input input-solid text-right"
                  placeholder="تلفن ثابت"
                  type="tel"
                  id="phone"
                  value={phone}
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="notionalCode">
                  تلفن همراه
                </label>
                <input
                  className="input input-solid text-right"
                  placeholder="کد ملی"
                  type="text"
                  id="nationalCode"
                  value={nationalCode}
                  name="nationalCode"
                  onChange={(e) => setNationalCode(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full">
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="textarea textarea-solid max-w-full"
                placeholder="توضیحات"
                rows="8"
                id="message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="rounded-lg btn btn-primary btn-block"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
