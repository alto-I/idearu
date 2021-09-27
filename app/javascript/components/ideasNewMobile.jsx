import React, { useState } from 'react'
import '../stylesheets/ideasNew.scss'

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
    <div className="ideas-new__container">
      <div className="ideas-new__title title has-text-centered is-4 m-2">
        アイデアを投稿する
      </div>
      <div className="tabs is-toggle is-centered">
        <ul>
          <li
            className={isImageAcitve ? '' : 'is-active'}
            onClick={handleIsImageActiveChange}
            role="tab"
            tabIndex="0"
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
            role="tab"
            tabIndex="0"
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
          <div className="form__container mx-1">
            <div className="form__introduction mb-3">
              <strong>質問に対する回答を入力して下さい。</strong>
            </div>
            <form onSubmit={handleSubmit(postIdea)} className="form__main">
              <div className="form__items">
                <div className="field form__item">
                  <label htmlFor="problem" className="label">
                    1.解決したい問題は？
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
                        setFormValues({
                          ...formValues,
                          problem: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="target" className="label">
                    2.このサービスを使うターゲットは？
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
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="service" className="label">
                    3.サービス名は？（任意）
                    <input
                      type="text"
                      id="service"
                      name="service"
                      className="input"
                      {...register('service')}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          service: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="category" className="label">
                    4.このサービスのカテゴリーは？
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
                        setFormValues({
                          ...formValues,
                          category: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="appealPoint" className="label">
                    5.このサービスのアピールポイント、主要機能は？
                    {errors.appealPoint && (
                      <p className="error-message">
                        {errors.appealPoint.message}
                      </p>
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
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="competitiveServices" className="label">
                    6.競合サービスは？
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
                  </label>
                </div>
                <div className="field form__item">
                  <label htmlFor="differentiationFactor" className="label">
                    7.競合サービスとの差別化要素は？
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
                  </label>
                </div>
                <div className="form__action has-text-centered my-3">
                  <input
                    type="submit"
                    value="投稿する"
                    className="button is-success"
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="image__container">
            <div className="image__introduction mb-4 ml-2">
              <strong>新規投稿イメージ</strong>
            </div>
            <div className="image__wrapper box">
              <div className="image__title is-size-5 pb-4">
                {formValues.problem}
                <br />
                という問題を解決したい
              </div>
              <div className="image__elevatorpitch mt-4">
                {formValues.service}というサービスは、
                <br />
                {formValues.problem}
                という問題を解決したい
                <br />
                {formValues.target}向けの、
                <br />
                {formValues.category}です。
                <br /> ユーザーは
                {formValues.appealPoint}
                ができ
                <br />
                {formValues.competitiveService}とは違って、
                <br />
                {formValues.differentiationFactor}事が特徴です。
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default IdeasNewMobile
