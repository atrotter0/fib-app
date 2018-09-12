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
  }

  getFibonacci = (e) => {
    e.preventDefault();

    const input = e.target.elements.fibInput.value;
    let getFibonacciPromise = this.makeFibonacciRequest(input);

    getFibonacciPromise.then((response) => {
      this.updateResults(response);
      this.displayResults();
    }, (error) => {
      alert("We encountered a problem with your request. Please try again.");
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

  displayResults = () => {
    this.setState(() => ({resultsVisible: true}))
  }

  updateResults = (response) => {
    const formattedResponse = this.parseAndFormat(response);
    this.setState(() => ({fibResults: formattedResponse}));
  }

  parseAndFormat(response) {
    response = JSON.parse(response);
    return response.toString().split(',').join(', ');
  }

  render() {
    const paperStyles = {
      width: '50%',
      maxWidth: '500px',
      minHeight: '200px',
      margin: '20px auto',
      padding: '20px',
      textAlign: 'center'
    }
    const buttonStyles = {
      marginTop: '20px'
    }
    const resultsStyles = {
      marginTop: '20px',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
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
              <div style={resultsStyles}>
                <p style={resultsStyles}>{this.state.fibResults}</p>
              </div>
            )}
          </Paper>
        </form>
      </div>
    );
  }
}

export default FibGenerator;
