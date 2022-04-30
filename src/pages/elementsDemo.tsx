import { FC } from "react";
import { Button, Heading } from "../elements";

export const ElementsDemoPage: FC = () => {
    return (<>
        <Heading text="Heading Element (h1)" />
        <Heading text="Subheading Element (h2)" type='h2' />
        <Heading text="Subheading Element (h3)" type='h3' />
        <Heading text="Subheading Element (h4)" type='h4' />
        <Heading text="Subheading Element (h5)" type='h5' />
        <hr />
        <Button text="This is button" />
        <Button text="This is button" role="secondary" />
    </>);
}