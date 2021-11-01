# frozen_string_literal: true

require 'application_system_test_case'

class IdeasTest < ApplicationSystemTestCase
  setup do
    @idea = ideas(:solved_idea1)
  end

  test 'are the submitted elements displayed correctly' do
    visit root_path
    idea = page.all('.idea-outer')
    assert_equal "0\n0\nブートキャンプ生徒のサービスのネタが無い問題という問題を解決したい\n投稿日時:2021年01月01日\n投稿者:admin", idea[0].text
  end

  test 'sort and change solved idea' do
    visit root_path
    idea_title = page.all('.idea-title__container')
    assert_equal 'ブートキャンプ生徒のサービスのネタが無い問題という問題を解決したい', idea_title[0].find('a').text
    assert_equal '就職時に紹介状が欲しいが、頼むのが恥ずかしいという問題を解決したい', idea_title[1].find('a').text
    assert_equal '食材に含まれている糖質量が探し辛いという問題を解決したい', idea_title[2].find('a').text
    assert_equal 'リーンキャンバスを簡単に作り、公開したいという問題を解決したい', idea_title[3].find('a').text

    find('.dropdown-trigger').click
    find('.likes').click
    idea_title = page.all('.idea-title__container')
    assert_equal '解決したい問題1という問題を解決したい', idea_title[0].find('a').text
    assert_equal '解決したい問題2という問題を解決したい', idea_title[1].find('a').text
    assert_equal '解決したい問題3という問題を解決したい', idea_title[2].find('a').text

    find('.dropdown-trigger').click
    find('.comments').click
    idea_title = page.all('.idea-title__container')
    assert_equal '解決したい問題3という問題を解決したい', idea_title[0].find('a').text
    assert_equal '解決したい問題2という問題を解決したい', idea_title[1].find('a').text
    assert_equal '解決したい問題1という問題を解決したい', idea_title[2].find('a').text

    click_button '解決済'
    idea_title = page.all('.idea-title__container')
    assert_equal '解決した問題1という問題を解決したい', idea_title[0].find('a').text
    assert_equal '解決した問題2という問題を解決したい', idea_title[1].find('a').text
    assert_equal '解決した問題3という問題を解決したい', idea_title[2].find('a').text
  end

  test 'visit idea page' do
    visit idea_path(id: @idea.id)
    assert_text '解決したい問題1'
    assert_text 'エレベーターピッチ1'
    assert_text "投稿者:\nuser1"
    assert_text "投稿日時:\n2021年01月01日 09:00"
  end

  test 'visit idea page no login' do
    visit idea_path(id: @idea.id)
    assert_no_selector '.idea_items'
  end

  test 'contributor visit the page' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    within('.idea__items') do
      assert_text '編集'
      assert_text '削除'
    end

    sign_in users(:admin)
    visit idea_path(id: @idea.id)
    within('.idea__items') do
      assert_text '編集'
      assert_text '削除'
    end
  end

  test 'non contributor visit the page' do
    sign_in users(:user2)
    visit idea_path(id: @idea.id)
    within('.idea__items') do
      assert_no_text '編集'
      assert_no_text '削除'
    end
  end

  test 'idea delete' do
    sign_in users(:user1)
    visit idea_path(id: @idea.id)
    within('.idea__items') do
      page.accept_confirm do
        click_on '削除'
      end
    end
    assert_text '投稿されたサービス案を削除しました。'
  end
end
