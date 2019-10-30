import React, {Component} from 'react'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'

class Gift extends Component {
    constructor(){
        super();
        this.state = { person: '', present: ''}
    }

    render() {
        return (
            <div className='gift'>
                <Form>
                    <FormGroup>
                        <div>Person</div>
                        {/* <ControlLabel>Person</ControlLabel> */}
                        <FormControl 
                            className='input-person' 
                            onChange={event => this.setState({person: event.target.value }) }
                        />
                    </FormGroup>
                    <FormGroup>
                        <div>Present</div>
                        <FormControl 
                            className='input-present'
                            onChange={event => this.setState({present: event.target.value})}
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default Gift