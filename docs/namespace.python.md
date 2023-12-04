# `namespace` Submodule <a name="`namespace` Submodule" id="@cdktf/provider-nomad.namespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Namespace <a name="Namespace" id="@cdktf/provider-nomad.namespace.Namespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace nomad_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.Namespace.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.Namespace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  capabilities: NamespaceCapabilities = None,
  description: str = None,
  id: str = None,
  meta: typing.Mapping[str] = None,
  node_pool_config: NamespaceNodePoolConfig = None,
  quota: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.quota">quota</a></code> | <code>str</code> | Quota to set for this namespace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.name"></a>

- *Type:* str

Unique name for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#name Namespace#name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#capabilities Namespace#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.description"></a>

- *Type:* str

Description for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#description Namespace#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#meta Namespace#meta}

---

##### `node_pool_config`<sup>Optional</sup> <a name="node_pool_config" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.nodePoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#node_pool_config Namespace#node_pool_config}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.Namespace.Initializer.parameter.quota"></a>

- *Type:* str

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#quota Namespace#quota}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig">put_node_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig">reset_node_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.resetQuota">reset_quota</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.namespace.Namespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.namespace.Namespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.namespace.Namespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.namespace.Namespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.namespace.Namespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.namespace.Namespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.namespace.Namespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.namespace.Namespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-nomad.namespace.Namespace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.namespace.Namespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.Namespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-nomad.namespace.Namespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.namespace.Namespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.namespace.Namespace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-nomad.namespace.Namespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capabilities` <a name="put_capabilities" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities"></a>

```python
def put_capabilities(
  disabled_task_drivers: typing.List[str] = None,
  enabled_task_drivers: typing.List[str] = None
) -> None
```

###### `disabled_task_drivers`<sup>Optional</sup> <a name="disabled_task_drivers" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities.parameter.disabledTaskDrivers"></a>

- *Type:* typing.List[str]

Disabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#disabled_task_drivers Namespace#disabled_task_drivers}

---

###### `enabled_task_drivers`<sup>Optional</sup> <a name="enabled_task_drivers" id="@cdktf/provider-nomad.namespace.Namespace.putCapabilities.parameter.enabledTaskDrivers"></a>

- *Type:* typing.List[str]

Enabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#enabled_task_drivers Namespace#enabled_task_drivers}

---

##### `put_node_pool_config` <a name="put_node_pool_config" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig"></a>

```python
def put_node_pool_config(
  allowed: typing.List[str] = None,
  default: str = None,
  denied: typing.List[str] = None
) -> None
```

###### `allowed`<sup>Optional</sup> <a name="allowed" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig.parameter.allowed"></a>

- *Type:* typing.List[str]

The list of node pools allowed to be used in this namespace. Cannot be used with denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#allowed Namespace#allowed}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig.parameter.default"></a>

- *Type:* str

The node pool to use when none are specified in the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#default Namespace#default}

---

###### `denied`<sup>Optional</sup> <a name="denied" id="@cdktf/provider-nomad.namespace.Namespace.putNodePoolConfig.parameter.denied"></a>

- *Type:* typing.List[str]

The list of node pools not allowed to be used in this namespace. Cannot be used with allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#denied Namespace#denied}

---

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktf/provider-nomad.namespace.Namespace.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-nomad.namespace.Namespace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.namespace.Namespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-nomad.namespace.Namespace.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_node_pool_config` <a name="reset_node_pool_config" id="@cdktf/provider-nomad.namespace.Namespace.resetNodePoolConfig"></a>

```python
def reset_node_pool_config() -> None
```

##### `reset_quota` <a name="reset_quota" id="@cdktf/provider-nomad.namespace.Namespace.resetQuota"></a>

```python
def reset_quota() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.Namespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.Namespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.Namespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.namespace.Namespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.Namespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Namespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Namespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Namespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput">capabilities_input</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput">node_pool_config_input</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quotaInput">quota_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.quota">quota</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.namespace.Namespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.namespace.Namespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.Namespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.namespace.Namespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.namespace.Namespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.Namespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.Namespace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.namespace.Namespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.namespace.Namespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.Namespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.Namespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.Namespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilities"></a>

```python
capabilities: NamespaceCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference">NamespaceCapabilitiesOutputReference</a>

---

##### `node_pool_config`<sup>Required</sup> <a name="node_pool_config" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfig"></a>

```python
node_pool_config: NamespaceNodePoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference">NamespaceNodePoolConfigOutputReference</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-nomad.namespace.Namespace.property.capabilitiesInput"></a>

```python
capabilities_input: NamespaceCapabilities
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-nomad.namespace.Namespace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.namespace.Namespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-nomad.namespace.Namespace.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.namespace.Namespace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_pool_config_input`<sup>Optional</sup> <a name="node_pool_config_input" id="@cdktf/provider-nomad.namespace.Namespace.property.nodePoolConfigInput"></a>

```python
node_pool_config_input: NamespaceNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-nomad.namespace.Namespace.property.quotaInput"></a>

```python
quota_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.namespace.Namespace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.namespace.Namespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.Namespace.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.Namespace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.Namespace.property.quota"></a>

