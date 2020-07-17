class Step1 extends React.Component {
    render() {
        const {
            currentStep,
            firstname,
            lastname,
            title,
            optin,
            handleCheckbox,
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
            optin,
            handleCheckbox,
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
                <div className="input-box checkbox">
                    <div className="input-container">
                    <input
                        className="form-control optin"
                        id="optin"
                        name="optin"
                        type="checkbox"
                        value={optin}
                        onChange={event => handleCheckbox(event)}/>
                        <label for="optin" className="checkbox-label"></label>
                    </div>
                        <label className="label-checkbox-txt">I agree to the terms and conditions</label>
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
        const {firstname, lastname, title, country, street, city, email, phone, optin, isSubmit} = this.props;
        if (!isSubmit) {
            return null
        }
        let terms = !this.props.optin ? 'Aprroved' : 'Not Approved';
        return (
            <div className="modal-instance">
                <div className="modal-container">
                    <div className="modal-content--box">
                        <h2>Success!</h2>
                        <div><p><strong>First Name: </strong>{this.props.firstname}</p></div>
                        <div><p><strong>Last Name: </strong>{this.props.lastname}</p></div>
                        <div><p><strong>Title: </strong>{this.props.country}</p></div>
                        <div><p><strong>Location: </strong>{this.props.street}, {this.props.city} - {this.props.country}</p></div>
                        <div><p><strong>Email: </strong>{this.props.email}</p></div>
                        <div><p><strong>Phone: </strong>{this.props.phone}</p></div>
                        <div><p><strong>Terms and condition: </strong>{terms}</p></div>
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
        optin: false,
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
            },()=>{
                fetch('/api', {
                    method: 'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(this.state)
                }).then(res=>{
                    if(res.ok){
                        return res.json();
                    }
                })
                .then(res=>console.log(res))
            });
        }
    }

    handleCheckbox = e =>{
        this.setState({optin: !this.state.optin},()=>{console.log(this.state);})
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
            optin,
            isSubmit,
            errors
        } = this.state;
        return (
            <React.Fragment>
                <SuccessModal 
                    firstname={firstname}
                    lastname={lastname}
                    title={title}
                    country={country}
                    city={city}
                    street={street}
                    email={email}
                    phone={phone}
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
                    <form method='POST' action="/submit-react" onSubmit={this.handleSubmit}>

                        <Step1
                            currentStep={currentStep}
                            firstname={firstname}
                            lastname={lastname}
                            title={title}
                            handleCheckbox={this.handleCheckbox}
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
                            optin={optin}
                            handleCheckbox={this.handleCheckbox}
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