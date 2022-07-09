# npm-badge-generator

[![Build](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml)

Generate markdown badges for NPM package github repository README.md

## Install

```
npm install npm-badge-generator
```

## Usage

```javascript

const NPMBadget = require('npm-badge-generator');

const githubUsername = 'arshadkazmi42'
const githubRepositoryName = 'npm-badge-generator';
const npmPackageName = 'npm-badget-generator';

const badges = NPMBadge.generate(npmPackageName, githubRepositoryName, githubUsername);

console.log(badges);

/**
[![Build](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/npm-badge-generator.svg)](https://www.npmjs.com/package/npm-badge-generator)
[![NPM Downloads](https://img.shields.io/npm/dt/npm-badge-generator.svg)](https://www.npmjs.com/package/npm-badge-generator)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator)
[![LICENSE](https://img.shields.io/npm/l/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/commits/master)
**/
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/npm-badge-generator/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

