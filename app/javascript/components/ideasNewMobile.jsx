/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import '../stylesheets/ideasNewPc.scss'

const IdeasNewMobile = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    postIdea,
    formValues,
    setFormValues,
  } = props

  const [isImageAcitve, setIsImageAcitve] = useState(false)

  const handleIsImageActiveChange = () => {
    if (isImageAcitve) {
      setIsImageAcitve(false)
    } else {
      setIsImageAcitve(true)
    }
  }

  return (
    <div className="ideas-new-container">
      <div className="title has-text-centered is-4 m-2">アイデアを投稿する</div>
      <div className="tabs is-toggle is-centered">
        <ul>
          <li
            className={isImageAcitve ? '' : 'is-active'}
            onClick={handleIsImageActiveChange}
          >
            <a>
              <span className="icon is-small">
                <i className="fas fa-file-alt" />
              </span>
              <span>アイデア入力</span>
            </a>
          </li>
          <li
            className={isImageAcitve ? 'is-active' : ''}
            onClick={handleIsImageActiveChange}
          >
            <a>
              <span className="icon is-small">
                <i className="fas fa-image" />
              </span>
              <span>投稿イメージ</span>
            </a>
          </li>
        </ul>
      </div>
      {!isImageAcitve ? (
        <>
          <div className="form-container mx-1">
            <strong>質問に対する回答を入力して下さい。</strong>
            <br />
            <br />
            <form onSubmit={handleSubmit(postIdea)}>
              <div className="field">
                <label htmlFor="problem" className="label">
                  1.解決したい問題は？
                </label>
                {errors.problem && (
                  <p className="error-message">{errors.problem.message}</p>
                )}
                <input
                  type="text"
                  name="problem"
                  id="problem"
                  className="input"
                  {...register('problem', {
                    required: 'この入力項目は必須です。',
                  })}
                  onChange={(e) =>
                    setFormValues({ ...formValues, problem: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label htmlFor="target" className="label">
                  2.このサービスを使うターゲットは？
                </label>
                {errors.target && (
                  <p className="error-message">{errors.target.message}</p>
                )}
                <input
                  type="text"
                  id="target"
                  className="input"
                  {...register('target', {
                    required: 'この入力項目は必須です。',
                  })}
                  onChange={(e) =>
                    setFormValues({ ...formValues, target: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label htmlFor="service" className="label">
                  3.サービス名は？（任意）
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  className="input"
                  {...register('service')}
                  onChange={(e) =>
                    setFormValues({ ...formValues, service: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label htmlFor="category" className="label">
                  4.このサービスのカテゴリーは？
                </label>
                {errors.category && (
                  <p className="error-message">{errors.category.message}</p>
                )}
                <input
                  type="text"
                  id="category"
                  className="input"
                  {...register('category', {
                    required: 'この入力項目は必須です。',
                  })}
                  onChange={(e) =>
                    setFormValues({ ...formValues, category: e.target.value })
                  }
                />
              </div>
              <div className="field">
                <label htmlFor="appealPoint" className="label">
                  5.このサービスのアピールポイント、主要機能は？
                </label>
                {errors.appealPoint && (
                  <p className="error-message">{errors.appealPoint.message}</p>
                )}
                <input
                  type="text"
                  id="appealPoint"
                  className="input"
                  {...register('appealPoint', {
                    required: 'この入力項目は必須です。',
                  })}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      appealPoint: e.target.value,
                    })
                  }
                />
              </div>
              <div className="field">
                <label htmlFor="competitiveServices" className="label">
                  6.競合サービスは？
                </label>
                {errors.competitiveServices && (
                  <p className="error-message">
                    {errors.competitiveServices.message}
                  </p>
                )}
                <input
                  type="text"
                  id="competitiveServices"
                  className="input"
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
              </div>
              <div className="field">
                <label htmlFor="differentiationFactor" className="label">
                  7.競合サービスとの差別化要素は？
                </label>
                {errors.differentiationFactor && (
                  <p className="error-message">
                    {errors.differentiationFactor.message}
                  </p>
                )}
                <input
                  size="60"
                  type="text"
                  id="differentiationFactor"
                  className="input"
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
              </div>
              <div className="has-text-centered my-3">
                <input
                  type="submit"
                  value="投稿する"
                  className="button is-success"
                />
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="image-container">
            <div className="title-image mb-4 ml-2">
              <strong>新規投稿イメージ</strong>
            </div>
            <div className="ideas-container box">
              <div className="idea-image__title is-size-5 pb-4">
                {formValues.problem}<br />
                という問題を解決したい
              </div>
              <div className="elevatorpitch-container mt-4">
                {formValues.service}というサービスは、
                <br />
                {formValues.problem}
                という問題を解決したい
                <br />{formValues.target}向けの、
                <br />{formValues.category}です。
                <br /> ユーザーは
                {formValues.appealPoint}
                ができ
                <br />{formValues.competitiveService}とは違って、
                <br />{formValues.differentiationFactor}事が特徴です。
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default IdeasNewMobile
