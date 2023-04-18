# `nomad_quota_specification`

Refer to the Terraform Registory for docs: [`nomad_quota_specification`](https://www.terraform.io/docs/providers/nomad/r/quota_specification).

# `quotaSpecification` Submodule <a name="`quotaSpecification` Submodule" id="@cdktf/provider-nomad.quotaSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaSpecification <a name="QuotaSpecification" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification"></a>

Represents a {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification nomad_quota_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecification(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  limits: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]],
  name: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.limits">limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]</code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#id QuotaSpecification#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.limits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#limits QuotaSpecification#limits}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.name"></a>

- *Type:* str

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#name QuotaSpecification#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.description"></a>

- *Type:* str

Description for this quota specification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#description QuotaSpecification#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limits` <a name="put_limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits"></a>

```python
def put_limits(
  value: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput">limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits"></a>

```python
limits: QuotaSpecificationLimitsList
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput"></a>

```python
limits_input: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaSpecificationConfig <a name="QuotaSpecificationConfig" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  limits: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]],
  name: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits">limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]</code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name">name</a></code> | <code>str</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description">description</a></code> | <code>str</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#id QuotaSpecification#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits"></a>

```python
limits: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#limits QuotaSpecification#limits}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#name QuotaSpecification#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for this quota specification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#description QuotaSpecification#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### QuotaSpecificationLimits <a name="QuotaSpecificationLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationLimits(
  region: str,
  region_limit: QuotaSpecificationLimitsRegionLimit
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region">region</a></code> | <code>str</code> | Region in which this limit has affect. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit">region_limit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | region_limit block. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region"></a>

```python
region: str
```

- *Type:* str

Region in which this limit has affect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#region QuotaSpecification#region}

---

##### `region_limit`<sup>Required</sup> <a name="region_limit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit"></a>

```python
region_limit: QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

region_limit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#region_limit QuotaSpecification#region_limit}

---

### QuotaSpecificationLimitsRegionLimit <a name="QuotaSpecificationLimitsRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationLimitsRegionLimit(
  cpu: typing.Union[int, float] = None,
  memory_mb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#cpu QuotaSpecification#cpu}. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb">memory_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#memory_mb QuotaSpecification#memory_mb}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#cpu QuotaSpecification#cpu}.

---

##### `memory_mb`<sup>Optional</sup> <a name="memory_mb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb"></a>

```python
memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuotaSpecificationLimitsList <a name="QuotaSpecificationLimitsList" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuotaSpecificationLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuotaSpecificationLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>]]

---


### QuotaSpecificationLimitsOutputReference <a name="QuotaSpecificationLimitsOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit">put_region_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_region_limit` <a name="put_region_limit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit"></a>

```python
def put_region_limit(
  cpu: typing.Union[int, float] = None,
  memory_mb: typing.Union[int, float] = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#cpu QuotaSpecification#cpu}.

---

###### `memory_mb`<sup>Optional</sup> <a name="memory_mb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.memoryMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit">region_limit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput">region_limit_input</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_limit`<sup>Required</sup> <a name="region_limit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit"></a>

```python
region_limit: QuotaSpecificationLimitsRegionLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region_limit_input`<sup>Optional</sup> <a name="region_limit_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput"></a>

```python
region_limit_input: QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[QuotaSpecificationLimits, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits">QuotaSpecificationLimits</a>, cdktf.IResolvable]

---


### QuotaSpecificationLimitsRegionLimitOutputReference <a name="QuotaSpecificationLimitsRegionLimitOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import quota_specification

quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb">reset_memory_mb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_memory_mb` <a name="reset_memory_mb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb"></a>

```python
def reset_memory_mb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput">memory_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb">memory_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_mb_input`<sup>Optional</sup> <a name="memory_mb_input" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput"></a>

```python
memory_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_mb`<sup>Required</sup> <a name="memory_mb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb"></a>

```python
memory_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue"></a>

```python
internal_value: QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---



