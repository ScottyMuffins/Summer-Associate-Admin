import React from 'react';
import {Button, Label, Input, InputGroup, InputGroupAddon, FormGroup} from 'reactstrap';

const DeleteAssociate = (props) => {

    return(
        <div className='subForm-container'>
            <h3 className='subForm-header'>Delete Summer Associate</h3>
            <FormGroup>
                <Label for='associateID'>Associate ID</Label>
                <InputGroup>
                    <Input id='associateID' placeholder="" required='true'/>
                    <InputGroupAddon addonType="append">
                        <Button>Preview</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            <hr/>
            <div className='subForm-container'>
                <Button type='submit' className='submit-buttons' color='danger'>Delete</Button>
                <Button type="submit" value="Cancel" formnovalidate='true' className='submit-buttons' color='secondary'>Cancel</Button>
            </div>
        </div>
    );
}

export default DeleteAssociate;