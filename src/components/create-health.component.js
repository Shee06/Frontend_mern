import React, {Component} from 'react';
import axios from 'axios';
import Dashboardfaculty from './Dashboardfaculty';


export default class CreateHealth extends Component {

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

    onValueChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const health = {
            fullname: this.state.fullname,
            temperature: this.state.temperature,
            text: this.state.text,
            phonenumber: this.state.phonenumber
        }

       

        axios.post('https://backend-mern-one.vercel.app/health/add', health )
            .then(res => window.location = "/Accountfaculty")
            .catch(err => console.log('Error :'+ err));
    }

    render(){
        return(<>
            <Dashboardfaculty/>
            <div style={{padding: '40px' ,paddingTop: '80px'}}></div>
            <div className="container">
                <h1>Create Student Fees</h1>
 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" data-name="fullname"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Fees</label>
                        <input type="number" step="0.1" className="form-control" data-name="temperature"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Paid | Unpaid</label>
                        <input type="text" className="form-control" data-name="text"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" data-name="phonenumber"  required onChange={this.onValueChange} />
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