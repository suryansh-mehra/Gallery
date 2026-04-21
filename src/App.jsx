import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [index, setIndex] = useState(1)
  const [userData, setUserData] = useState([])

  const previous = () => {
    if (index > 1) {
      setUserData([])
      setIndex(index - 1)
    }

  }

  const next = () => {
    setUserData([])
    setIndex(index + 1)
  }

  const getDAta = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=16`)
    setUserData(response.data)
  }

  let show = "Loading..."

  if (userData.length > 0) {
    show = userData.map(function (elem, idx) {

      return (

        <div
          key={idx}
          className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg transition"
        >
          <img
            src={elem.download_url}
            alt=""
            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
          />
          <p className="text-sm text-gray-700 px-3 py-2 truncate">
            {elem.author}
          </p>
        </div>

      )
    })
  }

  useEffect(function () {
    getDAta()
  }, [index])

  return (
    <div className="h-screen bg-gradient-to-br from-[#f5f7fb] via-[#eef1f7] to-[#e6e9f2] p-6 flex flex-col">

      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        📸 Gallery
      </h1>

      {/* Scrollable Gallery */}
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {show}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">

        <button
          onClick={previous}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition active:scale-95 shadow-sm"
        >
          Prev
        </button>

        <span className="text-gray-600 text-sm">
          Page {index}
        </span>

        <button
          onClick={next}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition active:scale-95 shadow-sm"
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App