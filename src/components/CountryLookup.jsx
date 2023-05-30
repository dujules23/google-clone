"use client"

import React, { useState, useEffect } from 'react'

export default function CountryLookup() {
  const [country, setCountry] = useState("United States")

  useEffect(() => {
    fetch(`https://ipinfo.io/${process.env.NEXT_PUBLIC_IP_API_KEY}?token=${process.env.NEXT_PUBLIC_API_TOKEN}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country)
      })
  },[])
  return (
    <div>{country}</div>
  )
}
