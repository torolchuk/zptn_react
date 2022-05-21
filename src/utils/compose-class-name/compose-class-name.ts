const composeClassNameFromString = (classNameMaterial: string): string => classNameMaterial;
const composeClassNameFromArray = (classNameMaterial: Array<string | undefined>): string => classNameMaterial.filter(v => !!v).join(' ');
const composeClassNameFromObject = (classNameMaterial: Record<string, boolean>): string => Object.keys(classNameMaterial)
    .filter(classNameItem => classNameMaterial[classNameItem] === true)
    .join(' ');


export const composeClassName = (classNameMaterial: string | Array<string | undefined> | Record<string, boolean>): string => {
    if (typeof classNameMaterial === 'string')
        return composeClassNameFromString(classNameMaterial);
    else if (Array.isArray(classNameMaterial))
        return composeClassNameFromArray(classNameMaterial);
    else
        return composeClassNameFromObject(classNameMaterial);
}
