import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Loader from "../Layout/Loader";
import { DataGrid } from "@material-ui/data-grid";
import { deleteEventShop, getAllEventsShop } from "../../redux/actions/event";

const AllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsShop(seller._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEventShop(id));
    window.location.reload();
  };

  const columns = [
    {
      field: "id",
      headerName: "Product Id",
      minwidth: 150,
      flex: 0.7,
      hideable: true,
    },
    { field: "name", headerName: "Name", minwidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minwidth: 100, flex: 0.6 },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minwidth: 80,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold Out",
      type: "number",
      minwidth: "100",
      flex: 0.6,
    },
    {
      field: "status",
      headerName: "Status",
      minwidth: "100",
      flex: 0.5,
    },
    {
      field: "Preview",
      headerName: "",
      minwidth: "120",
      flex: 0.8,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const product = params.row.name;
        const product_name = product.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      headerName: "",
      minwidth: "120",
      flex: 0.8,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  events &&
    events.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        price: "$US " + item.discountPrice,
        stock: item.stock,
        sold: item.sold_out,
        status: item.status,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllEvents;
