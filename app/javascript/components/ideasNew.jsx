import React, { Fragment, useState } from 'react'
import axios from 'axios'

axios.defaults.headers['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content')

const IdeasNew = () => {
  const [formValues, setFormValues] = useState({
    problem: '解決したい問題',
    target: 'ターゲット',
    service: 'サービス名',
    category: 'カテゴリー',
    appealPoint: 'アピールポイント、主要機能',
    competitiveService: '競合サービス',
    differentiationFactor: '差別化要素',
  })
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const postIdea = () => {
    const problem = document.getElementById('problem').value || '解決したい問題'
    const target = document.getElementById('target').value || 'ターゲット'
    const service = document.getElementById('service').value || 'サービス名'
    const category = document.getElementById('category').value || 'カテゴリー'
    const appealPoint =
      document.getElementById('appealPoint').value ||
      'アピールポイント、主要機能'
    const competitiveService =
      document.getElementById('competitiveServices').value || '競合サービス'
    const differentiationFactor =
      document.getElementById('differentiationFactor').value || '差別化要素'

    setFormValues({
      ...formValues,
      problem,
      target,
      service,
      category,
      appealPoint,
      competitiveService,
      differentiationFactor,
    })

    axios
      .post('/api/v1/ideas', {
        title: service,
        elevatorpitch: `${service}というサービスは、${problem}という問題を解決したい${target}向けの、${category}です。ユーザーは${appealPoint}ができ、${competitiveService}とは違って、${differentiationFactor}事が特徴です。`,
      })
      .then((response) => {
        window.location.href = `/ideas/${response.data.idea.id}`
      })
  }

  return (
    <>
      <p>text : {text}</p>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={() => alert(text)}>値の確認</button>
      <div className="columns">
        <div className="form-container column">
          質問に対する回答を入力して下さい。
          <br />
          <label htmlFor="problem">
            1.解決したい問題は？
            <br />
            <input size="40" type="text" name="problem" id="problem" />
          </label>
          <br />
          <label htmlFor="target">
            2.このサービスを使うターゲットは？
            <br />
            <input size="40" type="text" name="target" id="target" />
          </label>
          <br />
          <label htmlFor="service">
            3.サービス名は？（任意）
            <br />
            <input size="30" type="text" name="service" id="service" />
          </label>
          <br />
          <label htmlFor="category">
            4.このサービスのカテゴリーは？
            <br />
            <input size="40" type="text" name="category" id="category" />
          </label>
          <br />
          <label htmlFor="appealPoint">
            5.このサービスのアピールポイント、主要機能は？
            <br />
            <input size="60" type="text" name="appealPoint" id="appealPoint" />
          </label>
          <br />
          <label htmlFor="competitiveServices">
            6.競合サービスは？
            <br />
            <input
              size="30"
              type="text"
              name="competitiveServices"
              id="competitiveServices"
            />
          </label>
          <br />
          <label htmlFor="differentiationFactor">
            7.競合サービスとの差別化要素は？
            <br />
            <input
              size="60"
              type="text"
              name="differentiationFactor"
              id="differentiationFactor"
            />
          </label>
          <br />
          <br />
          <button
            className="button is-success"
            type="button"
            onClick={postIdea}
          >
            投稿
          </button>
        </div>
        <div className="image-container column">
          <div className="title">新規投稿イメージ</div>
          <div className="container">
            <div className="ideas-container card">
              <div className="card-header">
                <div className="card-header-title is-size-4">
                  [{formValues.problem}]<br />
                  という問題を解決したい
                </div>
              </div>
              <div className="elevatorpitch-container card-content">
                [{formValues.service}]というサービスは、
                <br />[{formValues.problem}
                ]という問題を解決したい
                <br /> [{formValues.target}]向けの、
                <br />[{formValues.category}]です。
                <br />
                ユーザーは[
                {formValues.appealPoint}
                ]ができ
                <br />[{formValues.competitiveService}]とは違って、
                <br />[{formValues.differentiationFactor}]事が特徴です。
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IdeasNew
