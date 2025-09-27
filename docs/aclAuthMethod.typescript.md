# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-nomad.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method nomad_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

new aclAuthMethod.AclAuthMethod(scope: Construct, id: string, config: AclAuthMethodConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat">resetTokenNameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig"></a>

```typescript
public putConfig(value: AclAuthMethodConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTokenNameFormat` <a name="resetTokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat"></a>

```typescript
public resetTokenNameFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

aclAuthMethod.AclAuthMethod.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

aclAuthMethod.AclAuthMethod.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

aclAuthMethod.AclAuthMethod.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

aclAuthMethod.AclAuthMethod.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">tokenLocalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput">tokenNameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">maxTokenTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality">tokenLocality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat">tokenNameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config"></a>

```typescript
public readonly config: AclAuthMethodConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```typescript
public readonly configInput: AclAuthMethodConfigA;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```typescript
public readonly maxTokenTtlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tokenLocalityInput`<sup>Optional</sup> <a name="tokenLocalityInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```typescript
public readonly tokenLocalityInput: string;
```

- *Type:* string

---

##### `tokenNameFormatInput`<sup>Optional</sup> <a name="tokenNameFormatInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput"></a>

```typescript
public readonly tokenNameFormatInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```typescript
public readonly tokenLocality: string;
```

- *Type:* string

---

##### `tokenNameFormat`<sup>Required</sup> <a name="tokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat"></a>

```typescript
public readonly tokenNameFormat: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

const aclAuthMethodConfig: aclAuthMethod.AclAuthMethodConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>string</code> | Defines the maximum life of a token created by this method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name">name</a></code> | <code>string</code> | The identifier of the ACL Auth Method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">tokenLocality</a></code> | <code>string</code> | Defines whether the ACL Auth Method creates a local or global token when performing SSO login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type">type</a></code> | <code>string</code> | ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether this ACL Auth Method is to be set as default. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat">tokenNameFormat</a></code> | <code>string</code> | Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```typescript
public readonly config: AclAuthMethodConfigA;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```typescript
public readonly maxTokenTtl: string;
```

- *Type:* string

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```typescript
public readonly tokenLocality: string;
```

- *Type:* string

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tokenNameFormat`<sup>Optional</sup> <a name="tokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat"></a>

```typescript
public readonly tokenNameFormat: string;
```

- *Type:* string

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

### AclAuthMethodConfigA <a name="AclAuthMethodConfigA" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

const aclAuthMethodConfigA: aclAuthMethod.AclAuthMethodConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | A list of allowed values that can be used for the redirect URI. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences">boundAudiences</a></code> | <code>string[]</code> | List of auth claims that are valid for login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer">boundIssuer</a></code> | <code>string[]</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | Mappings of claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>string</code> | Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem">discoveryCaPem</a></code> | <code>string[]</code> | PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway">expirationLeeway</a></code> | <code>string</code> | Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert">jwksCaCert</a></code> | <code>string</code> | PEM encoded CA cert for use by the TLS client used to talk with the JWKS server. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | JSON Web Key Sets url for authenticating signatures. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys">jwtValidationPubKeys</a></code> | <code>string[]</code> | List of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings">listClaimMappings</a></code> | <code>{[ key: string ]: string}</code> | Mappings of list claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>string</code> | Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientAssertion">oidcClientAssertion</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | oidc_client_assertion block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId">oidcClientId</a></code> | <code>string</code> | The OAuth Client ID configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret">oidcClientSecret</a></code> | <code>string</code> | The OAuth Client Secret configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo">oidcDisableUserinfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | Nomad will not make a request to the identity provider to get OIDC UserInfo. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>string</code> | The OIDC Discovery URL, without any .well-known component (base path). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcEnablePkce">oidcEnablePkce</a></code> | <code>boolean \| cdktf.IResolvable</code> | Nomad include PKCE challenge in OIDC auth requests. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes">oidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs">signingAlgs</a></code> | <code>string[]</code> | A list of supported signing algorithms. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.verboseLogging">verboseLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable OIDC verbose logging on the Nomad server. |

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

A list of allowed values that can be used for the redirect URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}

---

##### `boundAudiences`<sup>Optional</sup> <a name="boundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences"></a>

```typescript
public readonly boundAudiences: string[];
```

- *Type:* string[]

List of auth claims that are valid for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}

---

##### `boundIssuer`<sup>Optional</sup> <a name="boundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer"></a>

```typescript
public readonly boundIssuer: string[];
```

- *Type:* string[]

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#bound_issuer AclAuthMethod#bound_issuer}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mappings of claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: string;
```

- *Type:* string

Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#clock_skew_leeway AclAuthMethod#clock_skew_leeway}

---

##### `discoveryCaPem`<sup>Optional</sup> <a name="discoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem"></a>

```typescript
public readonly discoveryCaPem: string[];
```

- *Type:* string[]

PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}

