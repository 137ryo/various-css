export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "25px",
    padding: "5px",
    margin: "5px"
  };
  const titleStyle = {
    color: "blue"
  };
  const buttonStyle = {
    borderRadius: "25px",
    backgroundColor: "#a24eea"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
