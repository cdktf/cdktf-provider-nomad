# `dynamicHostVolume` Submodule <a name="`dynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolume <a name="DynamicHostVolume" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolume(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability: IResolvable | typing.List[DynamicHostVolumeCapability],
  name: str,
  plugin_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  constraint: IResolvable | typing.List[DynamicHostVolumeConstraint] = None,
  namespace: str = None,
  node_id: str = None,
  node_pool: str = None,
  parameters: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capability">capability</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.pluginId">plugin_id</a></code> | <code>str</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capacityMax">capacity_max</a></code> | <code>str</code> | Requested maximum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capacityMin">capacity_min</a></code> | <code>str</code> | Requested minimum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.constraint">constraint</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]</code> | constraint block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.nodeId">node_id</a></code> | <code>str</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.nodePool">node_pool</a></code> | <code>str</code> | Node pool. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capability"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.name"></a>

- *Type:* str

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.pluginId"></a>

- *Type:* str

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capacityMax"></a>

- *Type:* str

Requested maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.capacityMin"></a>

- *Type:* str

Requested minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.constraint"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.namespace"></a>

- *Type:* str

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.nodeId"></a>

- *Type:* str

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}

---

##### `node_pool`<sup>Optional</sup> <a name="node_pool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.nodePool"></a>

- *Type:* str

Node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint">put_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax">reset_capacity_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin">reset_capacity_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint">reset_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId">reset_node_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool">reset_node_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability"></a>

```python
def put_capability(
  value: IResolvable | typing.List[DynamicHostVolumeCapability]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]

---

##### `put_constraint` <a name="put_constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint"></a>

```python
def put_constraint(
  value: IResolvable | typing.List[DynamicHostVolumeConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]

---

##### `reset_capacity_max` <a name="reset_capacity_max" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax"></a>

```python
def reset_capacity_max() -> None
```

##### `reset_capacity_min` <a name="reset_capacity_min" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin"></a>

```python
def reset_capacity_min() -> None
```

##### `reset_constraint` <a name="reset_constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint"></a>

```python
def reset_constraint() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_node_id` <a name="reset_node_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId"></a>

```python
def reset_node_id() -> None
```

##### `reset_node_pool` <a name="reset_node_pool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool"></a>

```python
def reset_node_pool() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters"></a>

```python
def reset_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DynamicHostVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes">capacity_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes">capacity_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes">capacity_min_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput">capability_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput">capacity_max_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput">capacity_min_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput">constraint_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput">node_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput">plugin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax">capacity_max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin">capacity_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool">node_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability"></a>

```python
capability: DynamicHostVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `capacity_bytes`<sup>Required</sup> <a name="capacity_bytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes"></a>

```python
capacity_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_max_bytes`<sup>Required</sup> <a name="capacity_max_bytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes"></a>

```python
capacity_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_min_bytes`<sup>Required</sup> <a name="capacity_min_bytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes"></a>

```python
capacity_min_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint"></a>

```python
constraint: DynamicHostVolumeConstraintList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a>

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput"></a>

```python
capability_input: IResolvable | typing.List[DynamicHostVolumeCapability]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]

---

##### `capacity_max_input`<sup>Optional</sup> <a name="capacity_max_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput"></a>

```python
capacity_max_input: str
```

- *Type:* str

---

##### `capacity_min_input`<sup>Optional</sup> <a name="capacity_min_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput"></a>

```python
capacity_min_input: str
```

- *Type:* str

---

##### `constraint_input`<sup>Optional</sup> <a name="constraint_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput"></a>

```python
constraint_input: IResolvable | typing.List[DynamicHostVolumeConstraint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `node_pool_input`<sup>Optional</sup> <a name="node_pool_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput"></a>

```python
node_pool_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id_input`<sup>Optional</sup> <a name="plugin_id_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput"></a>

```python
plugin_id_input: str
```

- *Type:* str

---

##### `capacity_max`<sup>Required</sup> <a name="capacity_max" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

---

##### `capacity_min`<sup>Required</sup> <a name="capacity_min" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `node_pool`<sup>Required</sup> <a name="node_pool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool"></a>

```python
node_pool: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeCapability <a name="DynamicHostVolumeCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode">access_mode</a></code> | <code>str</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | An attachment mode available for the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#access_mode DynamicHostVolume#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#attachment_mode DynamicHostVolume#attachment_mode}

---

### DynamicHostVolumeConfig <a name="DynamicHostVolumeConfig" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capability: IResolvable | typing.List[DynamicHostVolumeCapability],
  name: str,
  plugin_id: str,
  capacity_max: str = None,
  capacity_min: str = None,
  constraint: IResolvable | typing.List[DynamicHostVolumeConstraint] = None,
  namespace: str = None,
  node_id: str = None,
  node_pool: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability">capability</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name">name</a></code> | <code>str</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId">plugin_id</a></code> | <code>str</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax">capacity_max</a></code> | <code>str</code> | Requested maximum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin">capacity_min</a></code> | <code>str</code> | Requested minimum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint">constraint</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]</code> | constraint block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace">namespace</a></code> | <code>str</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId">node_id</a></code> | <code>str</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool">node_pool</a></code> | <code>str</code> | Node pool. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability"></a>

```python
capability: IResolvable | typing.List[DynamicHostVolumeCapability]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}

---

##### `capacity_max`<sup>Optional</sup> <a name="capacity_max" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax"></a>

```python
capacity_max: str
```

- *Type:* str

Requested maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}

---

##### `capacity_min`<sup>Optional</sup> <a name="capacity_min" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin"></a>

```python
capacity_min: str
```

- *Type:* str

Requested minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint"></a>

```python
constraint: IResolvable | typing.List[DynamicHostVolumeConstraint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}

---

##### `node_id`<sup>Optional</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}

---

##### `node_pool`<sup>Optional</sup> <a name="node_pool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool"></a>

```python
node_pool: str
```

- *Type:* str

Node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}

---

### DynamicHostVolumeConstraint <a name="DynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeConstraint(
  attribute: str,
  operator: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute">attribute</a></code> | <code>str</code> | An attribute to check to constrain volume placement. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator">operator</a></code> | <code>str</code> | The operator to use for comparison. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value">value</a></code> | <code>str</code> | The requested value of the attribute. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

An attribute to check to constrain volume placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#attribute DynamicHostVolume#attribute}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator"></a>

```python
operator: str
```

- *Type:* str

The operator to use for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#operator DynamicHostVolume#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value"></a>

```python
value: str
```

- *Type:* str

The requested value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/dynamic_host_volume#value DynamicHostVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeCapabilityList <a name="DynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamicHostVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamicHostVolumeCapability]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>]

---


### DynamicHostVolumeCapabilityOutputReference <a name="DynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamicHostVolumeCapability
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability">DynamicHostVolumeCapability</a>

---


### DynamicHostVolumeConstraintList <a name="DynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamicHostVolumeConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DynamicHostVolumeConstraint]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>]

---


### DynamicHostVolumeConstraintOutputReference <a name="DynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume

dynamicHostVolume.DynamicHostVolumeConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DynamicHostVolumeConstraint
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint">DynamicHostVolumeConstraint</a>

---