---

##### `expirationLeeway`<sup>Optional</sup> <a name="expirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway"></a>

```typescript
public readonly expirationLeeway: string;
```

- *Type:* string

Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#expiration_leeway AclAuthMethod#expiration_leeway}

---

##### `jwksCaCert`<sup>Optional</sup> <a name="jwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert"></a>

```typescript
public readonly jwksCaCert: string;
```

- *Type:* string

PEM encoded CA cert for use by the TLS client used to talk with the JWKS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#jwks_ca_cert AclAuthMethod#jwks_ca_cert}

---

##### `jwksUrl`<sup>Optional</sup> <a name="jwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

JSON Web Key Sets url for authenticating signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#jwks_url AclAuthMethod#jwks_url}

---

##### `jwtValidationPubKeys`<sup>Optional</sup> <a name="jwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys"></a>

```typescript
public readonly jwtValidationPubKeys: string[];
```

- *Type:* string[]

List of PEM-encoded public keys to use to authenticate signatures locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#jwt_validation_pub_keys AclAuthMethod#jwt_validation_pub_keys}

---

##### `listClaimMappings`<sup>Optional</sup> <a name="listClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings"></a>

```typescript
public readonly listClaimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mappings of list claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}

---

##### `notBeforeLeeway`<sup>Optional</sup> <a name="notBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway"></a>

```typescript
public readonly notBeforeLeeway: string;
```

- *Type:* string

Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#not_before_leeway AclAuthMethod#not_before_leeway}

---

##### `oidcClientAssertion`<sup>Optional</sup> <a name="oidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientAssertion"></a>

```typescript
public readonly oidcClientAssertion: AclAuthMethodConfigOidcClientAssertion;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

oidc_client_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_client_assertion AclAuthMethod#oidc_client_assertion}

---

##### `oidcClientId`<sup>Optional</sup> <a name="oidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId"></a>

```typescript
public readonly oidcClientId: string;
```

- *Type:* string

The OAuth Client ID configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}

---

##### `oidcClientSecret`<sup>Optional</sup> <a name="oidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret"></a>

```typescript
public readonly oidcClientSecret: string;
```

- *Type:* string

The OAuth Client Secret configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}

---

##### `oidcDisableUserinfo`<sup>Optional</sup> <a name="oidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo"></a>

```typescript
public readonly oidcDisableUserinfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Nomad will not make a request to the identity provider to get OIDC UserInfo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_disable_userinfo AclAuthMethod#oidc_disable_userinfo}

---

##### `oidcDiscoveryUrl`<sup>Optional</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl"></a>

```typescript
public readonly oidcDiscoveryUrl: string;
```

- *Type:* string

The OIDC Discovery URL, without any .well-known component (base path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}

---

##### `oidcEnablePkce`<sup>Optional</sup> <a name="oidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcEnablePkce"></a>

```typescript
public readonly oidcEnablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Nomad include PKCE challenge in OIDC auth requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_enable_pkce AclAuthMethod#oidc_enable_pkce}

---

##### `oidcScopes`<sup>Optional</sup> <a name="oidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes"></a>

```typescript
public readonly oidcScopes: string[];
```

- *Type:* string[]

List of OIDC scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}

---

