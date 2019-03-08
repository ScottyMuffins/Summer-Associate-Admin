import React from 'react';
import {Button, Label, Input, InputGroup, InputGroupAddon, FormGroup} from 'reactstrap';

const EmployeeSubForm = (props) => {

    return(
        <div className='subForm-container'>
            <h3 className='subForm-header'>Employee Information</h3>
            <FormGroup novalidate>
                <Label for='associateID'>Associate ID</Label>
                <InputGroup>
                    <Input id='associateID' placeholder="" required/>
                    <InputGroupAddon addonType="append">
                        <Button>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            <FormGroup novalidate>
                <Label for='firstNameID'>First Name</Label>
                <Input id='firstNameID' placeholder="" required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Looks bad.
                </div>
            </FormGroup>
            <FormGroup>
                <Label for='middleNameID'>Middle Name</Label>
                <Input id='middleNameID' placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for='lastNameID'>Last Name</Label>
                <Input id='lastNameID' placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for='picLocationID'>Summer Associate Photo</Label>
                <Input type='file' className='form-control-file' required></Input>
            </FormGroup>
            <FormGroup>
                <Label for='officeID'>Office</Label>
                <select id='officeID' className="form-control" required>
                    <option value="0">- Select -</option>
                    <option value="Baltimore">Baltimore</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York">New York</option>
                </select>
            </FormGroup>
            <hr/>
        </div>
    );
}

export default EmployeeSubForm;