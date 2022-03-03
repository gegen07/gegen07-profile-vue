---
title: A New Facility Location Open Source Approach
date: '2021-08-05'
categories:
  - GSOC
tags:
  - GSOC
  - Open-Source
---

Facility Location is a great topic that appeared years ago with the industrial revolution. This evolved nice questions about the optimal places to place a factory to reduce transportation costs, retail centers aiming for more revenue. Along the time researchers developed other models that helped to improve the results of past problems and allow to think in another problem likewise the covering problem: how to arrange communication towers given a set of demand points seeking to minimize the number of towers and so the cost to build new towers. Other problems arose in a short time such as each tower has a capacity in handling calls or the interference on frequencies when towers are close within a certain distance. 

However, these problems are NP-hard. Therefore for bigger problems and even for specific small problems isn't recommend to use a brute-force algorithm to solve them. Thus authors like Hakimi, Toregas et.al, Church, Revelle, and others modeled these problems using Operations Research, Geography, and many other study areas to solve these problems efficiently.

The article Open‑source approaches for location cover models: capabilities and efficiency written by Huanfa Chen, Alan T. Murray, and Rui Jiang discuss open source and proprietary software developed with diverse tools: Microsoft Excel (FLP Solver), ArcGIS, R (Maxcovr), and Python (PySpatialOpt) that solve specific facility location models: Location Set Covering Problem (LSCP) and Maximal Coverage Location Problem (MCLP). The first two are commercial software, moreover uses a Tabu Search heuristic to solve the MCLP and LSCP. On the other way, Maxcovr and PySpatialOpt are open-source software and uses an exact approach to solve the same models that commercial libraries solve. The paper discusses the features that each library provides to the user: Maxcovr accepts a user-defined distance matrix, if the matrix is not passed as an argument it calculates the haversine formula, PySpatialOpt doesn't compute the distance matrix, so it must be calculated externally. FLPSolver offers many distance metrics as Euclidean, Manhattan, Big Circle, and others to compute the distance matrix. At last, ArcGIS compute the distance using a network representation that can take a long time to compute distances.

During the GSoC 2021, advised by Levi J. Wolf, James Gaboardi, and Qunshan Zhao, I contributed to PySAL spopt repository, which is an optimization python package, developing 4 facility location models (LSCP, MCLP, P-Center, P-Median) using an exact wrapper solver named PULP. The module is composed of these models and supports the computation of the distance matrix with different metrics as euclidean, manhattan, squared euclidean, and many others. Besides that, it supports the distance matrix as an argument alike the other open-source software. The module provides the user the possibility to have the values of the objective variable for each model and for the P-Center model it can compute the mean distance of the objective value. As the libraries presented by the paper, the new module developed can compute the percentage of MCLP model coverage.

For validation purposes, we test the new facility location approach with the same example of the paper. It is used a census tract 205 with centroids and 16 candidate store sites. The objective so is cover the maximum amount of demand points given the population in the 2000 year for each centroid and the budget is limited to place only 4 stores along the area. This problem in other words can be modeled as MCLP. Using the module developed we got:


![figure of obtained results using MCLP developed during GSOC](https://pysal.org/spopt/_images/notebooks_facloc-real-world_24_0.png)


This graph points to where the government should place the store sites to cover the maximum population in this tract. The percentage covered is 87.76% and 21 points are not covered by any of the stores. Moreover, a notebook in the spopt repository has the application of the four models supported by the new module using the same dataset.  

One thing to remainder is the solver wrapper PULP used by our module and the PySpatialOpt. PULP gives the possibility to use many solvers like Gurobi, CPLEX, CBC, and other solvers that are available in the machine when executing the code. Therefore the module can be used in such problems that are bigger and demand great resources of a computer.

We planned in the future, add capacity constraints in models solving an issue that no one of open-source approaches discussed by paper provide to the user. Besides that, we aim to provide a polygon partial coverage, this is another new feature that no library support yet. 