##### `signingAlgs`<sup>Optional</sup> <a name="signingAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs"></a>

```typescript
public readonly signingAlgs: string[];
```

- *Type:* string[]

A list of supported signing algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}

---

##### `verboseLogging`<sup>Optional</sup> <a name="verboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.verboseLogging"></a>

```typescript
public readonly verboseLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable OIDC verbose logging on the Nomad server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#verbose_logging AclAuthMethod#verbose_logging}

---

### AclAuthMethodConfigOidcClientAssertion <a name="AclAuthMethodConfigOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

const aclAuthMethodConfigOidcClientAssertion: aclAuthMethod.AclAuthMethodConfigOidcClientAssertion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keySource">keySource</a></code> | <code>string</code> | The source of the key Nomad will use to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.audience">audience</a></code> | <code>string[]</code> | List of audiences to accept the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.extraHeaders">extraHeaders</a></code> | <code>{[ key: string ]: string}</code> | Additional headers to include on the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | Algorithm of the key used to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.privateKey">privateKey</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | private_key block. |

---

##### `keySource`<sup>Required</sup> <a name="keySource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keySource"></a>

```typescript
public readonly keySource: string;
```

- *Type:* string

The source of the key Nomad will use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#key_source AclAuthMethod#key_source}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

List of audiences to accept the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#audience AclAuthMethod#audience}

---

##### `extraHeaders`<sup>Optional</sup> <a name="extraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.extraHeaders"></a>

```typescript
public readonly extraHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional headers to include on the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#extra_headers AclAuthMethod#extra_headers}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

Algorithm of the key used to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#key_algorithm AclAuthMethod#key_algorithm}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion.property.privateKey"></a>

```typescript
public readonly privateKey: AclAuthMethodConfigOidcClientAssertionPrivateKey;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

private_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#private_key AclAuthMethod#private_key}

---

### AclAuthMethodConfigOidcClientAssertionPrivateKey <a name="AclAuthMethodConfigOidcClientAssertionPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

const aclAuthMethodConfigOidcClientAssertionPrivateKey: aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyId">keyId</a></code> | <code>string</code> | Specific 'kid' header to set on the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyIdHeader">keyIdHeader</a></code> | <code>string</code> | Name of the header the IDP will use to find the cert to verify the JWT signature. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCert">pemCert</a></code> | <code>string</code> | An x509 certificate PEM to derive a key ID header. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCertFile">pemCertFile</a></code> | <code>string</code> | Path to an x509 certificate PEM on Nomad servers to derive a key ID header. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKey">pemKey</a></code> | <code>string</code> | RSA private key PEM to use to sign the JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKeyFile">pemKeyFile</a></code> | <code>string</code> | Path to an RSA private key PEM on Nomad servers to use to sign the JWT. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Specific 'kid' header to set on the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#key_id AclAuthMethod#key_id}

---

##### `keyIdHeader`<sup>Optional</sup> <a name="keyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.keyIdHeader"></a>

```typescript
public readonly keyIdHeader: string;
```

- *Type:* string

Name of the header the IDP will use to find the cert to verify the JWT signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#key_id_header AclAuthMethod#key_id_header}

---

##### `pemCert`<sup>Optional</sup> <a name="pemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCert"></a>

```typescript
public readonly pemCert: string;
```

- *Type:* string

An x509 certificate PEM to derive a key ID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#pem_cert AclAuthMethod#pem_cert}

---

##### `pemCertFile`<sup>Optional</sup> <a name="pemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemCertFile"></a>

```typescript
public readonly pemCertFile: string;
```

- *Type:* string

Path to an x509 certificate PEM on Nomad servers to derive a key ID header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#pem_cert_file AclAuthMethod#pem_cert_file}

---

##### `pemKey`<sup>Optional</sup> <a name="pemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKey"></a>

```typescript
public readonly pemKey: string;
```

- *Type:* string

RSA private key PEM to use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#pem_key AclAuthMethod#pem_key}

---

##### `pemKeyFile`<sup>Optional</sup> <a name="pemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey.property.pemKeyFile"></a>

```typescript
public readonly pemKeyFile: string;
```

- *Type:* string

Path to an RSA private key PEM on Nomad servers to use to sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_auth_method#pem_key_file AclAuthMethod#pem_key_file}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodConfigAOutputReference <a name="AclAuthMethodConfigAOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

new aclAuthMethod.AclAuthMethodConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion">putOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris">resetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences">resetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer">resetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings">resetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway">resetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem">resetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway">resetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert">resetJwksCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl">resetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys">resetJwtValidationPubKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings">resetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway">resetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientAssertion">resetOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId">resetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret">resetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo">resetOidcDisableUserinfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl">resetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcEnablePkce">resetOidcEnablePkce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes">resetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs">resetSigningAlgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetVerboseLogging">resetVerboseLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOidcClientAssertion` <a name="putOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion"></a>

