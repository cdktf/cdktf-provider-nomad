# `nomad_external_volume`

Refer to the Terraform Registory for docs: [`nomad_external_volume`](https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume).

# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktf/provider-nomad.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktf/provider-nomad.externalVolume.ExternalVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume nomad_external_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]],
  name: str,
  plugin_id: str,
  volume_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  clone_id: str = None,
  id: str = None,
  mount_options: ExternalVolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  snapshot_id: str = None,
  topology_request: ExternalVolumeTopologyRequest = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.cloneId">clone_id</a></code> | <code>str</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capability ExternalVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.name"></a>

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#name ExternalVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.volumeId"></a>

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#volume_id ExternalVolume#volume_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMax"></a>

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.capacityMin"></a>

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `clone_id`<sup>Optional</sup> <a name="clone_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.cloneId"></a>

- *Type:* str

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#clone_id ExternalVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#mount_options ExternalVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#namespace ExternalVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#parameters ExternalVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#secrets ExternalVolume#secrets}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.snapshotId"></a>

- *Type:* str

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology_request ExternalVolume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.type"></a>

- *Type:* str

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#type ExternalVolume#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest">put_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax">reset_capacity_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin">reset_capacity_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId">reset_clone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest">reset_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability"></a>

```python
def put_capability(
  value: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions"></a>

```python
def put_mount_options(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
) -> None
```

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions.parameter.fsType"></a>

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#fs_type ExternalVolume#fs_type}

---

###### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions.parameter.mountFlags"></a>

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#mount_flags ExternalVolume#mount_flags}

---

##### `put_topology_request` <a name="put_topology_request" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest"></a>

```python
def put_topology_request(
  preferred: ExternalVolumeTopologyRequestPreferred = None,
  required: ExternalVolumeTopologyRequestRequired = None
) -> None
```

###### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest.parameter.preferred"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#preferred ExternalVolume#preferred}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest.parameter.required"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#required ExternalVolume#required}

---

##### `reset_capacity_max` <a name="reset_capacity_max" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax"></a>

```python
def reset_capacity_max() -> None
```

##### `reset_capacity_min` <a name="reset_capacity_min" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin"></a>

```python
def reset_capacity_min() -> None
```

##### `reset_clone_id` <a name="reset_clone_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId"></a>

```python
def reset_clone_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_topology_request` <a name="reset_topology_request" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest"></a>

```python
def reset_topology_request() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired">controller_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected">controllers_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy">controllers_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected">nodes_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy">nodes_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider">plugin_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion">plugin_provider_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput">capability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput">capacity_max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput">capacity_min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput">clone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput">mount_options_input</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput">topology_request_input</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax">capacity_max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin">capacity_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId">clone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability"></a>

```python
capability: ExternalVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a>

---

##### `controller_required`<sup>Required</sup> <a name="controller_required" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired"></a>

```python
controller_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `controllers_expected`<sup>Required</sup> <a name="controllers_expected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected"></a>

```python
controllers_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controllers_healthy`<sup>Required</sup> <a name="controllers_healthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy"></a>

```python
controllers_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions"></a>

```python
mount_options: ExternalVolumeMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a>

---

##### `nodes_expected`<sup>Required</sup> <a name="nodes_expected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected"></a>

```python
nodes_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes_healthy`<sup>Required</sup> <a name="nodes_healthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy"></a>

```python
nodes_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plugin_provider`<sup>Required</sup> <a name="plugin_provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider"></a>

```python
plugin_provider: str
```

- *Type:* str

---

##### `plugin_provider_version`<sup>Required</sup> <a name="plugin_provider_version" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion"></a>

```python
plugin_provider_version: str
```

- *Type:* str

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable"></a>

```python
schedulable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies"></a>

```python
topologies: ExternalVolumeTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a>

---

##### `topology_request`<sup>Required</sup> <a name="topology_request" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest"></a>

```python
topology_request: ExternalVolumeTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a>

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput"></a>

```python
capability_input: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]

---

##### `capacity_max_input`<sup>Optional</sup> <a name="capacity_max_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput"></a>

```python
capacity_max_input: str
```

- *Type:* str

---

##### `capacity_min_input`<sup>Optional</sup> <a name="capacity_min_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput"></a>

```python
capacity_min_input: str
```

- *Type:* str

---

##### `clone_id_input`<sup>Optional</sup> <a name="clone_id_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput"></a>

```python
clone_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput"></a>

```python
mount_options_input: ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `topology_request_input`<sup>Optional</sup> <a name="topology_request_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput"></a>

```python
topology_request_input: ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `capacity_max`<sup>Required</sup> <a name="capacity_max" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

---

##### `capacity_min`<sup>Required</sup> <a name="capacity_min" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

---

##### `clone_id`<sup>Required</sup> <a name="clone_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId"></a>

```python
clone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeCapability <a name="ExternalVolumeCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#access_mode ExternalVolume#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#attachment_mode ExternalVolume#attachment_mode}

