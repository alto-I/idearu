# frozen_string_literal: true

module ApplicationHelper
  def default_meta_tags
    {
      reverse: true,
      charset: 'utf-8',
      separator: '|',
      description: 'フィヨルドブートキャンプ生徒を対象とした自作サービスアイデア投稿サービス',
      canonical: request.original_url,
      icon: [
        { href: image_url('favicon.png') }
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        image: image_url('logo.png')
      }
    }
  end
end
