export const composeTestId = (base: string, params?: string[]): string => {
    return [base, ...(params ?? []).map(param => `${base}__${param}`)].join(' ');
}