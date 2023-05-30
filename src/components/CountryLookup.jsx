"use client"

import React, { useState, useEffect } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState("United States")

  useEffect(() => {
    fetch(`https://ip-api.com/json/${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.country)
        setCountry(data.country)
      })
  },[])
  return (
    <div>{country}</div>
  )
}
