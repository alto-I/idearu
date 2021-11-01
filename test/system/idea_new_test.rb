# frozen_string_literal: true

require 'application_system_test_case'

class IdeaNewTest < ApplicationSystemTestCase
  setup do
    sign_in users(:user1)
    ActionController::Base.allow_forgery_protection = true
  end

  teardown do
    ActionController::Base.allow_forgery_protection = false
  end

  test 'post idea' do
    visit new_idea_path
    assert_text 'アイデアを投稿する'
    fill_in('problem', with: 'リーンキャンバスを簡単に作り、公開したい')
    fill_in('target', with: 'Webサービス作成者')
    fill_in('service', with: 'リーンキャンバスメーカー')
    fill_in('category', with: 'リーンキャンバス作成サービス')
    fill_in('appealPoint', with: '穴埋めでリーンキャンバス作成')
    fill_in('competitiveServices', with: 'Wiki')
    fill_in('differentiationFactor', with: 'フォーマットが固定されている')
    click_button '投稿する'
    assert_text 'リーンキャンバスメーカーというサービスは、リーンキャンバスを簡単に作り、公開したいという問題を解決したいWebサービス作成者向けの、リーンキャンバス作成サービスです。ユーザーは穴埋めでリーンキャンバス作成ができ、Wikiとは違って、フォーマットが固定されている事が特徴です。'
  end

  test 'answers updated in real time' do
    visit new_idea_path
    fill_in('problem', with: 'aiueo')
    within('.preview__title') do
      assert_text 'aiueoという問題を解決したい'
    end
    fill_in('target', with: 'aiueo')
    within('.preview__elevatorpitch') do
      assert_text 'aiueo向けの、'
    end
  end

  test 'validation' do
    visit new_idea_path
    click_button '投稿する'
    within('.problem-error') do
      assert_text 'この入力項目は必須です。'
    end
    within('.target-error') do
      assert_text 'この入力項目は必須です。'
    end
    within('.category-error') do
      assert_text 'この入力項目は必須です。'
    end
    within('.appealpoint-error') do
      assert_text 'この入力項目は必須です。'
    end
    within('.competitiveservices-error') do
      assert_text 'この入力項目は必須です。'
    end
    within('.differentiationfactor-error') do
      assert_text 'この入力項目は必須です。'
    end
  end
end
