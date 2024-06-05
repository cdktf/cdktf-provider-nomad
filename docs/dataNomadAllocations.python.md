# `dataNomadAllocations` Submodule <a name="`dataNomadAllocations` Submodule" id="@cdktf/provider-nomad.dataNomadAllocations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadAllocations <a name="DataNomadAllocations" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations nomad_allocations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  namespace: str = None,
  prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Specifies the expression used to filter the results. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#id DataNomadAllocations#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to search for allocations in. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Specifies a string to filter node pools based on a name prefix. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.filter"></a>

- *Type:* str

Specifies the expression used to filter the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#filter DataNomadAllocations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#id DataNomadAllocations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the namespace to search for allocations in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#namespace DataNomadAllocations#namespace}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.Initializer.parameter.prefix"></a>

- *Type:* str

Specifies a string to filter node pools based on a name prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#prefix DataNomadAllocations#prefix}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.resetPrefix"></a>

```python
def reset_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNomadAllocations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNomadAllocations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNomadAllocations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNomadAllocations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadAllocations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.allocations">allocations</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList">DataNomadAllocationsAllocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.allocations"></a>

```python
allocations: DataNomadAllocationsAllocationsList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList">DataNomadAllocationsAllocationsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadAllocationsAllocations <a name="DataNomadAllocationsAllocations" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocations.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocationsAllocations()
```


### DataNomadAllocationsConfig <a name="DataNomadAllocationsConfig" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  id: str = None,
  namespace: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.filter">filter</a></code> | <code>str</code> | Specifies the expression used to filter the results. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#id DataNomadAllocations#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to search for allocations in. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.prefix">prefix</a></code> | <code>str</code> | Specifies a string to filter node pools based on a name prefix. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Specifies the expression used to filter the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#filter DataNomadAllocations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#id DataNomadAllocations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to search for allocations in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#namespace DataNomadAllocations#namespace}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Specifies a string to filter node pools based on a name prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/allocations#prefix DataNomadAllocations#prefix}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNomadAllocationsAllocationsList <a name="DataNomadAllocationsAllocationsList" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocationsAllocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNomadAllocationsAllocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNomadAllocationsAllocationsOutputReference <a name="DataNomadAllocationsAllocationsOutputReference" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_allocations

dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.clientStatus">client_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.createIndex">create_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.createTime">create_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.desiredStatus">desired_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.evalId">eval_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.followupEvalId">followup_eval_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobVersion">job_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.modifyIndex">modify_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.modifyTime">modify_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nextAllocation">next_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.preemptedByAllocation">preempted_by_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.taskGroup">task_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocations">DataNomadAllocationsAllocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_status`<sup>Required</sup> <a name="client_status" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.clientStatus"></a>

```python
client_status: str
```

- *Type:* str

---

##### `create_index`<sup>Required</sup> <a name="create_index" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.createIndex"></a>

```python
create_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.createTime"></a>

```python
create_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_status`<sup>Required</sup> <a name="desired_status" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.desiredStatus"></a>

```python
desired_status: str
```

- *Type:* str

---

##### `eval_id`<sup>Required</sup> <a name="eval_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.evalId"></a>

```python
eval_id: str
```

- *Type:* str

---

##### `followup_eval_id`<sup>Required</sup> <a name="followup_eval_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.followupEvalId"></a>

```python
followup_eval_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `job_version`<sup>Required</sup> <a name="job_version" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.jobVersion"></a>

```python
job_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modify_index`<sup>Required</sup> <a name="modify_index" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.modifyIndex"></a>

```python
modify_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `modify_time`<sup>Required</sup> <a name="modify_time" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.modifyTime"></a>

```python
modify_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `next_allocation`<sup>Required</sup> <a name="next_allocation" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nextAllocation"></a>

```python
next_allocation: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `preempted_by_allocation`<sup>Required</sup> <a name="preempted_by_allocation" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.preemptedByAllocation"></a>

```python
preempted_by_allocation: str
```

- *Type:* str

---

##### `task_group`<sup>Required</sup> <a name="task_group" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.taskGroup"></a>

```python
task_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataNomadAllocationsAllocations
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAllocations.DataNomadAllocationsAllocations">DataNomadAllocationsAllocations</a>

---



