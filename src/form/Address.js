import Select from "react-select";
import { useField } from "formik";
import { useEffect, useState } from "react";
import { getAddresses } from "../utility/getAddresses";
const Address = ({ label, name, multiple, ...rest }) => {
  const [field, , { setValue }] = useField(name);
  const [searchTerm, setSearchTeam] = useState(field.value);
  const [options, setOptions] = useState([
    { label: field.value, value: field.value },
  ]);
  useEffect(() => {
    getAddresses(searchTerm).then((res) => {
      setOptions(res.map((place) => ({ label: place, value: place })));
    });
  }, [searchTerm]);
  const selectedValue = multiple
    ? options.filter((o) => field.value?.includes(o.value))
    : options.find((o) => o.value === field.value);
  return (
    <>
      {label && <label name={name} value={label} />}
      <Select
        isMulti={multiple}
        options={options}
        placeholder="Enter Address"
        value={multiple ? selectedValue : [selectedValue]}
        closeMenuOnSelect={!multiple}
        className="basic-multi-select h-10 min-w-[100px]"
        classNamePrefix="select"
        onChange={(option) => {
          if (option)
            if (multiple) {
              let opt = option;
              setValue(opt.map((item) => item.value));
            } else {
              let opt = option;
              setValue(opt.value);
              setSearchTeam(opt.value);
            }
        }}
        onInputChange={(values) => {
          setSearchTeam(values);
        }}
        {...rest}
      />
    </>
  );
};

export default Address;
