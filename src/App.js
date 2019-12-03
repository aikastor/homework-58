import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import ButtonGroup from "./components/UI/Button/ButtonGroup";
import Alert from "./components/UI/Alert/Alert";

class App extends Component {
  state = {
    modalShow: false,
    showAlert: true,
  };
  showModal = () => {
    this.setState({modalShow: true});
  };
  closeModal = ()=> {
    this.setState({modalShow: false});
  };
  continue = () => {
      alert('You continued');
  };
  closeAlert = ()=> {
    this.setState({showAlert: false})
  };
    render() {
        const buttons = [
            {type: 'primary', label: 'Continue', clicked: this.continue},
            {type: 'danger', label: 'Close', clicked: this.closeModal},
        ];
        return (
            <Fragment>
                <Button onClick={this.showModal} label={'Show' +
                ' modal'} className='btn btn-primary'>+</Button>
                <Modal show={this.state.modalShow}
                       close={this.closeModal}
                       title='Modal title'
                       buttons={<ButtonGroup buttons={buttons}/>}
                >
                    <p>Modal content</p>
                </Modal>
                <hr/>
                <p>Remove 'clickDismissible' option to dismiss alerts by clicking on a 'x' button :)</p>

                <Alert dismiss={this.closeAlert}
                       clickDismissible
                       type='success'  /*danger, warning, primary
                        are also available*/
                       show={this.state.showAlert}>
                    <span>This alert is dismissible by clicking</span>
                </Alert>
            </Fragment>

        );
    }
}

export default App;
