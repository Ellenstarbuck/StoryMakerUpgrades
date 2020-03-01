import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import StoryForm from './StoryForm'
// import { headers } from '../../lib/headers'


class StoryNew extends React.Component{

  state = {
    data: {
      title: '',
      age_rating: '',
      image: '',
      lineStart: '',
      genre: '',
      owner: ''
    } 

  }

  // options = [
  //   { value: 'Funny', label: 'Funny' }, //label is shown to user
  //   { value: 'Sci-fi', label: 'Sci-fi' },
  //   { value: 'Spooky', label: 'Spooky' },
  //   { value: 'Internet', label: 'Internet' },
  //   { value: 'Cute', label: 'Cute' },
  //   { value: 'Fairy Tales', label: 'Fairy Tales' },
  //   { value: 'Mystery', label: 'Mysery' },
  //   { value: 'Poetry', label: 'Poetry' },
  //   { value: 'Magic', label: 'Magic' }
  // ]



  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log()
      const res = await axios.post('http://localhost:8000/storys/',
        this.state.data, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        }) 
        
      this.props.history.push(`/storys/${res.data.id}`)
    } catch (err) {
      console.log(err)
    }
  }

  

  // handleMultiChange = (selected) => {
  //   console.log(selected[0].label)
  //   const genre = [selected[0].label]
  //   const data = { ...this.state.data, genre }
  //   console.log(this.state.data.genre)
  //   this.setState({ data })
  // }



  render() {
    return (
      <section className="section">
        <div className="container">
          <StoryForm data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            // handleMultiChange={this.handleMultiChange}
          />
        </div>
      </section>
    )
    
  }

}
export default StoryNew
