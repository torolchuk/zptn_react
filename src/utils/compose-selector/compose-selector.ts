export const composeSelector = (base: string) => 
    composer.bind(null, base) as ComposeSelectorFn;

function composer(acc: string): string;
function composer(acc: string, query: string): ComposeSelectorFn;
function composer(acc: string, query?: string): any {
    return query
        ? composer.bind(null, joinBaseAndAppendix(acc, query)) as ComposeSelectorFn
        : acc;
}

const joinBaseAndAppendix = (base: string, appendix: string) => 
    `${base}__${appendix}`;

type ComposeSelectorFn = {
    (appendix: string): ComposeSelectorFn;
    (): string;
}

const wRef = window as any;
wRef.composeSelector = composeSelector;
