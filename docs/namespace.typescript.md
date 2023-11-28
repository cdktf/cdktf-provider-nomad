# `namespace` Submodule <a name="`namespace` Submodule" id="@cdktf/provider-nomad.namespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Namespace <a name="Namespace" id="@cdktf/provider-nomad.namespace.Namespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace nomad_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.Namespace.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

new namespace.Namespace(scope: Construct, id: string, config: NamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig">NamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceConfig">NamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig">resetNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.namespace.Namespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.namespace.Namespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.namespace.Namespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.namespace.Namespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.namespace.Namespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.namespace.Namespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities"></a>

```typescript
public putCapabilities(value: NamespaceCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig"></a>

```typescript
public putNodePoolConfig(value: NamespaceNodePoolConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-nomad.namespace.Namespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.namespace.Namespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-nomad.namespace.Namespace.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetNodePoolConfig` <a name="resetNodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig"></a>

```typescript
public resetNodePoolConfig(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-nomad.namespace.Namespace.resetQuota"></a>

```typescript
public resetQuota(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

namespace.Namespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

namespace.Namespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

namespace.Namespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

namespace.Namespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Namespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Namespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Namespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quotaInput">quotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quota">quota</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.namespace.Namespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.Namespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.Namespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.Namespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.namespace.Namespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.namespace.Namespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.Namespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilities"></a>

```typescript
public readonly capabilities: NamespaceCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a>

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: NamespaceNodePoolConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: NamespaceCapabilities;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.namespace.Namespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.namespace.Namespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput"></a>

```typescript
public readonly nodePoolConfigInput: NamespaceNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.quotaInput"></a>

```typescript
public readonly quotaInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.namespace.Namespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.Namespace.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.Namespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.Namespace.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NamespaceCapabilities <a name="NamespaceCapabilities" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

const namespaceCapabilities: namespace.NamespaceCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers">disabledTaskDrivers</a></code> | <code>string[]</code> | Disabled task drivers for the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers">enabledTaskDrivers</a></code> | <code>string[]</code> | Enabled task drivers for the namespace. |

---

##### `disabledTaskDrivers`<sup>Optional</sup> <a name="disabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers"></a>

```typescript
public readonly disabledTaskDrivers: string[];
```

- *Type:* string[]

Disabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#disabled_task_drivers Namespace#disabled_task_drivers}

---

##### `enabledTaskDrivers`<sup>Optional</sup> <a name="enabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers"></a>

```typescript
public readonly enabledTaskDrivers: string[];
```

- *Type:* string[]

Enabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#enabled_task_drivers Namespace#enabled_task_drivers}

---

### NamespaceConfig <a name="NamespaceConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceConfig.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

const namespaceConfig: namespace.NamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.name">name</a></code> | <code>string</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.description">description</a></code> | <code>string</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota">quota</a></code> | <code>string</code> | Quota to set for this namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#name Namespace#name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities"></a>

```typescript
public readonly capabilities: NamespaceCapabilities;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#capabilities Namespace#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#description Namespace#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#meta Namespace#meta}

---

##### `nodePoolConfig`<sup>Optional</sup> <a name="nodePoolConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig"></a>

```typescript
public readonly nodePoolConfig: NamespaceNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#node_pool_config Namespace#node_pool_config}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#quota Namespace#quota}

---

### NamespaceNodePoolConfig <a name="NamespaceNodePoolConfig" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

const namespaceNodePoolConfig: namespace.NamespaceNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed">allowed</a></code> | <code>string[]</code> | The list of node pools allowed to be used in this namespace. Cannot be used with denied. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default">default</a></code> | <code>string</code> | The node pool to use when none are specified in the job. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied">denied</a></code> | <code>string[]</code> | The list of node pools not allowed to be used in this namespace. Cannot be used with allowed. |

---

##### `allowed`<sup>Optional</sup> <a name="allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed"></a>

```typescript
public readonly allowed: string[];
```

- *Type:* string[]

The list of node pools allowed to be used in this namespace. Cannot be used with denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#allowed Namespace#allowed}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

The node pool to use when none are specified in the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#default Namespace#default}

---

##### `denied`<sup>Optional</sup> <a name="denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied"></a>

```typescript
public readonly denied: string[];
```

- *Type:* string[]

The list of node pools not allowed to be used in this namespace. Cannot be used with allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#denied Namespace#denied}

---

## Classes <a name="Classes" id="Classes"></a>

### NamespaceCapabilitiesOutputReference <a name="NamespaceCapabilitiesOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

new namespace.NamespaceCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers">resetDisabledTaskDrivers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers">resetEnabledTaskDrivers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledTaskDrivers` <a name="resetDisabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers"></a>

```typescript
public resetDisabledTaskDrivers(): void
```

##### `resetEnabledTaskDrivers` <a name="resetEnabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers"></a>

```typescript
public resetEnabledTaskDrivers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput">disabledTaskDriversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput">enabledTaskDriversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers">disabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers">enabledTaskDrivers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledTaskDriversInput`<sup>Optional</sup> <a name="disabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput"></a>

```typescript
public readonly disabledTaskDriversInput: string[];
```

- *Type:* string[]

---

##### `enabledTaskDriversInput`<sup>Optional</sup> <a name="enabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput"></a>

```typescript
public readonly enabledTaskDriversInput: string[];
```

- *Type:* string[]

---

##### `disabledTaskDrivers`<sup>Required</sup> <a name="disabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers"></a>

```typescript
public readonly disabledTaskDrivers: string[];
```

- *Type:* string[]

---

##### `enabledTaskDrivers`<sup>Required</sup> <a name="enabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers"></a>

```typescript
public readonly enabledTaskDrivers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NamespaceCapabilities;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---


### NamespaceNodePoolConfigOutputReference <a name="NamespaceNodePoolConfigOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer"></a>

```typescript
import { namespace } from '@cdktf/provider-nomad'

new namespace.NamespaceNodePoolConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed">resetAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied">resetDenied</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowed` <a name="resetAllowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed"></a>

```typescript
public resetAllowed(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDenied` <a name="resetDenied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied"></a>

```typescript
public resetDenied(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput">allowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput">deniedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed">allowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied">denied</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInput`<sup>Optional</sup> <a name="allowedInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput"></a>

```typescript
public readonly allowedInput: string[];
```

- *Type:* string[]

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deniedInput`<sup>Optional</sup> <a name="deniedInput" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput"></a>

```typescript
public readonly deniedInput: string[];
```

- *Type:* string[]

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed"></a>

```typescript
public readonly allowed: string[];
```

- *Type:* string[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `denied`<sup>Required</sup> <a name="denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied"></a>

```typescript
public readonly denied: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NamespaceNodePoolConfig;
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---



