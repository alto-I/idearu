/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MediaQuery from 'react-responsive'
import axios from 'axios'

import IdeasNewPc from './ideasNewPc'
import IdeasNewMobile from './ideasNewMobile'

const IdeasNew = () => {
  axios.defaults.headers['X-CSRF-TOKEN'] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [formValues, setFormValues] = useState({
    problem: '[解決したい問題]',
    target: '[ターゲット]',
    service: '[サービス名（未定）]',
    category: '[カテゴリー]',
    appealPoint: '[アピールポイント、主要機能]',
    competitiveService: '[競合サービス]',
    differentiationFactor: '[差別化要素]',
  })

  const postIdea = () => {
    const service = formValues.service
      ? formValues.service
      : 'サービス名（未定）'

    const title = formValues.problem
    const elevatorpitch = `${service}というサービスは、${formValues.problem}という問題を解決したい${formValues.target}向けの、${formValues.category}です。ユーザーは${formValues.appealPoint}ができ、${formValues.competitiveService}とは違って、${formValues.differentiationFactor}事が特徴です。`

    axios.post('/api/v1/ideas', { title, elevatorpitch }).then((response) => {
      window.location.href = `/ideas/${response.data.idea.id}`
    })
  }

  return (
    <>
      <MediaQuery query="(max-width: 767px)">
        <IdeasNewMobile
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          formValues={formValues}
          setFormValues={setFormValues}
          postIdea={postIdea}
        />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <IdeasNewPc
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          formValues={formValues}
          setFormValues={setFormValues}
          postIdea={postIdea}
        />
      </MediaQuery>
    </>
  )
}

export default IdeasNew
