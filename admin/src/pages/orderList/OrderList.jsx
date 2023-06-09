import "./orderList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { orderRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function OrderList() {
  const [data, setData] = useState(orderRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    
    { field: "phone", headerName: "Phone Number", width: 200 },

    { field: "address", headerName: "Address", width: 200 },
    { field: "note", headerName: "Name of Product", width: 200 },
   
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "total",
      headerName: "Total",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row.id}>
              <button className="orderListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
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

