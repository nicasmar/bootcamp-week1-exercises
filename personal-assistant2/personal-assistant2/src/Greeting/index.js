import React, { useState, useEffect } from 'react'
import { Container, Hello, Text } from './styles'
import Weather from '../Weather'

const Greeting = () => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    if (!weather) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
        const data = await response.json()
        setWeather(data)
      // eslint-disable-next-line no-alert
      }, () => alert('Failed to fetch weather data.'))
    }
  }, [weather])

  return (
    <Container>
      <Hello>HELLO!</Hello>
      <Text>It is a beautiful day outside...</Text>
      {weather ? <Weather weather={weather} /> : <Text>Your weather data is loading...</Text>}
    </Container>
  )
}

export default Greeting
