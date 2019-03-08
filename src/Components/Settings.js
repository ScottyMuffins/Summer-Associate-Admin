import React from 'react';
import {Button, Label, ListGroup, ListGroupItem, FormGroup} from 'reactstrap';

const Settings = (props) => {

    return(
        <div className='subForm-container'>
            <h3 className='subForm-header'>Settings</h3>
            <FormGroup>
                <Label for='associateID'>Current Settings</Label>
                <ListGroup>
                    <ListGroupItem>Some Setting</ListGroupItem>
                    <ListGroupItem>Another Setting</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </FormGroup>
            <hr/>
            <div className='subForm-container'>
                <Button type='submit' className='submit-buttons' color='success'>Save</Button>
                <Button type="submit" value="Cancel" formnovalidate='true' className='submit-buttons' color='secondary'>Cancel</Button>
            </div>
        </div>
    );
}

export default Settings;