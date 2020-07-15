class Step1 extends React.Component {
    render() {
        const {
            currentStep,
            firstname,
            lastname,
            title,
            handleUserInput,
            handleNextBtn,
            errors
        } = this.props;
        if (currentStep !== 1) {
            return null
        }
        return (
            <div className="form-group">
                <div className="input-box">
                    <input
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="input-box">
                    <input
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="input-box">
                    <input
                        className="form-control"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="btns">
                    <button
                        className="btn btn-primary float-right"
                        type="button"
                        onClick={handleNextBtn}>Next</button>
                </div>
                <div>{errors && errors.map(error => <p key={error}>Error: {error}</p>)}</div>
            </div>
        )
    }
}

class Step2 extends React.Component {
    render() {
        const {
            currentStep,
            country,
            city,
            street,
            handleUserInput,
            handleNextBtn,
            handlePrevBtn,
            errors
        } = this.props;
        if (currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <div className="input-box">
                    <input
                        className="form-control"
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Country"
                        value={country}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="input-box">
                    <input
                        className="form-control"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="input-box">
                    <input
                        className="form-control"
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Street"
                        value={street}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="btns">

                    <button className="btn btn-secondary" type="button" onClick={handlePrevBtn}>Prev</button>
                    <button
                        className="btn btn-primary float-right"
                        type="button"
                        onClick={handleNextBtn}>Next</button>
                </div>
                <div>{errors && errors.map(error => <p key={error}>Error: {error}</p>)}</div>
            </div>
        )
    }
}

class Step3 extends React.Component {
    render() {
        const {
            currentStep,
            email,
            phone,
            handleUserInput,
            handleSubmit,
            handlePrevBtn,
            errors
        } = this.props;
        if (currentStep !== 3) {
            return null
        }
        return (
            <div className="form-group">
                <div className="input-box">
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="input-box">
                    <input
                        className="form-control"
                        id="phone"
                        name="phone"
                        type="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={event => handleUserInput(event)}/>
                </div>
                <div className="btns">
                    <button className="btn btn-secondary" type="button" onClick={handlePrevBtn}>Prev</button>
                    <button
                        className="btn btn-primary float-right"
                        type="button"
                        onClick={handleSubmit}>Submit</button>
                </div>
                <div>{errors && errors.map(error => <p key={error}>Error: {error}</p>)}</div>
            </div>
        )
    }
}

class SuccessModal extends React.Component {
    render() {
        const {isSubmit} = this.props;
        if (!isSubmit) {
            return null
        }
        return (
            <div className="modal-instance">
                <div className="modal-container">
                    <div className="modal-content--box">
                        <h3>Success!</h3>
                    </div>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {
    state = {
        currentStep: 1,
        firstname: '',
        lastname: '',
        title: '',
        country: '',
        city: '',
        street: '',
        email: '',
        phone: '',
        isNext: false,
        isSubmit: false,
        errors: []
    }

    validateStep1(firstname, lastname, title) {
        const errors = [];
        if (firstname.length === 0) {
            errors.push("First Name can't be empty");
        } 
        if (lastname.length === 0) {
            errors.push("Last Name can't be empty");
        }

        if (title.length === 0) {
            errors.push("Title can't be empty");
        }
        
        if (!firstname.match(/^[a-zA-Z\s]*$/)) {
            errors.push("First Name should only contain letters");
        }

        if (!lastname.match(/^[a-zA-Z\s]*$/)) {
            errors.push("Last Name should only contain letters");
        }
        return errors;
    }

    validateStep2(country) {
        const errors = [];
        if (country.length === 0) {
            errors.push("Country can't be empty");
        } else if (!country.match(/^[a-zA-Z\s]*$/)) {
            errors.push("Country should only contain letters");
        }
        return errors;
    }

    validateStep3(email, phone) {
        const errors = [];
        if (email.length === 0) {
            errors.push("Email field can't be left blank");
        } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            errors.push("Enter valid email id");
        } else if (phone.length === 0) {
            errors.push("Phone number field can't be left blank");
        } else if (!phone.match(/^[0-9]*$/)) {
            errors.push("Phone number should contain only digits");
        } else if (phone.length != 10) {
            errors.push("Phone number should be of 10 digits");
        }
        return errors;
    }

    handleUserInput = e => {
        const {name, value} = e.target
        this.setState({[name]: value, errors: []});
    };

    nextBtnHandler = e => {
        e.preventDefault();
        let currentStep = this.state.currentStep;
        let errors;
        if (currentStep === 1) {
            const {firstname, lastname, title} = this.state;
            errors = this.validateStep1(firstname, lastname, title);
        } else if (currentStep === 2) {
            const {country} = this.state;
            errors = this.validateStep2(country);
        }
        if (errors.length > 0) {
            this.setState({errors});
            return;
        } else {
            currentStep = currentStep >= 2 ? 3 : currentStep + 1;
            var step = document.querySelector(`.step[step="${currentStep}"]`);
            step.classList.add('active-step');
            console.log(step)
            this.setState({isNext: true, currentStep: currentStep});
        }
    };

    prevBtnHandler = () => {
        let currentStep = this.state.currentStep;
        var step = document.querySelector(`.step[step="${currentStep}"]`);
        step.classList.remove('active-step');
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({currentStep: currentStep})
    }

    _submitBtnHandler = e => {
        e.preventDefault();
        let currentStep = this.state.currentStep;
        const {email, phone} = this.state;
        const errors = this.validateStep3(email, phone);
        if (errors.length > 0) {
            this.setState({errors});
            return;
        } else {
            this.setState({
                currentStep: 4,
                isSubmit: !this.state.isSubmit
            });
        }
    }

    componentDidUpdate() {
        // this.activateStepState();
    }

    render() {
        const {
            currentStep,
            firstname,
            lastname,
            title,
            country,
            city,
            street,
            email,
            phone,
            isSubmit,
            errors
        } = this.state;
        return (
            <React.Fragment>
                <SuccessModal 
                    isSubmit={isSubmit}
                />
                    <div className="form-wrapper">
                    {!isSubmit &&
                        <div className="steps">
                            <div step="1" className="step active-step"><span>1</span></div>
                            <div className="hr"></div>
                            <div step="2" className="step"><span>2</span></div>
                            <div className="hr"></div>
                            <div step="3" className="step"><span>3</span></div>
                        </div>
                    
                    }
                    <form onSubmit={this.handleSubmit}>

                        <Step1
                            currentStep={currentStep}
                            firstname={firstname}
                            lastname={lastname}
                            title={title}
                            handleUserInput={this.handleUserInput}
                            handleNextBtn={this.nextBtnHandler}
                            errors={errors}/>

                        <Step2
                            currentStep={currentStep}
                            country={country}
                            city={city}
                            street={street}
                            handleUserInput={this.handleUserInput}
                            handleNextBtn={this.nextBtnHandler}
                            handlePrevBtn={this.prevBtnHandler}
                            errors={errors}/>

                        <Step3
                            currentStep={currentStep}
                            email={email}
                            phone={phone}
                            handleUserInput={this.handleUserInput}
                            handleSubmit={this._submitBtnHandler}
                            handlePrevBtn={this.prevBtnHandler}
                            errors={errors}/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Form/>, document.getElementById('root'))