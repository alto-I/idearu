/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
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

  return (
    <div className="ideas-new-container">
      <div className="title is-4 m-6">アイデアを投稿するモバイル版</div>
      <div className="columns">
        <div className="form-container column">
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
              <div className="control">
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
                className="input"
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
            <br />
            <input
              type="submit"
              value="投稿する"
              className="button is-success"
            />
          </form>
        </div>
        <div className="image-container column">
          <div className="title-image mb-4">
            <strong>新規投稿イメージ</strong>
          </div>
          <div className="ideas-container box">
            <div className="idea-image__title is-size-4 pb-4">
              [{formValues.problem}]<br />
              という問題を解決したい
            </div>
            <div className="elevatorpitch-container mt-4">
              [{formValues.service}]というサービスは、[{formValues.problem}
              ]という問題を解決したい[{formValues.target}]向けの、[
              {formValues.category}]です。 ユーザーは[
              {formValues.appealPoint}
              ]ができ[{formValues.competitiveService}]とは違って、[
              {formValues.differentiationFactor}]事が特徴です。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdeasNewMobile
