# `dynamicHostVolumeRegistration` Submodule <a name="`dynamicHostVolumeRegistration` Submodule" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolumeRegistration <a name="DynamicHostVolumeRegistration" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration nomad_dynamic_host_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistration;

DynamicHostVolumeRegistration.Builder.create(Construct scope, java.lang.String id)
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
    .capability(IResolvable)
    .capability(java.util.List<DynamicHostVolumeRegistrationCapability>)
    .hostPath(java.lang.String)
    .name(java.lang.String)
    .nodeId(java.lang.String)
//  .capacity(java.lang.String)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.hostPath">hostPath</a></code> | <code>java.lang.String</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.nodeId">nodeId</a></code> | <code>java.lang.String</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capacity">capacity</a></code> | <code>java.lang.String</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.hostPath"></a>

- *Type:* java.lang.String

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.nodeId"></a>

- *Type:* java.lang.String

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capacity"></a>

- *Type:* java.lang.String

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability"></a>

```java
public void putCapability(IResolvable OR java.util.List<DynamicHostVolumeRegistrationCapability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>>

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity"></a>

```java
public void resetCapacity()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters"></a>

```java
public void resetParameters()
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

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistration;

DynamicHostVolumeRegistration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistration;

DynamicHostVolumeRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistration;

DynamicHostVolumeRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistration;

DynamicHostVolumeRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DynamicHostVolumeRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DynamicHostVolumeRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DynamicHostVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes">capacityBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes">capacityMinBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool">nodePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput">capabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput">capacityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput">hostPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput">nodeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity">capacity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability"></a>

```java
public DynamicHostVolumeRegistrationCapabilityList getCapability();
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a>

---

##### `capacityBytes`<sup>Required</sup> <a name="capacityBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes"></a>

```java
public java.lang.Number getCapacityBytes();
```

- *Type:* java.lang.Number

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes"></a>

```java
public java.lang.Number getCapacityMaxBytes();
```

- *Type:* java.lang.Number

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes"></a>

```java
public java.lang.Number getCapacityMinBytes();
```

- *Type:* java.lang.Number

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint"></a>

```java
public DynamicHostVolumeRegistrationConstraintList getConstraint();
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodePool`<sup>Required</sup> <a name="nodePool" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool"></a>

```java
public java.lang.String getNodePool();
```

- *Type:* java.lang.String

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput"></a>

```java
public java.lang.Object getCapabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput"></a>

```java
public java.lang.String getCapacityInput();
```

- *Type:* java.lang.String

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput"></a>

```java
public java.lang.String getHostPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nodeIdInput`<sup>Optional</sup> <a name="nodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput"></a>

```java
public java.lang.String getNodeIdInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity"></a>

```java
public java.lang.String getCapacity();
```

- *Type:* java.lang.String

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeRegistrationCapability <a name="DynamicHostVolumeRegistrationCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationCapability;

DynamicHostVolumeRegistrationCapability.builder()
    .accessMode(java.lang.String)
    .attachmentMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | An attachment mode available for the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#access_mode DynamicHostVolumeRegistration#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#attachment_mode DynamicHostVolumeRegistration#attachment_mode}

---

### DynamicHostVolumeRegistrationConfig <a name="DynamicHostVolumeRegistrationConfig" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationConfig;

DynamicHostVolumeRegistrationConfig.builder()
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
    .capability(IResolvable)
    .capability(java.util.List<DynamicHostVolumeRegistrationCapability>)
    .hostPath(java.lang.String)
    .name(java.lang.String)
    .nodeId(java.lang.String)
//  .capacity(java.lang.String)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity">capacity</a></code> | <code>java.lang.String</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability"></a>

```java
public java.lang.Object getCapability();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity"></a>

```java
public java.lang.String getCapacity();
```

- *Type:* java.lang.String

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

---

### DynamicHostVolumeRegistrationConstraint <a name="DynamicHostVolumeRegistrationConstraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationConstraint;

DynamicHostVolumeRegistrationConstraint.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeRegistrationCapabilityList <a name="DynamicHostVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationCapabilityList;

new DynamicHostVolumeRegistrationCapabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get"></a>

```java
public DynamicHostVolumeRegistrationCapabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>>

---


### DynamicHostVolumeRegistrationCapabilityOutputReference <a name="DynamicHostVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationCapabilityOutputReference;

new DynamicHostVolumeRegistrationCapabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```java
public java.lang.String getAttachmentModeInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>

---


### DynamicHostVolumeRegistrationConstraintList <a name="DynamicHostVolumeRegistrationConstraintList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationConstraintList;

new DynamicHostVolumeRegistrationConstraintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get"></a>

```java
public DynamicHostVolumeRegistrationConstraintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DynamicHostVolumeRegistrationConstraintOutputReference <a name="DynamicHostVolumeRegistrationConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.dynamic_host_volume_registration.DynamicHostVolumeRegistrationConstraintOutputReference;

new DynamicHostVolumeRegistrationConstraintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue"></a>

```java
public DynamicHostVolumeRegistrationConstraint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a>

---



