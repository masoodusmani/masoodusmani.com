---
slug: brittle-estimates
date: 2018-10-06
title: 'Brittle Estimates'
description: '_On the nature of estimates._'
published: true
banner: './banner.png'
---

An estimate is brittle if it's created based on incomplete information.

Of course, complete information is not possible, so the more information you have, and the more of it you consider, the more robust becomes your estimate.

An optimistic estimate tends to be brittle, since it assumes various moving parts go perfectly, that the Gantt chart of dependencies is never going to be disrupted at any point.

You should be able to add 50% to an optimistic estimate to get a more reasonable timeframe, but you can't say that this makes the estimate less brittle, since you're not adding any information to the estimate.

A better estimate would take into account various factors that could go wrong, and how much of a delay they could cause, and think of a conceptually median delay from that.

This article on the 10:1 rule of writing and programming, talks about some empirical evidence that suggests that any codebase with some level of maturity has code churn on the order of magnitude of 10:1, i.e., for every line of code currently in the repository, 10 lines were written and deleted. This suggests that you're going to take ten times as long as the ideal timeframe, even if you do things right, summed up by this quote used in the linked article:

> Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.
>
> - Douglas Hofstadter, in Gödel, Escher, Bach
