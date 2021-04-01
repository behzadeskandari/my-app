import  React,{Component} from 'react';


interface AccordianProps {
  children: React.ReactNode;
  //preview : string;
  preview: React.ReactNode;
}

interface AccordianState{
    open: boolean;
}

export default class Accordian extends Component<AccordianProps, AccordianState> {
  state = {
    open: false,
  };

  render() {
    if (this.state.open) {
      return (
        <>
          {this.props.children}
          <br />
          <div onClick={() => this.setState({ open: false })}>X</div>
        </>
      );
    } else {
      return (
        <>
          {this.props.preview}
          <br />
          <div onClick={() => this.setState({ open: true })}>Open</div>
        </>
      );
    }
  }
}