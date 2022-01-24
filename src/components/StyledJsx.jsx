export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 25px;
          padding: 5px;
          margin: 5px;
        }
        .title {
          color: blue;
        }
        .button {
          border-radius: 25px;
          background-color: #a24eea;
        }
      `}</style>
    </>
  );
};
