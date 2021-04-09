import React, {Component} from 'react'
import axios from 'axios'
import Card from './Card'
import VenueSideBar from './VenueSidebar'

class VenueList extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      venues: []
    }
  }

  componentDidMount()
  {
    axios.get('https://immense-fjord-54349.herokuapp.com/api/venue/list/')
    .then(response => {
      console.log(response)
      this.setState({venues: response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render()
  {
    const {venues} = this.state
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <VenueSideBar/>
          </div>
          <div className="col">
            <div className="row">
              {venues.map(venue => <Card key={venue.name} venue={venue}></Card>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VenueList
