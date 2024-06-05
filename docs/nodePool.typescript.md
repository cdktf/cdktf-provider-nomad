# `nodePool` Submodule <a name="`nodePool` Submodule" id="@cdktf/provider-nomad.nodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NodePool <a name="NodePool" id="@cdktf/provider-nomad.nodePool.NodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool nomad_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.nodePool.NodePool.Initializer"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

new nodePool.NodePool(scope: Construct, id: string, config: NodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig">NodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.nodePool.NodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig">NodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.putSchedulerConfig">putSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.resetSchedulerConfig">resetSchedulerConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.nodePool.NodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.nodePool.NodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.nodePool.NodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.nodePool.NodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.nodePool.NodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.nodePool.NodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.nodePool.NodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.nodePool.NodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.nodePool.NodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.nodePool.NodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.nodePool.NodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.nodePool.NodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.nodePool.NodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.nodePool.NodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.nodePool.NodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.nodePool.NodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.nodePool.NodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.nodePool.NodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.nodePool.NodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.nodePool.NodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedulerConfig` <a name="putSchedulerConfig" id="@cdktf/provider-nomad.nodePool.NodePool.putSchedulerConfig"></a>

```typescript
public putSchedulerConfig(value: NodePoolSchedulerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.nodePool.NodePool.putSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-nomad.nodePool.NodePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.nodePool.NodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-nomad.nodePool.NodePool.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetSchedulerConfig` <a name="resetSchedulerConfig" id="@cdktf/provider-nomad.nodePool.NodePool.resetSchedulerConfig"></a>

```typescript
public resetSchedulerConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.nodePool.NodePool.isConstruct"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

nodePool.NodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.nodePool.NodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.nodePool.NodePool.isTerraformElement"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

nodePool.NodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.nodePool.NodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.nodePool.NodePool.isTerraformResource"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

nodePool.NodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.nodePool.NodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

nodePool.NodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.nodePool.NodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference">NodePoolSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.schedulerConfigInput">schedulerConfigInput</a></code> | <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.nodePool.NodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.nodePool.NodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.nodePool.NodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.nodePool.NodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.nodePool.NodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.nodePool.NodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.nodePool.NodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.nodePool.NodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.nodePool.NodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.nodePool.NodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.nodePool.NodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.nodePool.NodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.nodePool.NodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.nodePool.NodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `schedulerConfig`<sup>Required</sup> <a name="schedulerConfig" id="@cdktf/provider-nomad.nodePool.NodePool.property.schedulerConfig"></a>

```typescript
public readonly schedulerConfig: NodePoolSchedulerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference">NodePoolSchedulerConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-nomad.nodePool.NodePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.nodePool.NodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-nomad.nodePool.NodePool.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.nodePool.NodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schedulerConfigInput`<sup>Optional</sup> <a name="schedulerConfigInput" id="@cdktf/provider-nomad.nodePool.NodePool.property.schedulerConfigInput"></a>

```typescript
public readonly schedulerConfigInput: NodePoolSchedulerConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.nodePool.NodePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.nodePool.NodePool.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.nodePool.NodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.nodePool.NodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NodePoolConfig <a name="NodePoolConfig" id="@cdktf/provider-nomad.nodePool.NodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.Initializer"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

const nodePoolConfig: nodePool.NodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.name">name</a></code> | <code>string</code> | Unique name for this node pool. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.description">description</a></code> | <code>string</code> | Description for this node pool. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#id NodePool#id}. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Metadata associated with the node pool. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolConfig.property.schedulerConfig">schedulerConfig</a></code> | <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a></code> | scheduler_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#name NodePool#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#description NodePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#id NodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata associated with the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#meta NodePool#meta}

---

##### `schedulerConfig`<sup>Optional</sup> <a name="schedulerConfig" id="@cdktf/provider-nomad.nodePool.NodePoolConfig.property.schedulerConfig"></a>

```typescript
public readonly schedulerConfig: NodePoolSchedulerConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a>

scheduler_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#scheduler_config NodePool#scheduler_config}

---

### NodePoolSchedulerConfig <a name="NodePoolSchedulerConfig" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig.Initializer"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

const nodePoolSchedulerConfig: nodePool.NodePoolSchedulerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig.property.memoryOversubscription">memoryOversubscription</a></code> | <code>string</code> | If true, the node pool will have memory oversubscription enabled. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>string</code> | The scheduler algorithm to use in the node pool. |

---

##### `memoryOversubscription`<sup>Optional</sup> <a name="memoryOversubscription" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig.property.memoryOversubscription"></a>

```typescript
public readonly memoryOversubscription: string;
```

- *Type:* string

If true, the node pool will have memory oversubscription enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#memory_oversubscription NodePool#memory_oversubscription}

---

##### `schedulerAlgorithm`<sup>Optional</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig.property.schedulerAlgorithm"></a>

```typescript
public readonly schedulerAlgorithm: string;
```

- *Type:* string

The scheduler algorithm to use in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/node_pool#scheduler_algorithm NodePool#scheduler_algorithm}

---

## Classes <a name="Classes" id="Classes"></a>

### NodePoolSchedulerConfigOutputReference <a name="NodePoolSchedulerConfigOutputReference" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.Initializer"></a>

```typescript
import { nodePool } from '@cdktf/provider-nomad'

new nodePool.NodePoolSchedulerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resetMemoryOversubscription">resetMemoryOversubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resetSchedulerAlgorithm">resetSchedulerAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryOversubscription` <a name="resetMemoryOversubscription" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resetMemoryOversubscription"></a>

```typescript
public resetMemoryOversubscription(): void
```

##### `resetSchedulerAlgorithm` <a name="resetSchedulerAlgorithm" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.resetSchedulerAlgorithm"></a>

```typescript
public resetSchedulerAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.memoryOversubscriptionInput">memoryOversubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.schedulerAlgorithmInput">schedulerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.memoryOversubscription">memoryOversubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryOversubscriptionInput`<sup>Optional</sup> <a name="memoryOversubscriptionInput" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.memoryOversubscriptionInput"></a>

```typescript
public readonly memoryOversubscriptionInput: string;
```

- *Type:* string

---

##### `schedulerAlgorithmInput`<sup>Optional</sup> <a name="schedulerAlgorithmInput" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.schedulerAlgorithmInput"></a>

```typescript
public readonly schedulerAlgorithmInput: string;
```

- *Type:* string

---

##### `memoryOversubscription`<sup>Required</sup> <a name="memoryOversubscription" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.memoryOversubscription"></a>

```typescript
public readonly memoryOversubscription: string;
```

- *Type:* string

---

##### `schedulerAlgorithm`<sup>Required</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.schedulerAlgorithm"></a>

```typescript
public readonly schedulerAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NodePoolSchedulerConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.nodePool.NodePoolSchedulerConfig">NodePoolSchedulerConfig</a>

---



