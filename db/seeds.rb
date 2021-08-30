# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ユーザーとアイデアデータを生成
10.times do |n|
  user = User.create!(name: "user#{n}", email: "user#{n}@sample.com")

  user.ideas.create!(
    title: "解決したい問題#{n}",
    elevatorpitch: "エレベーターピッチ#{n}"
  )

  user.ideas.create!(
    title: "解決した問題#{n}",
    elevatorpitch: "エレベーターピッチ#{n}",
    solved: true
  )
end

# 欲しい数とコメントデータを生成
1.upto(10) do |n|
  user = User.find(n)

  2.times do
    Like.create!(user_id: user.id, idea_id: Idea.all.sample.id)
    Comment.create!(user_id: user.id, idea_id: Idea.all.sample.id, comment: "コメント#{n}")
  end
end
