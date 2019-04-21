import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ENDPOINT = '/.netlify/functions/github-projects'

export default () => {
  const [loadFailed, setLoadFailed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(ENDPOINT).then(response => {
      if (response.status === 200) {
        setData(response.data)
        setLoading(false)
      } else {
        setLoadFailed(true)
        setLoading(false)
      }
    })

    // return () => {}
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (loadFailed) {
    return <div>Oh no, there was a problem loading this data</div>
  }

  return data.map(it => <div key={it.name}>{JSON.stringify(it)}</div>)
}
