export default function HeaderMain({ handleOpenCart, handleOpenLogin }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", height: "100px" }}>
      <div><p>Logo</p></div>
      <div style={{ display: "flex" }}>
        <button
          style={{
            border: "1px solid black",
            backgroundColor: "#f9c96b",
            height: "50px",
            padding: "0 16px",
            display: "flex",
            alignItems: "center"
          }}
          onClick={handleOpenCart}
        >
          🛒 Cart
        </button>

        <button
          style={{
            border: "1px solid black",
            marginLeft: "20px",
            backgroundColor: "#f9c96b",
            height: "50px",
            padding: "0 16px"
          }}
          onClick={handleOpenLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
