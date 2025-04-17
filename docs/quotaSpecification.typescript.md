# `quotaSpecification` Submodule <a name="`quotaSpecification` Submodule" id="@cdktf/provider-nomad.quotaSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaSpecification <a name="QuotaSpecification" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification nomad_quota_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

new quotaSpecification.QuotaSpecification(scope: Construct, id: string, config: QuotaSpecificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits"></a>

```typescript
public putLimits(value: IResolvable | QuotaSpecificationLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

quotaSpecification.QuotaSpecification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

quotaSpecification.QuotaSpecification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

quotaSpecification.QuotaSpecification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

quotaSpecification.QuotaSpecification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuotaSpecification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuotaSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuotaSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput">limitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits"></a>

```typescript
public readonly limits: QuotaSpecificationLimitsList;
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput"></a>

```typescript
public readonly limitsInput: IResolvable | QuotaSpecificationLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaSpecificationConfig <a name="QuotaSpecificationConfig" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

const quotaSpecificationConfig: quotaSpecification.QuotaSpecificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits">limits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]</code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name">name</a></code> | <code>string</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description">description</a></code> | <code>string</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#id QuotaSpecification#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits"></a>

```typescript
public readonly limits: IResolvable | QuotaSpecificationLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#limits QuotaSpecification#limits}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#name QuotaSpecification#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#description QuotaSpecification#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### QuotaSpecificationLimits <a name="QuotaSpecificationLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

const quotaSpecificationLimits: quotaSpecification.QuotaSpecificationLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region">region</a></code> | <code>string</code> | Region in which this limit has affect. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit">regionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | region_limit block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region in which this limit has affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#region QuotaSpecification#region}

---

##### `regionLimit`<sup>Required</sup> <a name="regionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit"></a>

```typescript
public readonly regionLimit: QuotaSpecificationLimitsRegionLimit;
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

region_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#region_limit QuotaSpecification#region_limit}

---

### QuotaSpecificationLimitsRegionLimit <a name="QuotaSpecificationLimitsRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

const quotaSpecificationLimitsRegionLimit: quotaSpecification.QuotaSpecificationLimitsRegionLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu">cpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb">memoryMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}.

---

##### `memoryMb`<sup>Optional</sup> <a name="memoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuotaSpecificationLimitsList <a name="QuotaSpecificationLimitsList" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

new quotaSpecification.QuotaSpecificationLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get"></a>

```typescript
public get(index: number): QuotaSpecificationLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuotaSpecificationLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>[]

---


### QuotaSpecificationLimitsOutputReference <a name="QuotaSpecificationLimitsOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

new quotaSpecification.QuotaSpecificationLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit">putRegionLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionLimit` <a name="putRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit"></a>

```typescript
public putRegionLimit(value: QuotaSpecificationLimitsRegionLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit">regionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput">regionLimitInput</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionLimit`<sup>Required</sup> <a name="regionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit"></a>

```typescript
public readonly regionLimit: QuotaSpecificationLimitsRegionLimitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionLimitInput`<sup>Optional</sup> <a name="regionLimitInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput"></a>

```typescript
public readonly regionLimitInput: QuotaSpecificationLimitsRegionLimit;
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuotaSpecificationLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>

---


### QuotaSpecificationLimitsRegionLimitOutputReference <a name="QuotaSpecificationLimitsRegionLimitOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer"></a>

```typescript
import { quotaSpecification } from '@cdktf/provider-nomad'

new quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb">resetMemoryMb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetMemoryMb` <a name="resetMemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb"></a>

```typescript
public resetMemoryMb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput">memoryMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb">memoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `memoryMbInput`<sup>Optional</sup> <a name="memoryMbInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput"></a>

```typescript
public readonly memoryMbInput: number;
```

- *Type:* number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuotaSpecificationLimitsRegionLimit;
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---



