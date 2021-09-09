# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ユーザーを作成
1.upto(10) do |n|
  User.create!(
    name: "user#{n}",
    email: "user#{n}@sample.com",
    password: 'password'
  )
end

# 管理者ユーザーを生成
User.create!(name: 'admin', email: 'admin@sample.com', admin: true, password: 'password')

# アイデアデータを作成
User
  .find(1)
  .ideas
  .create!(
    title: '就職時に紹介状が欲しいが、頼むのが恥ずかしい',
    elevatorpitch:
      'リファレンスレターというサービスは、就職時に紹介状が欲しいが、頼むのが恥ずかしいのを解決したい求職者向けの、紹介状作成です。ユーザーは知人や元同僚に紹介状を作成してもらうができ、口頭で頼むのとは違って、頼みやすい体裁が備わっている事が特徴です。'
  )

User
  .find(2)
  .ideas
  .create!(
    title: '食材に含まれている糖質量が探し辛い',
    elevatorpitch:
      '糖質検索というサービスは、食材に含まれている糖質量が探し辛いを解決したいダイエット中の人向けの、検索です。ユーザーは食材の糖質量を10g, 100g毎に検索ができ、Google検索とは違って、グラムあたりの量が統一されているがことが特徴です。'
  )

User
  .find(3)
  .ideas
  .create!(
    title: 'ブートキャンプ生徒のサービスのネタが無い問題',
    elevatorpitch:
      'エレベーターピッチメーカーというサービスは、ブートキャンプ生徒のサービスのネタが無い問題を解決したいWebサービス作成者向けの、エレベーターピッチ作成サービスです。
  ユーザーは穴埋めでエレベーターピッチ作成ができ、Wikiとは違って、フォーマットが固定されていることで明確なアイデアだけが投稿できる事が特徴です。'
  )

User
  .find(4)
  .ideas
  .create!(
    title: 'リーンキャンバスを簡単に作り、公開したい',
    elevatorpitch:
      'リーンキャンバスメーカーというサービスは、リーンキャンバスを簡単に作り、公開したいを解決したいWebサービス作成者向けの、リーンキャンバス作成サービスです。ユーザーは穴埋めでリーンキャンバス作成ができ、Wikiとは違って、フォーマットが固定されている事が特徴です。'
  )

User
  .find(5)
  .ideas
  .create!(
    title: 'プログラミングスクールの課題のチェックが大変という問題',
    elevatorpitch:
      'プログラミングテストメーカーというサービスは、プログラミングスクールの課題のチェックが大変という問題] を解決したいプログラミングスクール運営者向けの、プログラミングテスト作成サービスです。
  ユーザーは [プログラミングテストの作成・プログラムの入力と実行] ができ、手動でのチェックとは違って、プログラムの動作が合っているか自動でチェックできる事が特徴です。'
  )

User
  .find(6)
  .ideas
  .create!(
    title: '問題が起きないように獣医を変えた時に以前の薬の情報を提供したい',
    elevatorpitch:
      'ペットのお薬手帳というサービスは、問題が起きないように獣医を変えた時に以前の薬の情報を提供したいを解決したいよく獣医に行く人向けの、記録サービスです。
  ユーザーはペットに処方された薬と量を記録ができ、物理的なお薬手帳とは違って、無くさないが備わっている事が特徴です。'
  )

# 未解決のアイデアと解決したアイデアを作成
1.upto(10) do |n|
  user = User.find(n)

  user.ideas.create!(
    title: "(解決したい問題#{n})",
    elevatorpitch: "エレベーターピッチ#{n}"
  )

  user.ideas.create!(
    title: "(解決した問題#{n})",
    elevatorpitch: "エレベーターピッチ#{n}",
    solved: true
  )
end

# 欲しい数とコメントデータを生成
1.upto(10) do |n|
  user = User.find(n)
  Like.create!(user_id: user.id, idea_id: Idea.all.sample.id)
  Comment.create!(
    user_id: user.id,
    idea_id: Idea.all.sample.id,
    content: "コメント#{n}"
  )
end
