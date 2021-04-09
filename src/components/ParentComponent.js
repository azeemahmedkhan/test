import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

  constructor() {
    super()
    this.state = {
      parentName: 'parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} form ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