```typescript
public putOidcClientAssertion(value: AclAuthMethodConfigOidcClientAssertion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.putOidcClientAssertion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---

##### `resetAllowedRedirectUris` <a name="resetAllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris"></a>

```typescript
public resetAllowedRedirectUris(): void
```

##### `resetBoundAudiences` <a name="resetBoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences"></a>

```typescript
public resetBoundAudiences(): void
```

##### `resetBoundIssuer` <a name="resetBoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer"></a>

```typescript
public resetBoundIssuer(): void
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings"></a>

```typescript
public resetClaimMappings(): void
```

##### `resetClockSkewLeeway` <a name="resetClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway"></a>

```typescript
public resetClockSkewLeeway(): void
```

##### `resetDiscoveryCaPem` <a name="resetDiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem"></a>

```typescript
public resetDiscoveryCaPem(): void
```

##### `resetExpirationLeeway` <a name="resetExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway"></a>

```typescript
public resetExpirationLeeway(): void
```

##### `resetJwksCaCert` <a name="resetJwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert"></a>

```typescript
public resetJwksCaCert(): void
```

##### `resetJwksUrl` <a name="resetJwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl"></a>

```typescript
public resetJwksUrl(): void
```

##### `resetJwtValidationPubKeys` <a name="resetJwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys"></a>

```typescript
public resetJwtValidationPubKeys(): void
```

##### `resetListClaimMappings` <a name="resetListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings"></a>

```typescript
public resetListClaimMappings(): void
```

##### `resetNotBeforeLeeway` <a name="resetNotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway"></a>

```typescript
public resetNotBeforeLeeway(): void
```

##### `resetOidcClientAssertion` <a name="resetOidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientAssertion"></a>

```typescript
public resetOidcClientAssertion(): void
```

##### `resetOidcClientId` <a name="resetOidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId"></a>

```typescript
public resetOidcClientId(): void
```

##### `resetOidcClientSecret` <a name="resetOidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret"></a>

```typescript
public resetOidcClientSecret(): void
```

##### `resetOidcDisableUserinfo` <a name="resetOidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo"></a>

```typescript
public resetOidcDisableUserinfo(): void
```

##### `resetOidcDiscoveryUrl` <a name="resetOidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl"></a>

```typescript
public resetOidcDiscoveryUrl(): void
```

##### `resetOidcEnablePkce` <a name="resetOidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcEnablePkce"></a>

```typescript
public resetOidcEnablePkce(): void
```

##### `resetOidcScopes` <a name="resetOidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes"></a>

```typescript
public resetOidcScopes(): void
```

##### `resetSigningAlgs` <a name="resetSigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs"></a>

```typescript
public resetSigningAlgs(): void
```

##### `resetVerboseLogging` <a name="resetVerboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetVerboseLogging"></a>

