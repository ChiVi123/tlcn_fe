import { components } from 'react-select';

function SelectControlLocals({ children, ...props }) {
    const { data } = props;
    props.value = data.id;
    props.label = data.name;

    return <components.Control {...props}>{props.label}</components.Control>;
}

export default SelectControlLocals;
