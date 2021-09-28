# frozen_string_literal: true

require 'test_helper'

class Api::IdeasTest < ActionDispatch::IntegrationTest
  test 'GET /api/v1/ideas.json' do
    get api_v1_ideas_path(format: :json, params: { solved: false })
    solved_ideas_json = JSON.parse(response.body)
    assert_response :ok
    assert_equal 14, solved_ideas_json['ideas'].length

    get api_v1_ideas_path(format: :json, params: { solved: true })
    not_solved_ideas_json = JSON.parse(response.body)
    assert_response :ok
    assert_equal 10, not_solved_ideas_json['ideas'].length
  end

  test 'POST /api/v1/ideas' do
    post api_v1_ideas_path(params: { title: 'title', elevatorpitch: 'elevatorpitch' })
    assert_response :redirect
  end
end
