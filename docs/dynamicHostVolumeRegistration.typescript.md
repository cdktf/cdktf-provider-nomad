# `dynamicHostVolumeRegistration` Submodule <a name="`dynamicHostVolumeRegistration` Submodule" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolumeRegistration <a name="DynamicHostVolumeRegistration" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration nomad_dynamic_host_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

new dynamicHostVolumeRegistration.DynamicHostVolumeRegistration(scope: Construct, id: string, config: DynamicHostVolumeRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig">DynamicHostVolumeRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig">DynamicHostVolumeRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability"></a>

```typescript
public putCapability(value: IResolvable | DynamicHostVolumeRegistrationCapability[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters"></a>

```typescript
public resetParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicHostVolumeRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicHostVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes">capacityBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes">capacityMinBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool">nodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput">capabilityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput">capacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput">hostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput">nodeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability"></a>

```typescript
public readonly capability: DynamicHostVolumeRegistrationCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a>

---

##### `capacityBytes`<sup>Required</sup> <a name="capacityBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes"></a>

```typescript
public readonly capacityBytes: number;
```

- *Type:* number

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes"></a>

```typescript
public readonly capacityMaxBytes: number;
```

- *Type:* number

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes"></a>

```typescript
public readonly capacityMinBytes: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint"></a>

```typescript
public readonly constraint: DynamicHostVolumeRegistrationConstraintList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool"></a>

```typescript
public readonly nodePool: string;
```

- *Type:* string

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput"></a>

```typescript
public readonly capabilityInput: IResolvable | DynamicHostVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput"></a>

```typescript
public readonly capacityInput: string;
```

- *Type:* string

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput"></a>

```typescript
public readonly nodeIdInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeRegistrationCapability <a name="DynamicHostVolumeRegistrationCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

const dynamicHostVolumeRegistrationCapability: dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode">accessMode</a></code> | <code>string</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | An attachment mode available for the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#access_mode DynamicHostVolumeRegistration#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#attachment_mode DynamicHostVolumeRegistration#attachment_mode}

---

### DynamicHostVolumeRegistrationConfig <a name="DynamicHostVolumeRegistrationConfig" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

const dynamicHostVolumeRegistrationConfig: dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability">capability</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath">hostPath</a></code> | <code>string</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name">name</a></code> | <code>string</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId">nodeId</a></code> | <code>string</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity">capacity</a></code> | <code>string</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>string</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability"></a>

```typescript
public readonly capability: IResolvable | DynamicHostVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

---

### DynamicHostVolumeRegistrationConstraint <a name="DynamicHostVolumeRegistrationConstraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

const dynamicHostVolumeRegistrationConstraint: dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeRegistrationCapabilityList <a name="DynamicHostVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

new dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get"></a>

```typescript
public get(index: number): DynamicHostVolumeRegistrationCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeRegistrationCapability[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>[]

---


### DynamicHostVolumeRegistrationCapabilityOutputReference <a name="DynamicHostVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

new dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```typescript
public readonly accessModeInput: string;
```

- *Type:* string

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```typescript
public readonly attachmentModeInput: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicHostVolumeRegistrationCapability;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>

---


### DynamicHostVolumeRegistrationConstraintList <a name="DynamicHostVolumeRegistrationConstraintList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

new dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get"></a>

```typescript
public get(index: number): DynamicHostVolumeRegistrationConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DynamicHostVolumeRegistrationConstraintOutputReference <a name="DynamicHostVolumeRegistrationConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer"></a>

```typescript
import { dynamicHostVolumeRegistration } from '@cdktf/provider-nomad'

new dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynamicHostVolumeRegistrationConstraint;
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a>

---



