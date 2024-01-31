# `dataNomadAclRoles` Submodule <a name="`dataNomadAclRoles` Submodule" id="@cdktf/provider-nomad.dataNomadAclRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadAclRoles <a name="DataNomadAclRoles" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles nomad_acl_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

new dataNomadAclRoles.DataNomadAclRoles(scope: Construct, id: string, config?: DataNomadAclRolesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig">DataNomadAclRolesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig">DataNomadAclRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadAclRoles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isConstruct"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

dataNomadAclRoles.DataNomadAclRoles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformElement"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

dataNomadAclRoles.DataNomadAclRoles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformDataSource"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

dataNomadAclRoles.DataNomadAclRoles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataNomadAclRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNomadAclRoles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNomadAclRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadAclRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.aclRoles">aclRoles</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList">DataNomadAclRolesAclRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aclRoles`<sup>Required</sup> <a name="aclRoles" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.aclRoles"></a>

```typescript
public readonly aclRoles: DataNomadAclRolesAclRolesList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList">DataNomadAclRolesAclRolesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRoles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadAclRolesAclRoles <a name="DataNomadAclRolesAclRoles" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRoles.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

const dataNomadAclRolesAclRoles: dataNomadAclRoles.DataNomadAclRolesAclRoles = { ... }
```


### DataNomadAclRolesAclRolesPolicies <a name="DataNomadAclRolesAclRolesPolicies" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPolicies.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

const dataNomadAclRolesAclRolesPolicies: dataNomadAclRoles.DataNomadAclRolesAclRolesPolicies = { ... }
```


### DataNomadAclRolesConfig <a name="DataNomadAclRolesConfig" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

const dataNomadAclRolesConfig: dataNomadAclRoles.DataNomadAclRolesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles#id DataNomadAclRoles#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles#prefix DataNomadAclRoles#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles#id DataNomadAclRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_roles#prefix DataNomadAclRoles#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataNomadAclRolesAclRolesList <a name="DataNomadAclRolesAclRolesList" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

new dataNomadAclRoles.DataNomadAclRolesAclRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.get"></a>

```typescript
public get(index: number): DataNomadAclRolesAclRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadAclRolesAclRolesOutputReference <a name="DataNomadAclRolesAclRolesOutputReference" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

new dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList">DataNomadAclRolesAclRolesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRoles">DataNomadAclRolesAclRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.policies"></a>

```typescript
public readonly policies: DataNomadAclRolesAclRolesPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList">DataNomadAclRolesAclRolesPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadAclRolesAclRoles;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRoles">DataNomadAclRolesAclRoles</a>

---


### DataNomadAclRolesAclRolesPoliciesList <a name="DataNomadAclRolesAclRolesPoliciesList" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

new dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.get"></a>

```typescript
public get(index: number): DataNomadAclRolesAclRolesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNomadAclRolesAclRolesPoliciesOutputReference <a name="DataNomadAclRolesAclRolesPoliciesOutputReference" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataNomadAclRoles } from '@cdktf/provider-nomad'

new dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPolicies">DataNomadAclRolesAclRolesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNomadAclRolesAclRolesPolicies;
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclRoles.DataNomadAclRolesAclRolesPolicies">DataNomadAclRolesAclRolesPolicies</a>

---



