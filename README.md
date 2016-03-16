# KarmaTesting
Angular Testing

**To copy the repo to local**

 git clone https://github.com/KavyaKetha/KarmaTesting.git

then

npm install

**to run the tests:** karma start karma.conf.js

**Why Testing?**

Tests can evaluate a program’s correctness after a change. Let’s say all the tests are passing, and then I decide I want one of my functions to be faster. I can dive in, make some changes, and see that it is indeed faster. But if I run the tests again and see that some are failing, I quickly discover that my fix has broken some part of the code. Automated testing lets me see those errors before they happen in the live.

**Jasmine**

Jasmine is a behavior-driven testing framework for JavaScript programming language. It has a bunch of tools that you can use to test JavaScript code.

#Test Components

**describe**

describe("Test Module",…) is called a suite. The name of the suite (“Test Module” in this case) typically defines a component of your application.This could be a class, a function, or maybe something else in function. This suite is called “Test Module”. It’s a string of English, not code.

**it**

it("Test Component") block is called a specification, or a spec for short. It’s a JavaScript function that says what some small piece of your code you are testing it on for.

**beforeEach and afterEach**

 They allow you to execute some code —before and after each spec. This can be very useful for factoring out common code or cleaning up variables after tests.

**beforeAll and afterAll**

The beforeAll executes before all the beforeEach and afterAll after all the afterEach.

**xit and xdescribe**

xit to skip the specs and xdescribe to skip the suites.

**expect**

expect is the expection of the (result of the) spec we are performing.

**Matchers**

toEqual checks for equality, not necessarily the same object.

toBe checks if two objects are the same.

toBeTruthy checks if a value is truthy (not just true).

toBeFalsy checks if a value is falsy (not just false).

toContain checks if a value is inside another.

toBeDefined checks if a value is defined.

toBeUndefined checks if a value is undefined.

toBeNull checks if a value is null.

toBeNaN checks if a value is NaN.

toBeCloseTo checks decimal proximity.

toMatch checks if a value matches a given regular expression.

toThrow checks if a function throws an error.

.not inverts the meaning of the above matchers.

**Example**

var b = 10;

expect(b).toBe(10);

expect(b).not.toBe(null);

Reference from https://gist.github.com/MilanGrubnic70/742f08c9d49280b78265#file-jasmine-reference-txt-L1