# frozen_string_literal: true

class User < ApplicationRecord
  has_many :ideas, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :name, presence: true
  validates :email, length: { maximum: 50 }, presence: true
end
