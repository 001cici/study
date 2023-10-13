import React from 'react'
import { connect } from './connect'

function ReduxTest(props) {
  return (
    <div>
      {props.counter.count}
      <button onClick={() => {props.handlePlus()}}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

// const mapDispatchProps = (dispatch) => ({}这里是返回了一个对象，所以才会在对象外面加上括号，否则会报错，因为{}一般会被解释为代码块)
const mapDispatchToProps = (dispatch) => ({
  handlePlus(e) {
    dispatch({ type: 'ADD_COUNT' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)


