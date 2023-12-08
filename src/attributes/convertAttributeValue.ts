export function convertAttributeValue(value: string) {
    return value === "true"
        ? true
        : value === "false"
        ? false
        : value === "null"
        ? null
        : value === "undefined"
        ? undefined
        : !isNaN(Number(value))
        ? Number(value)
        : value;
}
