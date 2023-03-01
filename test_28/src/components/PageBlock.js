import React from 'react'
import News from './News'
import Input from './Input'
import Advertisement from './Advertisement'
import Programs from './Programs'

export default function PageBlock() {
  // let mass = ["Погода", "Карта Германии", "Эфир", "Посещаемое", "Телепрограмма" ]
  const advertisement = "Реклама"
  return (
    <div>
        <News news={"Новость"} text={advertisement}/>
        <Input />
        <Advertisement text={advertisement}/>
        <Programs />
    </div>
  )
}
