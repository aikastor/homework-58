import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import ButtonGroup from "./components/UI/Button/ButtonGroup";

class App extends Component {
  state = {
    modalShow: false,
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
            </Fragment>

        );
    }
}

export default App;