# frozen_string_literal: true

require 'application_system_test_case'

class IdeasTest < ApplicationSystemTestCase
  test 'visit idea page' do
    idea = ideas(:solved_idea1)
    visit idea_path(id: idea.id)
    assert_text '解決したい問題1'
    assert_text 'エレベーターピッチ1'
  end

  test 'are the submitted elements displayed correctly?' do
    visit root_path
    idea = page.all('.idea-outer')
    assert_equal "0\n0\nブートキャンプ生徒のサービスのネタが無い問題\nという問題を解決したい\n投稿日時:2021年01月01日\n投稿者:admin", idea[0].text
  end

  test 'sort created' do
    visit root_path
    idea_title = page.all('.idea-title__container')
    assert_equal 'ブートキャンプ生徒のサービスのネタが無い問題', idea_title[0].find('a').text
    assert_equal '就職時に紹介状が欲しいが、頼むのが恥ずかしい', idea_title[1].find('a').text
    assert_equal '食材に含まれている糖質量が探し辛い', idea_title[2].find('a').text
    assert_equal 'リーンキャンバスを簡単に作り、公開したい', idea_title[3].find('a').text
  end

  test 'sort likes' do
    visit root_path
    find('.dropdown-trigger').click
    sleep 1
    find('.likes').click
    idea_title = page.all('.idea-title__container')
    assert_equal '解決したい問題1', idea_title[0].find('a').text
    assert_equal '解決したい問題2', idea_title[1].find('a').text
    assert_equal '解決したい問題3', idea_title[2].find('a').text
  end

  test 'sort comments' do
    visit root_path
    find('.dropdown-trigger').click
    sleep 1.5
    find('.comments').click
    idea_title = page.all('.idea-title__container')
    assert_equal '解決したい問題3', idea_title[0].find('a').text
    assert_equal '解決したい問題2', idea_title[1].find('a').text
    assert_equal '解決したい問題1', idea_title[2].find('a').text
  end

  test 'change solved' do
    visit root_path
    click_button '解決済'
    sleep 1
    idea_title = page.all('.idea-title__container')
    assert_equal '解決した問題1', idea_title[0].find('a').text
    assert_equal '解決した問題2', idea_title[1].find('a').text
    assert_equal '解決した問題3', idea_title[2].find('a').text
  end
end
