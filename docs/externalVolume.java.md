# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktf/provider-nomad.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktf/provider-nomad.externalVolume.ExternalVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/nomad/r/external_volume nomad_external_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolume;

ExternalVolume.Builder.create(Construct scope, java.lang.String id)
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
    .capability(IResolvable)
    .capability(java.util.List<ExternalVolumeCapability>)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .cloneId(java.lang.String)
//  .id(java.lang.String)
//  .mountOptions(ExternalVolumeMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .snapshotId(java.lang.String)
//  .topologyRequest(ExternalVolumeTopologyRequest)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.cloneId">cloneId</a></code> | <code>java.lang.String</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capability ExternalVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#name ExternalVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.pluginId"></a>

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#volume_id ExternalVolume#volume_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMax"></a>

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMin"></a>

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `cloneId`<sup>Optional</sup> <a name="cloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.cloneId"></a>

- *Type:* java.lang.String

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#clone_id ExternalVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#mount_options ExternalVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#namespace ExternalVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#parameters ExternalVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.secrets"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#secrets ExternalVolume#secrets}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology_request ExternalVolume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#type ExternalVolume#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest">putTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax">resetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin">resetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId">resetCloneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest">resetTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability"></a>

```java
public void putCapability(IResolvable OR java.util.List<ExternalVolumeCapability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions"></a>

```java
public void putMountOptions(ExternalVolumeMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `putTopologyRequest` <a name="putTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest"></a>

```java
public void putTopologyRequest(ExternalVolumeTopologyRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `resetCapacityMax` <a name="resetCapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax"></a>

```java
public void resetCapacityMax()
```

##### `resetCapacityMin` <a name="resetCapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin"></a>

```java
public void resetCapacityMin()
```

##### `resetCloneId` <a name="resetCloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId"></a>

```java
public void resetCloneId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId"></a>

```java
public void resetId()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTopologyRequest` <a name="resetTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest"></a>

```java
public void resetTopologyRequest()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolume;

ExternalVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolume;

ExternalVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolume;

ExternalVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired">controllerRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected">controllersExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy">controllersHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected">nodesExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy">nodesHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider">pluginProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion">pluginProviderVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable">schedulable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput">capabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput">capacityMaxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput">capacityMinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput">cloneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput">pluginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput">secretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput">topologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId">cloneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability"></a>

```java
public ExternalVolumeCapabilityList getCapability();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a>

---

##### `controllerRequired`<sup>Required</sup> <a name="controllerRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired"></a>

```java
public IResolvable getControllerRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `controllersExpected`<sup>Required</sup> <a name="controllersExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected"></a>

```java
public java.lang.Number getControllersExpected();
```

- *Type:* java.lang.Number

---

##### `controllersHealthy`<sup>Required</sup> <a name="controllersHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy"></a>

```java
public java.lang.Number getControllersHealthy();
```

- *Type:* java.lang.Number

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions"></a>

```java
public ExternalVolumeMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a>

---

##### `nodesExpected`<sup>Required</sup> <a name="nodesExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected"></a>

```java
public java.lang.Number getNodesExpected();
```

- *Type:* java.lang.Number

---

##### `nodesHealthy`<sup>Required</sup> <a name="nodesHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy"></a>

```java
public java.lang.Number getNodesHealthy();
```

- *Type:* java.lang.Number

---

##### `pluginProvider`<sup>Required</sup> <a name="pluginProvider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider"></a>

```java
public java.lang.String getPluginProvider();
```

- *Type:* java.lang.String

---

##### `pluginProviderVersion`<sup>Required</sup> <a name="pluginProviderVersion" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion"></a>

```java
public java.lang.String getPluginProviderVersion();
```

- *Type:* java.lang.String

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable"></a>

```java
public IResolvable getSchedulable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies"></a>

```java
public ExternalVolumeTopologiesList getTopologies();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a>

---

##### `topologyRequest`<sup>Required</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest"></a>

```java
public ExternalVolumeTopologyRequestOutputReference getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a>

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput"></a>

```java
public java.lang.Object getCapabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>>

---

##### `capacityMaxInput`<sup>Optional</sup> <a name="capacityMaxInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput"></a>

```java
public java.lang.String getCapacityMaxInput();
```

- *Type:* java.lang.String

---

##### `capacityMinInput`<sup>Optional</sup> <a name="capacityMinInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput"></a>

```java
public java.lang.String getCapacityMinInput();
```

- *Type:* java.lang.String

---

##### `cloneIdInput`<sup>Optional</sup> <a name="cloneIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput"></a>

```java
public java.lang.String getCloneIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput"></a>

```java
public ExternalVolumeMountOptions getMountOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput"></a>

```java
public java.lang.String getPluginIdInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `topologyRequestInput`<sup>Optional</sup> <a name="topologyRequestInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput"></a>

```java
public ExternalVolumeTopologyRequest getTopologyRequestInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

---

##### `cloneId`<sup>Required</sup> <a name="cloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId"></a>

```java
public java.lang.String getCloneId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeCapability <a name="ExternalVolumeCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeCapability;

ExternalVolumeCapability.builder()
    .accessMode(java.lang.String)
    .attachmentMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | The storage API that will be used by the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#access_mode ExternalVolume#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#attachment_mode ExternalVolume#attachment_mode}

---

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeConfig;

ExternalVolumeConfig.builder()
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
    .capability(IResolvable)
    .capability(java.util.List<ExternalVolumeCapability>)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .cloneId(java.lang.String)
//  .id(java.lang.String)
//  .mountOptions(ExternalVolumeMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .snapshotId(java.lang.String)
//  .topologyRequest(ExternalVolumeTopologyRequest)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId">cloneId</a></code> | <code>java.lang.String</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability"></a>

```java
public java.lang.Object getCapability();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capability ExternalVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#name ExternalVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#volume_id ExternalVolume#volume_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `cloneId`<sup>Optional</sup> <a name="cloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId"></a>

```java
public java.lang.String getCloneId();
```

- *Type:* java.lang.String

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#clone_id ExternalVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions"></a>

```java
public ExternalVolumeMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#mount_options ExternalVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#namespace ExternalVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#parameters ExternalVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#secrets ExternalVolume#secrets}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest"></a>

```java
public ExternalVolumeTopologyRequest getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology_request ExternalVolume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#type ExternalVolume#type}

---

### ExternalVolumeMountOptions <a name="ExternalVolumeMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeMountOptions;

ExternalVolumeMountOptions.builder()
//  .fsType(java.lang.String)
//  .mountFlags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType">fsType</a></code> | <code>java.lang.String</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | The flags passed to mount. |

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

The file system type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#fs_type ExternalVolume#fs_type}

---

##### `mountFlags`<sup>Optional</sup> <a name="mountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

The flags passed to mount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#mount_flags ExternalVolume#mount_flags}

---

### ExternalVolumeTopologies <a name="ExternalVolumeTopologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologies;

ExternalVolumeTopologies.builder()
    .build();
```


### ExternalVolumeTopologyRequest <a name="ExternalVolumeTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequest;

ExternalVolumeTopologyRequest.builder()
//  .preferred(ExternalVolumeTopologyRequestPreferred)
//  .required(ExternalVolumeTopologyRequestRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred"></a>

```java
public ExternalVolumeTopologyRequestPreferred getPreferred();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#preferred ExternalVolume#preferred}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required"></a>

```java
public ExternalVolumeTopologyRequestRequired getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#required ExternalVolume#required}

---

### ExternalVolumeTopologyRequestPreferred <a name="ExternalVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestPreferred;

ExternalVolumeTopologyRequestPreferred.builder()
    .topology(IResolvable)
    .topology(java.util.List<ExternalVolumeTopologyRequestPreferredTopology>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology">topology</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>></code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology"></a>

```java
public java.lang.Object getTopology();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>>

topology block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestPreferredTopology <a name="ExternalVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestPreferredTopology;

ExternalVolumeTopologyRequestPreferredTopology.builder()
    .segments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#segments ExternalVolume#segments}

---

### ExternalVolumeTopologyRequestRequired <a name="ExternalVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestRequired;

ExternalVolumeTopologyRequestRequired.builder()
    .topology(IResolvable)
    .topology(java.util.List<ExternalVolumeTopologyRequestRequiredTopology>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>></code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology"></a>

```java
public java.lang.Object getTopology();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>>

topology block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestRequiredTopology <a name="ExternalVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestRequiredTopology;

ExternalVolumeTopologyRequestRequiredTopology.builder()
    .segments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#segments ExternalVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeCapabilityList <a name="ExternalVolumeCapabilityList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeCapabilityList;

new ExternalVolumeCapabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get"></a>

```java
public ExternalVolumeCapabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>>

---


### ExternalVolumeCapabilityOutputReference <a name="ExternalVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeCapabilityOutputReference;

new ExternalVolumeCapabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```java
public java.lang.String getAttachmentModeInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a> OR com.hashicorp.cdktf.IResolvable

---


### ExternalVolumeMountOptionsOutputReference <a name="ExternalVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeMountOptionsOutputReference;

new ExternalVolumeMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags">resetMountFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetMountFlags` <a name="resetMountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags"></a>

```java
public void resetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput">mountFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `mountFlagsInput`<sup>Optional</sup> <a name="mountFlagsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```java
public java.util.List<java.lang.String> getMountFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `mountFlags`<sup>Required</sup> <a name="mountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue"></a>

```java
public ExternalVolumeMountOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---


### ExternalVolumeTopologiesList <a name="ExternalVolumeTopologiesList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologiesList;

new ExternalVolumeTopologiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get"></a>

```java
public ExternalVolumeTopologiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalVolumeTopologiesOutputReference <a name="ExternalVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologiesOutputReference;

new ExternalVolumeTopologiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments"></a>

```java
public StringMap getSegments();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue"></a>

```java
public ExternalVolumeTopologies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a>

---


### ExternalVolumeTopologyRequestOutputReference <a name="ExternalVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestOutputReference;

new ExternalVolumeTopologyRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred">putPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred">resetPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferred` <a name="putPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred"></a>

```java
public void putPreferred(ExternalVolumeTopologyRequestPreferred value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `putRequired` <a name="putRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired"></a>

```java
public void putRequired(ExternalVolumeTopologyRequestRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `resetPreferred` <a name="resetPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred"></a>

```java
public void resetPreferred()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput">preferredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred"></a>

```java
public ExternalVolumeTopologyRequestPreferredOutputReference getPreferred();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required"></a>

```java
public ExternalVolumeTopologyRequestRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a>

---

##### `preferredInput`<sup>Optional</sup> <a name="preferredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```java
public ExternalVolumeTopologyRequestPreferred getPreferredInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```java
public ExternalVolumeTopologyRequestRequired getRequiredInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue"></a>

```java
public ExternalVolumeTopologyRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---


### ExternalVolumeTopologyRequestPreferredOutputReference <a name="ExternalVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestPreferredOutputReference;

new ExternalVolumeTopologyRequestPreferredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```java
public void putTopology(IResolvable OR java.util.List<ExternalVolumeTopologyRequestPreferredTopology> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput">topologyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```java
public ExternalVolumeTopologyRequestPreferredTopologyList getTopology();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```java
public java.lang.Object getTopologyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```java
public ExternalVolumeTopologyRequestPreferred getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---


### ExternalVolumeTopologyRequestPreferredTopologyList <a name="ExternalVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestPreferredTopologyList;

new ExternalVolumeTopologyRequestPreferredTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get"></a>

```java
public ExternalVolumeTopologyRequestPreferredTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>>

---


### ExternalVolumeTopologyRequestPreferredTopologyOutputReference <a name="ExternalVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference;

new ExternalVolumeTopologyRequestPreferredTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegmentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a> OR com.hashicorp.cdktf.IResolvable

---


### ExternalVolumeTopologyRequestRequiredOutputReference <a name="ExternalVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestRequiredOutputReference;

new ExternalVolumeTopologyRequestRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```java
public void putTopology(IResolvable OR java.util.List<ExternalVolumeTopologyRequestRequiredTopology> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput">topologyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```java
public ExternalVolumeTopologyRequestRequiredTopologyList getTopology();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```java
public java.lang.Object getTopologyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```java
public ExternalVolumeTopologyRequestRequired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---


### ExternalVolumeTopologyRequestRequiredTopologyList <a name="ExternalVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestRequiredTopologyList;

new ExternalVolumeTopologyRequestRequiredTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get"></a>

```java
public ExternalVolumeTopologyRequestRequiredTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>>

---


### ExternalVolumeTopologyRequestRequiredTopologyOutputReference <a name="ExternalVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.external_volume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference;

new ExternalVolumeTopologyRequestRequiredTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegmentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a> OR com.hashicorp.cdktf.IResolvable

---



