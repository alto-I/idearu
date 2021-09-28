# frozen_string_literal: true

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  test 'validation of content is effective?' do
    user = users(:user1)
    idea = ideas(:solved_idea1)
    no_content_comment = Comment.new(user: user, idea: idea, content: '')
    assert_not no_content_comment.valid?

    long_content = 'a' * 1001
    too_long_comment = Comment.new(user: user, idea: idea, content: long_content)
    assert_not too_long_comment.valid?

    content = 'あ' * 1000
    comment = Comment.new(user: user, idea: idea, content: content)
    assert comment.valid?
  end
end
