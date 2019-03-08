import React from 'react';
import { Form, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import EmployeeSubForm from './Components/SubFormComponents/EmoloyeeSubForm';
import EducationSubForm from './Components/SubFormComponents/EducationSubForm';
import BioSubmission from './Components/SubFormComponents/BioSubmission';
import DeleteAssociate from './Components/DeleteAssociate';
import Settings from './Components/Settings';
import classnames from 'classnames';

class FormController extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      lawSchool: 'harvard'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' }, 'noselect')}
              onClick={() => { this.toggle('1'); }}
            >
              Add/Edit Associate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' }, 'noselect')}
              onClick={() => { this.toggle('2'); }}
            >
              Delete Associate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' }, 'noselect')}
              onClick={() => { this.toggle('3'); }}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Form className='needs-validation' novalidate>
                <EmployeeSubForm></EmployeeSubForm>
                <EducationSubForm
                  lawSchool = {this.state.lawSchool}
                ></EducationSubForm>
                <BioSubmission></BioSubmission>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form>
                <DeleteAssociate></DeleteAssociate>
            </Form>
          </TabPane>
          <TabPane tabId="3">
            <Form>
                <Settings></Settings>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default FormController;