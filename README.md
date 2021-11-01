# Idearu

- Webサービス開発者向け自作サービスアイデア投稿サービスです。
- エレベーターピッチ形式でアイデアが投稿でき、通常のメモ等などより解決したい問題とその解決方法がより明確になるように投稿できます。<br>
  参考：[エレベーターピッチの作り方 \- シンプルな言葉でプロダクトを表現する方法 \- 毎日がもふもふ](https://everyday.mof-mof.co.jp/entry/2018/02/22/122833)
- ログイン無しでも投稿の一覧を見ることができます。

# スクリーンショット
| トップページ | 新規投稿 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20211101203647313](https://tva1.sinaimg.cn/large/008i3skNgy1gvzvrlh9xpj31fv0u0jvm.jpg) | ![image-20211101203710901](https://tva1.sinaimg.cn/large/008i3skNgy1gvzvrzlpjhj31fv0u0mzz.jpg) |

| アイデアページ | 編集ページ |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20211101203837185](https://tva1.sinaimg.cn/large/008i3skNgy1gvzvthu951j31fx0u0tbn.jpg) | ![image-20211101203858419](https://tva1.sinaimg.cn/large/008i3skNgy1gvzvtujg3qj31fv0u0gnr.jpg) |






# URL
https://idearu.herokuapp.com

# ローカルでの起動方法

~~~
$ bin/setup
$ rails s
~~~

# seedデータの設定
~~~
$ rails db:seed
~~~
テスト用アカウント
~~~
メールアドレス: user1@sample.com
パスワード: password
~~~
テスト用管理者アカウント
~~~
メールアドレス: admin@sample.com
パスワード: password
~~~

# テスト
~~~
$ bundle exec rails test:all
~~~

# Lint
~~~
$ bin/yarn lint:eslint
~~~




