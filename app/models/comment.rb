# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :idea

  validates :content, presence: true, length: { maximum: 1000 }
end
