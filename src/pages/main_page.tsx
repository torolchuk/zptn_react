import { Button, Text, Card, Heading } from '../elements';

export interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = ({}) => {
    return (
        <div style={{width: '800px', margin: '0 auto'}}>
            <Heading text="Запитаннячко" />
            <Card> 
                <Text text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dicta. Consectetur labore consequatur voluptatem aliquid!'} />
                <Text text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit!'} />
                
                <Button text="Submit!" />
                <Button text="Submit!" disabled />
                <Button text="Submit!" role="secondary" />
                <Button text="Submit!" role="secondary" disabled />
                <br />
                <Button text="Submit!" size='large' />
                <Button text="Submit!" size='large' disabled />
                <Button text="Submit!" size='large' role="secondary" />
                <Button text="Submit!" size='large' role="secondary" disabled />
                <br />
                <Button text="Submit!" size='small' />
                <Button text="Submit!" size='small' disabled />
                <Button text="Submit!" size='small' role="secondary" />
                <Button text="Submit!" size='small' role="secondary" disabled />
                <br />
            </Card>
        </div>        
    )
}