```python
quota: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.namespace.Namespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NamespaceCapabilities <a name="NamespaceCapabilities" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.NamespaceCapabilities(
  disabled_task_drivers: typing.List[str] = None,
  enabled_task_drivers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers">disabled_task_drivers</a></code> | <code>typing.List[str]</code> | Disabled task drivers for the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers">enabled_task_drivers</a></code> | <code>typing.List[str]</code> | Enabled task drivers for the namespace. |

---

##### `disabled_task_drivers`<sup>Optional</sup> <a name="disabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.disabledTaskDrivers"></a>

```python
disabled_task_drivers: typing.List[str]
```

- *Type:* typing.List[str]

Disabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#disabled_task_drivers Namespace#disabled_task_drivers}

---

##### `enabled_task_drivers`<sup>Optional</sup> <a name="enabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilities.property.enabledTaskDrivers"></a>

```python
enabled_task_drivers: typing.List[str]
```

- *Type:* typing.List[str]

Enabled task drivers for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#enabled_task_drivers Namespace#enabled_task_drivers}

---

### NamespaceConfig <a name="NamespaceConfig" id="@cdktf/provider-nomad.namespace.NamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.NamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  capabilities: NamespaceCapabilities = None,
  description: str = None,
  id: str = None,
  meta: typing.Mapping[str] = None,
  node_pool_config: NamespaceNodePoolConfig = None,
  quota: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.name">name</a></code> | <code>str</code> | Unique name for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.description">description</a></code> | <code>str</code> | Description for this namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Metadata associated with the namespace. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota">quota</a></code> | <code>str</code> | Quota to set for this namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#name Namespace#name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.capabilities"></a>

```python
capabilities: NamespaceCapabilities
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#capabilities Namespace#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#description Namespace#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#id Namespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata associated with the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#meta Namespace#meta}

---

##### `node_pool_config`<sup>Optional</sup> <a name="node_pool_config" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.nodePoolConfig"></a>

```python
node_pool_config: NamespaceNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#node_pool_config Namespace#node_pool_config}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-nomad.namespace.NamespaceConfig.property.quota"></a>

```python
quota: str
```

- *Type:* str

Quota to set for this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#quota Namespace#quota}

---

### NamespaceNodePoolConfig <a name="NamespaceNodePoolConfig" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.NamespaceNodePoolConfig(
  allowed: typing.List[str] = None,
  default: str = None,
  denied: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed">allowed</a></code> | <code>typing.List[str]</code> | The list of node pools allowed to be used in this namespace. Cannot be used with denied. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default">default</a></code> | <code>str</code> | The node pool to use when none are specified in the job. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied">denied</a></code> | <code>typing.List[str]</code> | The list of node pools not allowed to be used in this namespace. Cannot be used with allowed. |

---

##### `allowed`<sup>Optional</sup> <a name="allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.allowed"></a>

```python
allowed: typing.List[str]
```

- *Type:* typing.List[str]

The list of node pools allowed to be used in this namespace. Cannot be used with denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#allowed Namespace#allowed}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.default"></a>

```python
default: str
```

- *Type:* str

The node pool to use when none are specified in the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#default Namespace#default}

---

##### `denied`<sup>Optional</sup> <a name="denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig.property.denied"></a>

```python
denied: typing.List[str]
```

- *Type:* typing.List[str]

The list of node pools not allowed to be used in this namespace. Cannot be used with allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/namespace#denied Namespace#denied}

---

## Classes <a name="Classes" id="Classes"></a>

### NamespaceCapabilitiesOutputReference <a name="NamespaceCapabilitiesOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.NamespaceCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers">reset_disabled_task_drivers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers">reset_enabled_task_drivers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled_task_drivers` <a name="reset_disabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetDisabledTaskDrivers"></a>

```python
def reset_disabled_task_drivers() -> None
```

##### `reset_enabled_task_drivers` <a name="reset_enabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.resetEnabledTaskDrivers"></a>

```python
def reset_enabled_task_drivers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput">disabled_task_drivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput">enabled_task_drivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers">disabled_task_drivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers">enabled_task_drivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_task_drivers_input`<sup>Optional</sup> <a name="disabled_task_drivers_input" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDriversInput"></a>

```python
disabled_task_drivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_task_drivers_input`<sup>Optional</sup> <a name="enabled_task_drivers_input" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDriversInput"></a>

```python
enabled_task_drivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disabled_task_drivers`<sup>Required</sup> <a name="disabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.disabledTaskDrivers"></a>

```python
disabled_task_drivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_task_drivers`<sup>Required</sup> <a name="enabled_task_drivers" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.enabledTaskDrivers"></a>

```python
enabled_task_drivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.namespace.NamespaceCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: NamespaceCapabilities
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceCapabilities">NamespaceCapabilities</a>

---


### NamespaceNodePoolConfigOutputReference <a name="NamespaceNodePoolConfigOutputReference" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import namespace

namespace.NamespaceNodePoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed">reset_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied">reset_denied</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed` <a name="reset_allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetAllowed"></a>

```python
def reset_allowed() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_denied` <a name="reset_denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.resetDenied"></a>

```python
def reset_denied() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput">allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput">denied_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed">allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied">denied</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_input`<sup>Optional</sup> <a name="allowed_input" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowedInput"></a>

```python
allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `denied_input`<sup>Optional</sup> <a name="denied_input" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.deniedInput"></a>

```python
denied_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed`<sup>Required</sup> <a name="allowed" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.allowed"></a>

```python
allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `denied`<sup>Required</sup> <a name="denied" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.denied"></a>

```python
denied: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.namespace.NamespaceNodePoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: NamespaceNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-nomad.namespace.NamespaceNodePoolConfig">NamespaceNodePoolConfig</a>

---



