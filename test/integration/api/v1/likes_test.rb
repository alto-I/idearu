# frozen_string_literal: true

require 'test_helper'
require 'application_system_test_case'

class Api::LikesTest < ActionDispatch::IntegrationTest
  test 'GET /api/v1/likes/:id' do
    idea = ideas(:solved_idea1)
    get api_v1_like_path(id: idea.id)
    assert_response :redirect

    sign_in users(:admin)
    get api_v1_like_path(id: idea.id)
    assert_response :ok
  end

  test 'POST /api/v1/likes' do
    idea = ideas(:solved_idea1)
    post api_v1_likes_path(id: idea.id)
    assert_response :redirect

    sign_in users(:admin)
    post api_v1_likes_path(like: { idea_id: idea.id })
    assert_response :ok
  end

  test 'DELETE /api/v1/likes/:id' do
    like = likes(:like1)
    delete api_v1_like_path(id: like.id)
    assert_response :redirect

    sign_in users(:user1)
    delete api_v1_like_path(id: like.id)
    assert_response :no_content
  end
end
