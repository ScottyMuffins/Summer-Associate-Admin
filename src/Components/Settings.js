import React from 'react';
import {Form, Button, Label, ListGroup, ListGroupItem, FormGroup} from 'reactstrap';

const Settings = (props) => { // This will eventually be a full-fledged React Components. Just showing the light-weight version at first.

    return(
        <Form>
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
        </Form>
    );
}

export default Settings;