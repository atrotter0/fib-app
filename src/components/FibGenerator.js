import React from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class FibGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsVisible: false,
      fibResults: 0
    }
    this.handleResultsVisible = this.handleResultsVisible.bind(this);
  }

  getFibonacci = (e) => {
    e.preventDefault();

    const input = e.target.elements.fibInput.value;
    let getFibonacciPromise = this.makeFibonacciRequest(input);

    getFibonacciPromise.then((response) => {
      this.handleUpdateResults(response);
      this.handleResultsVisible();
    }, (error) => {
      //display error
    });
  }

  makeFibonacciRequest = (number) => {
    return new Promise((resolve,reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', `http://localhost:8080/api/fibonacci/${number}`, true);
      request.onload = function() {
        if(request.status === 200) {
          const results = JSON.stringify(request.response);
          resolve(results);
        } else {
          reject(request.statusText);
        }
      }
      request.send();
    });
  }

  handleResultsVisible = () => {
    this.setState(() => ({resultsVisible: true}))
  }

  handleUpdateResults = (response) => {
    const parsedResponse = JSON.parse(response);
    this.setState(() => ({fibResults: parsedResponse}));
  }

  render() {
    const paperStyles = {
      width: '50%',
      maxWidth: '500px',
      height: '200px',
      margin: '20px auto',
      padding: '20px',
      textAlign: 'center'
    }
    const buttonStyles = {
      marginTop: '20px'
    }
    return(
      <div>
        <form onSubmit={this.getFibonacci}>
          <Paper style={paperStyles}>
            <InputLabel htmlFor='fib-input'>
              Enter a number:
            </InputLabel><br/>
            <Input type='number' id='fibInput' name='fibInput' /><br/>
            <Button type='submit' variant='contained' color='primary' style={buttonStyles}>
              Generate
            </Button>
            {this.state.resultsVisible && (
              <div>
                <p>{this.state.fibResults}</p>
              </div>
            )}
          </Paper>
        </form>
      </div>
    );
  }
}

export default FibGenerator;
