# `csiVolumeRegistration` Submodule <a name="`csiVolumeRegistration` Submodule" id="@cdktf/provider-nomad.csiVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolumeRegistration <a name="CsiVolumeRegistration" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration nomad_csi_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_id: str,
  name: str,
  plugin_id: str,
  volume_id: str,
  capability: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]] = None,
  capacity_max: str = None,
  capacity_min: str = None,
  context: typing.Mapping[str] = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: CsiVolumeRegistrationMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  timeouts: CsiVolumeRegistrationTimeouts = None,
  topology_request: CsiVolumeRegistrationTopologyRequest = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.context">context</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.externalId"></a>

- *Type:* str

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.name"></a>

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.volumeId"></a>

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMax"></a>

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.capacityMin"></a>

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.context"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest">put_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability">reset_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax">reset_capacity_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin">reset_capacity_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy">reset_deregister_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest">reset_topology_request</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability"></a>

```python
def put_capability(
  value: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions"></a>

```python
def put_mount_options(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
) -> None
```

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions.parameter.fsType"></a>

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}

---

###### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions.parameter.mountFlags"></a>

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}.

---

##### `put_topology_request` <a name="put_topology_request" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest"></a>

```python
def put_topology_request(
  required: CsiVolumeRegistrationTopologyRequestRequired = None
) -> None
```

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest.parameter.required"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}

---

##### `reset_capability` <a name="reset_capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability"></a>

```python
def reset_capability() -> None
```

##### `reset_capacity_max` <a name="reset_capacity_max" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax"></a>

```python
def reset_capacity_max() -> None
```

##### `reset_capacity_min` <a name="reset_capacity_min" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin"></a>

```python
def reset_capacity_min() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_deregister_on_destroy` <a name="reset_deregister_on_destroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy"></a>

```python
def reset_deregister_on_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topology_request` <a name="reset_topology_request" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest"></a>

```python
def reset_topology_request() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CsiVolumeRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CsiVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes">capacity_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes">capacity_min_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired">controller_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected">controllers_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy">controllers_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected">nodes_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy">nodes_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider">plugin_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion">plugin_provider_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput">capability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput">capacity_max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput">capacity_min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput">deregister_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput">mount_options_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput">topology_request_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax">capacity_max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin">capacity_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability"></a>

```python
capability: CsiVolumeRegistrationCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_max_bytes`<sup>Required</sup> <a name="capacity_max_bytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes"></a>

```python
capacity_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_min_bytes`<sup>Required</sup> <a name="capacity_min_bytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes"></a>

```python
capacity_min_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controller_required`<sup>Required</sup> <a name="controller_required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired"></a>

```python
controller_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `controllers_expected`<sup>Required</sup> <a name="controllers_expected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected"></a>

```python
controllers_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controllers_healthy`<sup>Required</sup> <a name="controllers_healthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy"></a>

```python
controllers_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions"></a>

```python
mount_options: CsiVolumeRegistrationMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a>

---

##### `nodes_expected`<sup>Required</sup> <a name="nodes_expected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected"></a>

```python
nodes_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes_healthy`<sup>Required</sup> <a name="nodes_healthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy"></a>

```python
nodes_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plugin_provider`<sup>Required</sup> <a name="plugin_provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider"></a>

```python
plugin_provider: str
```

- *Type:* str

---

##### `plugin_provider_version`<sup>Required</sup> <a name="plugin_provider_version" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion"></a>

```python
plugin_provider_version: str
```

- *Type:* str

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable"></a>

```python
schedulable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts"></a>

```python
timeouts: CsiVolumeRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies"></a>

```python
topologies: CsiVolumeRegistrationTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a>

---

##### `topology_request`<sup>Required</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest"></a>

```python
topology_request: CsiVolumeRegistrationTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a>

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput"></a>

```python
capability_input: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]

---

##### `capacity_max_input`<sup>Optional</sup> <a name="capacity_max_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput"></a>

```python
capacity_max_input: str
```

