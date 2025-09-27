# `csiVolume` Submodule <a name="`csiVolume` Submodule" id="@cdktf/provider-nomad.csiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolume <a name="CsiVolume" id="@cdktf/provider-nomad.csiVolume.CsiVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume nomad_csi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolume;

CsiVolume.Builder.create(Construct scope, java.lang.String id)
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
    .capability(java.util.List<CsiVolumeCapability>)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .cloneId(java.lang.String)
//  .id(java.lang.String)
//  .mountOptions(CsiVolumeMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .snapshotId(java.lang.String)
//  .timeouts(CsiVolumeTimeouts)
//  .topologyRequest(CsiVolumeTopologyRequest)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.cloneId">cloneId</a></code> | <code>java.lang.String</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#id CsiVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | topology_request block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capability CsiVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#name CsiVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.pluginId"></a>

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#volume_id CsiVolume#volume_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMax"></a>

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMin"></a>

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}

---

##### `cloneId`<sup>Optional</sup> <a name="cloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.cloneId"></a>

- *Type:* java.lang.String

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#clone_id CsiVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#id CsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#mount_options CsiVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#namespace CsiVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#parameters CsiVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.secrets"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#secrets CsiVolume#secrets}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#timeouts CsiVolume#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#topology_request CsiVolume#topology_request}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest">putTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax">resetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin">resetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId">resetCloneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest">resetTopologyRequest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.csiVolume.CsiVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability"></a>

