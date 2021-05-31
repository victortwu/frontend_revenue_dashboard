import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }

uploadToAPI = (file) => {
  console.log('uploadToAPI called...')
  console.log('Here is the file: ', file)
  fetch('http://localhost:8000/api/v1/reports/' + file, {
    credentials: 'include',
    method: 'POST'
  }).then(response => {
    console.log(response)
  }).then(data=> {
    console.log(data)
    this.setState({
      files: []
    })
  }).catch(err => console.error({'Error': err}))


// .then(()=> this.props.getReports())

}



  render() {
    console.log(this.state.files)
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <button onClick={()=> {
                                this.uploadToAPI(file.path)

                              }
                              }>upload</button>
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="uploadContainer">
          <h5>UPLOAD CSV FILES</h5>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop or click to select</p>
            </div>
            <aside>
              <h5>COMPLIANT FILES ONLY</h5>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Uploader
