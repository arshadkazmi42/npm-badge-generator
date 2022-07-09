const { expect } = require('chai');

const NPMBadge = require('../index');

const BADGES = `[![Build](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/npm-badge-generator/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/npm-badge-generator.svg)](https://www.npmjs.com/package/npm-badge-generator)
[![NPM Downloads](https://img.shields.io/npm/dt/npm-badge-generator.svg)](https://www.npmjs.com/package/npm-badge-generator)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator)
[![LICENSE](https://img.shields.io/npm/l/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/npm-badge-generator.svg)](https://github.com/arshadkazmi42/npm-badge-generator/commits/master)
`;

describe('Generate badge', () => {
  it('should generate badge', () => {
    const generatedBadges = NPMBadge.generate('npm-badge-generator', 'npm-badge-generator', 'arshadkazmi42');
    expect(generatedBadges).to.be.equals(BADGES);
  });
  it('should throw error NPM Package required', () => {
    try {
      NPMBadge.generate();
    } catch (err) {
      expect(err.message).to.be.equals('NPM Package Name is required');
    }
  });
  it('should throw error Github Repository Name required', () => {
    try {
      NPMBadge.generate('npm-badge-generator');
    } catch (err) {
      expect(err.message).to.be.equals('Github Repository Name is required');
    }
  });
  it('should throw error Github Username required', () => {
    try {
      NPMBadge.generate('npm-badge-generator', 'npm-badge-generator');
    } catch (err) {
      expect(err.message).to.be.equals('Github Username is required');
    }
  });
});

