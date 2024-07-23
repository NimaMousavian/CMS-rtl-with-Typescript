import React from "react";

const SimpleModal = ({ title, description, buttonTitle, theme, onClick }) => {
  const createBgColor = (theme) => {
    if (theme === "primary") return "bg-blue-100";
    if (theme === "secondary") return "bg-purple-100";
    if (theme === "error") return "bg-red-100";
    if (theme === "success") return "bg-green-100";
    if (theme === "warning") return "bg-yellow-100";
  };
  return (
    <div>
      <label className="btn btn-primary" htmlFor="simple-modal">
        Simple Modal
      </label>
      <input className="modal-state" id="simple-modal" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="simple-modal"></label>
        <div
          className={
            "modal-content flex flex-col gap-5 " + createBgColor(theme)
          }
        >
          <label
            htmlFor="simple-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl font-bold">{title}</h2>
          <span>{description}</span>
          <div className="flex gap-3 justify-center items-center">
            <button className={`btn btn-${theme}`} onClick={() => onClick()}>
              {buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
