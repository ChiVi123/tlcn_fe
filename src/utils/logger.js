function logger({ groupName, values = [] }) {
    console.group(groupName);
    values.forEach((item, index) => {
        console.log(index, item);
    });
    console.groupEnd();
}

export default logger;
