/**
 * What is jenkins:
 * 1. It is an open source CI and CD tool written in Java.
 * 2. It is an automation server used to build and deliver software projects.
 * 3. Jenkins was forked from antoher project called hudson, after a dispute with oracle.
 * 4. A major benefit of using jenkis is that is has a lot of plugins available.
 * 5. There is easier to use CI software availabe, but jenkins is open source, free and still verty popular.
 *
 *
 * What is CI/CD
 * 1. Continuous integration (CI) is the practice, in software engineering,
 *    of merging all developer working copies to a shared mainline several times a day.
 * 2. Continous delivery (CD)  is a software engineering approach in which teams produce
 *    software in short cycles, ensuring that the software can be reliably released at any time.
 * 3. In practice: verify and publish work by triggering automated builds and tests.
 * 4. All developers hould push their changes to a version control, which should then be build and tested
 * 5. Jenkis doesn't merge code nor it resolves code conflicts, that's still for the developer to do
 *
 * Benefits:
 * 1. Jenkins provides a feedback loop back to the developer to fix build errors.
 * 2. Research has shown that it's a lot quicker to have a developer fix the error immediately (when the code is still fresh in the memory)
 * 3. Jenkins can publish every build of your software
 * 4. This build already has gone through automated testing.
 * 5. When publishing and deployed to a dev/qa/staging server, you can advance the SDLC much quicker
 *
 * CI/CD within the SDLC:
 * 1. Developer write some code for software
 * 2  Build => Feature & Master branches => Compile
 * 3. Test => 1. Unit Test 2. Integration Test 3. Regression test 4. User acceptance test 5. etc.
 * 4. Release  => package => Provision deploy => customer
 *
 *
 * Jenkins alternatives:
 * Self-hosted
 *  1. DroneCI (written in go)
 *  2. TeamCity (by jetbrains)
 *
 * Hosted
 *  1. Werker
 *  2. CircleCI
 *  3. CodeShip
 *  4. SemaphoreCI
 *  5. Amazor AWS CI/CD tools
 *
 *
 * Installation:
 *
 */