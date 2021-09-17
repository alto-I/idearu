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

  const postIdea = () => {
    const title = formValues.service
    const elevatorpitch = `${formValues.service}というサービスは、${formValues.problem}という問題を解決したい${formValues.target}向けの、${formValues.category}です。ユーザーは${formValues.appealPoint}ができ、${formValues.competitiveService}とは違って、${formValues.differentiationFactor}事が特徴です。`

    axios.post('/api/v1/ideas', { title, elevatorpitch }).then((response) => {
      window.location.href = `/ideas/${response.data.idea.id}`
    })
  }

  return (
    <>
      <div className="container title">アイデアを投稿する</div>
      <div className="columns">
        <div className="form-container column">
          質問に対する回答を入力して下さい。
          <br />
          <label htmlFor="problem">
            1.解決したい問題は？
            <br />
            <input
              size="40"
              type="text"
              name="problem"
              id="problem"
              onChange={(e) =>
                setFormValues({ ...formValues, problem: e.target.value })
              }
            />
          </label>
          <br />
          <label htmlFor="target">
            2.このサービスを使うターゲットは？
            <br />
            <input
              size="40"
              type="text"
              name="target"
              id="target"
              onChange={(e) =>
                setFormValues({ ...formValues, target: e.target.value })
              }
            />
          </label>
          <br />
          <label htmlFor="service">
            3.サービス名は？（任意）
            <br />
            <input
              size="30"
              type="text"
              name="service"
              id="service"
              onChange={(e) =>
                setFormValues({ ...formValues, service: e.target.value })
              }
            />
          </label>
          <br />
          <label htmlFor="category">
            4.このサービスのカテゴリーは？
            <br />
            <input
              size="40"
              type="text"
              name="category"
              id="category"
              onChange={(e) =>
                setFormValues({ ...formValues, category: e.target.value })
              }
            />
          </label>
          <br />
          <label htmlFor="appealPoint">
            5.このサービスのアピールポイント、主要機能は？
            <br />
            <input
              size="60"
              type="text"
              name="appealPoint"
              id="appealPoint"
              onChange={(e) =>
                setFormValues({ ...formValues, appealPoint: e.target.value })
              }
            />
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
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  competitiveService: e.target.value,
                })
              }
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
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  differentiationFactor: e.target.value,
                })
              }
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
