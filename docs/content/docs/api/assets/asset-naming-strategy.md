---
title: "AssetNamingStrategy"
weight: 10
date: 2019-01-30T10:57:03.687Z
generated: true
---
<!-- This file was generated from the Vendure TypeScript source. Do not modify. Instead, re-run "generate-docs" -->


# AssetNamingStrategy

{{< generation-info source="/server/src/config/asset-naming-strategy/asset-naming-strategy.ts">}}

The AssetNamingStrategy determines how file names are generated based on the uploaded source file name,

### generateSourceFileName

{{< member-info kind="method" type="(originalFileName: string, conflictFileName: string) => string" >}}

Given the original file name of the uploaded file, generate a file name to

### generatePreviewFileName

{{< member-info kind="method" type="(sourceFileName: string, conflictFileName: string) => string" >}}

Given the source file name generated in the {@link generateSourceFileName} method, this method
