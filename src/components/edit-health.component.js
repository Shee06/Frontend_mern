import React, {Component} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Dashboardfaculty from './Dashboardfaculty';
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class EditHealth extends Component {
  

    constructor(props){
      super(props);
  
      this.state = {
          fullname: '',
          temperature: '',
          text: '',
          phonenumber: ''
      }

      //this.onFullNameChange = this.onFullNameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onValueChange = this.onValueChange.bind(this);

    }

    // onFullNameChange(e){
    //    this.setState({
    //        fullname: e.target.value
    //    })
    // }

    componentDidMount() {
        let { id } = this.props.params;
        axios.get(`https://backend-mern-one.vercel.app/health/`+id)
        .then(res => {
            this.setState({
                fullname: res.data.fullname,
                temperature: res.data.temperature,
                text: res.data.text,
                phonenumber: res.data.phonenumber
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    onValueChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        let { id } = this.props.params;
        const health = {
            fullname: this.state.fullname,
            temperature: this.state.temperature,
            text: this.state.text,
            phonenumber: this.state.phonenumber
        }

       

        axios.post(`https://backend-mern-one.vercel.app/health/update/`+id, health )
            .then(res => window.location = "/Accountfaculty")
            .catch(err => console.log('Error :'+ err));
    }

    render(){
        return(<>
            <Dashboardfaculty/>
            <div style={{padding: '40px' ,paddingTop: '80px'}}></div>
            <div className="container">
                <h1>Update List</h1>
 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" data-name="fullname"  required onChange={this.onValueChange} value={this.state.fullname} />
                    </div>

                    <div className="form-group">
                        <label>Fees</label>
                        <input type="number" step="0.1" className="form-control" data-name="temperature"  required onChange={this.onValueChange} value={this.state.temperature} />
                    </div>

                    <div className="form-group">
                        <label>Paid | Unpaid</label>
                        <input type="text" className="form-control" data-name="text"  required onChange={this.onValueChange} value={this.state.text} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" data-name="phonenumber"  required onChange={this.onValueChange} value={this.state.phonenumber} />
                    </div>
                    <div class="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
               



            </div>
            </>
        )
    }


}

export default withParams(EditHealth);