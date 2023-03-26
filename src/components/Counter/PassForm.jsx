export default (props) => {
  return (
    <div>
      <label htmlFor="passInput">Pass:</label>
      <input
        id="passInput"
        type="number"
        value={props.pass}
        onChange={e=> props.setPass(+e.target.value)}
      />
    </div>
  );
};
