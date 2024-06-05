# `dataNomadNodePools` Submodule <a name="`dataNomadNodePools` Submodule" id="@cdktf/provider-nomad.dataNomadNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadNodePools <a name="DataNomadNodePools" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools nomad_node_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

new dataNomadNodePools.DataNomadNodePools(scope: Construct, id: string, config?: DataNomadNodePoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig">DataNomadNodePoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig">DataNomadNodePoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isConstruct"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

dataNomadNodePools.DataNomadNodePools.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformElement"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

dataNomadNodePools.DataNomadNodePools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformDataSource"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

dataNomadNodePools.DataNomadNodePools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

dataNomadNodePools.DataNomadNodePools.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNomadNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNomadNodePools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNomadNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.nodePools">nodePools</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList">DataNomadNodePoolsNodePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.nodePools"></a>

```typescript
public readonly nodePools: DataNomadNodePoolsNodePoolsList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList">DataNomadNodePoolsNodePoolsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadNodePoolsConfig <a name="DataNomadNodePoolsConfig" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

const dataNomadNodePoolsConfig: dataNomadNodePools.DataNomadNodePoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.filter">filter</a></code> | <code>string</code> | Specifies the expression used to filter the results. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools#id DataNomadNodePools#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.prefix">prefix</a></code> | <code>string</code> | Specifies a string to filter node pools based on a name prefix. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Specifies the expression used to filter the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools#filter DataNomadNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools#id DataNomadNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Specifies a string to filter node pools based on a name prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pools#prefix DataNomadNodePools#prefix}

---

### DataNomadNodePoolsNodePools <a name="DataNomadNodePoolsNodePools" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePools.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

const dataNomadNodePoolsNodePools: dataNomadNodePools.DataNomadNodePoolsNodePools = { ... }
```


### DataNomadNodePoolsNodePoolsSchedulerConfig <a name="DataNomadNodePoolsNodePoolsSchedulerConfig" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfig.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

const dataNomadNodePoolsNodePoolsSchedulerConfig: dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadNodePoolsNodePoolsList <a name="DataNomadNodePoolsNodePoolsList" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

new dataNomadNodePools.DataNomadNodePoolsNodePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.get"></a>

```typescript
public get(index: number): DataNomadNodePoolsNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadNodePoolsNodePoolsOutputReference <a name="DataNomadNodePoolsNodePoolsOutputReference" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

new dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList">DataNomadNodePoolsNodePoolsSchedulerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePools">DataNomadNodePoolsNodePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.meta"></a>

```typescript
public readonly meta: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.schedulerConfig"></a>

```typescript
public readonly schedulerConfig: DataNomadNodePoolsNodePoolsSchedulerConfigList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList">DataNomadNodePoolsNodePoolsSchedulerConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadNodePoolsNodePools;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePools">DataNomadNodePoolsNodePools</a>

---


### DataNomadNodePoolsNodePoolsSchedulerConfigList <a name="DataNomadNodePoolsNodePoolsSchedulerConfigList" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

new dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.get"></a>

```typescript
public get(index: number): DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference <a name="DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer"></a>

```typescript
import { dataNomadNodePools } from '@cdktf/provider-nomad'

new dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.memoryOversubscription">memoryOversubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfig">DataNomadNodePoolsNodePoolsSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryOversubscription`<sup>Required</sup> <a name="memoryOversubscription" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.memoryOversubscription"></a>

```typescript
public readonly memoryOversubscription: string;
```

- *Type:* string

---

##### `schedulerAlgorithm`<sup>Required</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.schedulerAlgorithm"></a>

```typescript
public readonly schedulerAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadNodePoolsNodePoolsSchedulerConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePools.DataNomadNodePoolsNodePoolsSchedulerConfig">DataNomadNodePoolsNodePoolsSchedulerConfig</a>

---



