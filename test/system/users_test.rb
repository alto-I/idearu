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
    visit new_user_session_path
    assert_text 'ログイン'
    fill_in('user[email]', with: 'user1@sample.com')
    fill_in('user[password]', with: 'password')
    click_button 'ログイン'
    assert_text 'ログインしました'
  end

  test 'log in with wrong password' do
    visit new_user_session_path
    fill_in('user[email]', with: 'user1@sample.com')
    fill_in('user[password]', with: 'testtest')
    click_button 'ログイン'
    assert_text 'メールアドレスまたはパスワードが違います。'
  end

  test 'logout' do
    sign_in users(:user1)
    visit root_path
    click_on 'ログアウト'
    assert_text 'ログアウトしました'
  end

  test 'create account' do
    visit new_user_registration_path
    assert_text 'アカウント登録'
    fill_in('user[name]', with: 'test')
    fill_in('user[email]', with: 'test@sample.com')
    fill_in('user[password]', with: 'password')
    fill_in('user[password_confirmation]', with: 'password')
    click_button 'アカウント登録'
    assert_text 'アカウント登録が完了しました。'
  end

  test 'name change' do
    sign_in users(:user1)
    visit edit_user_registration_path
    assert_text '登録情報変更'
    fill_in('user[name]', with: 'edit1')
    fill_in('user[current_password]', with: 'password')
    click_button '更新'
    assert_text 'アカウント情報を変更しました。'
  end

  test 'email change' do
    sign_in users(:user1)
    visit edit_user_registration_path
    assert_text '登録情報変更'
    fill_in('user[email]', with: 'edit1@sample.com')
    fill_in('user[current_password]', with: 'password')
    click_button '更新'
    assert_text 'アカウント情報を変更しました。'
  end

  test 'password change' do
    sign_in users(:user1)
    visit edit_user_registration_path
    assert_text '登録情報変更'
    fill_in('user[password]', with: 'testtest')
    fill_in('user[password_confirmation]', with: 'testtest')
    fill_in('user[current_password]', with: 'password')
    click_button '更新'
    assert_text 'アカウント情報を変更しました。'
  end

  test 'account delete' do
    sign_in users(:user1)
    visit edit_user_registration_path
    page.accept_confirm do
      click_on 'アカウント削除'
    end
    assert_text 'アカウントを削除しました。またのご利用をお待ちしております。'

    visit new_user_session_path
    fill_in('user[email]', with: 'user1@sample.com')
    fill_in('user[password]', with: 'password')
    click_button 'ログイン'
    assert_text 'メールアドレスまたはパスワードが違います。'
  end
end


