# frozen_string_literal: true

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  test 'validation of uniqueness is effective?' do
    user = users(:user1)
    idea = ideas(:solved_idea1)
    like = Like.new(user: user, idea: idea)
    assert like.valid?

    like.save
    another_like = Like.new(user: user, idea: idea)
    assert_not another_like.valid?
  end
end
