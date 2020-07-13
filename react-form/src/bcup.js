class Step1 extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
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
                        value={this.props.firstname} 
                        onChange={this.props.handleChange} 
                        />
                    </div>
                    <div className="input-box">
                        {/* <label htmlFor="lastname">Last Name</label> */}
                        <input 
                        className="form-control" 
                        id="lastname" 
                        name="lastname" 
                        type="text" 
                        placeholder="Last Name" 
                        value={this.props.lastname} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="input-box">
                        {/* <label htmlFor="lastname">Title</label> */}
                        <input 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        type="text" 
                        placeholder="Title" 
                        value={this.props.title} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    {/* <div className="btns">
                    <button 
                        className="btn btn-primary float-right" 
                        type="button" onClick={this._next}>Next
                        </button>
                    </div> */}
                </div>
        )
    }
}

class Step2 extends React.Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
                <div className="form-group">
                    <div className="input-box">
                        {/* <label htmlFor="firstname">First Name</label> */}
                        <input 
                        className="form-control" 
                        id="country" 
                        name="country" 
                        type="text" 
                        placeholder="Country" 
                        value={this.props.country} 
                        onChange={this.props.handleChange} 
                        />
                    </div>
                    <div className="input-box">
                        {/* <label htmlFor="lastname">Last Name</label> */}
                        <input 
                        className="form-control" 
                        id="city" 
                        name="city" 
                        type="text" 
                        placeholder="City" 
                        value={this.props.city} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="input-box">
                        {/* <label htmlFor="lastname">Title</label> */}
                        <input 
                        className="form-control" 
                        id="street" 
                        name="street" 
                        type="text" 
                        placeholder="Street" 
                        value={this.props.street} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                </div>
        )
    }
}

class Step3 extends React.Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <React.Fragment>
                <div className="form-group">
                    <div className="input-box">
                        {/* <label htmlFor="firstname">First Name</label> */}
                        <input 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        value={this.props.email} 
                        onChange={this.props.handleChange} 
                        />
                    </div>
                    <div className="input-box">
                        {/* <label htmlFor="lastname">Last Name</label> */}
                        <input 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone" 
                        value={this.props.phone} 
                        onChange={this.props.handleChange}
                        />
                    </div>
                </div>
                <div className="btns">
                    <button className="btn btn-success btn-block">Sign up</button>
                </div>
            </React.Fragment>
        )
    }
}




class Form extends React.Component {
    constructor(props) {
        super(props)
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            firstname: '',
            lastname: '',
            title: '',
            country: '',
            city: '',
            street: '',
            email:'',
            phone:''
        }
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
      }

      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        const { firstname, lastname, title, street, city, country, email, phone } = this.state
        alert(`Your registration detail: \n 
               First and Last Name: ${firstname} ${lastname} \n 
               Title: ${title} \n
               Location: ${street} ,${city} - ${country}\n
               E:${email} - P:${phone}`)
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <3){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>Next
          </button>  
        )
      }
      return null;
    }

      render(){
          console.log(this.state)
          return(
              <React.Fragment>
              <div className="form-wrapper">
                <div className="steps"></div>
                    <form onSubmit={this.handleSubmit}>
                        <Step1 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            firstname={this.state.firstname}
                            lastname={this.state.lastname}
                            title={this.state.title}
                            />

                        <Step2 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            country={this.state.country}
                            city={this.state.city}
                            street={this.state.street}
                            />

                        <Step3 
                            currentStep={this.state.currentStep} 
                            handleChange={this.handleChange}
                            email={this.state.email}
                            phone={this.state.phone}
                            />

                            <div className="btns">
                                {this.previousButton()}
                                {this.nextButton()}
                            </div>
                    </form>
                </div>
              </React.Fragment>
          )
      }
}

ReactDOM.render(<Form />, document.getElementById('root'))