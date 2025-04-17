# `dynamicHostVolumeRegistration` Submodule <a name="`dynamicHostVolumeRegistration` Submodule" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolumeRegistration <a name="DynamicHostVolumeRegistration" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration nomad_dynamic_host_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]],
  host_path: str,
  name: str,
  node_id: str,
  capacity: str = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.hostPath">host_path</a></code> | <code>str</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.name">name</a></code> | <code>str</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.nodeId">node_id</a></code> | <code>str</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capacity">capacity</a></code> | <code>str</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capability"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.hostPath"></a>

- *Type:* str

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.name"></a>

- *Type:* str

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.nodeId"></a>

- *Type:* str

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.capacity"></a>

- *Type:* str

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.namespace"></a>

- *Type:* str

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability">put_capability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capability` <a name="put_capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability"></a>

```python
def put_capability(
  value: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.resetParameters"></a>

```python
def reset_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DynamicHostVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DynamicHostVolumeRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DynamicHostVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes">capacity_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes">capacity_max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes">capacity_min_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint">constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool">node_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId">plugin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput">capability_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput">host_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput">node_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath">host_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capability"></a>

```python
capability: DynamicHostVolumeRegistrationCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList">DynamicHostVolumeRegistrationCapabilityList</a>

---

##### `capacity_bytes`<sup>Required</sup> <a name="capacity_bytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityBytes"></a>

```python
capacity_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_max_bytes`<sup>Required</sup> <a name="capacity_max_bytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMaxBytes"></a>

```python
capacity_max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_min_bytes`<sup>Required</sup> <a name="capacity_min_bytes" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityMinBytes"></a>

```python
capacity_min_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.constraint"></a>

```python
constraint: DynamicHostVolumeRegistrationConstraintList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList">DynamicHostVolumeRegistrationConstraintList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `node_pool`<sup>Required</sup> <a name="node_pool" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodePool"></a>

```python
node_pool: str
```

- *Type:* str

---

##### `plugin_id`<sup>Required</sup> <a name="plugin_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.pluginId"></a>

```python
plugin_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `capability_input`<sup>Optional</sup> <a name="capability_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capabilityInput"></a>

```python
capability_input: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `host_path_input`<sup>Optional</sup> <a name="host_path_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPathInput"></a>

```python
host_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `node_id_input`<sup>Optional</sup> <a name="node_id_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeIdInput"></a>

```python
node_id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeRegistrationCapability <a name="DynamicHostVolumeRegistrationCapability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability(
  access_mode: str,
  attachment_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode">access_mode</a></code> | <code>str</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | An attachment mode available for the volume. |

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#access_mode DynamicHostVolumeRegistration#access_mode}

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#attachment_mode DynamicHostVolumeRegistration#attachment_mode}

---

### DynamicHostVolumeRegistrationConfig <a name="DynamicHostVolumeRegistrationConfig" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capability: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]],
  host_path: str,
  name: str,
  node_id: str,
  capacity: str = None,
  namespace: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability">capability</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath">host_path</a></code> | <code>str</code> | Host path. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name">name</a></code> | <code>str</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId">node_id</a></code> | <code>str</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity">capacity</a></code> | <code>str</code> | Provisioned capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace">namespace</a></code> | <code>str</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capability"></a>

```python
capability: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capability DynamicHostVolumeRegistration#capability}

---

##### `host_path`<sup>Required</sup> <a name="host_path" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.hostPath"></a>

```python
host_path: str
```

- *Type:* str

Host path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#host_path DynamicHostVolumeRegistration#host_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#name DynamicHostVolumeRegistration#name}

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#node_id DynamicHostVolumeRegistration#node_id}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

Provisioned capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#capacity DynamicHostVolumeRegistration#capacity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#namespace DynamicHostVolumeRegistration#namespace}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume_registration#parameters DynamicHostVolumeRegistration#parameters}

---

### DynamicHostVolumeRegistrationConstraint <a name="DynamicHostVolumeRegistrationConstraint" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint()
```


## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeRegistrationCapabilityList <a name="DynamicHostVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamicHostVolumeRegistrationCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DynamicHostVolumeRegistrationCapability]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]]

---


### DynamicHostVolumeRegistrationCapabilityOutputReference <a name="DynamicHostVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">attachment_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode">attachment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `attachment_mode_input`<sup>Optional</sup> <a name="attachment_mode_input" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```python
attachment_mode_input: str
```

- *Type:* str

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `attachment_mode`<sup>Required</sup> <a name="attachment_mode" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```python
attachment_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DynamicHostVolumeRegistrationCapability]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationCapability">DynamicHostVolumeRegistrationCapability</a>]

---


### DynamicHostVolumeRegistrationConstraintList <a name="DynamicHostVolumeRegistrationConstraintList" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DynamicHostVolumeRegistrationConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DynamicHostVolumeRegistrationConstraintOutputReference <a name="DynamicHostVolumeRegistrationConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import dynamic_host_volume_registration

dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraintOutputReference.property.internalValue"></a>

```python
internal_value: DynamicHostVolumeRegistrationConstraint
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolumeRegistration.DynamicHostVolumeRegistrationConstraint">DynamicHostVolumeRegistrationConstraint</a>

---



