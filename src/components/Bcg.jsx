function Bcg() {
  return (
    <>
      <h1>Background Color Changer</h1>
      <input
        type="color"
        onChange={(e) => {
          document.body.style.background = e.target.value;
        }}
      />
    </>
  );
}

export default Bcg;
