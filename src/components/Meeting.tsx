import * as React from 'react';
import BusinessCardList from './BusinessCardList';
import Talking from './Talking';

interface MeetingProps {
}

interface MeetingState {
    talks: string[];
}

export default class Meeting extends React.Component<MeetingProps, MeetingState> {

    constructor(props: MeetingProps) {
        super(props);

        this.state = {
            talks: [],
        };
    }

    public render() {
        return (
            <div>
                <BusinessCardList
                    age={30}
                    name={'Taro'}
                    talks={this.state.talks}
                ></BusinessCardList>
                <hr></hr>
                <Talking
                    talks={this.state.talks}
                    handleTalking={this.handleTalking.bind(this)}
                ></Talking>
            </div>
        )
    }

    private handleTalking() {
        this.setState(this.state);
    }
}
