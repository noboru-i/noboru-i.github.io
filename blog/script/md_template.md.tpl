---
title: Weekly news at <%= published_date %>
date: "2018-04-07T23:46:37.121Z"
layout: post
draft: false
path: "/posts/weekly-news/<%= published_date %>/"
category: "Weekly news"
tags:<% _.forEach(tags, function(item) { %>
  - "<%= item %>"<% }) %>
description: "<%= published_date %>のウィークリーニュース"
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
