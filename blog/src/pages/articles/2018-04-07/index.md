---
title: Weekly news at 2018/04/07
date: "2018-04-07T23:46:37.121Z"
layout: post
draft: false
path: "/posts/weekly-news/2018/04/07/"
category: "Weekly news"
tags:
  - "Frontend"
  - "React"
  - "Vue.js"
  - "AWS"
  - "Elasticsearch"
  - "security"
  - "Android"
  - "Ruby"
  - "脆弱性"
  - "設計"
  - "Design"
description: "2018/04/07のウィークリーニュース"
---


## Vueを昔触った後Reactをどっぷり触ってもう一回Vueを触ってReactに戻って得た感想 – 📜inuscript🐶 – Medium
[https://medium.com/inuscript/vue-and-react-comparision-6c7cb44f18ba](https://medium.com/inuscript/vue-and-react-comparision-6c7cb44f18ba)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/frontend/">Frontend</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/react/">React</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/vue.js/">Vue.js</a>
  </li>
</ul>


> 誤解を恐れずに言うと、Reactはsimple寄りで、Vueはeasy寄りというのが近いかなと感じている。

これがわかりやすいですね。
React単独で考えると、少ないAPIを覚えるだけで良いけど、結局Reduxとかを使ったりで悩みが出てくる。
それを超えると、SFCなんかで役割をきれいに分割しつつ、大規模にも耐えやすい。

逆にVue.jsは便利なAPIがいろいろあって、そのへんをうまく使っていけば、簡単に構築できる。
公式のライブラリも充実していて、それを利用するだけである程度のものが作れる。

というイメージがあるだけで、ちゃんと実装したことがあまり無いので、ちゃんとやらないとなぁと。
また、変化の速度も速そうなので、式年遷宮していきつつ、手を動かしていかないと付いていけないですね。

## 自社コーポレートサイトにサイト内検索を導入しました ｜ Developers.IO
[https://dev.classmethod.jp/server-side/elasticsearch/site-search-in-corporate-site/](https://dev.classmethod.jp/server-side/elasticsearch/site-search-in-corporate-site/)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/aws/">AWS</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/elasticsearch/">Elasticsearch</a>
  </li>
</ul>


"サーチテンプレートによる検索のエンドポイントのみをパブリックに開放"
ってことが出来るのか。知らなかった。
フロントから直接ES呼んじゃうってのは、ちょっと不安があるけど、調べてみよう。

## Osushiに見るフロントエンドのセキュリティ // Speaker Deck
[https://speakerdeck.com/shibe97/osushinijian-ruhurontoendofalsesekiyuritei](https://speakerdeck.com/shibe97/osushinijian-ruhurontoendofalsesekiyuritei)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/frontend/">Frontend</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/security/">security</a>
  </li>
</ul>


ちゃんとして復活したのがすごい。
ヘッダの話とか、めんどくさがらずにちゃんとやらないとなー。

## 2-wayデータバインディングが格段に実装しやすくなったAndroid data-binding 3.1.0 - Qiita
[https://qiita.com/YusukeIwaki/items/3fb4e10ac87fa1c7f6ba](https://qiita.com/YusukeIwaki/items/3fb4e10ac87fa1c7f6ba)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>
  </li>
</ul>


MediatorLiveData が何者か、そのうち調べる。

## 3/28に公開されたRubyの脆弱性情報についてのポエム的解説 - pixiv inside
[https://inside.pixiv.blog/usa/3841](https://inside.pixiv.blog/usa/3841)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/ruby/">Ruby</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/脆弱性/">脆弱性</a>
  </li>
</ul>


あんまり観測してなかったんですが、脆弱性がいろいろ公開されてたんですね。
WEBrickのサーバーを迂闊に公開せず、信用できない値をそのまま使わない。ってことですかね。
兼業でRubyも書く自分にとっても、ゆるい感じで分かりやすくてよかった。

## 技術的負債のパターンと悪影響・原因・返却方法について考える - $shibayu36->blog;
[http://blog.shibayu36.org/entry/2018/03/29/183000](http://blog.shibayu36.org/entry/2018/03/29/183000)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/設計/">設計</a>
  </li>
</ul>


負債と一言に言っちゃうけど、その中にはいろんな選択があって、そこから引き起こされる問題も、その解消方法もちがうよね。
分類して、対応規模・緊急度を可視化出来れば、機能実装との優先度付けもできそう。
なるほど。

## デザインの実装を解体する技術
[https://speakerdeck.com/operando/dezainfalseshi-zhuang-wojie-ti-suruji-shu](https://speakerdeck.com/operando/dezainfalseshi-zhuang-wojie-ti-suruji-shu)
<ul class="post-single__tags-list">
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>
  </li>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/design/">Design</a>
  </li>
</ul>


後半のapk引っこ抜くあたりはグレーな気がするけど、adbコマンドでいろいろ出来るってのは勉強になった。
