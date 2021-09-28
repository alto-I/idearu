# frozen_string_literal: true

require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test 'validation of title and elevatorpitch is effective?' do
    user = users(:user1)
    no_title_idea = Idea.new(title: '', elevatorpitch: 'エレベーターピッチ', user: user)
    assert_not no_title_idea.valid?

    no_elevatorpitch_idea = Idea.new(title: 'タイトル', elevatorpitch: '', user: user)
    assert_not no_elevatorpitch_idea.valid?

    no_user_idea = Idea.new(title: 'タイトル', elevatorpitch: 'エレベーターピッチ', user: nil)
    assert_not no_user_idea.valid?

    idea = Idea.new(title: 'タイトル', elevatorpitch: 'エレベーターピッチ', user: user)
    assert idea.valid?
  end
end
