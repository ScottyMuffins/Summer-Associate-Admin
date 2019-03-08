import React from 'react';
import { Form } from 'reactstrap';
import EmployeeSubForm from './AddEditSubForms/EmoloyeeSubForm';
import EducationSubForm from './AddEditSubForms/EducationSubForm'
import BioSubmission from './AddEditSubForms/BioSubmission';

class AddEditAssociate extends React.Component {

    state = { 
        associateID: '55555',
        lawSchool: 'harvard',
        bio: 'Example Bio',
    }
    
    componentDidMount(){
        // Do something when AddEditAssociate component is mounted
    }

    render() {
        return (
        <Form>
            <EmployeeSubForm
                associateID = {this.state.associateID} // Doesn't do anything yet. Waiting on Web Service - Proof of concept
            ></EmployeeSubForm>
            <EducationSubForm
                lawSchool = {this.state.lawSchool} // Doesn't do anything yet. Waiting on Web Service - Proof of concept
            ></EducationSubForm>
            <BioSubmission
                bio = {this.state.bio} // Doesn't do anything yet. Waiting on Web Service - Proof of concept
            ></BioSubmission>
        </Form>
        );
    }
}

export default AddEditAssociate;