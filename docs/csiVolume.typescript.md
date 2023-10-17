# `nomad_csi_volume`

Refer to the Terraform Registory for docs: [`nomad_csi_volume`](https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume).

# `csiVolume` Submodule <a name="`csiVolume` Submodule" id="@cdktf/provider-nomad.csiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolume <a name="CsiVolume" id="@cdktf/provider-nomad.csiVolume.CsiVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume nomad_csi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolume(scope: Construct, id: string, config: CsiVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig">CsiVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig">CsiVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest">putTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax">resetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin">resetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId">resetCloneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest">resetTopologyRequest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability"></a>

```typescript
public putCapability(value: IResolvable | CsiVolumeCapability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions"></a>

```typescript
public putMountOptions(value: CsiVolumeMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: CsiVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---

##### `putTopologyRequest` <a name="putTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest"></a>

```typescript
public putTopologyRequest(value: CsiVolumeTopologyRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---

##### `resetCapacityMax` <a name="resetCapacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax"></a>

```typescript
public resetCapacityMax(): void
```

##### `resetCapacityMin` <a name="resetCapacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin"></a>

```typescript
public resetCapacityMin(): void
```

##### `resetCloneId` <a name="resetCloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId"></a>

```typescript
public resetCloneId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopologyRequest` <a name="resetTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest"></a>

```typescript
public resetTopologyRequest(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

csiVolume.CsiVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

csiVolume.CsiVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

csiVolume.CsiVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

csiVolume.CsiVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CsiVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CsiVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired">controllerRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected">controllersExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy">controllersHealthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected">nodesExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy">nodesHealthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider">pluginProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion">pluginProviderVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput">capabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput">capacityMaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput">capacityMinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput">cloneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput">secretsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput">topologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax">capacityMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin">capacityMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId">cloneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability"></a>

```typescript
public readonly capability: CsiVolumeCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a>

---

##### `controllerRequired`<sup>Required</sup> <a name="controllerRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired"></a>

```typescript
public readonly controllerRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `controllersExpected`<sup>Required</sup> <a name="controllersExpected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected"></a>

```typescript
public readonly controllersExpected: number;
```

- *Type:* number

---

##### `controllersHealthy`<sup>Required</sup> <a name="controllersHealthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy"></a>

```typescript
public readonly controllersHealthy: number;
```

- *Type:* number

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions"></a>

```typescript
public readonly mountOptions: CsiVolumeMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a>

---

##### `nodesExpected`<sup>Required</sup> <a name="nodesExpected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected"></a>

```typescript
public readonly nodesExpected: number;
```

- *Type:* number

---

##### `nodesHealthy`<sup>Required</sup> <a name="nodesHealthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy"></a>

```typescript
public readonly nodesHealthy: number;
```

- *Type:* number

---

##### `pluginProvider`<sup>Required</sup> <a name="pluginProvider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider"></a>

```typescript
public readonly pluginProvider: string;
```

- *Type:* string

---

##### `pluginProviderVersion`<sup>Required</sup> <a name="pluginProviderVersion" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion"></a>

```typescript
public readonly pluginProviderVersion: string;
```

- *Type:* string

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable"></a>

```typescript
public readonly schedulable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts"></a>

```typescript
public readonly timeouts: CsiVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies"></a>

```typescript
public readonly topologies: CsiVolumeTopologiesList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a>

---

##### `topologyRequest`<sup>Required</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest"></a>

```typescript
public readonly topologyRequest: CsiVolumeTopologyRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a>

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput"></a>

```typescript
public readonly capabilityInput: IResolvable | CsiVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]

---

##### `capacityMaxInput`<sup>Optional</sup> <a name="capacityMaxInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput"></a>

```typescript
public readonly capacityMaxInput: string;
```

- *Type:* string

---

##### `capacityMinInput`<sup>Optional</sup> <a name="capacityMinInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput"></a>

```typescript
public readonly capacityMinInput: string;
```

- *Type:* string

---

##### `cloneIdInput`<sup>Optional</sup> <a name="cloneIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput"></a>

```typescript
public readonly cloneIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: CsiVolumeMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput"></a>

```typescript
public readonly secretsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CsiVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---

##### `topologyRequestInput`<sup>Optional</sup> <a name="topologyRequestInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput"></a>

```typescript
public readonly topologyRequestInput: CsiVolumeTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax"></a>

```typescript
public readonly capacityMax: string;
```

- *Type:* string

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin"></a>

```typescript
public readonly capacityMin: string;
```

- *Type:* string

---

##### `cloneId`<sup>Required</sup> <a name="cloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId"></a>

```typescript
public readonly cloneId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeCapability <a name="CsiVolumeCapability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeCapability: csiVolume.CsiVolumeCapability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode">accessMode</a></code> | <code>string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | The storage API that will be used by the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#access_mode CsiVolume#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#attachment_mode CsiVolume#attachment_mode}

---

### CsiVolumeConfig <a name="CsiVolumeConfig" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeConfig: csiVolume.CsiVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability">capability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name">name</a></code> | <code>string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId">volumeId</a></code> | <code>string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax">capacityMax</a></code> | <code>string</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin">capacityMin</a></code> | <code>string</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId">cloneId</a></code> | <code>string</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability"></a>

```typescript
public readonly capability: IResolvable | CsiVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capability CsiVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#name CsiVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#volume_id CsiVolume#volume_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax"></a>

```typescript
public readonly capacityMax: string;
```

- *Type:* string

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin"></a>

```typescript
public readonly capacityMin: string;
```

- *Type:* string

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}

---

##### `cloneId`<sup>Optional</sup> <a name="cloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId"></a>

```typescript
public readonly cloneId: string;
```

- *Type:* string

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#clone_id CsiVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: CsiVolumeMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_options CsiVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#namespace CsiVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#parameters CsiVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#secrets CsiVolume#secrets}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CsiVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#timeouts CsiVolume#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest"></a>

```typescript
public readonly topologyRequest: CsiVolumeTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology_request CsiVolume#topology_request}

---

### CsiVolumeMountOptions <a name="CsiVolumeMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeMountOptions: csiVolume.CsiVolumeMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType">fsType</a></code> | <code>string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags">mountFlags</a></code> | <code>string[]</code> | The flags passed to mount. |

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#fs_type CsiVolume#fs_type}

---

##### `mountFlags`<sup>Optional</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags"></a>

```typescript
public readonly mountFlags: string[];
```

- *Type:* string[]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_flags CsiVolume#mount_flags}

---

### CsiVolumeTimeouts <a name="CsiVolumeTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTimeouts: csiVolume.CsiVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}.

---

### CsiVolumeTopologies <a name="CsiVolumeTopologies" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologies: csiVolume.CsiVolumeTopologies = { ... }
```


### CsiVolumeTopologyRequest <a name="CsiVolumeTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologyRequest: csiVolume.CsiVolumeTopologyRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred"></a>

```typescript
public readonly preferred: CsiVolumeTopologyRequestPreferred;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#preferred CsiVolume#preferred}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required"></a>

```typescript
public readonly required: CsiVolumeTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#required CsiVolume#required}

---

### CsiVolumeTopologyRequestPreferred <a name="CsiVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologyRequestPreferred: csiVolume.CsiVolumeTopologyRequestPreferred = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology">topology</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology"></a>

```typescript
public readonly topology: IResolvable | CsiVolumeTopologyRequestPreferredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestPreferredTopology <a name="CsiVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologyRequestPreferredTopology: csiVolume.CsiVolumeTopologyRequestPreferredTopology = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}

---

### CsiVolumeTopologyRequestRequired <a name="CsiVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologyRequestRequired: csiVolume.CsiVolumeTopologyRequestRequired = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology"></a>

```typescript
public readonly topology: IResolvable | CsiVolumeTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestRequiredTopology <a name="CsiVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

const csiVolumeTopologyRequestRequiredTopology: csiVolume.CsiVolumeTopologyRequestRequiredTopology = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeCapabilityList <a name="CsiVolumeCapabilityList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get"></a>

```typescript
public get(index: number): CsiVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>[]

---


### CsiVolumeCapabilityOutputReference <a name="CsiVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```typescript
public readonly attachmentModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeCapability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>

---


### CsiVolumeMountOptionsOutputReference <a name="CsiVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags">resetMountFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetMountFlags` <a name="resetMountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags"></a>

```typescript
public resetMountFlags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput">mountFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags">mountFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `mountFlagsInput`<sup>Optional</sup> <a name="mountFlagsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```typescript
public readonly mountFlagsInput: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `mountFlags`<sup>Required</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags"></a>

```typescript
public readonly mountFlags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---


### CsiVolumeTimeoutsOutputReference <a name="CsiVolumeTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---


### CsiVolumeTopologiesList <a name="CsiVolumeTopologiesList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get"></a>

```typescript
public get(index: number): CsiVolumeTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CsiVolumeTopologiesOutputReference <a name="CsiVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments"></a>

```typescript
public readonly segments: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeTopologies;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a>

---


### CsiVolumeTopologyRequestOutputReference <a name="CsiVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred">putPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred">resetPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferred` <a name="putPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred"></a>

```typescript
public putPreferred(value: CsiVolumeTopologyRequestPreferred): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---

##### `putRequired` <a name="putRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired"></a>

```typescript
public putRequired(value: CsiVolumeTopologyRequestRequired): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---

##### `resetPreferred` <a name="resetPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred"></a>

```typescript
public resetPreferred(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput">preferredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred"></a>

```typescript
public readonly preferred: CsiVolumeTopologyRequestPreferredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required"></a>

```typescript
public readonly required: CsiVolumeTopologyRequestRequiredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a>

---

##### `preferredInput`<sup>Optional</sup> <a name="preferredInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```typescript
public readonly preferredInput: CsiVolumeTopologyRequestPreferred;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: CsiVolumeTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---


### CsiVolumeTopologyRequestPreferredOutputReference <a name="CsiVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestPreferredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```typescript
public putTopology(value: IResolvable | CsiVolumeTopologyRequestPreferredTopology[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput">topologyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```typescript
public readonly topology: CsiVolumeTopologyRequestPreferredTopologyList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```typescript
public readonly topologyInput: IResolvable | CsiVolumeTopologyRequestPreferredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeTopologyRequestPreferred;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---


### CsiVolumeTopologyRequestPreferredTopologyList <a name="CsiVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestPreferredTopologyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get"></a>

```typescript
public get(index: number): CsiVolumeTopologyRequestPreferredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeTopologyRequestPreferredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>[]

---


### CsiVolumeTopologyRequestPreferredTopologyOutputReference <a name="CsiVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```typescript
public readonly segmentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeTopologyRequestPreferredTopology;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>

---


### CsiVolumeTopologyRequestRequiredOutputReference <a name="CsiVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestRequiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```typescript
public putTopology(value: IResolvable | CsiVolumeTopologyRequestRequiredTopology[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput">topologyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```typescript
public readonly topology: CsiVolumeTopologyRequestRequiredTopologyList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```typescript
public readonly topologyInput: IResolvable | CsiVolumeTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---


### CsiVolumeTopologyRequestRequiredTopologyList <a name="CsiVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestRequiredTopologyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get"></a>

```typescript
public get(index: number): CsiVolumeTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>[]

---


### CsiVolumeTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```typescript
import { csiVolume } from '@cdktf/provider-nomad'

new csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```typescript
public readonly segmentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeTopologyRequestRequiredTopology;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>

---



