# `csiVolume` Submodule <a name="`csiVolume` Submodule" id="@cdktf/provider-nomad.csiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolume <a name="CsiVolume" id="@cdktf/provider-nomad.csiVolume.CsiVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume nomad_csi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[CsiVolumeCapability]],
  name: str,
  plugin_id: str,
  volume_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  clone_id: str = None,
  id: str = None,
  mount_options: CsiVolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  snapshot_id: str = None,
  timeouts: CsiVolumeTimeouts = None,
  topology_request: CsiVolumeTopologyRequest = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.cloneId">clone_id</a></code> | <code>str</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | topology_request block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capability CsiVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.name"></a>

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#name CsiVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.volumeId"></a>

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#volume_id CsiVolume#volume_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMax"></a>

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.capacityMin"></a>

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}

---

##### `clone_id`<sup>Optional</sup> <a name="clone_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.cloneId"></a>

- *Type:* str

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#clone_id CsiVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_options CsiVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#namespace CsiVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#parameters CsiVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#secrets CsiVolume#secrets}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.snapshotId"></a>

- *Type:* str

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#timeouts CsiVolume#timeouts}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolume.CsiVolume.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology_request CsiVolume#topology_request}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest">put_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax">reset_capacity_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin">reset_capacity_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId">reset_clone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest">reset_topology_request</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.csiVolume.CsiVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.csiVolume.CsiVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability"></a>

```python
def put_capability(
  value: typing.Union[IResolvable, typing.List[CsiVolumeCapability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putCapability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions"></a>

```python
def put_mount_options(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
) -> None
```

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions.parameter.fsType"></a>

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#fs_type CsiVolume#fs_type}

---

###### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putMountOptions.parameter.mountFlags"></a>

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_flags CsiVolume#mount_flags}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}.

---

##### `put_topology_request` <a name="put_topology_request" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest"></a>

```python
def put_topology_request(
  preferred: CsiVolumeTopologyRequestPreferred = None,
  required: CsiVolumeTopologyRequestRequired = None
) -> None
```

###### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest.parameter.preferred"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#preferred CsiVolume#preferred}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolume.putTopologyRequest.parameter.required"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#required CsiVolume#required}

---

##### `reset_capacity_max` <a name="reset_capacity_max" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMax"></a>

```python
def reset_capacity_max() -> None
```

##### `reset_capacity_min` <a name="reset_capacity_min" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCapacityMin"></a>

```python
def reset_capacity_min() -> None
```

##### `reset_clone_id` <a name="reset_clone_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetCloneId"></a>

```python
def reset_clone_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_topology_request` <a name="reset_topology_request" id="@cdktf/provider-nomad.csiVolume.CsiVolume.resetTopologyRequest"></a>

```python
def reset_topology_request() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolume.CsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CsiVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CsiVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CsiVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired">controller_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected">controllers_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy">controllers_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected">nodes_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy">nodes_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider">plugin_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion">plugin_provider_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput">capability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput">capacity_max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput">capacity_min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput">clone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput">mount_options_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput">topology_request_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax">capacity_max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin">capacity_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId">clone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capability"></a>

```python
capability: CsiVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList">CsiVolumeCapabilityList</a>

---

##### `controller_required`<sup>Required</sup> <a name="controller_required" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllerRequired"></a>

```python
controller_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `controllers_expected`<sup>Required</sup> <a name="controllers_expected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersExpected"></a>

```python
controllers_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controllers_healthy`<sup>Required</sup> <a name="controllers_healthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.controllersHealthy"></a>

```python
controllers_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptions"></a>

```python
mount_options: CsiVolumeMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference">CsiVolumeMountOptionsOutputReference</a>

---

##### `nodes_expected`<sup>Required</sup> <a name="nodes_expected" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesExpected"></a>

```python
nodes_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes_healthy`<sup>Required</sup> <a name="nodes_healthy" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nodesHealthy"></a>

```python
nodes_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plugin_provider`<sup>Required</sup> <a name="plugin_provider" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProvider"></a>

```python
plugin_provider: str
```

- *Type:* str

---

##### `plugin_provider_version`<sup>Required</sup> <a name="plugin_provider_version" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginProviderVersion"></a>

```python
plugin_provider_version: str
```

- *Type:* str

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.schedulable"></a>

```python
schedulable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeouts"></a>

```python
timeouts: CsiVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference">CsiVolumeTimeoutsOutputReference</a>

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologies"></a>

```python
topologies: CsiVolumeTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList">CsiVolumeTopologiesList</a>

---

##### `topology_request`<sup>Required</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequest"></a>

```python
topology_request: CsiVolumeTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference">CsiVolumeTopologyRequestOutputReference</a>

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capabilityInput"></a>

```python
capability_input: typing.Union[IResolvable, typing.List[CsiVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]

---

##### `capacity_max_input`<sup>Optional</sup> <a name="capacity_max_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMaxInput"></a>

```python
capacity_max_input: str
```

- *Type:* str

---

##### `capacity_min_input`<sup>Optional</sup> <a name="capacity_min_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMinInput"></a>

```python
capacity_min_input: str
```

- *Type:* str

---

##### `clone_id_input`<sup>Optional</sup> <a name="clone_id_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneIdInput"></a>

```python
clone_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.mountOptionsInput"></a>

```python
mount_options_input: CsiVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CsiVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>]

---

##### `topology_request_input`<sup>Optional</sup> <a name="topology_request_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.topologyRequestInput"></a>

```python
topology_request_input: CsiVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `capacity_max`<sup>Required</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

---

##### `capacity_min`<sup>Required</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

---

##### `clone_id`<sup>Required</sup> <a name="clone_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.cloneId"></a>

