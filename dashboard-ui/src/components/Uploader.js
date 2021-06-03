import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class Uploader extends Component {
  constructor(props) {
    super(props);
    // this.onDrop = (files) => {
    //
    //   this.setState({files})
    // };
    this.state = {
      files: [],
      fileData: '',
    };
  }

uploadToAPI = (data) => {

  fetch('http://localhost:8000/api/v1/reports/', {
    credentials: 'include',
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'text/csv'
    }
  }).then(response => {
    console.log(response)
  }).then(data=> {
    console.log(data)
    this.setState({
      files: [],
      fileData: ''
    })
  }).catch(err => console.error({'Error': err}))
}

onDrop = (files) => {
  console.log(files)
  const blob = new Blob(files)
  const textBlob = blob.text()
  .then(response=>
    this.setState({
      files: files,
      fileData: response
    })
  )
}


  render() {

    // console.log(this.state.fileData)
    console.log(typeof this.state.fileData)

    const files = this.state.files.map(file => (

      <li key={file.name}>
        {file.name} - {file.size} bytes
        <button onClick={()=> { this.uploadToAPI(this.state.fileData) } }>upload</button>
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
              <h5 id='filesInfoClick' onClick={()=> this.props.openCompFilesInfo()}>COMPLIANT FILES ONLY</h5>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Uploader