```java
public void putCapability(IResolvable OR java.util.List<CsiVolumeCapability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions"></a>

```java
public void putMountOptions(CsiVolumeMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts"></a>

```java
public void putTimeouts(CsiVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---

##### `putTopologyRequest` <a name="putTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest"></a>

```java
public void putTopologyRequest(CsiVolumeTopologyRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---

##### `resetCapacityMax` <a name="resetCapacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax"></a>

```java
public void resetCapacityMax()
```

##### `resetCapacityMin` <a name="resetCapacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin"></a>

```java
public void resetCapacityMin()
```

##### `resetCloneId` <a name="resetCloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId"></a>

```java
public void resetCloneId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetId"></a>

```java
public void resetId()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopologyRequest` <a name="resetTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest"></a>

```java
public void resetTopologyRequest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolume;

CsiVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolume;

CsiVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolume;

CsiVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolume;

CsiVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CsiVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CsiVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CsiVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinBytes">capacityMinBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.context">context</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired">controllerRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected">controllersExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy">controllersHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected">nodesExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy">nodesHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider">pluginProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion">pluginProviderVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable">schedulable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput">capabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput">capacityMaxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput">capacityMinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput">cloneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput">pluginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput">secretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput">topologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId">cloneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability"></a>

```java
public CsiVolumeCapabilityList getCapability();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxBytes"></a>

```java
public java.lang.Number getCapacityMaxBytes();
```

- *Type:* java.lang.Number

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinBytes"></a>

```java
public java.lang.Number getCapacityMinBytes();
```

- *Type:* java.lang.Number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.context"></a>

```java
public StringMap getContext();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `controllerRequired`<sup>Required</sup> <a name="controllerRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired"></a>

```java
public IResolvable getControllerRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `controllersExpected`<sup>Required</sup> <a name="controllersExpected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected"></a>

```java
public java.lang.Number getControllersExpected();
```

- *Type:* java.lang.Number

---

##### `controllersHealthy`<sup>Required</sup> <a name="controllersHealthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy"></a>

```java
public java.lang.Number getControllersHealthy();
```

- *Type:* java.lang.Number

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions"></a>

```java
public CsiVolumeMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a>

---

##### `nodesExpected`<sup>Required</sup> <a name="nodesExpected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected"></a>

```java
public java.lang.Number getNodesExpected();
```

- *Type:* java.lang.Number

---

##### `nodesHealthy`<sup>Required</sup> <a name="nodesHealthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy"></a>

```java
public java.lang.Number getNodesHealthy();
```

- *Type:* java.lang.Number

---

##### `pluginProvider`<sup>Required</sup> <a name="pluginProvider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider"></a>

```java
public java.lang.String getPluginProvider();
```

- *Type:* java.lang.String

---

##### `pluginProviderVersion`<sup>Required</sup> <a name="pluginProviderVersion" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion"></a>

```java
public java.lang.String getPluginProviderVersion();
```

- *Type:* java.lang.String

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable"></a>

```java
public IResolvable getSchedulable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts"></a>

```java
public CsiVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies"></a>

```java
public CsiVolumeTopologiesList getTopologies();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a>

---

##### `topologyRequest`<sup>Required</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest"></a>

```java
public CsiVolumeTopologyRequestOutputReference getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a>

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput"></a>

```java
public java.lang.Object getCapabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>>

---

##### `capacityMaxInput`<sup>Optional</sup> <a name="capacityMaxInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput"></a>

```java
public java.lang.String getCapacityMaxInput();
```

- *Type:* java.lang.String

---

##### `capacityMinInput`<sup>Optional</sup> <a name="capacityMinInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput"></a>

```java
public java.lang.String getCapacityMinInput();
```

- *Type:* java.lang.String

---

##### `cloneIdInput`<sup>Optional</sup> <a name="cloneIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput"></a>

```java
public java.lang.String getCloneIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput"></a>

```java
public CsiVolumeMountOptions getMountOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput"></a>

```java
public java.lang.String getPluginIdInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---

##### `topologyRequestInput`<sup>Optional</sup> <a name="topologyRequestInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput"></a>

```java
public CsiVolumeTopologyRequest getTopologyRequestInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

---

##### `cloneId`<sup>Required</sup> <a name="cloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId"></a>

```java
public java.lang.String getCloneId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeCapability <a name="CsiVolumeCapability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeCapability;

CsiVolumeCapability.builder()
    .accessMode(java.lang.String)
    .attachmentMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | The storage API that will be used by the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#access_mode CsiVolume#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#attachment_mode CsiVolume#attachment_mode}

---

### CsiVolumeConfig <a name="CsiVolumeConfig" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeConfig;

CsiVolumeConfig.builder()
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
    .capability(java.util.List<CsiVolumeCapability>)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .cloneId(java.lang.String)
//  .id(java.lang.String)
//  .mountOptions(CsiVolumeMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .snapshotId(java.lang.String)
//  .timeouts(CsiVolumeTimeouts)
//  .topologyRequest(CsiVolumeTopologyRequest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId">cloneId</a></code> | <code>java.lang.String</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#id CsiVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability"></a>

```java
public java.lang.Object getCapability();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capability CsiVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#name CsiVolume#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#volume_id CsiVolume#volume_id}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}

---

##### `cloneId`<sup>Optional</sup> <a name="cloneId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId"></a>

```java
public java.lang.String getCloneId();
```

- *Type:* java.lang.String

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#clone_id CsiVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#id CsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions"></a>

```java
public CsiVolumeMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#mount_options CsiVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#namespace CsiVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#parameters CsiVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#secrets CsiVolume#secrets}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts"></a>

```java
public CsiVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#timeouts CsiVolume#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest"></a>

```java
public CsiVolumeTopologyRequest getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#topology_request CsiVolume#topology_request}

---

### CsiVolumeMountOptions <a name="CsiVolumeMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeMountOptions;

CsiVolumeMountOptions.builder()
//  .fsType(java.lang.String)
//  .mountFlags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType">fsType</a></code> | <code>java.lang.String</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | The flags passed to mount. |

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#fs_type CsiVolume#fs_type}

---

##### `mountFlags`<sup>Optional</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#mount_flags CsiVolume#mount_flags}

---

### CsiVolumeTimeouts <a name="CsiVolumeTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTimeouts;

CsiVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#create CsiVolume#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#delete CsiVolume#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#create CsiVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#delete CsiVolume#delete}.

---

### CsiVolumeTopologies <a name="CsiVolumeTopologies" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologies;

CsiVolumeTopologies.builder()
    .build();
```


### CsiVolumeTopologyRequest <a name="CsiVolumeTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequest;

CsiVolumeTopologyRequest.builder()
//  .preferred(CsiVolumeTopologyRequestPreferred)
//  .required(CsiVolumeTopologyRequestRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred"></a>

```java
public CsiVolumeTopologyRequestPreferred getPreferred();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#preferred CsiVolume#preferred}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required"></a>

```java
public CsiVolumeTopologyRequestRequired getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#required CsiVolume#required}

---

### CsiVolumeTopologyRequestPreferred <a name="CsiVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestPreferred;

CsiVolumeTopologyRequestPreferred.builder()
    .topology(IResolvable)
    .topology(java.util.List<CsiVolumeTopologyRequestPreferredTopology>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology">topology</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>></code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology"></a>

```java
public java.lang.Object getTopology();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>>

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestPreferredTopology <a name="CsiVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestPreferredTopology;

CsiVolumeTopologyRequestPreferredTopology.builder()
    .segments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#segments CsiVolume#segments}

---

### CsiVolumeTopologyRequestRequired <a name="CsiVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestRequired;

CsiVolumeTopologyRequestRequired.builder()
    .topology(IResolvable)
    .topology(java.util.List<CsiVolumeTopologyRequestRequiredTopology>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>></code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology"></a>

```java
public java.lang.Object getTopology();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>>

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestRequiredTopology <a name="CsiVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestRequiredTopology;

CsiVolumeTopologyRequestRequiredTopology.builder()
    .segments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/csi_volume#segments CsiVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeCapabilityList <a name="CsiVolumeCapabilityList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeCapabilityList;

new CsiVolumeCapabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get"></a>

```java
public CsiVolumeCapabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>>

---


### CsiVolumeCapabilityOutputReference <a name="CsiVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeCapabilityOutputReference;

new CsiVolumeCapabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```java
public java.lang.String getAttachmentModeInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>

---


### CsiVolumeMountOptionsOutputReference <a name="CsiVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeMountOptionsOutputReference;

new CsiVolumeMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags">resetMountFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetMountFlags` <a name="resetMountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags"></a>

```java
public void resetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput">mountFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `mountFlagsInput`<sup>Optional</sup> <a name="mountFlagsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```java
public java.util.List<java.lang.String> getMountFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `mountFlags`<sup>Required</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue"></a>

```java
public CsiVolumeMountOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---


### CsiVolumeTimeoutsOutputReference <a name="CsiVolumeTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTimeoutsOutputReference;

new CsiVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

---


### CsiVolumeTopologiesList <a name="CsiVolumeTopologiesList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologiesList;

new CsiVolumeTopologiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get"></a>

```java
public CsiVolumeTopologiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CsiVolumeTopologiesOutputReference <a name="CsiVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologiesOutputReference;

new CsiVolumeTopologiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments"></a>

```java
public StringMap getSegments();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue"></a>

```java
public CsiVolumeTopologies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a>

---


### CsiVolumeTopologyRequestOutputReference <a name="CsiVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestOutputReference;

new CsiVolumeTopologyRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred">putPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred">resetPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferred` <a name="putPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred"></a>

```java
public void putPreferred(CsiVolumeTopologyRequestPreferred value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---

##### `putRequired` <a name="putRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired"></a>

```java
public void putRequired(CsiVolumeTopologyRequestRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---

##### `resetPreferred` <a name="resetPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred"></a>

```java
public void resetPreferred()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput">preferredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred"></a>

```java
public CsiVolumeTopologyRequestPreferredOutputReference getPreferred();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required"></a>

```java
public CsiVolumeTopologyRequestRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a>

---

##### `preferredInput`<sup>Optional</sup> <a name="preferredInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```java
public CsiVolumeTopologyRequestPreferred getPreferredInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```java
public CsiVolumeTopologyRequestRequired getRequiredInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue"></a>

```java
public CsiVolumeTopologyRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---


### CsiVolumeTopologyRequestPreferredOutputReference <a name="CsiVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestPreferredOutputReference;

new CsiVolumeTopologyRequestPreferredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```java
public void putTopology(IResolvable OR java.util.List<CsiVolumeTopologyRequestPreferredTopology> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput">topologyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```java
public CsiVolumeTopologyRequestPreferredTopologyList getTopology();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```java
public java.lang.Object getTopologyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```java
public CsiVolumeTopologyRequestPreferred getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---


### CsiVolumeTopologyRequestPreferredTopologyList <a name="CsiVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestPreferredTopologyList;

new CsiVolumeTopologyRequestPreferredTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get"></a>

```java
public CsiVolumeTopologyRequestPreferredTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>>

---


### CsiVolumeTopologyRequestPreferredTopologyOutputReference <a name="CsiVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestPreferredTopologyOutputReference;

new CsiVolumeTopologyRequestPreferredTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegmentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>

---


### CsiVolumeTopologyRequestRequiredOutputReference <a name="CsiVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestRequiredOutputReference;

new CsiVolumeTopologyRequestRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```java
public void putTopology(IResolvable OR java.util.List<CsiVolumeTopologyRequestRequiredTopology> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput">topologyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```java
public CsiVolumeTopologyRequestRequiredTopologyList getTopology();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```java
public java.lang.Object getTopologyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```java
public CsiVolumeTopologyRequestRequired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---


### CsiVolumeTopologyRequestRequiredTopologyList <a name="CsiVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestRequiredTopologyList;

new CsiVolumeTopologyRequestRequiredTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get"></a>

```java
public CsiVolumeTopologyRequestRequiredTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>>

---


### CsiVolumeTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume.CsiVolumeTopologyRequestRequiredTopologyOutputReference;

new CsiVolumeTopologyRequestRequiredTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegmentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>

---



