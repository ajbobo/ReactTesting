let originalNumbers = [
    {key: 1, value: 'one'},
    {key: 2, value: 'two'},
    {key: 3, value: 'three'},
    {key: 4, value: 'four'},
    {key: 5, value: 'five'},
];

class ListControl extends React.Component {
    constructor(props) {
        super(props);
        // This makes a copy of what was in props. That way this.state can be modified without changing props (if that matters)
        let numbers = [];
        originalNumbers.forEach((item) => numbers.push({key: item.key, value: item.value}));
        this.state = {numbers: numbers};

        this.shuffleList = this.shuffleList.bind(this);
    }

    shuffleList() {
        let numberList = this.state.numbers;
        for (let x = 0; x < numberList.length; x++) {
            let swapIndex = Math.floor(Math.random() * numberList.length);
            let temp = numberList[x].value;
            numberList[x].value = numberList[swapIndex].value;
            numberList[swapIndex].value = temp;
        }
        numberList.push({key: numberList.length + 1, value: numberList.length * 2});
        console.log(numberList);
        this.setState({numbers: numberList});
    }

    render() {
        // console.log(this.state);
        let nums = this.state.numbers;
        let items = nums.map((item) => (<li key={item.key}>{item.value}</li>));
        return (
            <div>
                <button onClick={this.shuffleList}>
                    Shuffle List
                </button>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

let domContainer = document.querySelector('#list_container');
ReactDOM.render(<ListControl numbers={originalNumbers}/>, domContainer);