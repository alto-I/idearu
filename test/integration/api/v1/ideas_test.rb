# frozen_string_literal: true

require 'test_helper'

class Api::IdeasTest < ActionDispatch::IntegrationTest
  test 'GET /api/v1/ideas.json' do
    get api_v1_ideas_path(format: :json)
    assert_response :unauthorized
  end
end
