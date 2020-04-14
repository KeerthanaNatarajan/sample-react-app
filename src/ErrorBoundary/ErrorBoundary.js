import React, {Component} from 'react';
class ErrorBoundary extends Component{
    state = {
        errorThrown : false,
        errorMsg : ''
    }

    componentDidCatch = (error,info) => {
        this.setState({
            errorThrown :true,
            errorMsg : error
        });
    }
    
    render(){
        if(this.state.errorThrown){
            return <h1>{this.state.errorMsg}</h1>
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;