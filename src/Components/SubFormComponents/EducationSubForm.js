import React from 'react';
import {Label, Input, FormGroup} from 'reactstrap';

const EducationSubForm = (props) => { 

    return(
        <div className='subForm-container'>
            <h3 className='subForm-header'>Education</h3>
            <h5 className='subForm-secondary-header text-secondary'>Law School</h5>
            <FormGroup>
                <Label for='lawSchoolID'>School Name</Label>
                <Input id='lawSchoolID' placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for='lawSchoolYearID'> Graduation Year</Label>
                <select id='lawSchoolYearID' className="form-control" required>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </FormGroup>
            <hr/>
            <h5 className='subForm-secondary-header text-secondary'>Undergraduate School</h5>
            <FormGroup>
                <Label for='undergradSchoolID'>School</Label>
                <Input id='undergradSchoolID' placeholder={props.lawSchool} required/>
            </FormGroup>
            <FormGroup>
                <Label for='undergradDegreeID'>Degree</Label>
                <Input id='undergradDegreeID' placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for='undergradMajorID'>Major</Label>
                <Input id='undergradMajorID' placeholder="" required/>
            </FormGroup>
            <hr/>
            <h5 className='subForm-secondary-header text-secondary'>Graduate School</h5>
            <FormGroup>
                <Label for='gradSchoolID'>School</Label>
                <Input id='gradSchoolID' placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for='gradDegreeID'>Degree</Label>
                <Input id='gradDegreeID' placeholder="" required/>
            </FormGroup>
            <FormGroup>
                <Label for='gradMajorID'>Major</Label>
                <Input id='gradMajorID' placeholder="" required/>
            </FormGroup>
            <hr/>
        </div>
    );
}

export default EducationSubForm;