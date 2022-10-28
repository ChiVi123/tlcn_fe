import { components } from 'react-select';

function SelectControlAddresses({ children, ...props }) {
    const { data } = props;
    props.value = data.id;
    props.label = `${data.name} ${data.addresses[0]}`;

    return <components.Control {...props}>{props.label}</components.Control>;
}

export default SelectControlAddresses;
