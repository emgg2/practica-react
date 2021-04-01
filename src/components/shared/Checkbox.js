

const Checkbox = ({label, ...props}) => {
    return(
      <div>
      <input type="checkbox" {...props} />
      <label >{label}</label>
      </div>
    );
};

export default Checkbox;