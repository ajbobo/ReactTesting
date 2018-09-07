'use strict';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state);
        this.setState(state => ({liked: !state.liked}));
    }

    render() {
        let label = (this.state.liked ? 'Sure' : 'Nope');
        return (
            <div>
                <p>This is stuff: {label}</p>
                <button onClick={this.handleClick}>
                    {label}
                </button>
            </div>
        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton/>, domContainer);