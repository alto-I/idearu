import React from 'react'
import '../stylesheets/ideasNew.scss'

const IdeasNewPc = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    postIdea,
    formValues,
    setFormValues,
  } = props

  return (
    <div className="ideas-new__container">
      <div className="ideas-new__title title is-4 m-6">アイデアを投稿する</div>
      <div className="columns box m-6">
        <div className="form__container column">
          <div className="form__introduction mb-3">
            <strong>質問に対する回答を入力して下さい。</strong>
          </div>
          <form onSubmit={handleSubmit(postIdea)} className="form__main">
            <div className="form__items">
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="field form__item">
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
              <div className="form__action">
                <input
                  type="submit"
                  value="投稿する"
                  className="button is-success"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="image__container column">
          <div className="image__introduction mb-4">
            <strong>新規投稿イメージ</strong>
          </div>
          <div className="image__wrapper box">
            <div className="image__title is-size-4 pb-4">
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
      </div>
    </div>
  )
}

export default IdeasNewPc
