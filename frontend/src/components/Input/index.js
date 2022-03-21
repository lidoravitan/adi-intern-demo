export const Input = (props) => (
  <input
    onChange={(e) => {
      props.onChangeText(e.target.value);
    }}
    value={props.value}
  />
);

