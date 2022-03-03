---
title: GSOC '21 - Fourth Week
date: '2021-07-11'
categories:
  - GSOC
tags:
  - GSOC
---

# Summary
In this blog post, I write about what I did in my fourth week. In summary, I developed P-Center and P-Median models and added tests to them. I also worked on distances metrics.

# Optimization Models

So far, I have created classes to coverage optimization models (MCLP and LSCP). Following my proposal, I am supposed to code MCLP, LSCP, P-Center, and P-Median. Thus, my mentors assigned me the task of coding the last two optimization models this week and add tests to them. The first thing that I did was read again the paper [1] to translate the math language to python using Pulp. 

# P-Center

Explaining in one sentence: Minimize the maximum distance between demand and supply point. Using an example it can be explained as to how to place a police station such that the maximum distance to the community is minimized. This problem is NP-hard and then we have to use some optimization techniques to solve it. 

# P-Median

Explaining in one sentence: Minimize the travel distance sum to facility location. Using an example it can be explained as minimizing the total length of wire in serving all customers while locating p telephone switching centers [2].

This problem is an extension of LSCP and MCLP. To build an MCLP model using P-Median constraints you have to transform the distance matrix to the probability coverage matrix. If the facility candidate location is under a determined distance to demand location you assign the (i, j) value to 1, otherwise, 0. To build the LSCP you iterate to an array, for example, of p candidate sites until the demand area is covered; besides you should use the same transformation done in the MCLP model described as P-Median.

# Distance Metrics Issue

The ideas page of Pysal to GSOC has a suggestion to add support to various distance metrics. So, I thought to add haversine (great circle distance), euclidean, and manhattan distance support to the geodataframe class method. Doing so, I found an issue, how to calculate haversine distance as the module isn't responsible to do that. I talked to my mentors and they thought to simplify the module as much as I can to submit a minimum product to GSOC. Therefore I changed the code a little bit and added support using scipy to manhattan and euclidean distances.


[1] Calik H., Labbé M., Yaman H. (2015) p-Center Problems. In: Laporte G., Nickel S., Saldanha da Gama F. (eds) Location Science. Springer, Cham. https://doi.org/10.1007/978-3-319-13111-5_4

[2] Location Covering Models - History, Applications, and Advancements - Ronald L. Church, Alan T. Murray