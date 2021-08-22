import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <Spinner animation="grow" variant="success" />  
                    </div>
                    <div className="col">
                        <Spinner animation="grow" variant="success" />  
                    </div>
                    <div className="col">
                        <Spinner animation="grow" variant="success" />  
                    </div>
                    <div className="col">
                        <Spinner animation="grow" variant="success" />  
                    </div>
                    <div className="col">
                        <Spinner animation="grow" variant="success" />  
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Loading;