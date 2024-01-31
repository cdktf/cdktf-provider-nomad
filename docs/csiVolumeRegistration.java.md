# `csiVolumeRegistration` Submodule <a name="`csiVolumeRegistration` Submodule" id="@cdktf/provider-nomad.csiVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolumeRegistration <a name="CsiVolumeRegistration" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration nomad_csi_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistration;

CsiVolumeRegistration.Builder.create(Construct scope, java.lang.String id)
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
    .externalId(java.lang.String)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capability(IResolvable)
//  .capability(java.util.List<CsiVolumeRegistrationCapability>)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .context(java.util.Map<java.lang.String, java.lang.String>)
//  .deregisterOnDestroy(java.lang.Boolean)
//  .deregisterOnDestroy(IResolvable)
//  .id(java.lang.String)
//  .mountOptions(CsiVolumeRegistrationMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CsiVolumeRegistrationTimeouts)
//  .topologyRequest(CsiVolumeRegistrationTopologyRequest)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.pluginId"></a>

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capability"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMax"></a>

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMin"></a>

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.context"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.secrets"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability">putCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest">putTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability">resetCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax">resetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin">resetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy">resetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest">resetTopologyRequest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapability` <a name="putCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability"></a>

```java
public void putCapability(IResolvable OR java.util.List<CsiVolumeRegistrationCapability> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>>

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions"></a>

```java
public void putMountOptions(CsiVolumeRegistrationMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts"></a>

```java
public void putTimeouts(CsiVolumeRegistrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---

##### `putTopologyRequest` <a name="putTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest"></a>

```java
public void putTopologyRequest(CsiVolumeRegistrationTopologyRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `resetCapability` <a name="resetCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability"></a>

```java
public void resetCapability()
```

##### `resetCapacityMax` <a name="resetCapacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax"></a>

```java
public void resetCapacityMax()
```

##### `resetCapacityMin` <a name="resetCapacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin"></a>

```java
public void resetCapacityMin()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext"></a>

```java
public void resetContext()
```

##### `resetDeregisterOnDestroy` <a name="resetDeregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy"></a>

```java
public void resetDeregisterOnDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId"></a>

```java
public void resetId()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTopologyRequest` <a name="resetTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest"></a>

```java
public void resetTopologyRequest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistration;

CsiVolumeRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistration;

CsiVolumeRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistration;

CsiVolumeRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistration;

CsiVolumeRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CsiVolumeRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CsiVolumeRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CsiVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes">capacityMaxBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes">capacityMinBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired">controllerRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected">controllersExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy">controllersHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected">nodesExpected</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy">nodesHealthy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider">pluginProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion">pluginProviderVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable">schedulable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput">capabilityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput">capacityMaxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput">capacityMinInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput">contextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput">deregisterOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput">pluginIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput">secretsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput">topologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability"></a>

```java
public CsiVolumeRegistrationCapabilityList getCapability();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `capacityMaxBytes`<sup>Required</sup> <a name="capacityMaxBytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes"></a>

```java
public java.lang.Number getCapacityMaxBytes();
```

- *Type:* java.lang.Number

---

##### `capacityMinBytes`<sup>Required</sup> <a name="capacityMinBytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes"></a>

```java
public java.lang.Number getCapacityMinBytes();
```

- *Type:* java.lang.Number

---

##### `controllerRequired`<sup>Required</sup> <a name="controllerRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired"></a>

```java
public IResolvable getControllerRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `controllersExpected`<sup>Required</sup> <a name="controllersExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected"></a>

```java
public java.lang.Number getControllersExpected();
```

- *Type:* java.lang.Number

---

##### `controllersHealthy`<sup>Required</sup> <a name="controllersHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy"></a>

```java
public java.lang.Number getControllersHealthy();
```

- *Type:* java.lang.Number

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions"></a>

```java
public CsiVolumeRegistrationMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a>

---

##### `nodesExpected`<sup>Required</sup> <a name="nodesExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected"></a>

```java
public java.lang.Number getNodesExpected();
```

- *Type:* java.lang.Number

---

##### `nodesHealthy`<sup>Required</sup> <a name="nodesHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy"></a>

```java
public java.lang.Number getNodesHealthy();
```

- *Type:* java.lang.Number

---

##### `pluginProvider`<sup>Required</sup> <a name="pluginProvider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider"></a>

```java
public java.lang.String getPluginProvider();
```

- *Type:* java.lang.String

---

##### `pluginProviderVersion`<sup>Required</sup> <a name="pluginProviderVersion" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion"></a>

```java
public java.lang.String getPluginProviderVersion();
```

- *Type:* java.lang.String

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable"></a>

```java
public IResolvable getSchedulable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts"></a>

```java
public CsiVolumeRegistrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies"></a>

```java
public CsiVolumeRegistrationTopologiesList getTopologies();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a>

---

##### `topologyRequest`<sup>Required</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest"></a>

```java
public CsiVolumeRegistrationTopologyRequestOutputReference getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a>

---

##### `capabilityInput`<sup>Optional</sup> <a name="capabilityInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput"></a>

```java
public java.lang.Object getCapabilityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>>

---

##### `capacityMaxInput`<sup>Optional</sup> <a name="capacityMaxInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput"></a>

```java
public java.lang.String getCapacityMaxInput();
```

- *Type:* java.lang.String

---

##### `capacityMinInput`<sup>Optional</sup> <a name="capacityMinInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput"></a>

```java
public java.lang.String getCapacityMinInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deregisterOnDestroyInput`<sup>Optional</sup> <a name="deregisterOnDestroyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput"></a>

```java
public java.lang.Object getDeregisterOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput"></a>

```java
public CsiVolumeRegistrationMountOptions getMountOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginIdInput`<sup>Optional</sup> <a name="pluginIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput"></a>

```java
public java.lang.String getPluginIdInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecretsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---

##### `topologyRequestInput`<sup>Optional</sup> <a name="topologyRequestInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput"></a>

```java
public CsiVolumeRegistrationTopologyRequest getTopologyRequestInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `capacityMax`<sup>Required</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

---

##### `capacityMin`<sup>Required</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deregisterOnDestroy`<sup>Required</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy"></a>

```java
public java.lang.Object getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeRegistrationCapability <a name="CsiVolumeRegistrationCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationCapability;

CsiVolumeRegistrationCapability.builder()
    .accessMode(java.lang.String)
    .attachmentMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | The storage API that will be used by the volume. |

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}

---

### CsiVolumeRegistrationConfig <a name="CsiVolumeRegistrationConfig" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationConfig;

CsiVolumeRegistrationConfig.builder()
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
    .externalId(java.lang.String)
    .name(java.lang.String)
    .pluginId(java.lang.String)
    .volumeId(java.lang.String)
//  .capability(IResolvable)
//  .capability(java.util.List<CsiVolumeRegistrationCapability>)
//  .capacityMax(java.lang.String)
//  .capacityMin(java.lang.String)
//  .context(java.util.Map<java.lang.String, java.lang.String>)
//  .deregisterOnDestroy(java.lang.Boolean)
//  .deregisterOnDestroy(IResolvable)
//  .id(java.lang.String)
//  .mountOptions(CsiVolumeRegistrationMountOptions)
//  .namespace(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .secrets(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CsiVolumeRegistrationTimeouts)
//  .topologyRequest(CsiVolumeRegistrationTopologyRequest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId">pluginId</a></code> | <code>java.lang.String</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability">capability</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>></code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax">capacityMax</a></code> | <code>java.lang.String</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin">capacityMin</a></code> | <code>java.lang.String</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context">context</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets">secrets</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest">topologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `pluginId`<sup>Required</sup> <a name="pluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId"></a>

```java
public java.lang.String getPluginId();
```

- *Type:* java.lang.String

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability"></a>

```java
public java.lang.Object getCapability();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>>

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `capacityMax`<sup>Optional</sup> <a name="capacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax"></a>

```java
public java.lang.String getCapacityMax();
```

- *Type:* java.lang.String

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}

---

##### `capacityMin`<sup>Optional</sup> <a name="capacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin"></a>

```java
public java.lang.String getCapacityMin();
```

- *Type:* java.lang.String

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy"></a>

```java
public java.lang.Object getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions"></a>

```java
public CsiVolumeRegistrationMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSecrets();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts"></a>

```java
public CsiVolumeRegistrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `topologyRequest`<sup>Optional</sup> <a name="topologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest"></a>

```java
public CsiVolumeRegistrationTopologyRequest getTopologyRequest();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

### CsiVolumeRegistrationMountOptions <a name="CsiVolumeRegistrationMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationMountOptions;

CsiVolumeRegistrationMountOptions.builder()
//  .fsType(java.lang.String)
//  .mountFlags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType">fsType</a></code> | <code>java.lang.String</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | The flags passed to mount. |

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}

