import React, { Component } from 'react';
import classes from './App.css';
import './SecondCss.css';
import Test  from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    ary : [ 
      {id: '1', name : 'SHKN', age: 24},
      {id: '2', name : 'GK', age: 26},
      {id: '3', name : 'CD', age: 53},
    ],
    showPersons : false
  }
  switchNameHandler = (newName) => {
    this.setState ( {
      ary: [ 
        {id:'1', name : newName, age: 24},
        {id:'2', name : 'GK', age: 26},
        {id:'3', name : 'CD', age: 55},
      ]
    }); 
  }

  nameChangeHandler = (event, id) => {
    this.setState ( {
      ary: [ 
        {name : 'SH', age: 24},
        {name : event.target.value, age: 26},
        {name : 'CD', age: 55},
      ]
    });  
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  
  }

  deletePersonHandler = (aryIndex) => {
    //const pers = this.state.ary.slice();
    const pers = [...this.state.ary];
    pers.splice(aryIndex,1);
    this.setState({ary : pers});
  }
  render() {
    /*const style = {
      fontColor : 'white',
      backgroundColor : 'green',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      align : 'center',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'Lightgreen',
        color : 'black'
      }  
   }*/
    let persons =  null;
    let btnClass = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.ary.map((arry,index) => {
            return 
              <ErrorBoundary key = {arry.id}>
                <Test 
                  click = {() => this.deletePersonHandler(index)}
                  name = {arry.name}
                  age = {arry.age}
                  change = {this.nameChangeHandler} />
              </ErrorBoundary>
          })}
        </div> 
      );

      /*style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor : ' salmon',
        color : 'black'
      }*/
      btnClass = classes.Red;
    }
   
    let assignedClasses = [];
    
    if(this.state.ary.length <= 2) {
      assignedClasses.push(classes.bold);
    }
    if(this.state.ary.length <= 1) {
      assignedClasses.push(classes.red);
    }
    return (
        <div className={classes.App}>
          <h1 >Sample React App Project</h1>
          <p className={assignedClasses.join(' ')}>Heading2</p>
          <button
            className = {btnClass}
            onClick= {()=> this.switchNameHandler('NPK')}
            key = "key1">SwitchName</button>
          <button 
            className = {btnClass}
            onClick= {this.togglePersonsHandler}
            key = "key2">Toggle Persons</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1', null, 'Hi, I\'m React!!!'));
  }
}
export default App;