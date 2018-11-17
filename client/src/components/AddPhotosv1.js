import React, { Fragment } from 'react';
import { 
  Form, 
  Grid, 
  Image, 
  Container, 
  Divider, 
  Header, 
  Button,
} from 'semantic-ui-react';
import Dropzone from 'react-dropzone'
import { updateUser } from '../reducers/user'
import { connect } from 'react-redux';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class AddPhotos extends React.Component {
  state = { editing: false, formValues: { name: '',
    Description: '', file: [] },}

  componentDidMount() {
    const { user: { name, Description } } = this.props;
    this.setState({ formValues: { name, Description } })
  }

  toggleEdit = () => {
    this.setState(state => {
      return { editing: !state.editing }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formValues: { name, Description, file } } = this.state
    const { user, dispatch } = this.props;
    dispatch(updateUser(user.id, { name, Description, file }))
    this.setState({
      editing: false,
      formValues: {
        ...this.state.formValues,
        file: ''
      }
    })
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0] } })
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  profileView = () => {
    const { user } = this.props;
    return (
      <Fragment>
        <Grid.Column width={4}>
          <Image src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header as="h1">{user.name}</Header>
          <Header as="h1">{user.email}</Header>
        </Grid.Column>
      </Fragment>
    )
  }

  editView = () => {
    const { user } = this.props;
    const { formValues: { name, Description, file } } = this.state;    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {file && <Image src={file.preview} />}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Description"
            name="Description"
            value={Description}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

  render() {
    const { editing } = this.state;
    return (
      <Container>
        <Divider hidden />
        <Grid>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {editing ? this.editView() : this.profileView()}
            <Grid.Column>
              <Button onClick={this.toggleEdit}>{editing ? 'Cancel' : 'Edit'}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AddPhotos)


// import React from 'react'
// import {
//   Container,
//   Segment,
//   Header,
// } from 'semantic-ui-react'
// import Dropzone from 'react-dropzone'

// class AddPhotos extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Segment>
//           stuff
//         </Segment>
//       </Container>
//     )
//   }
// }

// export default AddPhotos
