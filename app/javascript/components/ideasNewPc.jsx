import React from 'react'

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
    <div className="main">
      <div className="main__header">
        <div className="container is-max has-padding">
          <h1 className="ideas-new__title title is-4">アイデアを投稿する</h1>
        </div>
      </div>
      <div className="main__body">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="form__container column">
              <div className="form__introduction mb-5">
                <h2 className="title is-size-5">
                  質問に答えてエレベーターピッチを作成しよう。
                </h2>
              </div>
              <form onSubmit={handleSubmit(postIdea)} className="form__main">
                <div className="form__items">
                  <div className="field form__item">
                    <label htmlFor="problem" className="label">
                      1.解決したい問題は？
                      {errors.problem && (
                        <p className="error-message problem-error">
                          {errors.problem.message}
                        </p>
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
                        <p className="error-message target-error">
                          {errors.target.message}
                        </p>
                      )}
                      <input
                        type="text"
                        id="target"
                        className="input"
                        {...register('target', {
                          required: 'この入力項目は必須です。',
                        })}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            target: e.target.value,
                          })
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
                        className="input"
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
                        <p className="error-message category-error">
                          {errors.category.message}
                        </p>
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
                        <p className="error-message appealpoint-error">
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
                        <p className="error-message competitiveservices-error">
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
                        <p className="error-message differentiationfactor-error">
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
                  <div className="form__action">
                    <input
                      type="submit"
                      value="投稿する"
                      className="button is-medium is-link is-fullwidth"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="preview column">
              <div className="preview__inner card ">
                <div className="card-header">
                  <h2 className="card-header-title">新規投稿イメージ</h2>
                </div>
                <div className="card-content">
                  <div className="preview__title title is-size-5 pb-3">
                    {formValues.problem}
                    という問題を解決したい
                  </div>
                  <div className="preview__elevatorpitch mt-4">
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
        </div>
      </div>
    </div>
  )
}

export default IdeasNewPc
