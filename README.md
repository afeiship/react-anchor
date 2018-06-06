# react-anchor
> A tag for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    linkable: PropTypes.bool
  };

  static defaultProps = {
    linkable: true
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-anchor --registry=https://registry.npm.taobao.org
```

```js
import ReactAnchor from 'react-anchor';
```

```scss
// customize your styles:
$react-anchor-options:(
);

@import 'node_modules/react-anchor/dist/style.scss';
```


## usage:
```jsx

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

```
