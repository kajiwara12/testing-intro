# Testing Intro

This repo contains some examples of testing different types of code.

It includes table-based testing, testing side-effecting functions, and testing
React components.

## Tech

This project uses [vitest](https://vitest.dev/) as a test runner, but jest would be setup similarly. I prefer vitest because it doesn't require as much config as jest and it also doesn't inject global variables into your code.

For testing React components, I'm using [react-testing-library](https://testing-library.com/docs/). It gives you an easy way to render React components, query them, and simulate events on them.

## Setup

`$ npm install`

## Scripts

`$ npm run test` - Scans through your project and executes all tests matching the following pattern: `['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']` [ref](https://vitest.dev/config/#include).

## Coming Soon

I will be adding backend tests shortly which demonstrate how to test API routes by simulating HTTP requests and making assertions on the HTTP responses.
