import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import faIRGrid from "../utils/faIrGridText";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "نام", width: 130 },
  { field: "lastName", headerName: "نام خانوادگی", width: 130 },
  {
    field: "age",
    headerName: "سن",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "نام کامل",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "احمدی", firstName: "علی", age: 30 },
  { id: 2, lastName: "حسینی", firstName: "زهرا", age: 28 },
  { id: 3, lastName: "رضایی", firstName: "محمد", age: 35 },
  { id: 4, lastName: "موسوی", firstName: "فاطمه", age: 25 },
  { id: 5, lastName: "کریمی", firstName: "حسن", age: 40 },
  { id: 6, lastName: "نوری", firstName: "مریم", age: 32 },
  { id: 7, lastName: "جعفری", firstName: "رضا", age: 29 },
  { id: 8, lastName: "مرادی", firstName: "لیلا", age: 27 },
  { id: 9, lastName: "صادقی", firstName: "امیر", age: 33 },
];
const Passengers = () => {
  return (
    <div className="w-full" dir="rtl">
      Passengers
      <DataGrid
        localeText={faIRGrid}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Passengers;
