import { Button, Text, Card, Heading, Grid } from '../elements';
import './main_page.scss';

export interface MainPageProps {

}

export const MainPage: React.FC<MainPageProps> = ({}) => {
    return (
        <div className="zpt-mainpage__wrapper">
            <div className="zpt-mainpage__container">
                <Grid.Column>
                    <Heading text="Запитаннячко" className='zpt-mainpage__header' />
                </Grid.Column>
                <Card> 
                    <Grid.Container className='zpt-mainpage__column-separator'>
                        <Grid.Column size='6'>
                            <div className='zpt-mainpage__illustration' />
                            <Heading type='h3' text='Творіть своє' className='zpt-mainpage__subheader' />
                            <Text className='zpt-mainpage__descriptor'
                                text='Ви можете створити опитування і зручо опрацювати його результатив нашому кабінеті' />
                            <Button text='Створити опитування' fullWidth  size='medium' />
                        </Grid.Column>
                        <Grid.Column size='6'>
                            <div className='zpt-mainpage__illustration' />
                            <Heading type='h3' text='Пройдіть чуже' className='zpt-mainpage__subheader' />
                            <Text className='zpt-mainpage__descriptor' 
                                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudiandae accusantium magni voluptates cum sapiente.' />
                            <Button text='Пройти старе' fullWidth size='medium' role='secondary' />
                        </Grid.Column>
                    </Grid.Container>
                </Card>
            </div>
        </div>        
    )
}