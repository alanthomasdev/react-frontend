// components/ProductList.jsx
import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, loading, fetchProducts } = useProducts();
  const { addToCart } = useCart();
  const { token, user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", quantity: "" });


  const isAdmin = user?.role === "admin";
  console.log("ProductList token:", isAdmin, user);

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditForm({ name: product.name, quantity: product.quantity });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error("Failed to update product");
      setEditProductId(null);
      fetchProducts();
    } catch (err) {
      alert("Error updating product");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to delete product");
      fetchProducts();
    } catch (err) {
      alert("Error deleting product");
    }
  };

  const filtered = (products || []).filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <style>
        {`
          .search-input {
            width: 100%;
            max-width: 400px;
            padding: 10px;
            margin-bottom: 24px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 16px;
          }

          .product-card {
            border: 1px solid #ddd;
            padding: 16px;
            border-radius: 6px;
            background-color: #fafafa;
            transition: box-shadow 0.3s ease;
          }

          .product-card:hover {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .product-card h4 {
            margin: 0 0 8px 0;
          }

          .product-card p {
            margin: 4px 0 12px 0;
          }

          .product-card button {
            padding: 6px 10px;
            margin-right: 6px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .product-card button:hover {
            background-color: #0056b3;
          }

          .product-card .delete {
            background-color: #dc3545;
          }

          .product-card .delete:hover {
            background-color: #b52b3a;
          }

          .product-card input {
            width: 100%;
            padding: 6px;
            margin-bottom: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
        `}
      </style>

      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Products</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              {editProductId === product.id ? (
                <>
                  <input
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    placeholder="Name"
                  />
                  <input
                    value={editForm.quantity}
                    onChange={(e) => setEditForm({ ...editForm, quantity: e.target.value })}
                    placeholder="Quantity"
                    type="number"
                  />
                  <button onClick={() => handleUpdate(product.id)}>Save</button>
                  <button onClick={() => setEditProductId(null)} className="delete">
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h4>{product.name}</h4>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                  {isAdmin && (
                    <>
                      <button onClick={() => handleEditClick(product)}>Edit</button>
                      <button onClick={() => handleDelete(product.id)} className="delete">
                        Delete
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