```typescript
public resetVerboseLogging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertion">oidcClientAssertion</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference">AclAuthMethodConfigOidcClientAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput">boundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput">boundIssuerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput">claimMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput">clockSkewLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput">discoveryCaPemInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput">expirationLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput">jwksCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput">jwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput">jwtValidationPubKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput">listClaimMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput">notBeforeLeewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertionInput">oidcClientAssertionInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput">oidcClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput">oidcClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput">oidcDisableUserinfoInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput">oidcDiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkceInput">oidcEnablePkceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput">oidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput">signingAlgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLoggingInput">verboseLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences">boundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer">boundIssuer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem">discoveryCaPem</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway">expirationLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert">jwksCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl">jwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys">jwtValidationPubKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings">listClaimMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId">oidcClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret">oidcClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo">oidcDisableUserinfo</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkce">oidcEnablePkce</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes">oidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs">signingAlgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLogging">verboseLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oidcClientAssertion`<sup>Required</sup> <a name="oidcClientAssertion" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertion"></a>

```typescript
public readonly oidcClientAssertion: AclAuthMethodConfigOidcClientAssertionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference">AclAuthMethodConfigOidcClientAssertionOutputReference</a>

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput"></a>

```typescript
public readonly allowedRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `boundAudiencesInput`<sup>Optional</sup> <a name="boundAudiencesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput"></a>

```typescript
public readonly boundAudiencesInput: string[];
```

- *Type:* string[]

---

##### `boundIssuerInput`<sup>Optional</sup> <a name="boundIssuerInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput"></a>

```typescript
public readonly boundIssuerInput: string[];
```

- *Type:* string[]

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput"></a>

```typescript
public readonly claimMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clockSkewLeewayInput`<sup>Optional</sup> <a name="clockSkewLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput"></a>

```typescript
public readonly clockSkewLeewayInput: string;
```

- *Type:* string

---

##### `discoveryCaPemInput`<sup>Optional</sup> <a name="discoveryCaPemInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput"></a>

```typescript
public readonly discoveryCaPemInput: string[];
```

- *Type:* string[]

---

##### `expirationLeewayInput`<sup>Optional</sup> <a name="expirationLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput"></a>

```typescript
public readonly expirationLeewayInput: string;
```

- *Type:* string

---

##### `jwksCaCertInput`<sup>Optional</sup> <a name="jwksCaCertInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput"></a>

```typescript
public readonly jwksCaCertInput: string;
```

- *Type:* string

---

##### `jwksUrlInput`<sup>Optional</sup> <a name="jwksUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput"></a>

```typescript
public readonly jwksUrlInput: string;
```

- *Type:* string

---

##### `jwtValidationPubKeysInput`<sup>Optional</sup> <a name="jwtValidationPubKeysInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput"></a>

```typescript
public readonly jwtValidationPubKeysInput: string[];
```

- *Type:* string[]

---

##### `listClaimMappingsInput`<sup>Optional</sup> <a name="listClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput"></a>

```typescript
public readonly listClaimMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `notBeforeLeewayInput`<sup>Optional</sup> <a name="notBeforeLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput"></a>

```typescript
public readonly notBeforeLeewayInput: string;
```

- *Type:* string

---

##### `oidcClientAssertionInput`<sup>Optional</sup> <a name="oidcClientAssertionInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientAssertionInput"></a>

```typescript
public readonly oidcClientAssertionInput: AclAuthMethodConfigOidcClientAssertion;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---

##### `oidcClientIdInput`<sup>Optional</sup> <a name="oidcClientIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput"></a>

```typescript
public readonly oidcClientIdInput: string;
```

- *Type:* string

---

##### `oidcClientSecretInput`<sup>Optional</sup> <a name="oidcClientSecretInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput"></a>

```typescript
public readonly oidcClientSecretInput: string;
```

- *Type:* string

---

##### `oidcDisableUserinfoInput`<sup>Optional</sup> <a name="oidcDisableUserinfoInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput"></a>

```typescript
public readonly oidcDisableUserinfoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oidcDiscoveryUrlInput`<sup>Optional</sup> <a name="oidcDiscoveryUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput"></a>

```typescript
public readonly oidcDiscoveryUrlInput: string;
```

- *Type:* string

---

##### `oidcEnablePkceInput`<sup>Optional</sup> <a name="oidcEnablePkceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkceInput"></a>

