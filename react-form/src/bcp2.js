class Step1 extends React.Component {
    render() {
        const {firstname} = this.props;
        return (
            <div className="form-group">
                <div className="input-box">
                    {/* <label htmlFor="firstname">First Name</label> */}
                    <input
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="btns">
                    <button
                        className="btn btn-primary float-right"
                        type="button"
                        onClick={this.props.validateForm}>Next
                    </button>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {

    state = {
        firstname:''
    }

    validateStep1(firstname){
        const errors = [];
        if (firstname.length === 0) {
            errors.push("Field can't be empty");
        } else if (!personname.match(/^[a-zA-Z\s]*$/)){
            errors.push("Field should only contain letters");
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-wrapper">
                    <div className="steps"></div>
                    <form onSubmit={this.handleSubmit}>
                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            validateForm={this._next}
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            title={this.state.title}/>

                        {/* <div className="btns">
                            {this.previousButton()}
                            {this.nextButton()}
                        </div> */}
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Form/>, document.getElementById('root'))