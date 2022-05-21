export const composeTestidQuery = (query?: string | Array<string | undefined>): string => {
    if (!query) return '';

    const queryPart = Array.isArray(query)
        ? composeTestidQueryFromArray(query)
        : query;
    return wrapTestidInDataAttr(queryPart);
}

const composeTestidQueryFromArray = (query: Array<string | undefined>): string => 
    query.filter(q => !!q).join(' ').trim();


const wrapTestidInDataAttr = (testid: string): string =>
    `[data-testid*='${testid}']`;