---

##### `mountFlags`<sup>Optional</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}

---

### CsiVolumeRegistrationTimeouts <a name="CsiVolumeRegistrationTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTimeouts;

CsiVolumeRegistrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}.

---

### CsiVolumeRegistrationTopologies <a name="CsiVolumeRegistrationTopologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologies;

CsiVolumeRegistrationTopologies.builder()
    .build();
```


### CsiVolumeRegistrationTopologyRequest <a name="CsiVolumeRegistrationTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequest;

CsiVolumeRegistrationTopologyRequest.builder()
//  .required(CsiVolumeRegistrationTopologyRequestRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequired getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}

---

### CsiVolumeRegistrationTopologyRequestRequired <a name="CsiVolumeRegistrationTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestRequired;

CsiVolumeRegistrationTopologyRequestRequired.builder()
    .topology(IResolvable)
    .topology(java.util.List<CsiVolumeRegistrationTopologyRequestRequiredTopology>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology">topology</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>></code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology"></a>

```java
public java.lang.Object getTopology();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>>

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}

---

### CsiVolumeRegistrationTopologyRequestRequiredTopology <a name="CsiVolumeRegistrationTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestRequiredTopology;

CsiVolumeRegistrationTopologyRequestRequiredTopology.builder()
    .segments(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Define attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeRegistrationCapabilityList <a name="CsiVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationCapabilityList;

new CsiVolumeRegistrationCapabilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get"></a>

```java
public CsiVolumeRegistrationCapabilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>>

---


### CsiVolumeRegistrationCapabilityOutputReference <a name="CsiVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationCapabilityOutputReference;

new CsiVolumeRegistrationCapabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput">accessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachmentModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachmentMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessModeInput`<sup>Optional</sup> <a name="accessModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```java
public java.lang.String getAccessModeInput();
```

- *Type:* java.lang.String

---

##### `attachmentModeInput`<sup>Optional</sup> <a name="attachmentModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```java
public java.lang.String getAttachmentModeInput();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `attachmentMode`<sup>Required</sup> <a name="attachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```java
public java.lang.String getAttachmentMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>

---


### CsiVolumeRegistrationMountOptionsOutputReference <a name="CsiVolumeRegistrationMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationMountOptionsOutputReference;

new CsiVolumeRegistrationMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags">resetMountFlags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetMountFlags` <a name="resetMountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags"></a>

```java
public void resetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput">mountFlagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags">mountFlags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `mountFlagsInput`<sup>Optional</sup> <a name="mountFlagsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput"></a>

```java
public java.util.List<java.lang.String> getMountFlagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `mountFlags`<sup>Required</sup> <a name="mountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags"></a>

```java
public java.util.List<java.lang.String> getMountFlags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue"></a>

```java
public CsiVolumeRegistrationMountOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---


### CsiVolumeRegistrationTimeoutsOutputReference <a name="CsiVolumeRegistrationTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTimeoutsOutputReference;

new CsiVolumeRegistrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---


### CsiVolumeRegistrationTopologiesList <a name="CsiVolumeRegistrationTopologiesList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologiesList;

new CsiVolumeRegistrationTopologiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get"></a>

```java
public CsiVolumeRegistrationTopologiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CsiVolumeRegistrationTopologiesOutputReference <a name="CsiVolumeRegistrationTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologiesOutputReference;

new CsiVolumeRegistrationTopologiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments">segments</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments"></a>

```java
public StringMap getSegments();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue"></a>

```java
public CsiVolumeRegistrationTopologies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a>

---


### CsiVolumeRegistrationTopologyRequestOutputReference <a name="CsiVolumeRegistrationTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestOutputReference;

new CsiVolumeRegistrationTopologyRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired"></a>

```java
public void putRequired(CsiVolumeRegistrationTopologyRequestRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequired getRequiredInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue"></a>

```java
public CsiVolumeRegistrationTopologyRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference;

new CsiVolumeRegistrationTopologyRequestRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology">putTopology</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTopology` <a name="putTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology"></a>

```java
public void putTopology(IResolvable OR java.util.List<CsiVolumeRegistrationTopologyRequestRequiredTopology> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput">topologyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequiredTopologyList getTopology();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a>

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```java
public java.lang.Object getTopologyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyList <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList;

new CsiVolumeRegistrationTopologyRequestRequiredTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get"></a>

```java
public CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>>

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.csi_volume_registration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference;

new CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segmentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `segmentsInput`<sup>Optional</sup> <a name="segmentsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegmentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSegments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>

---



