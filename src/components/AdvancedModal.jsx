import React from "react";

const AdvancedModal = ({
  title,
  description,
  ApproveButton,
  theme,
  onApprove,
}) => {
  const createBgColor = (theme) => {
    if (theme === "primary") return "bg-blue-100";
    if (theme === "secondary") return "bg-purple-100";
    if (theme === "error") return "bg-red-100";
    if (theme === "success") return "bg-green-100";
    if (theme === "warning") return "bg-yellow-100";
  };
  return (
    <div>
      <label className="btn btn-primary" htmlFor="advanced-modal">
        Advanced Modal
      </label>
      <input className="modal-state" id="advanced-modal" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="advanced-modal"></label>
        <div
          className={
            "modal-content flex flex-col gap-5 " + createBgColor(theme)
          }
        >
          <label
            htmlFor="advanced-modal"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl font-bold">{title}</h2>
          <span>
            {description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!
          </span>
          <div className="flex gap-3">
            <button
              className={`btn btn-${theme} btn-block`}
              onClick={() => onApprove()}
            >
              {ApproveButton}
            </button>

            <label
              className="btn btn-block bg-slate-200"
              htmlFor="advanced-modal"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedModal;
