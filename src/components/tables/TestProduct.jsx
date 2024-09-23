import React, { useEffect, useState } from "react";
import axios from "axios";

const TestProduct = () => {
  const [products, setProducts] = useState([]);
  const [storeId, setStoreId] = useState("1"); // Default store ID
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [editingRow, setEditingRow] = useState(null); // Track the row being edited
  const [editedProduct, setEditedProduct] = useState({}); // Track changes for the row being edited

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `/api/api/Product/Products?page=${page}&pageSize=${pageSize}&logedclientid=1&logedstoreid=${storeId}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [storeId, page, pageSize]);

  // Handle edit click
  const handleEditClick = (product) => {
    setEditingRow(product.id); // Set the row to be edited
    setEditedProduct({ ...product }); // Set the editable data for the selected row
  };

  // Handle input change in the editable row
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save for the edited row
  const handleSaveClick = async () => {
    try {
      // Prepare request body (you can modify it as needed)
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

      // Update the local products array after successful save
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
    setEditingRow(null); // Exit edit mode without saving
    setEditedProduct({}); // Clear edited product
  };

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await axios.put(`/api/api/Product/UpdateProduct/${id}`, {
        id,
        activeFlag: "no",
      });

      // Update the local products array after successful deletion
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h2>Test Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Description</th>
            <th>Tax Strategy</th>
            <th>Merchandise</th>
            <th>Sell Price</th>
            <th>Status</th>
            <th>Updated At</th>
            <th>Updated By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="10">No data available</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.paymentProductCode}</td>

                {/* Conditionally render input fields if this row is being edited */}
                <td>
                  {editingRow === product.id ? (
                    <input
                      type="text"
                      name="description"
                      value={editedProduct.description}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td>{product.taxStrategyID}</td>
                <td>
                  {editingRow === product.id ? (
                    <input
                      type="text"
                      name="merchandiseCode"
                      value={editedProduct.merchandiseCode}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.merchandiseCode
                  )}
                </td>
                <td>
                  {editingRow === product.id ? (
                    <input
                      type="text"
                      name="regularSellPrice"
                      value={editedProduct.regularSellPrice}
                      onChange={handleInputChange}
                    />
                  ) : (
                    product.regularSellPrice
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">Active</button>
                </td>
                <td>{new Date(product.updatedAt).toLocaleString()}</td>
                <td>{`@${product.updatedBy || "System"}`}</td>
                <td>
                  {editingRow === product.id ? (
                    <>
                      <button onClick={handleSaveClick}>Save</button>
                      <button onClick={handleCancelClick}>Cancel</button>
                    </>
                  ) : (
                    <div className="flex gap-3">
                      <button onClick={() => handleEditClick(product)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TestProduct;
