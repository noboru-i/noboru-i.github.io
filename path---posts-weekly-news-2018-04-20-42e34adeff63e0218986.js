webpackJsonp([0x97654d25277f],{425:function(t,s){t.exports={data:{site:{siteMetadata:{title:"Blog by noboru-i",subtitle:"noboru-iのメモ的な何かです。",copyright:"© All rights reserved.",author:{name:"noboru-i",twitter:"noboru_i"},disqusShortname:"",url:"https://noboru-i.github.io/"}},markdownRemark:{id:"/home/circleci/code/src/pages/articles/2018/2018-04-20.md absPath of file >>> MarkdownRemark",html:'<h2>初めての「技術ブログ」書き方のご紹介 - SORACOM Blog</h2>\n<p><a href="https://blog.soracom.jp/blog/2018/04/18/howto-techblog/">https://blog.soracom.jp/blog/2018/04/18/howto-techblog/</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/書く技術/">書く技術</a>\n  </li>\n</ul>\n<p>技術ブログを書くときに参考になりそう。</p>\n<ul>\n<li>ブログを書くときの動機</li>\n<li>記事の構成</li>\n<li>Google Drive使ったら画像の管理が便利</li>\n</ul>\n<h2>Exploring the v28 Android Design Support Library Additions</h2>\n<p><a href="https://medium.com/exploring-android/exploring-the-v28-android-design-support-library-2c96c6031ae8">https://medium.com/exploring-android/exploring-the-v28-android-design-support-library-2c96c6031ae8</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/design/">Design</a>\n  </li>\n</ul>\n<p>Support Library v28で追加になる Material view components の画像つき紹介。</p>\n<p>Chip は <a href="https://www.slideshare.net/YukiYamamoto7/chip-93779438">https://www.slideshare.net/YukiYamamoto7/chip-93779438</a> でも紹介されてましたが、やっぱり便利そう。</p>\n<p>Bottom App Bar は、デザイナとの相談が必要ですが、うまくハマれば楽できそう。</p>\n<p>Material Button は、画像だけ見て「何が変わったんだろ？」とも思いましたが、 <code class="language-text">app:icon</code> でアイコンをそれっぽい場所に置いてくれたり、便利機能が追加されてるっぽい。\nただ、 <a href="https://material.io/guidelines/components/buttons.html#buttons-button-types">https://material.io/guidelines/components/buttons.html#buttons-button-types</a> を見ても、ボタンにアイコン付ける例が無い気がするんだけど。。</p>\n<h2>EarlGreyを使ってiOSのUIテストを自動で行う - BASE開発チームブログ</h2>\n<p><a href="http://devblog.thebase.in/entry/2018/04/18/111306">http://devblog.thebase.in/entry/2018/04/18/111306</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ci/">CI</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/testing/">Testing</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ios/">iOS</a>\n  </li>\n</ul>\n<p>iOSのUIテストを通して、効果測定用のログが正しく送られているかを継続的にチェックする話。</p>\n<p>“google”の作った”iOS”のテストフレームワークということで違和感があり、使ったことなかったEarlGrey。</p>\n<p>EarlGrey自体はどっちでもいいですが、UIテスト時にログの送信をmock化しテストする、というのは良さそうな気がしますね。\nただ、<code class="language-text">XCTAssert</code> でYES/NOを判定するのではなく、<code class="language-text">XCTAssertEqual</code>とかでうまいこと比較できれば、“どう違っているか”を検出できそうな気がしますね。</p>\n<h2>ReactNativeプロジェクトのAndroid環境を整備する - クックパッド開発者ブログ</h2>\n<p><a href="http://techlife.cookpad.com/entry/2018/04/18/180000">http://techlife.cookpad.com/entry/2018/04/18/180000</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/react native/">React Native</a>\n  </li>\n</ul>\n<p>ReactNativeに関する連載3日目。今日はAndroidの話。</p>\n<p>標準で生成されるコードがアレなのでいろいろ整えたり、リリース前の準備などがいい感じにまとまってる。\n冒頭にも書いてある通り、ライブラリ・ツールのバージョンが変わったら不要になる知識もありそうだけど、作ってリリースする前には一通り確認しておいたほうが良さそう。</p>\n<h2>CircleCIでgradleのテストを走らせているとプロセスが突然死するんですけどって時 - その手の平は尻もつかめるさ</h2>\n<p><a href="https://moznion.hatenadiary.com/entry/2018/04/17/220606">https://moznion.hatenadiary.com/entry/2018/04/17/220606</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ci/">CI</a>\n  </li>\n</ul>\n<p>CircleCIというか、gradleの環境変数のはなし。</p>\n<p>gradleでの突然死はよくありますね。</p>\n<p><a href="https://github.com/DroidKaigi/conference-app-2018/blob/master/.circleci/config.yml#L9">https://github.com/DroidKaigi/conference-app-2018/blob/master/.circleci/config.yml#L9</a>\nみたいに、 <code class="language-text">GRADLE_OPTS</code> じゃだめなのか？というのは、ちゃんと理解してないんですが、今度遭遇したらこれも試してみよう。</p>\n<h2>React Native アプリの開発基盤構築 - クックパッド開発者ブログ</h2>\n<p><a href="http://techlife.cookpad.com/entry/2018/04/17/090000">http://techlife.cookpad.com/entry/2018/04/17/090000</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ci/">CI</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/react native/">React Native</a>\n  </li>\n</ul>\n<p>React NativeのセットアップスクリプトやCIの話。</p>\n<p>実際に運用中のCodePushなどの構成なども書いてあった。\n実際に構築する際には参考になりそう。</p>\n<h2>bundle install には —clean を指定する (特に Circle CI では) | Born Too Late</h2>\n<p><a href="https://blog.yuyat.jp/post/bundle-install-clean/">https://blog.yuyat.jp/post/bundle-install-clean/</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ci/">CI</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ruby/">Ruby</a>\n  </li>\n</ul>\n<p>タイトルの通り。</p>\n<p><code class="language-text">--clean</code> を指定することで、もう使ってないバージョンのgemなどが消えるので、cacheのサイズが減り、CIも早くなるらしい。知らなかった。</p>\n<h2>Remote Config REST API and Versioning</h2>\n<p><a href="https://www.slideshare.net/JumpeiMatsuda1/remote-config-rest-api-and-versioning">https://www.slideshare.net/JumpeiMatsuda1/remote-config-rest-api-and-versioning</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/firebase/">Firebase</a>\n  </li>\n</ul>\n<p>Remote ConfigをAPI経由で変更する話。</p>\n<p>また、 <a href="https://github.com/jmatsu/remocon">https://github.com/jmatsu/remocon</a> というOSSで、それをラップしました、という話。</p>\n<p>Remoconは良さげですね。pullしたり、pushしたり。</p>\n<h2>Chipを使ってみる</h2>\n<p><a href="https://www.slideshare.net/YukiYamamoto7/chip-93779438">https://www.slideshare.net/YukiYamamoto7/chip-93779438</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/android/">Android</a>\n  </li>\n</ul>\n<p>Design Support Libraryのv28に追加される<code class="language-text">Chip</code>の話。</p>\n<p>v28は、まだAlpha 1なんですね。</p>\n<p>タグとかの表示に便利そう。</p>\n<h2>ActiveRecordを試すときに便利なやつ – r7kamura – Medium</h2>\n<p><a href="https://medium.com/@r7kamura/activerecord%E3%82%92%E8%A9%A6%E3%81%99%E3%81%A8%E3%81%8D%E3%81%AB%E4%BE%BF%E5%88%A9%E3%81%AA%E3%82%84%E3%81%A4-f5a10a8c17d8">https://medium.com/@r7kamura/activerecord%E3%82%92%E8%A9%A6%E3%81%99%E3%81%A8%E3%81%8D%E3%81%AB%E4%BE%BF%E5%88%A9%E3%81%AA%E3%82%84%E3%81%A4-f5a10a8c17d8</a></p>\n<ul class="post-single__tags-list">\n  <li class="post-single__tags-list-item">\n    <a class="post-single__tags-list-item-link" href="/tags/ruby/">Ruby</a>\n  </li>\n</ul>\n<p>1つのRubyファイルで、いろいろまとめる話。</p>\n<p><code class="language-text">bundler/inline</code>によって、Gemfileに書く内容をファイルの中に書ける。</p>\n<p>ActiveRecord関連のメソッドを利用して、メモリ内SQLiteを利用させたり、テーブル定義したり。</p>\n<p><code class="language-text">minitest/autorun</code>によって、テストを実行したり。</p>\n<p>書いてある通り、期待する動作を説明するために渡したり、メモとして残すのに便利そう。</p>',fields:{tagSlugs:["/tags/書く技術/","/tags/android/","/tags/design/","/tags/ci/","/tags/testing/","/tags/i-os/","/tags/react-native/","/tags/ruby/","/tags/firebase/"]},frontmatter:{title:"Weekly news at 2018/04/20",tags:["書く技術","Android","Design","CI","Testing","iOS","React Native","Ruby","Firebase"],date:"2018-04-20T17:01:05+00:00",description:"2018/04/20のウィークリーニュース"}}},pathContext:{slug:"/posts/weekly-news/2018/04/20/"}}}});
//# sourceMappingURL=path---posts-weekly-news-2018-04-20-42e34adeff63e0218986.js.map