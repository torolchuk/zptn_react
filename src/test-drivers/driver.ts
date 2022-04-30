import { Screen, FireFunction } from "@testing-library/react";

type ComponentDriverInput = {
    screen: Screen,
    fireEvent?: FireFunction
}
export type ComponentDriver = (props: ComponentDriverInput) => any;