# frozen_string_literal: true

require 'application_system_test_case'

class IdeasTest < ApplicationSystemTestCase
  test 'visit idea page' do
    idea = ideas(:solved_idea1)
    visit idea_path(id: idea.id)
    assert_text '解決したい問題1'
    assert_text 'エレベーターピッチ1'
  end
end
