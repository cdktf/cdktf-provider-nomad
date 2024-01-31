# `dataNomadAclTokens` Submodule <a name="`dataNomadAclTokens` Submodule" id="@cdktf/provider-nomad.dataNomadAclTokens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadAclTokens <a name="DataNomadAclTokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens nomad_acl_tokens}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokens(
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
  prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.resetPrefix"></a>

```python
def reset_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNomadAclTokens resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokens.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokens.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokens.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokens.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNomadAclTokens resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNomadAclTokens to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNomadAclTokens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadAclTokens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.aclTokens">acl_tokens</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList">DataNomadAclTokensAclTokensList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acl_tokens`<sup>Required</sup> <a name="acl_tokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.aclTokens"></a>

```python
acl_tokens: DataNomadAclTokensAclTokensList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList">DataNomadAclTokensAclTokensList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokens.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadAclTokensAclTokens <a name="DataNomadAclTokensAclTokens" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokens()
```


### DataNomadAclTokensAclTokensRoles <a name="DataNomadAclTokensAclTokensRoles" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokensRoles()
```


### DataNomadAclTokensConfig <a name="DataNomadAclTokensConfig" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#id DataNomadAclTokens#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/data-sources/acl_tokens#prefix DataNomadAclTokens#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataNomadAclTokensAclTokensList <a name="DataNomadAclTokensAclTokensList" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokensList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNomadAclTokensAclTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNomadAclTokensAclTokensOutputReference <a name="DataNomadAclTokensAclTokensOutputReference" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.accessorId">accessor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.global">global</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList">DataNomadAclTokensAclTokensRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens">DataNomadAclTokensAclTokens</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accessor_id`<sup>Required</sup> <a name="accessor_id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.accessorId"></a>

```python
accessor_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.global"></a>

```python
global: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.roles"></a>

```python
roles: DataNomadAclTokensAclTokensRolesList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList">DataNomadAclTokensAclTokensRolesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensOutputReference.property.internalValue"></a>

```python
internal_value: DataNomadAclTokensAclTokens
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokens">DataNomadAclTokensAclTokens</a>

---


### DataNomadAclTokensAclTokensRolesList <a name="DataNomadAclTokensAclTokensRolesList" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNomadAclTokensAclTokensRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataNomadAclTokensAclTokensRolesOutputReference <a name="DataNomadAclTokensAclTokensRolesOutputReference" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import data_nomad_acl_tokens

dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles">DataNomadAclTokensAclTokensRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataNomadAclTokensAclTokensRoles
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadAclTokens.DataNomadAclTokensAclTokensRoles">DataNomadAclTokensAclTokensRoles</a>

---



