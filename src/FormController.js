import React from 'react';
import { Form, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import AddEditAssociate from './Components/AddEditAssociate';
import DeleteAssociate from './Components/DeleteAssociate';
import Settings from './Components/Settings';
import classnames from 'classnames';

class FormController extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
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
            <NavLink className={classnames({ active: this.state.activeTab === '1' }, 'noselect')} onClick={() => { this.toggle('1'); }}> 
              Add/Edit Associate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' }, 'noselect')} onClick={() => { this.toggle('2'); }}>
              Delete Associate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' }, 'noselect')} onClick={() => { this.toggle('3'); }}>
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
              <AddEditAssociate></AddEditAssociate> {/* Only one parent component in each tab to keep it clean. */}
          </TabPane>
          <TabPane tabId="2">
              <DeleteAssociate></DeleteAssociate> {/* Only one parent component in each tab to keep it clean. */}
          </TabPane>
          <TabPane tabId="3">
              <Settings></Settings> {/* Only one parent component in each tab to keep it clean. */}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default FormController;