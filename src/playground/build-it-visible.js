class VisibilityToogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Visibility Toogle',
            secret: 'This is a secret',
            hidden: true,
            buttonText: 'Show secret'
        }
        this.onHideText = this.onHideText.bind(this);
    }

    onChangeButtonText(hidden) {
        return hidden ? 'Show secret' : 'Hide secret'
    }

    onHideText() {
        this.setState((prevState) => {
            const isHidden = !prevState.hidden
            return {
                hidden: isHidden,
                buttonText: this.onChangeButtonText(isHidden)
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.onHideText}>{this.state.buttonText}</button>
                {!this.state.hidden && <p>{this.state.secret}</p>}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));

/*
let showText = false;

const onButtonPressed = () => {
    showText = !showText;
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onButtonPressed} id="show">
                {!showText ? "Show details" : "Hide details"}</button>
            {showText && <p>Hey, this is some secret text!</p>}
                
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};

render();
*/