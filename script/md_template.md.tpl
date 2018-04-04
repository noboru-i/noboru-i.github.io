---
title: Weekly news at <%= publishedDate %>
date: "2018-04-07T23:46:37.121Z"
layout: post
draft: false
path: "/posts/weekly-news/<%= publishedDate %>/"
category: "Weekly news"
tags:<% _.forEach(tags, function(item) { %>
  - "<%= item %>"<% }) %>
description: "<%= publishedDate %>のウィークリーニュース"
---

<% _.forEach(list, function(item) { %>
## <%= item.title %>
[<%= item.url %>](<%= item.url %>)
<ul class="post-single__tags-list"><% _.forEach(item.tags, function(tag) { %>
  <li class="post-single__tags-list-item">
    <a class="post-single__tags-list-item-link" href="/tags/<%= tag.toLowerCase() %>/"><%= tag %></a>
  </li><% }); %>
</ul>


<%= item.content %>
<% }) %>
