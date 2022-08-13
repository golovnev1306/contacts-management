const isObjectHasSubStringInValues = <T extends Record<string, unknown>>(
  object: T,
  subString: string,
  properties: (keyof T)[],
) => {
  for(const property in object) {
    if (properties.includes(property)
      && Object.hasOwn(object, property)
      && typeof object[property] === 'string'
    ) {
      const isSubStringFound = (object[property] as string)
        .toLowerCase()
        .includes(
          subString.toLowerCase(),
        );

      if (isSubStringFound) {
        return true;
      }
    }
  }

  return false;
}

export default isObjectHasSubStringInValues;