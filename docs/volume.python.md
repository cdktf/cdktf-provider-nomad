# `nomad_volume`

Refer to the Terraform Registory for docs: [`nomad_volume`](https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume).

# `volume` Submodule <a name="`volume` Submodule" id="@cdktf/provider-nomad.volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Volume <a name="Volume" id="@cdktf/provider-nomad.volume.Volume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume nomad_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.Volume.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.Volume(
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
  access_mode: str = None,
  attachment_mode: str = None,
  capability: typing.Union[IResolvable, typing.List[VolumeCapability]] = None,
  context: typing.Mapping[str] = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: VolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  topology_request: VolumeTopologyRequest = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.context">context</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.externalId"></a>

- *Type:* str

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#external_id Volume#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.name"></a>

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#name Volume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.pluginId"></a>

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#plugin_id Volume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.volumeId"></a>

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#volume_id Volume#volume_id}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.accessMode"></a>

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#access_mode Volume#access_mode}

---

##### `attachment_mode`<sup>Optional</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.attachmentMode"></a>

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#attachment_mode Volume#attachment_mode}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.capability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#capability Volume#capability}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.context"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#context Volume#context}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#deregister_on_destroy Volume#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.mountOptions"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#mount_options Volume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#namespace Volume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#parameters Volume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.secrets"></a>

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#secrets Volume#secrets}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.topologyRequest"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#topology_request Volume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.volume.Volume.Initializer.parameter.type"></a>

- *Type:* str

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#type Volume#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putMountOptions">put_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.putTopologyRequest">put_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetAccessMode">reset_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetAttachmentMode">reset_attachment_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetCapability">reset_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetDeregisterOnDestroy">reset_deregister_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetMountOptions">reset_mount_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetTopologyRequest">reset_topology_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.Volume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.volume.Volume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.volume.Volume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.volume.Volume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.volume.Volume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.volume.Volume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.volume.Volume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.volume.Volume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.volume.Volume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.volume.Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.Volume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.Volume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.Volume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.volume.Volume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.volume.Volume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.volume.Volume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.Volume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.volume.Volume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.volume.Volume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.volume.Volume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.volume.Volume.putCapability"></a>

```python
def put_capability(
  value: typing.Union[IResolvable, typing.List[VolumeCapability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.volume.Volume.putCapability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]

---

##### `put_mount_options` <a name="put_mount_options" id="@cdktf/provider-nomad.volume.Volume.putMountOptions"></a>

```python
def put_mount_options(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
) -> None
```

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.volume.Volume.putMountOptions.parameter.fsType"></a>

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#fs_type Volume#fs_type}

---

###### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.volume.Volume.putMountOptions.parameter.mountFlags"></a>

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#mount_flags Volume#mount_flags}

---

##### `put_topology_request` <a name="put_topology_request" id="@cdktf/provider-nomad.volume.Volume.putTopologyRequest"></a>

```python
def put_topology_request(
  required: VolumeTopologyRequestRequired = None
) -> None
```

###### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.volume.Volume.putTopologyRequest.parameter.required"></a>

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#required Volume#required}

---

##### `reset_access_mode` <a name="reset_access_mode" id="@cdktf/provider-nomad.volume.Volume.resetAccessMode"></a>

```python
def reset_access_mode() -> None
```

##### `reset_attachment_mode` <a name="reset_attachment_mode" id="@cdktf/provider-nomad.volume.Volume.resetAttachmentMode"></a>

```python
def reset_attachment_mode() -> None
```

##### `reset_capability` <a name="reset_capability" id="@cdktf/provider-nomad.volume.Volume.resetCapability"></a>

```python
def reset_capability() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktf/provider-nomad.volume.Volume.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_deregister_on_destroy` <a name="reset_deregister_on_destroy" id="@cdktf/provider-nomad.volume.Volume.resetDeregisterOnDestroy"></a>

```python
def reset_deregister_on_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.volume.Volume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mount_options` <a name="reset_mount_options" id="@cdktf/provider-nomad.volume.Volume.resetMountOptions"></a>

```python
def reset_mount_options() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.volume.Volume.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.volume.Volume.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-nomad.volume.Volume.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_topology_request` <a name="reset_topology_request" id="@cdktf/provider-nomad.volume.Volume.resetTopologyRequest"></a>

```python
def reset_topology_request() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-nomad.volume.Volume.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.volume.Volume.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.Volume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.volume.Volume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.Volume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.volume.Volume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.Volume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.Volume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Volume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.volume.Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList">VolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllerRequired">controller_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllersExpected">controllers_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.controllersHealthy">controllers_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference">VolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nodesExpected">nodes_expected</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nodesHealthy">nodes_healthy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginProvider">plugin_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginProviderVersion">plugin_provider_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.schedulable">schedulable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologies">topologies</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList">VolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference">VolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.capabilityInput">capability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroyInput">deregister_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.mountOptionsInput">mount_options_input</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.secretsInput">secrets_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.topologyRequestInput">topology_request_input</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.volume.Volume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.volume.Volume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.Volume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.volume.Volume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.volume.Volume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.volume.Volume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.volume.Volume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.volume.Volume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.volume.Volume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.volume.Volume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.volume.Volume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.volume.Volume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.volume.Volume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.volume.Volume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.volume.Volume.property.capability"></a>

