'use strict';

const BADGE_TEMPLATE = `
  [![Build](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}/actions/workflows/nodejs.yml/badge.svg)](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}/actions/workflows/nodejs.yml)
  [![NPM Version](https://img.shields.io/npm/v/{{NPM_PACKAGE_NAME}}.svg)](https://www.npmjs.com/package/{{NPM_PACKAGE_NAME}})
  [![NPM Downloads](https://img.shields.io/npm/dt/{{NPM_PACKAGE_NAME}}.svg)](https://www.npmjs.com/package/{{NPM_PACKAGE_NAME}})
  [![Github Repo Size](https://img.shields.io/github/repo-size/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}.svg)](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}})
  [![LICENSE](https://img.shields.io/npm/l/{{NPM_PACKAGE_NAME}}.svg)](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}/blob/master/LICENSE)
  [![Contributors](https://img.shields.io/github/contributors/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}.svg)](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}/graphs/contributors)
  [![Commit](https://img.shields.io/github/last-commit/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}.svg)](https://github.com/{{GITHUB_USERNAME}}/{{GITHUB_REPOSITORY_NAME}}/commits/master)
`

const PLACEHOLDERS = {
  npmPackageName: '{{NPM_PACKAGE_NAME}}',
  githubRepositoryName: '{{GITHUB_REPOSITORY_NAME}}',
  githubUsername: '{{GITHUB_USERNAME}}'
};


module.exports = {

  generate: (npmPackageName, githubRepositoryName, githubUsername) => {

    const params = {
      npmPackageName,
      githubRepositoryName,
      githubUsername
    };

    let badges = BADGE_TEMPLATE;

    for (let placeholder in PLACEHOLDERS) {
      const regex = new Regex(`${PLACEHOLDERS[placeholder]}/g`);
      badge.replace(regex, params[placeholder]);
    }

    return badges;
  }
};