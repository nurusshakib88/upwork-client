import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable, usePagination, useSortBy } from "react-table";
import { useLogin } from "../../context/LoginContext";
import IconSearch from "../Icon/IconSearch";
import IconNext from "../Icon/IconNext";
import IconLast from "../Icon/IconLast";
import IconFirst from "../Icon/IconFirst";
import IconPrev from "../Icon/IconPrev";
import IconTrash from "../Icon/IconTrash";
import IconEdit from "../Icon/IconEdit";
import IconCheck from "../Icon/IconCheck";
import IconClose from "../Icon/IconClose";
import Breadcrumb from "../common/Breadcrumb";

const AllProductsTable = () => {
  const { user, logout } = useLogin();
  const userStores = user ? user.userStores : [];

  // State variables
  const [storeId, setStoreId] = useState(
    userStores.length ? userStores[0].id : "1"
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [products, setProducts] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [usernames, setUsernames] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // New states for editing
  const [editingRow, setEditingRow] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  // Calculate the data range
  const startRecord = (page - 1) * pageSize + 1;
  const endRecord = Math.min(page * pageSize, totalRecords);

  // Page numbers to show
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRecords / pageSize);
  const range = 2; // Show two pages before and after

  for (
    let i = Math.max(1, page - range);
    i <= Math.min(totalPages, page + range);
    i++
  ) {
    pageNumbers.push(i);
  }

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `/api/api/Product/Products?page=${page}&pageSize=${pageSize}&logedclientid=1&logedstoreid=${storeId}`
        );
        const productsData = response.data.data;
        setProducts(productsData);
        setTotalRecords(response.data.recordsTotal);

        productsData.forEach((product) => {
          if (!usernames[product.updatedBy] && product.updatedBy) {
            fetchUsername(product.updatedBy);
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        if (error.response && error.response.status === 401) {
          logout();
        }
      }
    };

    if (storeId) {
      fetchProducts();
    }
  }, [storeId, page, pageSize, logout, usernames]);

  const fetchUsername = async (userId) => {
    try {
      const response = await axios.get(`/api/api/Master/UserDetail/${userId}`);
      const username = response.data.userName;
      setUsernames((prevUsernames) => ({
        ...prevUsernames,
        [userId]: username,
      }));
    } catch (error) {
      setUsernames((prevUsernames) => ({
        ...prevUsernames,
        [userId]: "Not found",
      }));
    }
  };

  // Handle edit click
  const handleEditClick = (product) => {
    setEditingRow(product.id);
    setEditedProduct({ ...product });
  };

  // Handle input change in the editable row
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save click
  const handleSaveClick = async () => {
    try {
      const requestBody = {
        ...editedProduct,
        submitWithSend: true,
        isNeedUpdate: true,
      };

      // Send the update request
      await axios.put(
        `/api/api/Product/UpdateProduct/${editedProduct.id}`,
        requestBody
      );

      // Update local products state
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editedProduct.id ? editedProduct : product
        )
      );
      setEditingRow(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle cancel editing
  const handleCancelClick = () => {
    setEditingRow(null);
    setEditedProduct({});
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Handle delete
  const handleDeleteClick = (product) => {
    setShowDeleteModal(true);
    setProductToDelete(product);
  };
  const confirmDelete = async () => {
    try {
      await axios.put(`/api/api/Product/UpdateProduct/${productToDelete.id}`, {
        id: productToDelete.id,
        activeFlag: "no",
      });
      setProducts(
        products.filter((product) => product.id !== productToDelete.id)
      );
      setShowDeleteModal(false);
      setProductToDelete(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Custom filter function
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productData = `${product.id} ${product.paymentProductCode} ${
        product.description
      } ${product.taxStrategyID} ${product.merchandiseCode} ${
        product.regularSellPrice
      } ${product.updatedAt} ${usernames[product.updatedBy] || ""}`;
      return productData.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [products, searchTerm, usernames]);

  // Table columns
  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Code", accessor: "paymentProductCode" },
      {
        Header: "Description",
        accessor: "description",
        Cell: ({ row }) => {
          return editingRow === row.original.id ? (
            <input
              type="text"
              name="description"
              className="form-input"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type="text"
              name="description"
              disabled
              className="bg-transparent dark:bg-transparent form-input border-0"
              value={row.original.description}
            />
          );
        },
      },
      {
        Header: "Tax Strategy",
        accessor: "taxStrategyID",
        Cell: ({ row }) => {
          const taxStrategyOptions = {
            0: "Non Tax",
            1: "State Food",
            2: "Fast Food",
            3: "Non Food",
          };

          return editingRow === row.original.id ? (
            <select
              name="taxStrategyID"
              className="form-select w-28"
              value={
                editedProduct.taxStrategyID || row.original.taxStrategyID || ""
              }
              onChange={handleInputChange}
            >
              {Object.entries(taxStrategyOptions).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              disabled
              className="w-28 bg-transparent dark:bg-transparent form-input border-0"
              value={
                taxStrategyOptions[row.original.taxStrategyID] || "Unknown"
              }
            />
          );
        },
      },
      {
        Header: "Merchandise",
        accessor: "merchandiseCode",
        Cell: ({ row }) => {
          return editingRow === row.original.id ? (
            <input
              type="text"
              name="merchandiseCode"
              className="form-input w-28"
              value={editedProduct.merchandiseCode || ""}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type="text"
              name="description"
              disabled
              className="w-28 bg-transparent dark:bg-transparent form-input border-0"
              value={row.original.merchandiseCode}
            />
          );
        },
      },
      {
        Header: "Sell Price",
        accessor: "regularSellPrice",
        Cell: ({ row }) => {
          return editingRow === row.original.id ? (
            <input
              type="number"
              name="regularSellPrice"
              className="form-input w-28"
              value={editedProduct.regularSellPrice || ""}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type="text"
              name="description"
              disabled
              className="w-28 bg-transparent dark:bg-transparent form-input border-0"
              value={row.original.regularSellPrice}
            />
          );
        },
      },
      {
        Header: "Status",
        Cell: () => <button className="btn btn-sm btn-primary">Active</button>,
      },
      {
        Header: "Updated At",
        accessor: "updatedAt",
        Cell: ({ value }) => new Date(value).toLocaleString(),
      },
      {
        Header: "Updated By",
        accessor: "updatedBy",
        Cell: ({ value }) => `@${usernames[value] || "System"}`,
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="flex gap-3 overflow-hidden">
            {editingRow === row.original.id ? (
              <>
                <button onClick={handleSaveClick}>
                  <IconCheck />
                </button>
                <button onClick={handleCancelClick}>
                  <IconClose />
                </button>{" "}
                <button onClick={() => handleDeleteClick(row.original)}>
                  <IconTrash />
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleEditClick(row.original)}>
                  <IconEdit />
                </button>
                <button onClick={() => handleDeleteClick(row.original)}>
                  <IconTrash />
                </button>
              </>
            )}
          </div>
        ),
      },
    ],
    [usernames, editingRow, editedProduct]
  );

  // Table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page: tablePage,
    prepareRow,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: filteredProducts,
      initialState: { pageIndex: page - 1 },
      manualPagination: true,
      pageCount: Math.ceil(totalRecords / pageSize),
    },
    useSortBy,
    usePagination
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Handle page size change
  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value));
    setPage(1); // Reset to page 1 on page size change
  };

  // Handle store selection change
  const handleStoreChange = (event) => {
    setStoreId(event.target.value);
    setPage(1); // Reset to page 1 on store change
  };

  return (
    <div className="dark:text-white">
      <div className="flex ms-auto mb-5 items-center justify-between">
        <Breadcrumb pageName="Products" />
        <select
          id="storeId"
          value={storeId}
          onChange={handleStoreChange}
          className="form-select w-[200px]"
        >
          {userStores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.storeName}
            </option>
          ))}
        </select>
      </div>

      <div className="panel h-full">
        <div className="flex justify-between px-7.5 py-4.5">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-9 sm:pr-4 pr-9 peer sm:bg-transparent bg-gray-100 placeholder:tracking-widest"
              placeholder="Search here..."
            />
            <button
              type="button"
              className="absolute w-9 h-9 inset-0 right-auto  appearance-none peer-focus:text-primary"
            >
              <IconSearch className="mx-auto" />
            </button>
          </div>

          <div className="flex items-center font-medium gap-3">
            <p className="dark:text-white w-max">Per Page:</p>

            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="form-select w-28"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">No data available</p>
          </div>
        ) : (
          <>
            <table
              className="rounded-md overflow-hidden table table-hover"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroup.id}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        key={column.id}
                      >
                        <div className="flex items-center min-w-10">
                          <span>{column.render("Header")}</span>
                          {column.render("Header") !== "Action" && (
                            <div className="ml-2 inline-flex flex-col space-y-[2px]">
                              <span className="inline-block">
                                <svg
                                  className="fill-current"
                                  width="10"
                                  height="5"
                                  viewBox="0 0 10 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5 0L0 5H10L5 0Z" fill="" />
                                </svg>
                              </span>
                              <span className="inline-block">
                                <svg
                                  className="fill-current"
                                  width="10"
                                  height="5"
                                  viewBox="0 0 10 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                                    fill=""
                                  />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {tablePage.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={row.id}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} key={cell.column.id}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="flex items-center justify-between text-gray-500 text-sm">
              <p>
                Showing {startRecord} to {endRecord} of {totalRecords} records
              </p>
              {/* Pagination Controls */}
              <div className="flex justify-end items-center mt-4">
                <button
                  className="flex cursor-pointer items-center justify-center rounded-[3px] p-2 text-[12px] font-semibold uppercase tracking-[1px] text-primary  hover:bg-primary/10"
                  onClick={() => handlePageChange(1)}
                  disabled={page === 1}
                >
                  <IconFirst className="fill-primary" />
                </button>
                <button
                  className="flex cursor-pointer items-center justify-center rounded-[3px] p-2 text-[12px] font-semibold uppercase tracking-[1px] text-primary  hover:bg-primary/10"
                  onClick={() => handlePageChange(Math.max(page - 1, 1))}
                >
                  <IconPrev className="fill-primary" />
                </button>
                {pageNumbers.length > 0 && (
                  <div className="flex space-x-2">
                    {pageNumbers.map((pageNumber) => (
                      <button
                        key={pageNumber}
                        className={`flex cursor-pointer items-center justify-center rounded-[3px] p-2 text-[12px] font-semibold uppercase tracking-[1px] text-primary  ${
                          pageNumber === page
                            ? "bg-primary text-white"
                            : "hover:bg-primary/10"
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  className="flex cursor-pointer items-center justify-center rounded-[3px] p-2 text-[12px] font-semibold uppercase tracking-[1px] text-primary  hover:bg-primary/10"
                  onClick={() =>
                    handlePageChange(
                      Math.min(page + 1, Math.ceil(totalRecords / pageSize))
                    )
                  }
                >
                  <IconNext className="fill-primary" />
                </button>
                <button
                  className="flex cursor-pointer items-center justify-center rounded-[3px] p-2 text-[12px] font-semibold uppercase tracking-[1px] text-primary  hover:bg-primary/10"
                  onClick={() =>
                    handlePageChange(Math.ceil(totalRecords / pageSize))
                  }
                  disabled={page === Math.ceil(totalRecords / pageSize)}
                >
                  <IconLast className="fill-primary" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-40">
          <div className="bg-white dark:bg-[#060818] p-6 rounded-lg shadow-lg w-96 text-center">
            <h1 className="mt-5 mb-10 text-xl">
              Do you want to delete{" "}
              <span className="font-bold">{productToDelete?.description}</span>?
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProductsTable;