```python
capability: VolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList">VolumeCapabilityList</a>

---

##### `controller_required`<sup>Required</sup> <a name="controller_required" id="@cdktf/provider-nomad.volume.Volume.property.controllerRequired"></a>

```python
controller_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `controllers_expected`<sup>Required</sup> <a name="controllers_expected" id="@cdktf/provider-nomad.volume.Volume.property.controllersExpected"></a>

```python
controllers_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `controllers_healthy`<sup>Required</sup> <a name="controllers_healthy" id="@cdktf/provider-nomad.volume.Volume.property.controllersHealthy"></a>

```python
controllers_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktf/provider-nomad.volume.Volume.property.mountOptions"></a>

```python
mount_options: VolumeMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference">VolumeMountOptionsOutputReference</a>

---

##### `nodes_expected`<sup>Required</sup> <a name="nodes_expected" id="@cdktf/provider-nomad.volume.Volume.property.nodesExpected"></a>

```python
nodes_expected: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nodes_healthy`<sup>Required</sup> <a name="nodes_healthy" id="@cdktf/provider-nomad.volume.Volume.property.nodesHealthy"></a>

```python
nodes_healthy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `plugin_provider`<sup>Required</sup> <a name="plugin_provider" id="@cdktf/provider-nomad.volume.Volume.property.pluginProvider"></a>

```python
plugin_provider: str
```

- *Type:* str

---

##### `plugin_provider_version`<sup>Required</sup> <a name="plugin_provider_version" id="@cdktf/provider-nomad.volume.Volume.property.pluginProviderVersion"></a>

```python
plugin_provider_version: str
```

- *Type:* str

---

##### `schedulable`<sup>Required</sup> <a name="schedulable" id="@cdktf/provider-nomad.volume.Volume.property.schedulable"></a>

```python
schedulable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `topologies`<sup>Required</sup> <a name="topologies" id="@cdktf/provider-nomad.volume.Volume.property.topologies"></a>

```python
topologies: VolumeTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList">VolumeTopologiesList</a>

---

##### `topology_request`<sup>Required</sup> <a name="topology_request" id="@cdktf/provider-nomad.volume.Volume.property.topologyRequest"></a>

