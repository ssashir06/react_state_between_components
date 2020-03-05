import * as React from 'react';

interface BusinessCardProps {
    name: string;
    age: number;
    talks: string[];
}

interface BusinessCardState {
    talks: string[];
}

export default class BusinessCardList extends React.Component<BusinessCardProps, BusinessCardState> {
    constructor(props: BusinessCardProps) {
        super(props);
        this.state = {
            talks: props.talks || [],
        };
    }

    public render() {
        return (
            <div>
                <div>
                    Basic info:
                    <div>
                        Name: {this.props.name}
                    </div>
                    <div>
                        Age: {this.props.age}
                    </div>
                </div>
                <div>
                    Discussions:
                    {this.state.talks.map((v, idx) => (
                        <div>
                            {idx}: "{v}"
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    private handleChange() {
        this.setState({
            talks: [],
        });
    }
}