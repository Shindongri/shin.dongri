import React from "react"
import Card from "./card"

const Contents = ({ contents }) => (
  contents.map(({ title, subtitle, created }) => <Card title={ title } subtitle={ subtitle } created={ created } />)
)

export default Contents