```python
topology_request: VolumeTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference">VolumeTopologyRequestOutputReference</a>

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.volume.Volume.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.volume.Volume.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.volume.Volume.property.capabilityInput"></a>

```python
capability_input: typing.Union[IResolvable, typing.List[VolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-nomad.volume.Volume.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deregister_on_destroy_input`<sup>Optional</sup> <a name="deregister_on_destroy_input" id="@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroyInput"></a>

```python
deregister_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-nomad.volume.Volume.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.volume.Volume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_options_input`<sup>Optional</sup> <a name="mount_options_input" id="@cdktf/provider-nomad.volume.Volume.property.mountOptionsInput"></a>

```python
mount_options_input: VolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.volume.Volume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.volume.Volume.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.volume.Volume.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-nomad.volume.Volume.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-nomad.volume.Volume.property.secretsInput"></a>

```python
secrets_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `topology_request_input`<sup>Optional</sup> <a name="topology_request_input" id="@cdktf/provider-nomad.volume.Volume.property.topologyRequestInput"></a>

```python
topology_request_input: VolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-nomad.volume.Volume.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@cdktf/provider-nomad.volume.Volume.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.volume.Volume.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.volume.Volume.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-nomad.volume.Volume.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deregister_on_destroy`<sup>Required</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.volume.Volume.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.volume.Volume.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.volume.Volume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.volume.Volume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.volume.Volume.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.volume.Volume.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.volume.Volume.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-nomad.volume.Volume.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.volume.Volume.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.volume.Volume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.Volume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.volume.Volume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VolumeCapability <a name="VolumeCapability" id="@cdktf/provider-nomad.volume.VolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapability.property.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.volume.VolumeCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#access_mode Volume#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.volume.VolumeCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#attachment_mode Volume#attachment_mode}

---

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-nomad.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeConfig(
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
  access_mode: str = None,
  attachment_mode: str = None,
  capability: typing.Union[IResolvable, typing.List[VolumeCapability]] = None,
  context: typing.Mapping[str] = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  mount_options: VolumeMountOptions = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None,
  secrets: typing.Mapping[str] = None,
  topology_request: VolumeTopologyRequest = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.externalId">external_id</a></code> | <code>str</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.name">name</a></code> | <code>str</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.volumeId">volume_id</a></code> | <code>str</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.accessMode">access_mode</a></code> | <code>str</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | The storage API that will be used by the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.context">context</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.secrets">secrets</a></code> | <code>typing.Mapping[str]</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.topologyRequest">topology_request</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeConfig.property.type">type</a></code> | <code>str</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.volume.VolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.volume.VolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.volume.VolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.volume.VolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.volume.VolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.volume.VolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.volume.VolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-nomad.volume.VolumeConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#external_id Volume#external_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.volume.VolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#name Volume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.volume.VolumeConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#plugin_id Volume#plugin_id}

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-nomad.volume.VolumeConfig.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#volume_id Volume#volume_id}

---

##### `access_mode`<sup>Optional</sup> <a name="access_mode" id="@cdktf/provider-nomad.volume.VolumeConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#access_mode Volume#access_mode}

---

##### `attachment_mode`<sup>Optional</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.volume.VolumeConfig.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#attachment_mode Volume#attachment_mode}

---

##### `capability`<sup>Optional</sup> <a name="capability" id="@cdktf/provider-nomad.volume.VolumeConfig.property.capability"></a>

```python
capability: typing.Union[IResolvable, typing.List[VolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#capability Volume#capability}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-nomad.volume.VolumeConfig.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#context Volume#context}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.volume.VolumeConfig.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#deregister_on_destroy Volume#deregister_on_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.volume.VolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount_options`<sup>Optional</sup> <a name="mount_options" id="@cdktf/provider-nomad.volume.VolumeConfig.property.mountOptions"></a>

```python
mount_options: VolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#mount_options Volume#mount_options}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.volume.VolumeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#namespace Volume#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.volume.VolumeConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#parameters Volume#parameters}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-nomad.volume.VolumeConfig.property.secrets"></a>

```python
secrets: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#secrets Volume#secrets}

---

##### `topology_request`<sup>Optional</sup> <a name="topology_request" id="@cdktf/provider-nomad.volume.VolumeConfig.property.topologyRequest"></a>

```python
topology_request: VolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#topology_request Volume#topology_request}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-nomad.volume.VolumeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#type Volume#type}

---

### VolumeMountOptions <a name="VolumeMountOptions" id="@cdktf/provider-nomad.volume.VolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeMountOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeMountOptions(
  fs_type: str = None,
  mount_flags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions.property.fsType">fs_type</a></code> | <code>str</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | The flags passed to mount. |

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-nomad.volume.VolumeMountOptions.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#fs_type Volume#fs_type}

---

##### `mount_flags`<sup>Optional</sup> <a name="mount_flags" id="@cdktf/provider-nomad.volume.VolumeMountOptions.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#mount_flags Volume#mount_flags}

---

### VolumeTopologies <a name="VolumeTopologies" id="@cdktf/provider-nomad.volume.VolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologies.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologies()
```


### VolumeTopologyRequest <a name="VolumeTopologyRequest" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequest(
  required: VolumeTopologyRequestRequired = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequest.property.required"></a>

```python
required: VolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#required Volume#required}

---

### VolumeTopologyRequestRequired <a name="VolumeTopologyRequestRequired" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestRequired(
  topology: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.property.topology">topology</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]</code> | topology block. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired.property.topology"></a>

```python
topology: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#topology Volume#topology}

---

### VolumeTopologyRequestRequiredTopology <a name="VolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestRequiredTopology(
  segments: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | Define attributes for the topology request. |

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#segments Volume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### VolumeCapabilityList <a name="VolumeCapabilityList" id="@cdktf/provider-nomad.volume.VolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeCapabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VolumeCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]]

---


### VolumeCapabilityOutputReference <a name="VolumeCapabilityOutputReference" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VolumeCapability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.volume.VolumeCapability">VolumeCapability</a>]

---


### VolumeMountOptionsOutputReference <a name="VolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetMountFlags">reset_mount_flags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_mount_flags` <a name="reset_mount_flags" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.resetMountFlags"></a>

```python
def reset_mount_flags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlagsInput">mount_flags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlags">mount_flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `mount_flags_input`<sup>Optional</sup> <a name="mount_flags_input" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```python
mount_flags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `mount_flags`<sup>Required</sup> <a name="mount_flags" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.mountFlags"></a>

```python
mount_flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeMountOptions">VolumeMountOptions</a>

---


### VolumeTopologiesList <a name="VolumeTopologiesList" id="@cdktf/provider-nomad.volume.VolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VolumeTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VolumeTopologiesOutputReference <a name="VolumeTopologiesOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.segments">segments</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologies">VolumeTopologies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.segments"></a>

```python
segments: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeTopologiesOutputReference.property.internalValue"></a>

```python
internal_value: VolumeTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologies">VolumeTopologies</a>

---


### VolumeTopologyRequestOutputReference <a name="VolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired">put_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_required` <a name="put_required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired"></a>

```python
def put_required(
  topology: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.putRequired.parameter.topology"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/volume#topology Volume#topology}

---

##### `reset_required` <a name="reset_required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference">VolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.requiredInput">required_input</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.required"></a>

```python
required: VolumeTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference">VolumeTopologyRequestRequiredOutputReference</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.requiredInput"></a>

```python
required_input: VolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestOutputReference.property.internalValue"></a>

```python
internal_value: VolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequest">VolumeTopologyRequest</a>

---


### VolumeTopologyRequestRequiredOutputReference <a name="VolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestRequiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology">put_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_topology` <a name="put_topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```python
def put_topology(
  value: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topology">topology</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList">VolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topologyInput">topology_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```python
topology: VolumeTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList">VolumeTopologyRequestRequiredTopologyList</a>

---

##### `topology_input`<sup>Optional</sup> <a name="topology_input" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```python
topology_input: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```python
internal_value: VolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequired">VolumeTopologyRequestRequired</a>

---


### VolumeTopologyRequestRequiredTopologyList <a name="VolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestRequiredTopologyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VolumeTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VolumeTopologyRequestRequiredTopology]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]]

---


### VolumeTopologyRequestRequiredTopologyOutputReference <a name="VolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import volume

volume.VolumeTopologyRequestRequiredTopologyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">segments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segments">segments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `segments_input`<sup>Optional</sup> <a name="segments_input" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```python
segments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```python
segments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VolumeTopologyRequestRequiredTopology]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.volume.VolumeTopologyRequestRequiredTopology">VolumeTopologyRequestRequiredTopology</a>]

---



