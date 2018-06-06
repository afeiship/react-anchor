import './dev.scss';
import ReactAnchor from './main';

/*===example start===*/

// install: npm install afeiship/react-anchor --save
// import : import ReactAnchor from 'react-anchor'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-anchor">
        <ReactAnchor ref='rc' href="#">
          #DELETE#
        </ReactAnchor>

        <br/>

        <ReactAnchor ref='rc1' linkable={false}>
          #DELETE BUTTON#
        </ReactAnchor>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
