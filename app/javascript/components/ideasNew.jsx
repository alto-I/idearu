import React, { Fragment, useState } from 'react'
import axios from 'axios'

axios.defaults.headers['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content')

const IdeasNew = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(() => e.target.value)
  }

  const postIdea = () => {
    axios
      .post('/api/v1/ideas', {
        title: 'タイトル',
        elevatorpitch: 'エレベーターピッチ',
      })
      .then((response) => {
        console.log(response)
        window.location.href = `/ideas/${response.data.idea.id}`
      })
  }

  const [formValues, setFormValues] = useState({
    problem: '解決したい問題',
    target: 'ターゲット',
    service: 'サービス名',
    category: 'カテゴリー',
    appealPoint: 'アピールポイント、主要機能',
    competitiveService: '競合サービス',
    differentiationFactor: '差別化要素',
  })

  const updateImages = () => {
    const problem = document.getElementById('problem').value || '解決したい問題'
    const target = document.getElementById('target').value || 'ターゲット'
    const service = document.getElementById('service').value || 'サービス名'
    const category = document.getElementById('category').value || 'カテゴリー'
    const appealPoint =
      document.getElementById('appeal_point').value ||
      'アピールポイント、主要機能'
    const competitiveService =
      document.getElementById('competitive_services').value || '競合サービス'
    const differentiationFactor =
      document.getElementById('differentiation_factor').value || '差別化要素'

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
  }

  return (
    <>
      <p>text : {text}</p>
      <input value={text} onChange={handleChange} type="text" />
      <button onClick={() => alert(text)}>値の確認</button>
      <div className="columns">
        <div className="form-container column">
          質問に対する回答を入力して下さい。
          <form action="/api/ideas">
            <label htmlFor="problem">
              1.解決したい問題は？
              <br />
              <input size="40" type="text" name="proble" id="problem" />
            </label>
            <br />
            <label htmlFor="target">
              2.このサービスを使うターゲットは？
              <br />
              <input size="40" type="text" name="proble" id="target" />
            </label>
            <br />
            <label htmlFor="service">
              3.サービス名は？（任意）
              <br />
              <input size="30" type="text" name="proble" id="service" />
            </label>
            <br />
            <label htmlFor="category">
              4.このサービスのカテゴリーは？
              <br />
              <input size="40" type="text" name="proble" id="category" />
            </label>
            <br />
            <label htmlFor="appeal_point">
              5.このサービスのアピールポイント、主要機能は？
              <br />
              <input size="60" type="text" name="proble" id="appeal_point" />
            </label>
            <br />
            <label htmlFor="competitive_services">
              6.競合サービスは？
              <br />
              <input
                size="30"
                type="text"
                name="proble"
                id="competitive_services"
              />
            </label>
            <br />
            <label htmlFor="differentiation_factor">
              7.競合サービスとの差別化要素は？
              <br />
              <input
                size="60"
                type="text"
                name="proble"
                id="differentiation_factor"
              />
            </label>
            <br />
            <br />
            <input
              className="button is-success"
              type="submit"
              value="投稿"
              onClick={postIdea}
            />
          </form>
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
