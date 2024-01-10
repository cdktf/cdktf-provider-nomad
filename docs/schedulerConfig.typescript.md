# `schedulerConfig` Submodule <a name="`schedulerConfig` Submodule" id="@cdktf/provider-nomad.schedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerConfig <a name="SchedulerConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config nomad_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

new schedulerConfig.SchedulerConfig(scope: Construct, id: string, config?: SchedulerConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig">SchedulerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig">SchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled">resetMemoryOversubscriptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig">resetPreemptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm">resetSchedulerAlgorithm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemoryOversubscriptionEnabled` <a name="resetMemoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled"></a>

```typescript
public resetMemoryOversubscriptionEnabled(): void
```

##### `resetPreemptionConfig` <a name="resetPreemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig"></a>

```typescript
public resetPreemptionConfig(): void
```

##### `resetSchedulerAlgorithm` <a name="resetSchedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm"></a>

```typescript
public resetSchedulerAlgorithm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

schedulerConfig.SchedulerConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

schedulerConfig.SchedulerConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

schedulerConfig.SchedulerConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

schedulerConfig.SchedulerConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput">memoryOversubscriptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput">preemptionConfigInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput">schedulerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled">memoryOversubscriptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig">preemptionConfig</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memoryOversubscriptionEnabledInput`<sup>Optional</sup> <a name="memoryOversubscriptionEnabledInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput"></a>

```typescript
public readonly memoryOversubscriptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preemptionConfigInput`<sup>Optional</sup> <a name="preemptionConfigInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput"></a>

```typescript
public readonly preemptionConfigInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `schedulerAlgorithmInput`<sup>Optional</sup> <a name="schedulerAlgorithmInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput"></a>

```typescript
public readonly schedulerAlgorithmInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memoryOversubscriptionEnabled`<sup>Required</sup> <a name="memoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled"></a>

```typescript
public readonly memoryOversubscriptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preemptionConfig`<sup>Required</sup> <a name="preemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig"></a>

```typescript
public readonly preemptionConfig: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `schedulerAlgorithm`<sup>Required</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm"></a>

```typescript
public readonly schedulerAlgorithm: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerConfigConfig <a name="SchedulerConfigConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.Initializer"></a>

```typescript
import { schedulerConfig } from '@cdktf/provider-nomad'

const schedulerConfigConfig: schedulerConfig.SchedulerConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled">memoryOversubscriptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig">preemptionConfig</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>string</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryOversubscriptionEnabled`<sup>Optional</sup> <a name="memoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled"></a>

```typescript
public readonly memoryOversubscriptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `preemptionConfig`<sup>Optional</sup> <a name="preemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig"></a>

```typescript
public readonly preemptionConfig: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `schedulerAlgorithm`<sup>Optional</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm"></a>

```typescript
public readonly schedulerAlgorithm: string;
```

- *Type:* string

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---



