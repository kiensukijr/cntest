import "./reviewList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { reviewRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ReviewList() {
  const [data, setData] = useState(reviewRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "reviewer", headerName: "Reviews", width: 150 },

    
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "describe",
      headerName: "Describe",
      width: 520,
    },
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/review/" + params.row.id}>
              <button className="reviewListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="reviewListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="reviewList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