- *Type:* str

---

##### `capacity_min_input`<sup>Optional</sup> <a name="capacity_min_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput"></a>

```python
capacity_min_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deregister_on_destroy_input`<sup>Optional</sup> <a name="deregister_on_destroy_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput"></a>

```python
deregister_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput"></a>

```python
mount_options_input: CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CsiVolumeRegistrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>]

---

##### `topology_request_input`<sup>Optional</sup> <a name="topology_request_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput"></a>

```python
topology_request_input: CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `capacity_max`<sup>Required</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

---

##### `capacity_min`<sup>Required</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deregister_on_destroy`<sup>Required</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeRegistrationCapability <a name="CsiVolumeRegistrationCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}

---

### CsiVolumeRegistrationConfig <a name="CsiVolumeRegistrationConfig" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_id: str,
  name: str,
  plugin_id: str,
  volume_id: str,
  capability: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]] = None,
  capacity_max: str = None,
  capacity_min: str = None,
  context: typing.Mapping[str] = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: CsiVolumeRegistrationMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  timeouts: CsiVolumeRegistrationTimeouts = None,
  topology_request: CsiVolumeRegistrationTopologyRequest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId">external_id</a></code> | <code>str</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context">context</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability"></a>

```python
capability: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions"></a>

```python
mount_options: CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts"></a>

```python
timeouts: CsiVolumeRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest"></a>

```python
topology_request: CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

### CsiVolumeRegistrationMountOptions <a name="CsiVolumeRegistrationMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationMountOptions(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType">fs_type</a></code> | <code>str</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | The flags passed to mount. |

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}

---

##### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}

---

### CsiVolumeRegistrationTimeouts <a name="CsiVolumeRegistrationTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}.

---

### CsiVolumeRegistrationTopologies <a name="CsiVolumeRegistrationTopologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologies()
```


### CsiVolumeRegistrationTopologyRequest <a name="CsiVolumeRegistrationTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest(
  required: CsiVolumeRegistrationTopologyRequestRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required"></a>

```python
required: CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}

---

### CsiVolumeRegistrationTopologyRequestRequired <a name="CsiVolumeRegistrationTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}

---

### CsiVolumeRegistrationTopologyRequestRequiredTopology <a name="CsiVolumeRegistrationTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeRegistrationCapabilityList <a name="CsiVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeRegistrationCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]]

---


### CsiVolumeRegistrationCapabilityOutputReference <a name="CsiVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeRegistrationCapability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability">CsiVolumeRegistrationCapability</a>]

---


### CsiVolumeRegistrationMountOptionsOutputReference <a name="CsiVolumeRegistrationMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags">reset_mount_flags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_mount_flags` <a name="reset_mount_flags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags"></a>

```python
def reset_mount_flags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput">mount_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `mount_flags_input`<sup>Optional</sup> <a name="mount_flags_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput"></a>

```python
mount_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `mount_flags`<sup>Required</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---


### CsiVolumeRegistrationTimeoutsOutputReference <a name="CsiVolumeRegistrationTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeRegistrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>]

---


### CsiVolumeRegistrationTopologiesList <a name="CsiVolumeRegistrationTopologiesList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeRegistrationTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CsiVolumeRegistrationTopologiesOutputReference <a name="CsiVolumeRegistrationTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments"></a>

```python
segments: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeRegistrationTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a>

---


### CsiVolumeRegistrationTopologyRequestOutputReference <a name="CsiVolumeRegistrationTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required` <a name="put_required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired"></a>

```python
def put_required(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}

---

##### `reset_required` <a name="reset_required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput">required_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required"></a>

```python
required: CsiVolumeRegistrationTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput"></a>

```python
required_input: CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology"></a>

```python
topology: CsiVolumeRegistrationTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyList <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsiVolumeRegistrationTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]]

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume_registration

csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeRegistrationTopologyRequestRequiredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology">CsiVolumeRegistrationTopologyRequestRequiredTopology</a>]

---



