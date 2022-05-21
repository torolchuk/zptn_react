import { QuestionCreator } from "../components/question-creator/question-creator";
import { Grid } from "../elements"
import './create_poll.scss';

export interface CreatePollProps {

}

export const CreatePollPage: React.FC<CreatePollProps> = ({}) => {
    return (
        <div className="zpt-newpoll__wrapper">
            <Grid.Container>
                <Grid.Column size='3' className='zpt-newpoll__content-column'>
                    <span>Lorem ipsum dolor sit amet.</span>
                </Grid.Column>
                <Grid.Column size='1' />
                <Grid.Column size='7'>
                    <QuestionCreator className='zpt-newpoll__content-column' />
                </Grid.Column>
            </Grid.Container>
        </div>
    )
}