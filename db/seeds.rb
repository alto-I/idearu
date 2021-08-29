# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |n|
  user = User.new(name: "user#{n}", email: "user#{n}@sample.com")

  user.ideas.build(
    title: "解決したい問題#{n}",
    elevatorpitch: "エレベーターピッチ#{n}"
  )

  user.ideas.build(
    title: "解決した問題#{n}",
    elevatorpitch: "エレベーターピッチ#{n}",
    solved: true
  )

  user.save!
end
