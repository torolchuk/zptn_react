export const questionCreatorTestid = {
    titleField: () => 'questionCreator__titleField',
    answerItem: ((id: string) => `questionCreator__answerItem__${id}`),
    addNewAnswer: () => 'questionCreator__addNewAnswer',
    save: () => 'questionCreator__save',
    revert: () => 'questionCreator__revert',
}