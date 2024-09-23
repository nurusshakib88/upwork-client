import React from "react";

const Modal = ({ isOpen, onClose, onSubmit, formData, handleChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Product</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="merchandiseCode"
            value={formData.merchandiseCode}
            onChange={handleChange}
            placeholder="Merchandise Code"
            required
          />
          <input
            type="text"
            name="regularSellPrice"
            value={formData.regularSellPrice}
            onChange={handleChange}
            placeholder="Sell Price"
            required
          />
          <input
            type="text"
            name="taxStrategyID"
            value={formData.taxStrategyID}
            onChange={handleChange}
            placeholder="Tax Strategy ID"
            required
          />
          <div className="modal-actions">
            <button type="submit">Update Product</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