```typescript
public readonly oidcEnablePkceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oidcScopesInput`<sup>Optional</sup> <a name="oidcScopesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput"></a>

```typescript
public readonly oidcScopesInput: string[];
```

- *Type:* string[]

---

##### `signingAlgsInput`<sup>Optional</sup> <a name="signingAlgsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput"></a>

```typescript
public readonly signingAlgsInput: string[];
```

- *Type:* string[]

---

##### `verboseLoggingInput`<sup>Optional</sup> <a name="verboseLoggingInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLoggingInput"></a>

```typescript
public readonly verboseLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

---

##### `boundAudiences`<sup>Required</sup> <a name="boundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences"></a>

```typescript
public readonly boundAudiences: string[];
```

- *Type:* string[]

---

##### `boundIssuer`<sup>Required</sup> <a name="boundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer"></a>

```typescript
public readonly boundIssuer: string[];
```

- *Type:* string[]

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clockSkewLeeway`<sup>Required</sup> <a name="clockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: string;
```

- *Type:* string

---

##### `discoveryCaPem`<sup>Required</sup> <a name="discoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem"></a>

```typescript
public readonly discoveryCaPem: string[];
```

- *Type:* string[]

---

##### `expirationLeeway`<sup>Required</sup> <a name="expirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway"></a>

```typescript
public readonly expirationLeeway: string;
```

- *Type:* string

---

##### `jwksCaCert`<sup>Required</sup> <a name="jwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert"></a>

```typescript
public readonly jwksCaCert: string;
```

- *Type:* string

---

##### `jwksUrl`<sup>Required</sup> <a name="jwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl"></a>

```typescript
public readonly jwksUrl: string;
```

- *Type:* string

---

##### `jwtValidationPubKeys`<sup>Required</sup> <a name="jwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys"></a>

```typescript
public readonly jwtValidationPubKeys: string[];
```

- *Type:* string[]

---

##### `listClaimMappings`<sup>Required</sup> <a name="listClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings"></a>

```typescript
public readonly listClaimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `notBeforeLeeway`<sup>Required</sup> <a name="notBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway"></a>

```typescript
public readonly notBeforeLeeway: string;
```

- *Type:* string

---

##### `oidcClientId`<sup>Required</sup> <a name="oidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId"></a>

```typescript
public readonly oidcClientId: string;
```

- *Type:* string

---

##### `oidcClientSecret`<sup>Required</sup> <a name="oidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret"></a>

```typescript
public readonly oidcClientSecret: string;
```

- *Type:* string

---

##### `oidcDisableUserinfo`<sup>Required</sup> <a name="oidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo"></a>

```typescript
public readonly oidcDisableUserinfo: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oidcDiscoveryUrl`<sup>Required</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl"></a>

```typescript
public readonly oidcDiscoveryUrl: string;
```

- *Type:* string

---

##### `oidcEnablePkce`<sup>Required</sup> <a name="oidcEnablePkce" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcEnablePkce"></a>

```typescript
public readonly oidcEnablePkce: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oidcScopes`<sup>Required</sup> <a name="oidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes"></a>

```typescript
public readonly oidcScopes: string[];
```

- *Type:* string[]

---

##### `signingAlgs`<sup>Required</sup> <a name="signingAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs"></a>

```typescript
public readonly signingAlgs: string[];
```

- *Type:* string[]

---

##### `verboseLogging`<sup>Required</sup> <a name="verboseLogging" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.verboseLogging"></a>

```typescript
public readonly verboseLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclAuthMethodConfigA;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---


### AclAuthMethodConfigOidcClientAssertionOutputReference <a name="AclAuthMethodConfigOidcClientAssertionOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

new aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey">putPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetExtraHeaders">resetExtraHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateKey` <a name="putPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey"></a>

