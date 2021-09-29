# frozen_string_literal: true

require 'application_system_test_case'

class TosTest < ApplicationSystemTestCase
  test 'visit term_of_service' do
    visit term_of_service_path
    assert_text 'この利用規約（以下，「本規約」といいます。）は，'
    assert_text '裁判所を専属的合意管轄とします。'
  end
end
