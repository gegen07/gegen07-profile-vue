---
title: GSOC '21 Student, Yay!
date: '2021-06-06'
categories: 
  - GSOC
tags:
  - GSOC
---

# Introduction

My proposal was accepted in GSOC 21'. I'll be starting to write weekly about my improvements as a diary of my work done during the week. However, at first, what is GSOC? And what my proposal is about?

# What is GSOC?

GSoC is an abbreviation of Google Summer of Code and it's a program that aims students all over the world, to get involved in open source development. The coding program runs during North Summer, hence it starts over May and ends in the middle of August. These dates depend on the year schedule which is announced at the GSoC site. 

For students, there are some steps before you got a proposal acceptance. Firstly, you should see the organizations and projects that are proposed by themself, all of the projects have mentors that will help you with some improvements and discussions to guide you through the program. After that, you'll choose a project, start writing the proposal and submit it. Then, you receive the answer if you got accepted or not.

# My Proposal

The title of my proposal is Open Source Facility Location Modeling (spopt) Development. The organization that I will work with is called PySAL. PySAL is developing an ecosystem for geospatial analysis and modeling with Python. The spopt that I will work package is already released and it provides some analysis about regionalization. However, I will work with the facility location problem. This problem has an example that simplifies the understanding of it.

Suppose that a government discovers that the population of the city is not covered in totality with ambulances attendance. Therefore, the government wants to cover all population or cover with budget restrictions. The government already planned some potential places to distribute new ambulances trucks needed to all demand nodes be attended within the service time required, but they want to spend minimum money. This problem is known as Location Set Covering Problem and can be described in math notation with summations but is not the objective of this post. 

In summary, the facility location is a huge problem that cannot be solved optimally generically. There is not an algorithm that solves classes of these problems, so it depends on optimization techniques and linear programming to get solved, it's an NP-Hard problem. Otherwise, there are already packages developed that solve optimization problems using linear programming techniques, like PULP, Gurobi, and others. Thus, my proposal has an objective to solve facility location problems using one of these optimization packages; Location Set Covering Problem, Maximal Set Covering Problem, P-median, and P-center, specifically. In the future, it can support more classes of problems, like continuous coverage, partial coverage, capacitated vehicle routing, and a lot of others problems. 

# My expectations

I expect to learn about the organization, how the open-source community works, git best practices, open-source development practices. Besides that, I also expect to learn more about linear programming, mixed-integer programming, and facility location problems.

# Tip

If you want to enter GSoC next year begin searching for projects accepted in the last years and studying the organizations that you liked most. Furthermore, begin contributing with some small issues such as documentation issues, bug fixes. This will help you a lot to already get involved with open source projects.