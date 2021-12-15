import React from 'react';
import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducs } from '../../redux/apiCalls';
import { deleteProducs } from '../../redux/apiCalls';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  
  React.useEffect(() => {
    getProducs(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProducs(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'Product',
      headerName: 'Product',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListInfo">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListEdit">
            <Link to={'/product/' + params.row._id}>
              <button>Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
