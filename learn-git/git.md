### Git Commit的相关工具链的配置与使用

Git Commit检测工具链

```bash
yarn add -D husky @commitlint/config-conventional @commitlint/cli
```
配置 husky 插件（在package.json中新增一个husky相关配置）

```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint", // 不需要在Commit时lint，不配置此项
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS" // 提交信息检测
  }
}
```

在项目的根目录下新建一个commitlint.config.js文件

```js
module.exports = {
  extends: ["@commitlint/config-conventional"], // 使用@commitlint/config-conventional规范
};
```

以上配置完毕后，如果不按照规范提交是无法提交的。

husky工具会直接从Git命令层面打断你的提交。

请按照规范进行提交


辅助Git Commit提交格式化的的工具

辅助提交工具

```bash
yarn add -D commitizen // 本地安装
```
 
```bash
npm install -g commitizen // 全局安装，全局安装后可以使用 git cz 命令，运行git cz 会帮助我们打开交互式的提交
```

本地项目commitizen 配置（在package.json中）

"scripts": {
  "cz": "git-cz",
},
"config": {
  "commitizen": {
      "path": "./node_modules/cz-conventional-changelog" // 这个文件是commitizen的内部依赖，里面定义了符合Angular提交规范的相关信息，也会方便我们后续生成changelog.md的日志
    }
}

以上配置完毕后，就可以使用git cz(全局) 或者 npm run cz/yarn cz帮助我们进行提交了



日志生成与版本号自动控制工具（项目管理者使用，成员了解即可）。


```bash
yarn add -D standard-version
```
 
在package.json 中的配置
 
```json
"scripts": {
    "major": "standard-version -r major", // 一个最大的版本升级, 会生成相关的changelog,修改版本号 1.0.0 -> 2.0.0，生成一个Tag
    "minor": "standard-version -r minor", // 中等的版本升级 会生成相关的changelog,修改版本号 1.0.0 -> 1.1.0, 生成一个Tag
    "patch": "standard-version -r patch --skip.tag",// 最小的版本升级 会生成相关的changelog,修改版本号 1.0.0 -> 1.0.1, 跳过生成Tag.
    "init": "standard-version  --first-release --skip.tag" // 首次生成相关的changelog, 不修改版本号, 跳过生成Tag. // 也可以不配置进脚本，用npx standard-version  --first-release --skip.tag 执行
  },
```