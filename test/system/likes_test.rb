# frozen_string_literal: true

require 'application_system_test_case'

class LikesTest < ApplicationSystemTestCase
  setup do
    @idea = ideas(:solved_idea1)
    ActionController::Base.allow_forgery_protection = true
  end

  test 'visit idea page with no login' do
    visit idea_path(id: @idea.id)
    assert_no_selector('.like')
  end

  test 'visit idea page with login' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    assert_selector('.like')
    within('.like') do
      assert_text 4
      assert_selector('.un-like-button')
    end
  end

  test 'post like' do
    sign_in users(:admin)
    visit idea_path(id: @idea.id)
    assert_selector('.like-button')
    find('.like-button').click
    within('.like') do
      assert_text 5
      assert_selector('.un-like-button')
    end
  end

  test 'delete like' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    assert_selector('.un-like-button')
    find('.un-like-button').click
    within('.like') do
      assert_text 3
      assert_selector('.like-button')
    end
  end
end
