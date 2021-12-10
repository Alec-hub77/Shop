import React from 'react'
import './productList.scss'
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {

    const [data, setData] = React.useState(productRows)

    const handleClick = (id) => {
        setData(data.filter((item) => item.id !== id));
      };

      const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
          field: "Product",
          headerName: "Product",
          width: 180,
          renderCell: (params) => {
            return (
              <div className="productListInfo">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 130,
        },
        {
          field: "price",
          headerName: "Price",
          width: 200,
        },
        {
          field: "Action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="productListEdit">
                <Link to={"/product" + params.row.id}>
                  <button>Edit</button>
                </Link>
                <DeleteOutlineOutlined
                  className="productListDelete"
                  onClick={() => handleClick(params.row.id)}
                />
              </div>
            );
          },
        },
      ];

    
    return (
        <div className="productList">
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default ProductList
