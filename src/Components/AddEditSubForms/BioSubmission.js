import React from 'react';
import {Form, Button} from 'reactstrap';

const BioSubmission = (props) => {

    return(
        <div className='subForm-container'>
            <h3 className='subForm-header'>Bio</h3>
            <textarea id='bioTextArea' rows="6" className='col-md-12' placeholder="Copy &amp; Paste Summer Associate Bio Here"  required></textarea>
            <hr/>
            <div className='subForm-container'>
                    <Button type='submit' className='submit-buttons' color='info' onSubmit={props.submitClick}>Submit</Button>
                    <Button type="submit" value="Cancel" formnovalidate='true' className='submit-buttons' color='secondary' onClick={props.cancelClick}>Cancel</Button>
            </div>
        </div>
    );
}

export default BioSubmission;