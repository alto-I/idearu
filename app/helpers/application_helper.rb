# frozen_string_literal: true

module ApplicationHelper
  def default_meta_tags
    {
      site: 'Ideabox',
      title: '',
      reverse: true,
      separator: '|',
      description: 'フィヨルドブートキャンプ生徒を対象とした自作サービスアイデア投稿サービス',
      canonical: request.original_url,
      icon: [
        { href: image_url('favicon.png') }
      ],
      og: {
        site_name: 'サイト名',
        title: 'タイトル',
        description: 'ディスクリプション',
        type: 'website',
        url: request.original_url,
        # image: image_url('ogp.png'),
        locale: 'ja_JP'
      }
    }
  end
end
