# `quotaSpecification` Submodule <a name="`quotaSpecification` Submodule" id="@cdktf/provider-nomad.quotaSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaSpecification <a name="QuotaSpecification" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification nomad_quota_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecification;

QuotaSpecification.Builder.create(Construct scope, java.lang.String id)
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
    .limits(IResolvable)
    .limits(java.util.List<QuotaSpecificationLimits>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.limits">limits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>></code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#id QuotaSpecification#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.limits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#limits QuotaSpecification#limits}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#name QuotaSpecification#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#description QuotaSpecification#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLimits` <a name="putLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits"></a>

```java
public void putLimits(IResolvable OR java.util.List<QuotaSpecificationLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecification;

QuotaSpecification.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecification;

QuotaSpecification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecification;

QuotaSpecification.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecification;

QuotaSpecification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuotaSpecification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuotaSpecification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuotaSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuotaSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput">limitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits"></a>

```java
public QuotaSpecificationLimitsList getLimits();
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput"></a>

```java
public java.lang.Object getLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaSpecificationConfig <a name="QuotaSpecificationConfig" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationConfig;

QuotaSpecificationConfig.builder()
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
    .limits(IResolvable)
    .limits(java.util.List<QuotaSpecificationLimits>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits">limits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>></code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#id QuotaSpecification#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits"></a>

```java
public java.lang.Object getLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#limits QuotaSpecification#limits}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#name QuotaSpecification#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#description QuotaSpecification#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### QuotaSpecificationLimits <a name="QuotaSpecificationLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationLimits;

QuotaSpecificationLimits.builder()
    .region(java.lang.String)
    .regionLimit(QuotaSpecificationLimitsRegionLimit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region">region</a></code> | <code>java.lang.String</code> | Region in which this limit has affect. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit">regionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | region_limit block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region in which this limit has affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#region QuotaSpecification#region}

---

##### `regionLimit`<sup>Required</sup> <a name="regionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit"></a>

```java
public QuotaSpecificationLimitsRegionLimit getRegionLimit();
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

region_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#region_limit QuotaSpecification#region_limit}

---

### QuotaSpecificationLimitsRegionLimit <a name="QuotaSpecificationLimitsRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationLimitsRegionLimit;

QuotaSpecificationLimitsRegionLimit.builder()
//  .cpu(java.lang.Number)
//  .memoryMb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb">memoryMb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}.

---

##### `memoryMb`<sup>Optional</sup> <a name="memoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb"></a>

```java
public java.lang.Number getMemoryMb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuotaSpecificationLimitsList <a name="QuotaSpecificationLimitsList" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationLimitsList;

new QuotaSpecificationLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get"></a>

```java
public QuotaSpecificationLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>>

---


### QuotaSpecificationLimitsOutputReference <a name="QuotaSpecificationLimitsOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationLimitsOutputReference;

new QuotaSpecificationLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit">putRegionLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRegionLimit` <a name="putRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit"></a>

```java
public void putRegionLimit(QuotaSpecificationLimitsRegionLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit">regionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput">regionLimitInput</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionLimit`<sup>Required</sup> <a name="regionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit"></a>

```java
public QuotaSpecificationLimitsRegionLimitOutputReference getRegionLimit();
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `regionLimitInput`<sup>Optional</sup> <a name="regionLimitInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput"></a>

```java
public QuotaSpecificationLimitsRegionLimit getRegionLimitInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>

---


### QuotaSpecificationLimitsRegionLimitOutputReference <a name="QuotaSpecificationLimitsRegionLimitOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.quota_specification.QuotaSpecificationLimitsRegionLimitOutputReference;

new QuotaSpecificationLimitsRegionLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb">resetMemoryMb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemoryMb` <a name="resetMemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb"></a>

```java
public void resetMemoryMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput">memoryMbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu">cpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb">memoryMb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput"></a>

```java
public java.lang.Number getCpuInput();
```

- *Type:* java.lang.Number

---

##### `memoryMbInput`<sup>Optional</sup> <a name="memoryMbInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput"></a>

```java
public java.lang.Number getMemoryMbInput();
```

- *Type:* java.lang.Number

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu"></a>

```java
public java.lang.Number getCpu();
```

- *Type:* java.lang.Number

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb"></a>

```java
public java.lang.Number getMemoryMb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue"></a>

```java
public QuotaSpecificationLimitsRegionLimit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---



