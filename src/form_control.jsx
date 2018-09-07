class FormControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value.toUpperCase()}); // Force the text to uppercase
    }

    handleSubmit(event) {
        // alert("Hello there " + this.state.name);
        this.setState({displayName: this.state.name});
        event.preventDefault();
    }

    handleClear(event) {
        this.setState({displayName: '', name: ''});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Enter your name:
                        <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                    <button onClick={this.handleClear}>
                        Clear
                    </button>
                </form>
                {this.state.displayName ? <p>Your name is {this.state.displayName}</p> : null}
            </div>
        );
    }
}

let domContainer = document.querySelector('#form_container');
ReactDOM.render(<FormControl/>, domContainer);