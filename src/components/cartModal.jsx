import { useCart } from '../hooks/useCart';

function SideBar({ open, onClose }) {
  const { items, removeFromCart, updateCartQty } = useCart();

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
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
          <h3 style={{ margin: 0 }}>🛒 Cart</h3>
          <button
            onClick={onClose}
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
                    onChange={(e) => updateCartQty(item.id, parseInt(e.target.value))}
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
  );
}

export default SideBar;
