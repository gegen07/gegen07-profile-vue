---
title: GSOC '21 - Second Week
date: '2021-07-01'
categories:
  - GSOC
tags:
  - GSOC
---

# Summary

In this post, I write about my work through the second week on GSoC. If you didn't read the lasts posts, I recommend you read to know what is GSoC program and what I'm working with.

# Second Week

Last week, I wrote the four models of facility location using Jupyter notebook, and for the second week, as I talked with my mentors, it was time to start writing classes using OOP (Object Oriented Programming). However, at first, I had to think about the module architecture using a design pattern or something like this aiming at the DRY (Don't Repeat Yourself) principle. 

So, overall, what do facility location models have in common?  All optimization models have constraints, an objective function, and a solver API to calculate the result. On the jupyter notebook, it's possible to see that some models share the same constraints, so to don't repeat the constraint building, it's better to give this responsibility to another class. Then, I did a class that is responsible to create variables and constraints (here we can even break this class into two classes, one for variables and one for constraints) names FacilityModelBuilder. It doesn't know what class it's building, it only knows that is a class and the arguments. The task of breaking this responsibility into two classes was tough because I haven't work with getattr and setattr methods yet. The setattr method receives an object, the name of the attribute, and the variable that stores the constraint. The getattr method receives an object and the name of the attribute used in setattr method. Therefore, these made it possible to work with attributes that are set programmatically without concerns with names and how to do that. 

Besides that, I also write the two coverage models that I proposed: MCLP and LSCP. They inherit LocateSolver class that which is only an interface to create a contract between classes that use the PULP package. They also have two class methods from_cost_matrix and from_geodataframe used to support the creating models with geodataframe and with a matrix of distances. The first one has distance options that can be haversine (great circle distance), manhattan, and euclidean distance. 

# Meeting

This week meeting I presented the work that I've done so far and raised a question about the data to test. If I am supposed to create synthetic data or get some real data from the examples repository. My mentor, James, give me an idea to write issues in my forked repo (you can take a look here), there we discuss that and got to the point that is great having synthetic data to test. Besides that, I raised other two questions about the support of NetworkX and about how to calculate distances with geodataframe.