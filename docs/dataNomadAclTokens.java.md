# `dataNomadAclTokens` Submodule <a name="`dataNomadAclTokens` Submodule" id="@cdktf/provider-nomad.dataNomadAclTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadAclTokens <a name="DataNomadAclTokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens nomad_acl_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokens;

DataNomadAclTokens.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetId"></a>

```java
public void resetId()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetPrefix"></a>

```java
public void resetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadAclTokens resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokens;

DataNomadAclTokens.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokens;

DataNomadAclTokens.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokens;

DataNomadAclTokens.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokens;

DataNomadAclTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNomadAclTokens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataNomadAclTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNomadAclTokens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNomadAclTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadAclTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.aclTokens">aclTokens</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList">DataNomadAclTokensAclTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aclTokens`<sup>Required</sup> <a name="aclTokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.aclTokens"></a>

```java
public DataNomadAclTokensAclTokensList getAclTokens();
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList">DataNomadAclTokensAclTokensList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadAclTokensAclTokens <a name="DataNomadAclTokensAclTokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokens;

DataNomadAclTokensAclTokens.builder()
    .build();
```


### DataNomadAclTokensAclTokensRoles <a name="DataNomadAclTokensAclTokensRoles" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokensRoles;

DataNomadAclTokensAclTokensRoles.builder()
    .build();
```


### DataNomadAclTokensConfig <a name="DataNomadAclTokensConfig" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensConfig;

DataNomadAclTokensConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataNomadAclTokensAclTokensList <a name="DataNomadAclTokensAclTokensList" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokensList;

new DataNomadAclTokensAclTokensList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get"></a>

```java
public DataNomadAclTokensAclTokensOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataNomadAclTokensAclTokensOutputReference <a name="DataNomadAclTokensAclTokensOutputReference" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokensOutputReference;

new DataNomadAclTokensAclTokensOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.accessorId">accessorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.global">global</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList">DataNomadAclTokensAclTokensRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens">DataNomadAclTokensAclTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.accessorId"></a>

```java
public java.lang.String getAccessorId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.global"></a>

```java
public IResolvable getGlobal();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.roles"></a>

```java
public DataNomadAclTokensAclTokensRolesList getRoles();
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList">DataNomadAclTokensAclTokensRolesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.internalValue"></a>

```java
public DataNomadAclTokensAclTokens getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens">DataNomadAclTokensAclTokens</a>

---


### DataNomadAclTokensAclTokensRolesList <a name="DataNomadAclTokensAclTokensRolesList" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokensRolesList;

new DataNomadAclTokensAclTokensRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get"></a>

```java
public DataNomadAclTokensAclTokensRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataNomadAclTokensAclTokensRolesOutputReference <a name="DataNomadAclTokensAclTokensRolesOutputReference" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.data_nomad_acl_tokens.DataNomadAclTokensAclTokensRolesOutputReference;

new DataNomadAclTokensAclTokensRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles">DataNomadAclTokensAclTokensRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.internalValue"></a>

```java
public DataNomadAclTokensAclTokensRoles getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles">DataNomadAclTokensAclTokensRoles</a>

---



