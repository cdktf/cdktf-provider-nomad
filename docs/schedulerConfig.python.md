# `nomad_scheduler_config`

Refer to the Terraform Registory for docs: [`nomad_scheduler_config`](https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config).

# `schedulerConfig` Submodule <a name="`schedulerConfig` Submodule" id="@cdktf/provider-nomad.schedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerConfig <a name="SchedulerConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config nomad_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  memory_oversubscription_enabled: typing.Union[bool, IResolvable] = None,
  preemption_config: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  scheduler_algorithm: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.memoryOversubscriptionEnabled">memory_oversubscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.preemptionConfig">preemption_config</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.schedulerAlgorithm">scheduler_algorithm</a></code> | <code>str</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_oversubscription_enabled`<sup>Optional</sup> <a name="memory_oversubscription_enabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.memoryOversubscriptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `preemption_config`<sup>Optional</sup> <a name="preemption_config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.preemptionConfig"></a>

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `scheduler_algorithm`<sup>Optional</sup> <a name="scheduler_algorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.schedulerAlgorithm"></a>

- *Type:* str

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled">reset_memory_oversubscription_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig">reset_preemption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm">reset_scheduler_algorithm</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_memory_oversubscription_enabled` <a name="reset_memory_oversubscription_enabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled"></a>

```python
def reset_memory_oversubscription_enabled() -> None
```

##### `reset_preemption_config` <a name="reset_preemption_config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig"></a>

```python
def reset_preemption_config() -> None
```

##### `reset_scheduler_algorithm` <a name="reset_scheduler_algorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm"></a>

```python
def reset_scheduler_algorithm() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SchedulerConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput">memory_oversubscription_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput">preemption_config_input</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput">scheduler_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled">memory_oversubscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig">preemption_config</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm">scheduler_algorithm</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `memory_oversubscription_enabled_input`<sup>Optional</sup> <a name="memory_oversubscription_enabled_input" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput"></a>

```python
memory_oversubscription_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preemption_config_input`<sup>Optional</sup> <a name="preemption_config_input" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput"></a>

```python
preemption_config_input: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `scheduler_algorithm_input`<sup>Optional</sup> <a name="scheduler_algorithm_input" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput"></a>

```python
scheduler_algorithm_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_oversubscription_enabled`<sup>Required</sup> <a name="memory_oversubscription_enabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled"></a>

```python
memory_oversubscription_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preemption_config`<sup>Required</sup> <a name="preemption_config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig"></a>

```python
preemption_config: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `scheduler_algorithm`<sup>Required</sup> <a name="scheduler_algorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm"></a>

```python
scheduler_algorithm: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerConfigConfig <a name="SchedulerConfigConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import scheduler_config

schedulerConfig.SchedulerConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  memory_oversubscription_enabled: typing.Union[bool, IResolvable] = None,
  preemption_config: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  scheduler_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled">memory_oversubscription_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig">preemption_config</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm">scheduler_algorithm</a></code> | <code>str</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memory_oversubscription_enabled`<sup>Optional</sup> <a name="memory_oversubscription_enabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled"></a>

```python
memory_oversubscription_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `preemption_config`<sup>Optional</sup> <a name="preemption_config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig"></a>

```python
preemption_config: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `scheduler_algorithm`<sup>Optional</sup> <a name="scheduler_algorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm"></a>

```python
scheduler_algorithm: str
```

- *Type:* str

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---



