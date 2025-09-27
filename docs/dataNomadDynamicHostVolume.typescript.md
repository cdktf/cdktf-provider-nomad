# `dataNomadDynamicHostVolume` Submodule <a name="`dataNomadDynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadDynamicHostVolume <a name="DataNomadDynamicHostVolume" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

new dataNomadDynamicHostVolume.DataNomadDynamicHostVolume(scope: Construct, id: string, config: DataNomadDynamicHostVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig">DataNomadDynamicHostVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig">DataNomadDynamicHostVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadDynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNomadDynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNomadDynamicHostVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNomadDynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadDynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList">DataNomadDynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityBytes">capacityBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMax">capacityMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMin">capacityMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMinBytes">capacityMinBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList">DataNomadDynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodePool">nodePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.parameters">parameters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.pluginId">pluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capability"></a>

```typescript
public readonly capability: DataNomadDynamicHostVolumeCapabilityList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList">DataNomadDynamicHostVolumeCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `capacityBytes`<sup>Required</sup> <a name="capacityBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityBytes"></a>

```typescript
public readonly capacityBytes: number;
```

- *Type:* number

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMax"></a>

```typescript
public readonly capacityMax: string;
```

- *Type:* string

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMaxBytes"></a>

```typescript
public readonly capacityMaxBytes: number;
```

- *Type:* number

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMin"></a>

```typescript
public readonly capacityMin: string;
```

- *Type:* string

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMinBytes"></a>

```typescript
public readonly capacityMinBytes: number;
```

- *Type:* number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.constraint"></a>

```typescript
public readonly constraint: DataNomadDynamicHostVolumeConstraintList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList">DataNomadDynamicHostVolumeConstraintList</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodePool"></a>

```typescript
public readonly nodePool: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.pluginId"></a>

```typescript
public readonly pluginId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadDynamicHostVolumeCapability <a name="DataNomadDynamicHostVolumeCapability" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

const dataNomadDynamicHostVolumeCapability: dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability = { ... }
```


### DataNomadDynamicHostVolumeConfig <a name="DataNomadDynamicHostVolumeConfig" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

const dataNomadDynamicHostVolumeConfig: dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.id">id</a></code> | <code>string</code> | Volume ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.namespace">namespace</a></code> | <code>string</code> | Volume namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Volume ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#id DataNomadDynamicHostVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#namespace DataNomadDynamicHostVolume#namespace}

---

### DataNomadDynamicHostVolumeConstraint <a name="DataNomadDynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

const dataNomadDynamicHostVolumeConstraint: dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadDynamicHostVolumeCapabilityList <a name="DataNomadDynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

new dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get"></a>

```typescript
public get(index: number): DataNomadDynamicHostVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadDynamicHostVolumeCapabilityOutputReference <a name="DataNomadDynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

new dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability">DataNomadDynamicHostVolumeCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```typescript
public readonly accessMode: string;
```

- *Type:* string

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```typescript
public readonly attachmentMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadDynamicHostVolumeCapability;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability">DataNomadDynamicHostVolumeCapability</a>

---


### DataNomadDynamicHostVolumeConstraintList <a name="DataNomadDynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

new dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get"></a>

```typescript
public get(index: number): DataNomadDynamicHostVolumeConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadDynamicHostVolumeConstraintOutputReference <a name="DataNomadDynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer"></a>

```typescript
import { dataNomadDynamicHostVolume } from '@cdktf/provider-nomad'

new dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint">DataNomadDynamicHostVolumeConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadDynamicHostVolumeConstraint;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint">DataNomadDynamicHostVolumeConstraint</a>

---



