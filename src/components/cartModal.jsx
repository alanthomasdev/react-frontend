import { useState } from 'react';
import { useCart } from '../hooks/useCart';


function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const { items, removeFromCart, updateCartQty } = useCart();


  return (
    <>
      <button
        onClick={handleShow}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Launch
      </button>

      {show && (
        <>
          <div
            onClick={handleClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 998,
            }}
          />

          {/* Sidebar */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '400px',
              backgroundColor: '#fff',
              zIndex: 999,
              boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
              transform: show ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                borderBottom: '1px solid #eee',
              }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
                <svg
                  style={{ marginRight: '10px' }}
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.5" cy="18.5" r="1.5" />
                  <circle cx="9.5" cy="18.5" r="1.5" />
                  <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
                </svg>
                Cart
              </h3>
              <button
                onClick={handleClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
    {items.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h4>{item.name}</h4>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              type="number"
              min="1"
              value={item.cartQty}
              onChange={(e) =>
                updateCartQty(item.id, parseInt(e.target.value))
              }
              style={{ width: "50px" }}
            />
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ color: "red", border: "none", cursor: "pointer" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))
    )}
  </div>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
