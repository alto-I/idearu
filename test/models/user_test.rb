# frozen_string_literal: true

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'validation of name and email and password is effective?' do
    no_name_user = User.new(name: '', email: 'sample@sample.com', password: 'password')
    assert_not no_name_user.valid?

    no_email_user = User.new(name: 'sample', email: '', password: 'password')
    assert_not no_email_user.valid?

    no_password_user = User.new(name: 'sample', email: 'sample@sample.com', password: '')
    assert_not no_password_user.valid?

    user = User.new(name: 'sample', email: 'sample@sample.com', password: 'password')
    assert user.valid?

    too_long_email_user = User.new(name: 'sample', email: 'samplesamplesamplesamplesamplesamplesample@sample.com', password: 'password')
    assert_not too_long_email_user.valid?
  end

  test 'admin?' do
    assert users(:admin).admin?
  end
end
