# frozen_string_literal: true

module ApplicationHelper
  def default_meta_tags
    {
      reverse: true,
      charset: 'utf-8',
      separator: '|',
      description: 'Web開発者を対象としたWebサービスアイデア投稿・閲覧サービス',
      canonical: 'https://idearu.herokuapp.com/',
      icon: [
        { href: image_url('favicon.png') }
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: 'https://idearu.herokuapp.com/',
        image: image_url('logo.png')
      }
    }
  end
end
