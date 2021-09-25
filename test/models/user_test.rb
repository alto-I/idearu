# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'name' do
    # p ideas(:idea10)
    assert_equal 'alto', users(:alto).name
  end
end
