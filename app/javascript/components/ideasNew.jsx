/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../stylesheets/ideasNew.scss'

axios.defaults.headers['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content')

const IdeasNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [formValues, setFormValues] = useState({
    problem: '解決したい問題',
    target: 'ターゲット',
    service: 'サービス名（未定）',
    category: 'カテゴリー',
    appealPoint: 'アピールポイント、主要機能',
    competitiveService: '競合サービス',
    differentiationFactor: '差別化要素',
  })

  const postIdea = () => {
    const title = formValues.problem
    const elevatorpitch = `${formValues.service}というサービスは、${formValues.problem}という問題を解決したい${formValues.target}向けの、${formValues.category}です。ユーザーは${formValues.appealPoint}ができ、${formValues.competitiveService}とは違って、${formValues.differentiationFactor}事が特徴です。`

    axios.post('/api/v1/ideas', { title, elevatorpitch }).then((response) => {
      window.location.href = `/ideas/${response.data.idea.id}`
    })
  }

  return (
    <div className="ideas-new-container">
      <div className="container title">アイデアを投稿する</div>
      <div className="columns">
        <div className="form-container column">
          質問に対する回答を入力して下さい。
          <br />
          <form onSubmit={handleSubmit(postIdea)}>
            <label htmlFor="problem">
              <p>1.解決したい問題は？</p>
              {errors.problem && (
                <p className="error-message">{errors.problem.message}</p>
              )}
              <input
                size="40"
                type="text"
                name="problem"
                id="problem"
                {...register('problem', {
                  required: 'この入力項目は必須です。',
                })}
                onChange={(e) =>
                  setFormValues({ ...formValues, problem: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="target">
              <p>2.このサービスを使うターゲットは？</p>
              {errors.target && (
                <p className="error-message">{errors.target.message}</p>
              )}
              <input
                size="40"
                type="text"
                id="target"
                {...register('target', {
                  required: 'この入力項目は必須です。',
                })}
                onChange={(e) =>
                  setFormValues({ ...formValues, target: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="service">
              <p>3.サービス名は？（任意）</p>
              <input
                size="30"
                type="text"
                id="service"
                onChange={(e) =>
                  setFormValues({ ...formValues, service: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="category">
              <p>4.このサービスのカテゴリーは？</p>
              {errors.category && (
                <p className="error-message">{errors.category.message}</p>
              )}
              <input
                size="40"
                type="text"
                id="category"
                {...register('category', {
                  required: 'この入力項目は必須です。',
                })}
                onChange={(e) =>
                  setFormValues({ ...formValues, category: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="appealPoint">
              <p>5.このサービスのアピールポイント、主要機能は？</p>
              {errors.appealPoint && (
                <p className="error-message">{errors.appealPoint.message}</p>
              )}
              <input
                size="60"
                type="text"
                id="appealPoint"
                {...register('appealPoint', {
                  required: 'この入力項目は必須です。',
                })}
                onChange={(e) =>
                  setFormValues({ ...formValues, appealPoint: e.target.value })
                }
              />
            </label>
            <br />
            <label htmlFor="competitiveServices">
              <p>6.競合サービスは？</p>
              {errors.competitiveServices && (
                <p className="error-message">
                  {errors.competitiveServices.message}
                </p>
              )}
              <input
                size="30"
                type="text"
                id="competitiveServices"
                {...register('competitiveServices', {
                  required: 'この入力項目は必須です。',
                })}
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
              <p>7.競合サービスとの差別化要素は？</p>
              {errors.differentiationFactor && (
                <p className="error-message">
                  {errors.differentiationFactor.message}
                </p>
              )}
              <input
                size="60"
                type="text"
                id="differentiationFactor"
                {...register('differentiationFactor', {
                  required: 'この入力項目は必須です。',
                })}
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
            <input type="submit" className="button is-success" />
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
    </div>
  )
}

export default IdeasNew
