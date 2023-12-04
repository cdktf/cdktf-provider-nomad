# `csiVolumeRegistration` Submodule <a name="`csiVolumeRegistration` Submodule" id="@cdktf/provider-nomad.csiVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolumeRegistration <a name="CsiVolumeRegistration" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration nomad_csi_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistration(scope: Construct, id: string, config: CsiVolumeRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig">CsiVolumeRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig">CsiVolumeRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest">putTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability">resetCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy">resetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest">resetTopologyRequest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability"></a>

```typescript
public putCapability(value: IResolvable | CsiVolumeRegistrationCapability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions"></a>

```typescript
public putMountOptions(value: CsiVolumeRegistrationMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: CsiVolumeRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---

##### `putTopologyRequest` <a name="putTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest"></a>

```typescript
public putTopologyRequest(value: CsiVolumeRegistrationTopologyRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `resetCapability` <a name="resetCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability"></a>

```typescript
public resetCapability(): void
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetDeregisterOnDestroy` <a name="resetDeregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy"></a>

```typescript
public resetDeregisterOnDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopologyRequest` <a name="resetTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest"></a>

```typescript
public resetTopologyRequest(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

csiVolumeRegistration.CsiVolumeRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CsiVolumeRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CsiVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired">controllerRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected">controllersExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy">controllersHealthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected">nodesExpected</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy">nodesHealthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider">pluginProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion">pluginProviderVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput">capabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput">contextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput">deregisterOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput">pluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput">secretsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput">topologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability"></a>

```typescript
public readonly capability: CsiVolumeRegistrationCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a>

---

##### `controllerRequired`<sup>Required</sup> <a name="controllerRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired"></a>

```typescript
public readonly controllerRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `controllersExpected`<sup>Required</sup> <a name="controllersExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected"></a>

```typescript
public readonly controllersExpected: number;
```

- *Type:* number

---

##### `controllersHealthy`<sup>Required</sup> <a name="controllersHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy"></a>

```typescript
public readonly controllersHealthy: number;
```

- *Type:* number

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions"></a>

```typescript
public readonly mountOptions: CsiVolumeRegistrationMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a>

---

##### `nodesExpected`<sup>Required</sup> <a name="nodesExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected"></a>

```typescript
public readonly nodesExpected: number;
```

- *Type:* number

---

##### `nodesHealthy`<sup>Required</sup> <a name="nodesHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy"></a>

```typescript
public readonly nodesHealthy: number;
```

- *Type:* number

---

##### `pluginProvider`<sup>Required</sup> <a name="pluginProvider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider"></a>

```typescript
public readonly pluginProvider: string;
```

- *Type:* string

---

##### `pluginProviderVersion`<sup>Required</sup> <a name="pluginProviderVersion" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion"></a>

```typescript
public readonly pluginProviderVersion: string;
```

- *Type:* string

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable"></a>

```typescript
public readonly schedulable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: CsiVolumeRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies"></a>

```typescript
public readonly topologies: CsiVolumeRegistrationTopologiesList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a>

---

##### `topologyRequest`<sup>Required</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest"></a>

```typescript
public readonly topologyRequest: CsiVolumeRegistrationTopologyRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a>

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput"></a>

```typescript
public readonly capabilityInput: IResolvable | CsiVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput"></a>

```typescript
public readonly contextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deregisterOnDestroyInput`<sup>Optional</sup> <a name="deregisterOnDestroyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput"></a>

```typescript
public readonly deregisterOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: CsiVolumeRegistrationMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput"></a>

```typescript
public readonly pluginIdInput: string;
```

- *Type:* string

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput"></a>

```typescript
public readonly secretsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CsiVolumeRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---

##### `topologyRequestInput`<sup>Optional</sup> <a name="topologyRequestInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput"></a>

```typescript
public readonly topologyRequestInput: CsiVolumeRegistrationTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deregisterOnDestroy`<sup>Required</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy"></a>

```typescript
public readonly deregisterOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeRegistrationCapability <a name="CsiVolumeRegistrationCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationCapability: csiVolumeRegistration.CsiVolumeRegistrationCapability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode">accessMode</a></code> | <code>string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | The storage API that will be used by the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}

---

### CsiVolumeRegistrationConfig <a name="CsiVolumeRegistrationConfig" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationConfig: csiVolumeRegistration.CsiVolumeRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId">externalId</a></code> | <code>string</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name">name</a></code> | <code>string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId">pluginId</a></code> | <code>string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId">volumeId</a></code> | <code>string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability">capability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets">secrets</a></code> | <code>{[ key: string ]: string}</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability"></a>

```typescript
public readonly capability: IResolvable | CsiVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy"></a>

```typescript
public readonly deregisterOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: CsiVolumeRegistrationMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets"></a>

```typescript
public readonly secrets: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CsiVolumeRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest"></a>

```typescript
public readonly topologyRequest: CsiVolumeRegistrationTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

### CsiVolumeRegistrationMountOptions <a name="CsiVolumeRegistrationMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationMountOptions: csiVolumeRegistration.CsiVolumeRegistrationMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType">fsType</a></code> | <code>string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags">mountFlags</a></code> | <code>string[]</code> | The flags passed to mount. |

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}

