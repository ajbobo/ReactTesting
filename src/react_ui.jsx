class ReactUI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value1: '', value2: '', value3: ''};

        this.changeValue1 = this.changeValue1.bind(this);
        this.changeValue2 = this.changeValue2.bind(this);
        this.handleButton1 = this.handleButton1.bind(this);
        this.handleButton2 = this.handleButton2.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    changeValue1(e) {
        this.setState({value1: e.target.value});
        e.preventDefault();
    }

    changeValue2(e) {
        this.setState({value2: e.target.value});
        e.preventDefault();
    }

    handleButton1(e) {
        this.setState((state) => ({value2: state.value1.toUpperCase()}));
        e.preventDefault();
    }

    handleButton2(e) {
        this.setState((state) => ({value3: state.value2}));
        e.preventDefault();
    }

    handleClear(e) {
        this.setState({value1: '', value2: '', value3: ''});
        e.preventDefault();
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value1} onChange={this.changeValue1}/><br/>
                <input type="text" value={this.state.value2} onChange={this.changeValue2}/><br/>
                <p>{this.state.value3}</p>
                <button onClick={this.handleButton1}>Copy 1</button>
                <button onClick={this.handleButton2}>Copy 2</button>
                <button onClick={this.handleClear}>Clear</button>
            </form>
        );
    }
}

let domContainer = document.querySelector('#react_ui');
ReactDOM.render(<ReactUI/>, domContainer);