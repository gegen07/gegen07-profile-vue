---
title: GSOC '21 - Third Week
date: '2021-07-02'
categories:
  - GSOC
tags:
  - GSOC
---

# Summary
In this post, I write about my experience writing tests for the first of my entire life.

# Tests
So, tests. What is a test? Where they live and what they eat?

I will explain a little what tests are and why you should learn to contribute to open source. It's a broad topic and if you want to go deep in this area, you can take a look at the Atlassian blog.

# Firstly, what are tests?

It evaluates the code's correctness. So, imagine you want to calculate the addition of two numbers (5 and 2), you know that is 7 but the machine doesn't, so you expect that the machine will calculate correctly. Thereby, you manually call the function that adds two numbers and verify if it's right and you did the test. It's a simple code, you can do it multiple times, it won't take too much time to get the right result; nevertheless, if you have a bunch of code, that has a lot of functionality, how to test manually? If you thought that you can do this task manually, you're wrong. It's recommended to test automatically and then you save time and effort compared to manual testing.

# How to do an automatic test? 

Using the same example of two numbers addition, we can code the test (Blowing mind, no?). Yeah, we can code our test. 

```python
def addtion(a: int, b: int) -> int:
    return a+b

def test_addtion(self):
    assert addition(5,2) == 7
```

If in the terminal we call pytest we expect to receive a message that our tests passed. Now it's your time to code your tests and learn more about them.

# Open Source community

The community always develops huge codebases with many parameters, variables, so test it manually is not efficient at all, and because of this, they resort to automatic tests. Besides that, they use another concept to deliver the packages and approve pull requests: CD(Continuous Deployment)/CI(Continuous Integration). Some packages make available working in different operating systems, for example, TravisCI, CircleCI, and Github Actions. All of these are used along with open source communities to create the test environments.

# Third Week

For my third week, I developed tests for my 2 coverages models that I had coded one week before. The first thing that I issued was the data to test, I called my mentors to know what should I do? In the issue tab on GitHub, we decided to use synthetic data to get started with tests. So, I created a grid 10x10 and then I populated this grid with synthetic points separated as demand points and supply points. 

After all tests passed I set up the support of the newer tests to Github Actions. It was tough because I hadn't experience with this tool yet only with CircleCI. Besides that, the package that I was working on to create the optimization models was tricky. It installs a default solver if and only if you install it with `pip`. To discover this issue and how to solve this was a bit trickier. However, I got the things working on as expected and set up the automatic tests correctly. For me, was great to know more about these tools and how to create tests. 
