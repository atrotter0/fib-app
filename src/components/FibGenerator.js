import React from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const FibGenerator = () => {
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
      <Paper style={paperStyles}>
        <InputLabel htmlFor='fib-input'>
          Enter a number:
        </InputLabel><br/>
        <Input type='number' id='fib-input' /><br/>
        <Button variant='contained' color='primary' style={buttonStyles}>
          Generate
        </Button>
      </Paper>
    </div>
  );
}

export default FibGenerator;