```python
clone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.csiVolume.CsiVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeCapability <a name="CsiVolumeCapability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#access_mode CsiVolume#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#attachment_mode CsiVolume#attachment_mode}

---

### CsiVolumeConfig <a name="CsiVolumeConfig" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[CsiVolumeCapability]],
  name: str,
  plugin_id: str,
  volume_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  clone_id: str = None,
  id: str = None,
  mount_options: CsiVolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  snapshot_id: str = None,
  timeouts: CsiVolumeTimeouts = None,
  topology_request: CsiVolumeTopologyRequest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId">clone_id</a></code> | <code>str</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | topology_request block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capability"></a>

```python
capability: typing.Union[IResolvable, typing.List[CsiVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capability CsiVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#name CsiVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#volume_id CsiVolume#volume_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}

---

##### `clone_id`<sup>Optional</sup> <a name="clone_id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.cloneId"></a>

```python
clone_id: str
```

- *Type:* str

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#clone_id CsiVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.mountOptions"></a>

```python
mount_options: CsiVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_options CsiVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#namespace CsiVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#parameters CsiVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#secrets CsiVolume#secrets}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.timeouts"></a>

```python
timeouts: CsiVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#timeouts CsiVolume#timeouts}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.csiVolume.CsiVolumeConfig.property.topologyRequest"></a>

```python
topology_request: CsiVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology_request CsiVolume#topology_request}

---

### CsiVolumeMountOptions <a name="CsiVolumeMountOptions" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeMountOptions(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType">fs_type</a></code> | <code>str</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | The flags passed to mount. |

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#fs_type CsiVolume#fs_type}

---

##### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_flags CsiVolume#mount_flags}

---

### CsiVolumeTimeouts <a name="CsiVolumeTimeouts" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}.

---

### CsiVolumeTopologies <a name="CsiVolumeTopologies" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologies()
```


### CsiVolumeTopologyRequest <a name="CsiVolumeTopologyRequest" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequest(
  preferred: CsiVolumeTopologyRequestPreferred = None,
  required: CsiVolumeTopologyRequestRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.preferred"></a>

```python
preferred: CsiVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#preferred CsiVolume#preferred}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest.property.required"></a>

```python
required: CsiVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#required CsiVolume#required}

---

### CsiVolumeTopologyRequestPreferred <a name="CsiVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestPreferred(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestPreferredTopology <a name="CsiVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestPreferredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}

---

### CsiVolumeTopologyRequestRequired <a name="CsiVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestRequired(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

### CsiVolumeTopologyRequestRequiredTopology <a name="CsiVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestRequiredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeCapabilityList <a name="CsiVolumeCapabilityList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsiVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]]

---


### CsiVolumeCapabilityOutputReference <a name="CsiVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeCapability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeCapability">CsiVolumeCapability</a>]

---


### CsiVolumeMountOptionsOutputReference <a name="CsiVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags">reset_mount_flags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_mount_flags` <a name="reset_mount_flags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.resetMountFlags"></a>

```python
def reset_mount_flags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput">mount_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `mount_flags_input`<sup>Optional</sup> <a name="mount_flags_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```python
mount_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `mount_flags`<sup>Required</sup> <a name="mount_flags" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeMountOptions">CsiVolumeMountOptions</a>

---


### CsiVolumeTimeoutsOutputReference <a name="CsiVolumeTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTimeouts">CsiVolumeTimeouts</a>]

---


### CsiVolumeTopologiesList <a name="CsiVolumeTopologiesList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CsiVolumeTopologiesOutputReference <a name="CsiVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.segments"></a>

```python
segments: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologies">CsiVolumeTopologies</a>

---


### CsiVolumeTopologyRequestOutputReference <a name="CsiVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred">put_preferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred">reset_preferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preferred` <a name="put_preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred"></a>

```python
def put_preferred(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putPreferred.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

##### `put_required` <a name="put_required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired"></a>

```python
def put_required(
  topology: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.putRequired.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}

---

##### `reset_preferred` <a name="reset_preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetPreferred"></a>

```python
def reset_preferred() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput">preferred_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput">required_input</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferred"></a>

```python
preferred: CsiVolumeTopologyRequestPreferredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference">CsiVolumeTopologyRequestPreferredOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.required"></a>

```python
required: CsiVolumeTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference">CsiVolumeTopologyRequestRequiredOutputReference</a>

---

##### `preferred_input`<sup>Optional</sup> <a name="preferred_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```python
preferred_input: CsiVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```python
required_input: CsiVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequest">CsiVolumeTopologyRequest</a>

---


### CsiVolumeTopologyRequestPreferredOutputReference <a name="CsiVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestPreferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```python
topology: CsiVolumeTopologyRequestPreferredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList">CsiVolumeTopologyRequestPreferredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferred">CsiVolumeTopologyRequestPreferred</a>

---


### CsiVolumeTopologyRequestPreferredTopologyList <a name="CsiVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestPreferredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeTopologyRequestPreferredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]]

---


### CsiVolumeTopologyRequestPreferredTopologyOutputReference <a name="CsiVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeTopologyRequestPreferredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestPreferredTopology">CsiVolumeTopologyRequestPreferredTopology</a>]

---


### CsiVolumeTopologyRequestRequiredOutputReference <a name="CsiVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```python
topology: CsiVolumeTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList">CsiVolumeTopologyRequestRequiredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```python
internal_value: CsiVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequired">CsiVolumeTopologyRequestRequired</a>

---


### CsiVolumeTopologyRequestRequiredTopologyList <a name="CsiVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestRequiredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CsiVolumeTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CsiVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]]

---


### CsiVolumeTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import csi_volume

csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CsiVolumeTopologyRequestRequiredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.csiVolume.CsiVolumeTopologyRequestRequiredTopology">CsiVolumeTopologyRequestRequiredTopology</a>]

---



