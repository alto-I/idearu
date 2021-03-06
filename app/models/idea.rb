# frozen_string_literal: true

class Idea < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user, dependent: :destroy

  validates :title, presence: true
  validates :elevatorpitch, presence: true
end