---

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]],
  name: str,
  plugin_id: str,
  volume_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  clone_id: str = None,
  id: str = None,
  mount_options: ExternalVolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  snapshot_id: str = None,
  topology_request: ExternalVolumeTopologyRequest = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax">capacity_max</a></code> | <code>str</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin">capacity_min</a></code> | <code>str</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId">clone_id</a></code> | <code>str</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type">type</a></code> | <code>str</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability"></a>

```python
capability: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capability ExternalVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#name ExternalVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#volume_id ExternalVolume#volume_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `clone_id`<sup>Optional</sup> <a name="clone_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId"></a>

```python
clone_id: str
```

- *Type:* str

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#clone_id ExternalVolume#clone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions"></a>

```python
mount_options: ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#mount_options ExternalVolume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#namespace ExternalVolume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#parameters ExternalVolume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#secrets ExternalVolume#secrets}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest"></a>

```python
topology_request: ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology_request ExternalVolume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#type ExternalVolume#type}

---

### ExternalVolumeMountOptions <a name="ExternalVolumeMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeMountOptions(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType">fs_type</a></code> | <code>str</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | The flags passed to mount. |

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#fs_type ExternalVolume#fs_type}

---

##### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#mount_flags ExternalVolume#mount_flags}

---

### ExternalVolumeTopologies <a name="ExternalVolumeTopologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologies()
```


### ExternalVolumeTopologyRequest <a name="ExternalVolumeTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequest(
  preferred: ExternalVolumeTopologyRequestPreferred = None,
  required: ExternalVolumeTopologyRequestRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `preferred`<sup>Optional</sup> <a name="preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred"></a>

```python
preferred: ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#preferred ExternalVolume#preferred}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required"></a>

```python
required: ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#required ExternalVolume#required}

---

### ExternalVolumeTopologyRequestPreferred <a name="ExternalVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestPreferred(
  topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestPreferredTopology <a name="ExternalVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestPreferredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#segments ExternalVolume#segments}

---

### ExternalVolumeTopologyRequestRequired <a name="ExternalVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestRequired(
  topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestRequiredTopology <a name="ExternalVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestRequiredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define the attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#segments ExternalVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeCapabilityList <a name="ExternalVolumeCapabilityList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalVolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]]

---


### ExternalVolumeCapabilityOutputReference <a name="ExternalVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalVolumeCapability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability">ExternalVolumeCapability</a>]

---


### ExternalVolumeMountOptionsOutputReference <a name="ExternalVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags">reset_mount_flags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_mount_flags` <a name="reset_mount_flags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags"></a>

```python
def reset_mount_flags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput">mount_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `mount_flags_input`<sup>Optional</sup> <a name="mount_flags_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```python
mount_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `mount_flags`<sup>Required</sup> <a name="mount_flags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---


### ExternalVolumeTopologiesList <a name="ExternalVolumeTopologiesList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalVolumeTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ExternalVolumeTopologiesOutputReference <a name="ExternalVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments"></a>

```python
segments: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: ExternalVolumeTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a>

---


### ExternalVolumeTopologyRequestOutputReference <a name="ExternalVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred">put_preferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred">reset_preferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_preferred` <a name="put_preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred"></a>

```python
def put_preferred(
  topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology ExternalVolume#topology}

---

##### `put_required` <a name="put_required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired"></a>

```python
def put_required(
  topology: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/external_volume#topology ExternalVolume#topology}

---

##### `reset_preferred` <a name="reset_preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred"></a>

```python
def reset_preferred() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred">preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput">preferred_input</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput">required_input</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preferred`<sup>Required</sup> <a name="preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred"></a>

```python
preferred: ExternalVolumeTopologyRequestPreferredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a>

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required"></a>

```python
required: ExternalVolumeTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a>

---

##### `preferred_input`<sup>Optional</sup> <a name="preferred_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```python
preferred_input: ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```python
required_input: ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue"></a>

```python
internal_value: ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---


### ExternalVolumeTopologyRequestPreferredOutputReference <a name="ExternalVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```python
topology: ExternalVolumeTopologyRequestPreferredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```python
internal_value: ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---


### ExternalVolumeTopologyRequestPreferredTopologyList <a name="ExternalVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalVolumeTopologyRequestPreferredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestPreferredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]]

---


### ExternalVolumeTopologyRequestPreferredTopologyOutputReference <a name="ExternalVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalVolumeTopologyRequestPreferredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology">ExternalVolumeTopologyRequestPreferredTopology</a>]

---


### ExternalVolumeTopologyRequestRequiredOutputReference <a name="ExternalVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```python
topology: ExternalVolumeTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```python
internal_value: ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---


### ExternalVolumeTopologyRequestRequiredTopologyList <a name="ExternalVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalVolumeTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalVolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]]

---


### ExternalVolumeTopologyRequestRequiredTopologyOutputReference <a name="ExternalVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import external_volume

externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalVolumeTopologyRequestRequiredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology">ExternalVolumeTopologyRequestRequiredTopology</a>]

---



