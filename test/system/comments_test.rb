# frozen_string_literal: true

require 'application_system_test_case'

class CommentsTest < ApplicationSystemTestCase
  setup do
    @idea = ideas(:solved_idea1)
  end

  test 'visit idea page with no login' do
    visit idea_path(id: @idea.id)
    assert_text 'コメント1'
    assert_text 'コメントするにはログインが必要です。'
  end

  test 'visit idea page with login' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    assert_selector('.comment-form__main')
  end

  test 'post comment' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    fill_in('comment[content]', with: 'テストコメント')
    click_button 'コメントする'
    assert_text 'テストコメント'
  end

  test 'Is the number of comments correct?' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    within('.comment__length') do
      assert_text 2
    end

    fill_in('comment[content]', with: 'テストコメント')
    click_button 'コメントする'
    within('.comment__length') do
      assert_text 3
    end
  end

  test 'validation' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    fill_in('comment[content]', with: '')
    click_button 'コメントする'
    assert_text 'コメント文を入力してください'
  end

  test 'delete comment' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    page.accept_confirm do
      page.all('#comment_delete')[0].click
    end
    assert_text 'コメントを削除しました'
  end

  test 'other users can\'t delete comments' do
    sign_in users(:user2)
    visit idea_path(id: @idea.id)
    assert_no_selector('#comment__delete')
  end
end
