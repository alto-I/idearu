# frozen_string_literal: true

require 'application_system_test_case'

class IdeasTest < ApplicationSystemTestCase
  test 'visit home with no login' do
    visit root_path
    assert_text 'ログイン'
    assert_text '表示順'
    assert_text 'という問題を解決したい'
    assert_text '利用規約'
    assert_text 'プライバシーポリシー'
  end

  test 'visit home with login' do
    sign_in users(:user1)
    visit root_path
    assert_text 'ログアウト'
  end

  test 'visit idea page' do
    idea = ideas(:solved_idea1)
    visit idea_path(id: idea.id)
    assert_text '解決したい問題1'
    assert_text 'エレベーターピッチ1'
  end
end
