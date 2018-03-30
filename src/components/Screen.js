import React from 'react';


class Screen extends React.Component {

    constructor(){
        super();
    }

    render() {
        return(
            <div className={'screen'}>
                {this.props.value}
            </div>
        );
    }

}

export default Screen;

