import React, { Fragment, useState } from 'react'

const IdeasNew = () => {
  const [values, setValues] = useState({
    title: '',
    elevatorpitch: '',
  })

  const hundleClick = () => {
    const problem = document.getElementById('problem').value
    const target = document.getElementById('target').value
    const service = document.getElementById('service').value
    const category = document.getElementById('category').value
    const appealPoint = document.getElementById('appeal_point').value
    const competitiveService = document.getElementById(
      'competitive_services'
    ).value
    const differentiationFactor = document.getElementById(
      'differentiation_factor'
    ).value

    setValues({
      ...values,
      title: `${problem}という問題を解決したい`,
      elevatorpitch: `${service}というサービスは、${problem}という問題を解決したい${target}向けの、${category}です。ユーザーは${appealPoint}ができ${competitiveService}とは違って、${differentiationFactor}事が特徴です。`,
    })
  }

  return (
    <>
      <button onClick={hundleClick} type="button">
        エレベーターピッチを確認
      </button>
      <p>{values.title}</p>
      <p>{values.elevatorpitch}</p>
    </>
  )
}

export default IdeasNew
