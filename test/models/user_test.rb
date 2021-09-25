# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'name' do
  p users(:alto)
    assert_equal 'alto', users(:alto).name
  end
end
