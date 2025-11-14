# `dynamicHostVolume` Submodule <a name="`dynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolume <a name="DynamicHostVolume" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

new dynamicHostVolume.DynamicHostVolume(scope: Construct, id: string, config: DynamicHostVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint">putConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax">resetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin">resetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId">resetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool">resetNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability"></a>

```typescript
public putCapability(value: IResolvable | DynamicHostVolumeCapability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---

##### `putConstraint` <a name="putConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint"></a>

```typescript
public putConstraint(value: IResolvable | DynamicHostVolumeConstraint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---

##### `resetCapacityMax` <a name="resetCapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax"></a>

```typescript
public resetCapacityMax(): void
```

##### `resetCapacityMin` <a name="resetCapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin"></a>

```typescript
public resetCapacityMin(): void
```

##### `resetConstraint` <a name="resetConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNodeId` <a name="resetNodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId"></a>

```typescript
public resetNodeId(): void
```

##### `resetNodePool` <a name="resetNodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool"></a>

```typescript
public resetNodePool(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters"></a>

```typescript
public resetParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

dynamicHostVolume.DynamicHostVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

dynamicHostVolume.DynamicHostVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

dynamicHostVolume.DynamicHostVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

dynamicHostVolume.DynamicHostVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicHostVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes">capacityBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes">capacityMinBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput">capabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput">capacityMaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput">capacityMinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput">constraintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput">nodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput">nodePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax">capacityMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin">capacityMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool">nodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability"></a>

```typescript
public readonly capability: DynamicHostVolumeCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `capacityBytes`<sup>Required</sup> <a name="capacityBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes"></a>

```typescript
public readonly capacityBytes: number;
```

- *Type:* number

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes"></a>

```typescript
public readonly capacityMaxBytes: number;
```

- *Type:* number

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes"></a>

```typescript
public readonly capacityMinBytes: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint"></a>

```typescript
public readonly constraint: DynamicHostVolumeConstraintList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput"></a>

```typescript
public readonly capabilityInput: IResolvable | DynamicHostVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---

##### `capacityMaxInput`<sup>Optional</sup> <a name="capacityMaxInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput"></a>

```typescript
public readonly capacityMaxInput: string;
```

- *Type:* string

---

##### `capacityMinInput`<sup>Optional</sup> <a name="capacityMinInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput"></a>

```typescript
public readonly capacityMinInput: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput"></a>

```typescript
public readonly constraintInput: IResolvable | DynamicHostVolumeConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput"></a>

```typescript
public readonly nodeIdInput: string;
```

- *Type:* string

---

##### `nodePoolInput`<sup>Optional</sup> <a name="nodePoolInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput"></a>

```typescript
public readonly nodePoolInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax"></a>

```typescript
public readonly capacityMax: string;
```

- *Type:* string

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin"></a>

```typescript
public readonly capacityMin: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool"></a>

```typescript
public readonly nodePool: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeCapability <a name="DynamicHostVolumeCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

const dynamicHostVolumeCapability: dynamicHostVolume.DynamicHostVolumeCapability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode">accessMode</a></code> | <code>string</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | An attachment mode available for the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#access_mode DynamicHostVolume#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#attachment_mode DynamicHostVolume#attachment_mode}

---

### DynamicHostVolumeConfig <a name="DynamicHostVolumeConfig" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

const dynamicHostVolumeConfig: dynamicHostVolume.DynamicHostVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability">capability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name">name</a></code> | <code>string</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId">pluginId</a></code> | <code>string</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax">capacityMax</a></code> | <code>string</code> | Requested maximum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin">capacityMin</a></code> | <code>string</code> | Requested minimum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint">constraint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | constraint block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace">namespace</a></code> | <code>string</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId">nodeId</a></code> | <code>string</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool">nodePool</a></code> | <code>string</code> | Node pool. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability"></a>

```typescript
public readonly capability: IResolvable | DynamicHostVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax"></a>

```typescript
public readonly capacityMax: string;
```

- *Type:* string

Requested maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin"></a>

```typescript
public readonly capacityMin: string;
```

- *Type:* string

Requested minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint"></a>

```typescript
public readonly constraint: IResolvable | DynamicHostVolumeConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}

---

##### `nodeId`<sup>Optional</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}

---

##### `nodePool`<sup>Optional</sup> <a name="nodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool"></a>

```typescript
public readonly nodePool: string;
```

- *Type:* string

Node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}

---

### DynamicHostVolumeConstraint <a name="DynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

const dynamicHostVolumeConstraint: dynamicHostVolume.DynamicHostVolumeConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute">attribute</a></code> | <code>string</code> | An attribute to check to constrain volume placement. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator">operator</a></code> | <code>string</code> | The operator to use for comparison. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value">value</a></code> | <code>string</code> | The requested value of the attribute. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

An attribute to check to constrain volume placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#attribute DynamicHostVolume#attribute}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

The operator to use for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#operator DynamicHostVolume#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The requested value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs/resources/dynamic_host_volume#value DynamicHostVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeCapabilityList <a name="DynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

new dynamicHostVolume.DynamicHostVolumeCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get"></a>

```typescript
public get(index: number): DynamicHostVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>[]

---


### DynamicHostVolumeCapabilityOutputReference <a name="DynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

new dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```typescript
public readonly attachmentModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeCapability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>

---


### DynamicHostVolumeConstraintList <a name="DynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

new dynamicHostVolume.DynamicHostVolumeConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get"></a>

```typescript
public get(index: number): DynamicHostVolumeConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeConstraint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>[]

---


### DynamicHostVolumeConstraintOutputReference <a name="DynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer"></a>

```typescript
import { dynamicHostVolume } from '@cdktf/provider-nomad'

new dynamicHostVolume.DynamicHostVolumeConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeConstraint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>

---