```typescript
public putPrivateKey(value: AclAuthMethodConfigOidcClientAssertionPrivateKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.putPrivateKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetAudience"></a>

```typescript
public resetAudience(): void
```

##### `resetExtraHeaders` <a name="resetExtraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetExtraHeaders"></a>

```typescript
public resetExtraHeaders(): void
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKey">privateKey</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference">AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audienceInput">audienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeadersInput">extraHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySourceInput">keySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audience">audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeaders">extraHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySource">keySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference">AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference</a>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string[];
```

- *Type:* string[]

---

##### `extraHeadersInput`<sup>Optional</sup> <a name="extraHeadersInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeadersInput"></a>

```typescript
public readonly extraHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* string

---

##### `keySourceInput`<sup>Optional</sup> <a name="keySourceInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySourceInput"></a>

```typescript
public readonly keySourceInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: AclAuthMethodConfigOidcClientAssertionPrivateKey;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

---

##### `extraHeaders`<sup>Required</sup> <a name="extraHeaders" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.extraHeaders"></a>

```typescript
public readonly extraHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `keySource`<sup>Required</sup> <a name="keySource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.keySource"></a>

```typescript
public readonly keySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclAuthMethodConfigOidcClientAssertion;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertion">AclAuthMethodConfigOidcClientAssertion</a>

---


### AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference <a name="AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer"></a>

```typescript
import { aclAuthMethod } from '@cdktf/provider-nomad'

new aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyIdHeader">resetKeyIdHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCert">resetPemCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCertFile">resetPemCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKey">resetPemKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKeyFile">resetPemKeyFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyIdHeader` <a name="resetKeyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetKeyIdHeader"></a>

```typescript
public resetKeyIdHeader(): void
```

##### `resetPemCert` <a name="resetPemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCert"></a>

```typescript
public resetPemCert(): void
```

##### `resetPemCertFile` <a name="resetPemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemCertFile"></a>

```typescript
public resetPemCertFile(): void
```

##### `resetPemKey` <a name="resetPemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKey"></a>

```typescript
public resetPemKey(): void
```

##### `resetPemKeyFile` <a name="resetPemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.resetPemKeyFile"></a>

```typescript
public resetPemKeyFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeaderInput">keyIdHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFileInput">pemCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertInput">pemCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFileInput">pemKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyInput">pemKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeader">keyIdHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCert">pemCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFile">pemCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKey">pemKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFile">pemKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdHeaderInput`<sup>Optional</sup> <a name="keyIdHeaderInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeaderInput"></a>

```typescript
public readonly keyIdHeaderInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `pemCertFileInput`<sup>Optional</sup> <a name="pemCertFileInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFileInput"></a>

```typescript
public readonly pemCertFileInput: string;
```

- *Type:* string

---

##### `pemCertInput`<sup>Optional</sup> <a name="pemCertInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertInput"></a>

```typescript
public readonly pemCertInput: string;
```

- *Type:* string

---

##### `pemKeyFileInput`<sup>Optional</sup> <a name="pemKeyFileInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFileInput"></a>

```typescript
public readonly pemKeyFileInput: string;
```

- *Type:* string

---

##### `pemKeyInput`<sup>Optional</sup> <a name="pemKeyInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyInput"></a>

```typescript
public readonly pemKeyInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyIdHeader`<sup>Required</sup> <a name="keyIdHeader" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.keyIdHeader"></a>

```typescript
public readonly keyIdHeader: string;
```

- *Type:* string

---

##### `pemCert`<sup>Required</sup> <a name="pemCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCert"></a>

```typescript
public readonly pemCert: string;
```

- *Type:* string

---

##### `pemCertFile`<sup>Required</sup> <a name="pemCertFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemCertFile"></a>

```typescript
public readonly pemCertFile: string;
```

- *Type:* string

---

##### `pemKey`<sup>Required</sup> <a name="pemKey" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKey"></a>

```typescript
public readonly pemKey: string;
```

- *Type:* string

---

##### `pemKeyFile`<sup>Required</sup> <a name="pemKeyFile" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.pemKeyFile"></a>

```typescript
public readonly pemKeyFile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AclAuthMethodConfigOidcClientAssertionPrivateKey;
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigOidcClientAssertionPrivateKey">AclAuthMethodConfigOidcClientAssertionPrivateKey</a>

---



