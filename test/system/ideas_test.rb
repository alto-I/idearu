# frozen_string_literal: true

require 'application_system_test_case'

class IdeasTest < ApplicationSystemTestCase
  test 'visit home' do
    visit root_path
  end
end
