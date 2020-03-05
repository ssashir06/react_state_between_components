import * as React from 'react';

interface TalkingProps {
    talks: string[];
    handleTalking: () => void;
}

interface TalkingState {
    talks: string[];
    speaking: string;
}

export default class Talking extends React.Component<TalkingProps, TalkingState> {

    constructor(props: TalkingProps) {
        super(props);

        this.state = {
            talks: props.talks,
            speaking: '',
        };
    }

    public render() {
        return (
            <div>
                <input type="text" 
                    value={this.state.speaking} 
                    onChange={this.handleChange.bind(this)}
                ></input>
                <button
                    type="button"
                    onClick={this.handleSpeak.bind(this)}
                >Speak</button>
            </div>
        )
    }

    private handleChange(event: any) {
        this.setState({
            speaking: event.target.value || '',
            talks: this.state.talks,
        });
    }

    private handleSpeak() {
        this.state.talks.push(this.state.speaking);

        this.setState({
            talks: this.state.talks,
            speaking: '',
        });
        this.props.handleTalking();
    }
}
