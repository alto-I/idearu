# frozen_string_literal: true

require 'application_system_test_case'

class PolicyTest < ApplicationSystemTestCase
  test 'visit policy' do
    visit policy_path
    assert_text '以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。'
    assert_text '本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。'
  end
end
