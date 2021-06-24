function SelectInput(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        className="form-select"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      >
        {props.items.map((optionItem) => {
          if (typeof optionItem === "object") {
            return (
              <option key={optionItem.value} value={optionItem.value}>
                {optionItem.text}
              </option>
            );
          }
          return (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;
