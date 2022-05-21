import { PollAnswer } from "./poll-answer";

export interface PollQuestion {
    title: string;
    options: PollAnswer[];
}