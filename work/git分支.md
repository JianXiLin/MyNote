---
title: git分支问题
tags: git分支
notebook: work
---

## qusetion

### 场景1

```markdown
项目立项后，第一次提测，分支情况应该是怎么样（会有几种分支，提测分支应该是什么类型）
提测后，测试发现缺陷，此时应该在哪个分支进行修复？修复后应该在什么时候合并到什么分支上？
提测后，测试出现阻测缺陷，此时应该在哪个分支进行修复打包？
```

```markdown
一、分支情况：
    第一次提测的分支应该至少包含master、dev、release这三种分支。
    1. master：作为项目的主分支，放置提测通过且稳定的程序代码。
    2. dev：作为项目的开发分支，放置最新的程序代码。
    3. release：作为项目的预发布分支，用于发布前的测试。将以该分支作为基准进行提测。
    而提测分支则为release这个分支。
二、缺陷修复：
    测试过程中发现的bug，将在release分支进行修改。修复完成后，提交，并且需要合并到dev分支。
    若修复的问题较大，则可从release分支拉取新的自定义分支进行修复bug，修复在合并到release和dev。
    以此减少部分不必要代码检测的次数和打包次数。
```

### 场景2

```markdown
项目发布，分支如何处理，Git分支要做几个事情？
项目发布后，试点或测试发现bug，如何处理？
项目发布后，在发布版本上追加功能，目的是不等新版发布时间，应该如何处理？
```

```markdown
一、项目发布后，git分支的处理方式：
    1. release：release分支需要确保合并到dev和master，发布完毕后即删除。
    2. master：需要对其打tag
    3. dev：确保保存项目的最新代码
二、修复bug：
    修复项目发布中的紧急问题，需要从master的对应版本节点拉取出hotfix分支
    （命名规范：hotfix/xxx_xxx_YYYYMMDD），
    并在该分支上进行问题修复，修复后，合并到dev和master分支上。
三、当前版本功能追加：
    从master的对应版本节点拉取出feature分支，在feature上进行新功能开发，开发后更新到dev，
    并且拉取出release分支进行测试，测试通过后，再合并到master和dev。
```

### 场景3

```markdown
目前哪几个操作会触发Jenkins自动打包？
release/V3.2怎么产生的，目前是什么作用？
```

```markdown
一、触发Jenkins自动打包的操作：
    1. release分支提交；
    2. hotfix分支提交；
    3. master分支打tag。
二、release/V3.2：
    该release/V3.2分支的产生是因为打master分支暂时无法在打tag时打包，
    暂时由master拉取出release分支并打tag为V3.2。
    其中master分支的内容包括8月中测试回归通过的release分支。
    而该分支tag对应的安装包将用于开发环境。
```