# `namespace` Submodule <a name="`namespace` Submodule" id="@cdktf/provider-nomad.namespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Namespace <a name="Namespace" id="@cdktf/provider-nomad.namespace.Namespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/nomad/r/namespace nomad_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.Namespace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.Namespace;

Namespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .capabilities(NamespaceCapabilities)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .quota(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.quota">quota</a></code> | <code>java.lang.String</code> | Quota to set for this namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#name Namespace#name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#capabilities Namespace#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#description Namespace#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.meta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#meta Namespace#meta}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.quota"></a>

- *Type:* java.lang.String

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#quota Namespace#quota}

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
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.namespace.Namespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.namespace.Namespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.namespace.Namespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.namespace.Namespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities"></a>

```java
public void putCapabilities(NamespaceCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-nomad.namespace.Namespace.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-nomad.namespace.Namespace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.namespace.Namespace.resetId"></a>

```java
public void resetId()
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-nomad.namespace.Namespace.resetMeta"></a>

```java
public void resetMeta()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-nomad.namespace.Namespace.resetQuota"></a>

```java
public void resetQuota()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.Namespace;

Namespace.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.Namespace;

Namespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.Namespace;

Namespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.metaInput">metaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quotaInput">quotaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quota">quota</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.namespace.Namespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.Namespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.Namespace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.Namespace.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.namespace.Namespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.namespace.Namespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.Namespace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilities"></a>

```java
public NamespaceCapabilitiesOutputReference getCapabilities();
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput"></a>

```java
public NamespaceCapabilities getCapabilitiesInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.namespace.Namespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.metaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.namespace.Namespace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-nomad.namespace.Namespace.property.quotaInput"></a>

```java
public java.lang.String getQuotaInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.namespace.Namespace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.Namespace.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.Namespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.Namespace.property.quota"></a>

```java
public java.lang.String getQuota();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NamespaceCapabilities <a name="NamespaceCapabilities" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.NamespaceCapabilities;

NamespaceCapabilities.builder()
//  .disabledTaskDrivers(java.util.List<java.lang.String>)
//  .enabledTaskDrivers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers">disabledTaskDrivers</a></code> | <code>java.util.List<java.lang.String></code> | Disabled task drivers for the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers">enabledTaskDrivers</a></code> | <code>java.util.List<java.lang.String></code> | Enabled task drivers for the namespace. |

---

##### `disabledTaskDrivers`<sup>Optional</sup> <a name="disabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers"></a>

```java
public java.util.List<java.lang.String> getDisabledTaskDrivers();
```

- *Type:* java.util.List<java.lang.String>

Disabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#disabled_task_drivers Namespace#disabled_task_drivers}

---

##### `enabledTaskDrivers`<sup>Optional</sup> <a name="enabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers"></a>

```java
public java.util.List<java.lang.String> getEnabledTaskDrivers();
```

- *Type:* java.util.List<java.lang.String>

Enabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#enabled_task_drivers Namespace#enabled_task_drivers}

---

### NamespaceConfig <a name="NamespaceConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.NamespaceConfig;

NamespaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .capabilities(NamespaceCapabilities)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .quota(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota">quota</a></code> | <code>java.lang.String</code> | Quota to set for this namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#name Namespace#name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities"></a>

```java
public NamespaceCapabilities getCapabilities();
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#capabilities Namespace#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#description Namespace#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#meta Namespace#meta}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota"></a>

```java
public java.lang.String getQuota();
```

- *Type:* java.lang.String

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#quota Namespace#quota}

---

## Classes <a name="Classes" id="Classes"></a>

### NamespaceCapabilitiesOutputReference <a name="NamespaceCapabilitiesOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.namespace.NamespaceCapabilitiesOutputReference;

new NamespaceCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledTaskDrivers` <a name="resetDisabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers"></a>

```java
public void resetDisabledTaskDrivers()
```

##### `resetEnabledTaskDrivers` <a name="resetEnabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers"></a>

```java
public void resetEnabledTaskDrivers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput">disabledTaskDriversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput">enabledTaskDriversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers">disabledTaskDrivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers">enabledTaskDrivers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledTaskDriversInput`<sup>Optional</sup> <a name="disabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput"></a>

```java
public java.util.List<java.lang.String> getDisabledTaskDriversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledTaskDriversInput`<sup>Optional</sup> <a name="enabledTaskDriversInput" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput"></a>

```java
public java.util.List<java.lang.String> getEnabledTaskDriversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabledTaskDrivers`<sup>Required</sup> <a name="disabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers"></a>

```java
public java.util.List<java.lang.String> getDisabledTaskDrivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledTaskDrivers`<sup>Required</sup> <a name="enabledTaskDrivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers"></a>

```java
public java.util.List<java.lang.String> getEnabledTaskDrivers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue"></a>

```java
public NamespaceCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---



