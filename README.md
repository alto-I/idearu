# Idearu

- Webサービス開発者向け自作サービスアイデア投稿サービスです。
- エレベーターピッチ形式でアイデアが投稿でき、通常のメモ等などより解決したい問題とその解決方法がより明確になるように投稿できます。<br>
  参考：[エレベーターピッチの作り方 \- シンプルな言葉でプロダクトを表現する方法 \- 毎日がもふもふ](https://everyday.mof-mof.co.jp/entry/2018/02/22/122833)
- ログイン無しでも投稿の一覧を見ることができます。

# スクリーンショット
## トップページ
![image-20211104141043738](https://tva1.sinaimg.cn/large/008i3skNgy1gw31gvcv0aj314z0u0gpv.jpg)
## 新規投稿
![image-20211104141149801](https://tva1.sinaimg.cn/large/008i3skNgy1gw31hyhljuj318r0u0775.jpg)
## アイデアページ
![image-20211104141249522](https://tva1.sinaimg.cn/large/008i3skNgy1gw31izx7m1j318m0u0whf.jpg)
## 編集ページ
![image-20211104141329757](https://tva1.sinaimg.cn/large/008i3skNgy1gw31jp52w6j318p0u0q55.jpg)





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




