export default function toOptions(array, valueProp, labelProp) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.map((item) => ({
        ...item,
        value: item[valueProp],
        label: item[labelProp],
    }));
}
