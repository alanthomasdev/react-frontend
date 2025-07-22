export default function HeaderMain({openModal, handleOpen}) {
    console.log(openModal, handleOpen, 'handled here')
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", height: "100px" }}>
        <div>
          <p>Logo</p>
        </div>
        <div style={{display:'flex'}}>
          <button style={{ border: "1px solid black", backgroundColor: "#f9c96b", alignItems: "center", justifyContent: "center", display:'flex', height:'50px' }} onClick={()=>{handleOpen()}}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16.5" cy="18.5" r="1.5" />
              <circle cx="9.5" cy="18.5" r="1.5" />
              <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
            </svg>
            Cart
          </button>

          <button style={{ border: "1px solid black", marginLeft: "20px", backgroundColor: "#f9c96b", height:'50px' }}>Login</button>
        </div>
      </div>
    </>
  );
}