---

##### `mountFlags`<sup>Optional</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags"></a>

```typescript
public readonly mountFlags: string[];
```

- *Type:* string[]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}

---

### CsiVolumeRegistrationTimeouts <a name="CsiVolumeRegistrationTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationTimeouts: csiVolumeRegistration.CsiVolumeRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}.

---

### CsiVolumeRegistrationTopologies <a name="CsiVolumeRegistrationTopologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationTopologies: csiVolumeRegistration.CsiVolumeRegistrationTopologies = { ... }
```


### CsiVolumeRegistrationTopologyRequest <a name="CsiVolumeRegistrationTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationTopologyRequest: csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required"></a>

```typescript
public readonly required: CsiVolumeRegistrationTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}

---

### CsiVolumeRegistrationTopologyRequestRequired <a name="CsiVolumeRegistrationTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationTopologyRequestRequired: csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology">topology</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology"></a>

```typescript
public readonly topology: IResolvable | CsiVolumeRegistrationTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}

---

### CsiVolumeRegistrationTopologyRequestRequiredTopology <a name="CsiVolumeRegistrationTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

const csiVolumeRegistrationTopologyRequestRequiredTopology: csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | Define attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeRegistrationCapabilityList <a name="CsiVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get"></a>

```typescript
public get(index: number): CsiVolumeRegistrationCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>[]

---


### CsiVolumeRegistrationCapabilityOutputReference <a name="CsiVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```typescript
public readonly attachmentModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeRegistrationCapability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>

---


### CsiVolumeRegistrationMountOptionsOutputReference <a name="CsiVolumeRegistrationMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags">resetMountFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType"></a>

```typescript
public resetFsType(): void
```

##### `resetMountFlags` <a name="resetMountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags"></a>

```typescript
public resetMountFlags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput">mountFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType">fsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags">mountFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput"></a>

```typescript
public readonly fsTypeInput: string;
```

- *Type:* string

---

##### `mountFlagsInput`<sup>Optional</sup> <a name="mountFlagsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput"></a>

```typescript
public readonly mountFlagsInput: string[];
```

- *Type:* string[]

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType"></a>

```typescript
public readonly fsType: string;
```

- *Type:* string

---

##### `mountFlags`<sup>Required</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags"></a>

```typescript
public readonly mountFlags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeRegistrationMountOptions;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---


### CsiVolumeRegistrationTimeoutsOutputReference <a name="CsiVolumeRegistrationTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---


### CsiVolumeRegistrationTopologiesList <a name="CsiVolumeRegistrationTopologiesList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get"></a>

```typescript
public get(index: number): CsiVolumeRegistrationTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CsiVolumeRegistrationTopologiesOutputReference <a name="CsiVolumeRegistrationTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments"></a>

```typescript
public readonly segments: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeRegistrationTopologies;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a>

---


### CsiVolumeRegistrationTopologyRequestOutputReference <a name="CsiVolumeRegistrationTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired"></a>

```typescript
public putRequired(value: CsiVolumeRegistrationTopologyRequestRequired): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required"></a>

```typescript
public readonly required: CsiVolumeRegistrationTopologyRequestRequiredOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: CsiVolumeRegistrationTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeRegistrationTopologyRequest;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology"></a>

```typescript
public putTopology(value: IResolvable | CsiVolumeRegistrationTopologyRequestRequiredTopology[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput">topologyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology"></a>

```typescript
public readonly topology: CsiVolumeRegistrationTopologyRequestRequiredTopologyList;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```typescript
public readonly topologyInput: IResolvable | CsiVolumeRegistrationTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CsiVolumeRegistrationTopologyRequestRequired;
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyList <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get"></a>

```typescript
public get(index: number): CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeRegistrationTopologyRequestRequiredTopology[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>[]

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```typescript
import { csiVolumeRegistration } from '@cdktf/provider-nomad'

new csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```typescript
public readonly segmentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```typescript
public readonly segments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CsiVolumeRegistrationTopologyRequestRequiredTopology;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>

---



