webpackJsonp([0xe73c275c6db4],{439:function(s,t){s.exports={data:{site:{siteMetadata:{title:"Blog by noboru-i",subtitle:"noboru-iのメモ的な何かです。",copyright:"© All rights reserved.",author:{name:"noboru-i",twitter:"noboru_i"},disqusShortname:"",url:"https://noboru-i.github.io/"}},markdownRemark:{id:"/home/circleci/code/src/pages/articles/2018/2018-07-13.md absPath of file >>> MarkdownRemark",html:'<h2>React Nativeハイブリッドアプリへの挑戦 ~Part1: Monorepo/CI~ - Quipper Product Team Blog</h2>\n<p><a href="https://quipper.hatenablog.com/entry/2018/07/02/080000">https://quipper.hatenablog.com/entry/2018/07/02/080000</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/react native/">React Native</a>\n  </li>\n</ul>\n<p>AirbnbがReact Nativeやめた記事を書いたことで発生した、カウンター記事の一つ。（だと思ってます）</p>\n<p>これだけ話を聞くということは、それなりに運用事例があるはずなので、こういった記事が出てくることはありがたい。</p>\n<p>Quipperは、iOS/Androidのネイティブアプリから、徐々にReactNativeを導入していっているらしい。\nこういった判断も出てくるだろうし、逆にReactNativeからネイティブを徐々に増やしていくこともあるだろうから、こういった記事はありがたい。</p>\n<h2>メルカリJP初のiOSリアーキテクチャは、なぜ「最高に楽しい」のか - mercan（メルカン）</h2>\n<p><a href="https://mercan.mercari.com/entry/2018/07/02/170000">https://mercan.mercari.com/entry/2018/07/02/170000</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ios/">iOS</a>\n  </li>\n</ul>\n<p>メルカリがiOSの技術的負債を解消していっているはなし。</p>\n<p>1つのアプリを100人で開発する未来、とか想像がつかない。。。\nまた、開発をしている人もいる状態でリアーキテクチャをしていくのは大変だろうに、それを淡々とやっているように見えるのはすごい。</p>\n<p>ちょっと規模がでかすぎて参考にならないかもしれないけど、一定の結果が出た時点でカンファレンスでの発表などもあるだろうから、注視していこう。</p>\n<p>どうでもいいですが、曲面ディスプレイいいなぁ。。</p>\n<h2>MongoDB Moblie発表。フル機能のMongoDBがiOS/Androidに対応、サーバのMongoDBとのデータ同期も可能に － Publickey</h2>\n<p><a href="https://www.publickey1.jp/blog/18/mongodb_mobliemongodbiosandroidmongodb.html">https://www.publickey1.jp/blog/18/mongodb_mobliemongodbiosandroidmongodb.html</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/serverless/">Serverless</a>\n  </li>\n</ul>\n<p>MongoDBをAndroid/iOSのローカルで動かせるようになった、とのこと。\nまた、「MongoDB Stitch」を使うことで、サーバとローカルのMongoDBを同期できるとのこと。</p>\n<p>Firebase Realtime Databaseのように使えるイメージですかね？</p>\n<p>MongoDBは、障害耐性だったか何かを考慮すると3インスタンス以上必要、みたいな話を聞いて、小規模だったら使えないかなーと思ってましたが、MongoDB Stitchみたいなサービスが出て、ローカルのDBとも同期できるんだったら、ちょっと興味が出てきましたね。\nFirebase周りのツールとの差異は調べてみたいですね。</p>\n<h2>AndroidのCI時間を10分短縮し、開発を爆速にするためのKarakuriを作った話 - Mercari Engineering Blog</h2>\n<p><a href="https://tech.mercari.com/entry/2018/07/04/110000">https://tech.mercari.com/entry/2018/07/04/110000</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/cd/">CD</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ci/">CI</a>\n  </li>\n</ul>\n<p>Androidアプリ開発周りのいろいろを、CircleCI 2.0を利用して改善している話。</p>\n<p>個人的には、私の作ったライブラリがメルカリで使われてるっぽいのがうれしかったです。</p>\n<p>やってることの多くは、弊社でもやってることが多かったです。\nただ、Androidでのfastlaneはあまりやったことが無いので、今度試してみようと思います。</p>\n<h2>フロントエンドの「想定外」に対応する考え方とTipsいくつか | ダーシマ・ヱンヂニヤリング</h2>\n<p><a href="https://necomesi.jp/blog/tsmd/posts/229">https://necomesi.jp/blog/tsmd/posts/229</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/frontend/">Frontend</a>\n  </li>\n</ul>\n<p>Cookie無効の場合にも見れるサイトにしましょう、という話。</p>\n<p>まぁ、できることならやるに越したことはないけど、その作業をやる工数に見合うものなのか？は考えたほうがいいかなーと思いました。\nremで実装する、などは最初から考慮しておけばいいだけなので、やるべきですかね。たぶん。</p>\n<p>あとは、受託でやる場合は、要件で詰めておく必要がありそうですね。\n「JavaScriptが切られた場合、何も動かないですけど良いですよね？」みたいな。（極論だけど。。</p>\n<h2>DMM動画サービスの問題を解決しようとしている話（スタイルガイド編） - DMM inside</h2>\n<p><a href="https://inside.dmm.com/entry/2018/07/05/styleguide">https://inside.dmm.com/entry/2018/07/05/styleguide</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/design/">Design</a>\n  </li>\n</ul>\n<p>継続的な開発により、ばらばらになってしまったデザインを統一していく話。</p>\n<p>個人的には、新規案件に入ることの方が多いので、ここまで大規模になることは少ないかな。\nとはいえ、数ヶ月運用するだけでもバラバラになりがちなので、UIインベントリを作っていくのは良さそう。\nAtomic Design本も読んだので、それも参考にしたい。</p>',fields:{tagSlugs:["/tags/react-native/","/tags/i-os/","/tags/serverless/","/tags/android/","/tags/cd/","/tags/ci/","/tags/frontend/","/tags/design/"]},frontmatter:{title:"Weekly news at 2018/07/13",tags:["React Native","iOS","Serverless","Android","CD","CI","Frontend","Design"],date:"2018-07-13T17:01:08+00:00",description:"2018/07/13のウィークリーニュース"}}},pathContext:{slug:"/posts/weekly-news/2018/07/13/"}}}});
//# sourceMappingURL=path---posts-weekly-news-2018-07-13-360b7a34b264e242614f.js.map