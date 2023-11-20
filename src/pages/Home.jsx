import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {

  return (
  <>
  <Main/>
  <Row title='Popular' fetchUrl = '/movie/popular?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='TO RATED' fetchUrl = '/movie/top_rated?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='Up Coming' fetchUrl = '/movie/popular?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='Up Coming' fetchUrl = '/movie/upcoming?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='Up Coming' fetchUrl = '/movie/popular?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='Up Coming' fetchUrl = '/movie/popular?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
  <Row title='Movie' fetchUrl = '/search/movie?api_key=a5ccbb1a9688f7fdaf65e564734e5302&language=eng-US'/>
 
  </>
  )
}

export default Home
