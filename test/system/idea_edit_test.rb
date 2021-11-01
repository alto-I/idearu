# frozen_string_literal: true

require 'application_system_test_case'

class IdeaEditTest < ApplicationSystemTestCase
  setup do
    sign_in users(:admin)
    @idea = ideas(:reference_letter)
  end

  test 'is title and elevatorpitch displayed?' do
    visit edit_idea_path(id: @idea.id)
    assert_text 'タイトル'
    assert_text 'エレベーターピッチ'
    assert_equal '就職時に紹介状が欲しいが、頼むのが恥ずかしい', find('#idea_title').value
    text = 'リファレンスレターというサービスは、就職時に紹介状が欲しいが、頼むのが恥ずかしいのを解決したい求職者向けの、紹介状作成です。ユーザーは知人や元同僚に紹介状を作成してもらうができ、口頭で頼むのとは違って、頼みやすい体裁が備わっている事が特徴です。'
    assert_equal text, find('#idea_elevatorpitch').value
  end

  test 'edit title' do
    visit edit_idea_path(id: @idea.id)
    fill_in('idea[title]', with: '')
    fill_in('idea[title]', with: '編集されたタイトル')
    click_button '内容変更'
    assert_text 'サービス案を更新しました。'
    within('.title') do
      assert_text '編集されたタイトル'
    end
  end

  test 'edit elevatorpitch' do
    visit edit_idea_path(id: @idea.id)
    fill_in('idea[elevatorpitch]', with: '')
    fill_in('idea[elevatorpitch]', with: '編集されたエレベーターピッチ')
    click_button '内容変更'
    assert_text 'サービス案を更新しました。'
    within('.idea-elevatorpitch') do
      assert_text '編集されたエレベーターピッチ'
    end
  end

  test 'validation' do
    visit edit_idea_path(id: @idea.id)
    fill_in('idea[title]', with: '')
    click_button '内容変更'
    assert_no_text 'サービス案を更新しました。'
    assert_text 'タイトルを入力してください'

    visit edit_idea_path(id: @idea.id)
    fill_in('idea[elevatorpitch]', with: '')
    click_button '内容変更'
    assert_text 'エレベーターピッチを入力してください'
  end
end
