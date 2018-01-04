import React from 'react';

import Uploader from './components/Uploader';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { textData: undefined };

    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange() {
    console.log(this.state.textData);
    console.log('********* file change ********');
  }

  render() {
    return (
      <div>
        <h1>Hello there</h1>
        <Uploader onFileChange={this.onFileChange} />
      </div>
    );
  }
}
