# react-starter v2
This is my personal starter for SPA development. It's a bare bones starter meant to be hacked.
Perhaps in the future I will provide branches/forks/whatever for more full-featured applications
based on this starter.

### Goals
Ideally, this will end up being a generator or some kind -either through something like yeoman or something akin to `angular-cli` or `create-react-app`.
In the mean time, it is going to be clone/checkout based.

Here are some of the requirements I have for an MVP. I add more as I think of them.

- [ ] First class support for testing
    - [x] unit tests
    - [ ] e2e tests
    - [x] coverage
    - [x] snapshot testing?
    - [x] storybook for components & layouts
- [x] Easy development
    - [x] seemless debugging
    - [x] fast recompilation
    - [x] autogenerated documentation
    - [x] beautification
    - [x] dependency graph generation
    - [x] linting
    - [x] bundle analysis
    - [x] .d.ts generation
- [ ] Features
    - [ ] router
    - [ ] history
    - [ ] authentication
    - [ ] authorization
    - [ ] logging
    - [ ] animations
        - [ ] CSS
        - [ ] Greensock (imperative)
        - [ ] react-pose (declarative)
    - [ ] webworkers?
    - [ ] metrics
    - [ ] lazy-loading modules
    - [ ] charts

### Technologies
- [x] TypeScript
- [x] react
- [x] react-redux
- [x] redux-saga
- [x] webpack
- [x] eslint
- [ ] cosmos?
- [ ] sass?
- [ ] gsap?
- [ ] react-pose?

### Style Explanation
1. I prefer to split my application code along domain boundaries. This is opposed to
another popular style where you have directories for "types" of application pieces
e.g. /components, /services, /containers. I prefer this because I believe it fosters
good programming practice.
1. Unit Tests should live next to the files they test. When tests are in a complete separate
directory structure, it's very easy to forget to move the test when refactoring the location
of some domain code. Integration tests or e2e tests should live in a central location.
1. Files should follow a predictable naming convention. I prefer dot separated files of the form:
`domain.clarifier.sub-clarifier.ext` e.g. `auth.domain.ts`, `home.animation.banner.ts`

### Starter Project Requirements
The basic idea is to create a starter project that represents a CICD tracking system that will have several modules:
- [ ] Users (admin)
    - [ ] CRUD users
- [ ] User profile
    - [ ] Update information
    - [ ] View contributions
    - [ ] Notifications
- [ ] Reports (admin)
    - [ ] Build pass/fail stats
    - [ ] Projects/contributions
- [ ] Builds
    - [ ] Trigger/cancel builds
    - [ ] View build history