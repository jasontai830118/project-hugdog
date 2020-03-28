import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

//引入自己的css
import '../../css/activity/activity.scss'

// 導入高階元件的方法
import { connect } from 'react-redux'

// 全部綁定action creators
// 導入所有的action creators變成一個物件值
//import * as actionCreators from './actions/index'

// 部份綁定action creators
import { bindActionCreators } from 'redux'
import { addValue, addValueAsync, initValueAsync } from './actions/index'

function App(props) {
  //觀察由connect可以在這個元件得到什麼
  console.log(props)

  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    // 開啟載入指示
    setDataLoading(true)

    props.initValueAsync()
  }, [])

  // 每次total資料有變動就會1秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [dataLoading])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <h1>{props.total}</h1>
      <button
        onClick={() => {
          // 使用時直接套用action creator，會幫忙建立action物件與dispatch
          props.addValue(5)
        }}
      >
        +5
      </button>

      <button
        onClick={() => {
          props.addValueAsync(5)
        }}
      >
        +5(after 3s)
      </button>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading ? loading : display}</div>
    </>
  )
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
  return { total: store.counter }
}

// const mapDispatchToProps = null

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addValue, addValueAsync, initValueAsync },
    dispatch
  )
}

// 高階元件的套用
// 第二個參數用actionCreators
export default connect(mapStateToProps, mapDispatchToProps)(App)
