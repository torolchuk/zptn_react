import { render } from "@testing-library/react";

import { ReactElement } from "react";
import { NewAnswerField } from "../new-answer-field";
import { createNewAnswerFieldDriver } from "../new-answer-field.driver";

// const renderNewAnswerFieldAndGetDriver = (reactEl: ReactElement) => {
//     const { container } = render(reactEl);
//     const driver = createNewAnswerFieldDriver(container);
//     return { driver, container };
// }

describe('<NewAnswerField />', () => {
    it('should render default state', () => {
        // const { driver } = renderNewAnswerFieldAndGetDriver(<NewAnswerField />);
    })
});