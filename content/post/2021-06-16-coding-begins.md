---
title: GSOC '21 - Coding Begins
date: '2021-06-16'
categories: 
  - GSOC
tags:
  - GSOC
---

# Introduction

The Coding phase has begun. In this post, I write about what I've done in the first week.

# First Week

I started the coding phase forking the spopt repository and create a new branch to keep my work organized and safe following the open-source practice. You can check the branch of forked repo here.

Following my proposal, I could have coded the tests for all 4 models. However, I didn't have any experience with tests, so my mentors and I decided to start coding the classes firstly, then I will write the tests. For the first week, I coded all 4 models using an optimization package named PULP in jupyter notebook to familiarize myself with the facility location problems and apply the concepts and formulas that I read through the weeks ago.

To write the models with PULP I used the example coded by one of my mentors. This example is also a notebook that computes the 4 models, there are points that were simulated in spatial relationship with a shapefile provided from an example PySAL repository.

It was awesome to create by myself something that I read in books and prove by examples the models' theories such as p-center. This model was the worst in performance but it was expected since the literature cleared that it contains an order of $n^2$ variables. Therefore, solving it takes more time than the others models that I already mentioned in this series of posts.

# My Studies

The studies can't stop. I start reading the geographic data science book [1] written by ljwolf, sjsrey and darribas. It has been a great experience, I'm getting to know the environment and the packages developed by the org. Moreover, I read the article [2] that was publicated on 1st June, and it was overwhelming since GIScience is a newer area for me and there are a lot of concepts that I haven't known yet. One thing that I learned through my life is more I read less I know, so it has been exciting being part of GSoC.

[1] Geographic Data Science Book - Sergio J. Rey, Dani Arribas-Bel, Levi J. Wolf

[2] The PySAL Ecosystem: Philosophy and Implementation - Sergio J. Rey, Luc Anselin, Pedro Amaral, Dani Arribas-Bel, Renan Xavier Cortes, James David Gaboardi, Wei Kang, Elijah Knaap, Ziqi Li, Stefanie Lumnitz, Taylor M. Oshan, Hu Shao, Levi John Wolf