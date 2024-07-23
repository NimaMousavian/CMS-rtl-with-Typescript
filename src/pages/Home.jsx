import React from "react";
import ErrorBox from "./../components/ErrorBox";
import SimpleModal from "../components/SimpleModal";
import AdvancedModal from "../components/AdvancedModal";
import Form from "../components/Form";
import validateNationalCode from "../utils/nationalCodeVerify";

const Home = () => {
  const handleAdvancedModal = () => {
    console.log("Advanced Modal approved");
  };
  const handleSimpleModal = () => {
    console.log("Simple Modal clicked");
  };
  return (
    <div>
      Home
      <ErrorBox msg="هیچ موردی یافت نشد." />
      <SimpleModal
        title={"Simple Modal Title"}
        description={
          "Moda Description Lorem ipsum dolor sit amet consectetur adipisicing elit Alias quasi repellat dicta cum laboriosam dolor quidem hic, commodi consequuntur! Assumenda blanditiis deleniti in nisi! In ducimus accusamus consequatur quisquam! Enim?"
        }
        buttonTitle={"Button Title"}
        theme={"error"}
        onClick={handleSimpleModal}
      />
      <AdvancedModal
        title={"Advanced Modal Title"}
        description={
          "Moda Description Lorem ipsum dolor sit amet consectetur adipisicing elit Alias quasi repellat dicta cum laboriosam dolor quidem hic, commodi consequuntur! Assumenda blanditiis deleniti in nisi! In ducimus accusamus consequatur quisquam! Enim?"
        }
        ApproveButton={"Approve Button"}
        theme={"succes"}
        onApprove={handleAdvancedModal}
      />
      <div className="w-1/2">
        <Form />
      </div>
      {console.log(validateNationalCode("7731689951"))}
    </div>
  );
};
export default Home;
fjfj;
