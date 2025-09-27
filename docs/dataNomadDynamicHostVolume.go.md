# `dataNomadDynamicHostVolume` Submodule <a name="`dataNomadDynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadDynamicHostVolume <a name="DataNomadDynamicHostVolume" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.NewDataNomadDynamicHostVolume(scope Construct, id *string, config DataNomadDynamicHostVolumeConfig) DataNomadDynamicHostVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig">DataNomadDynamicHostVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig">DataNomadDynamicHostVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadDynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.DataNomadDynamicHostVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.DataNomadDynamicHostVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.DataNomadDynamicHostVolume_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.DataNomadDynamicHostVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNomadDynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNomadDynamicHostVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNomadDynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadDynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList">DataNomadDynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityBytes">CapacityBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMaxBytes">CapacityMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMinBytes">CapacityMinBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList">DataNomadDynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodePool">NodePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capability"></a>

```go
func Capability() DataNomadDynamicHostVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList">DataNomadDynamicHostVolumeCapabilityList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `CapacityBytes`<sup>Required</sup> <a name="CapacityBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityBytes"></a>

```go
func CapacityBytes() *f64
```

- *Type:* *f64

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMax"></a>

```go
func CapacityMax() *string
```

- *Type:* *string

---

##### `CapacityMaxBytes`<sup>Required</sup> <a name="CapacityMaxBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMaxBytes"></a>

```go
func CapacityMaxBytes() *f64
```

- *Type:* *f64

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMin"></a>

```go
func CapacityMin() *string
```

- *Type:* *string

---

##### `CapacityMinBytes`<sup>Required</sup> <a name="CapacityMinBytes" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.capacityMinBytes"></a>

```go
func CapacityMinBytes() *f64
```

- *Type:* *f64

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.constraint"></a>

```go
func Constraint() DataNomadDynamicHostVolumeConstraintList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList">DataNomadDynamicHostVolumeConstraintList</a>

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.nodePool"></a>

```go
func NodePool() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadDynamicHostVolumeCapability <a name="DataNomadDynamicHostVolumeCapability" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

&datanomaddynamichostvolume.DataNomadDynamicHostVolumeCapability {

}
```


### DataNomadDynamicHostVolumeConfig <a name="DataNomadDynamicHostVolumeConfig" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

&datanomaddynamichostvolume.DataNomadDynamicHostVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Volume ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Volume namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Volume ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#id DataNomadDynamicHostVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/data-sources/dynamic_host_volume#namespace DataNomadDynamicHostVolume#namespace}

---

### DataNomadDynamicHostVolumeConstraint <a name="DataNomadDynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

&datanomaddynamichostvolume.DataNomadDynamicHostVolumeConstraint {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadDynamicHostVolumeCapabilityList <a name="DataNomadDynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.NewDataNomadDynamicHostVolumeCapabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNomadDynamicHostVolumeCapabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get"></a>

```go
func Get(index *f64) DataNomadDynamicHostVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataNomadDynamicHostVolumeCapabilityOutputReference <a name="DataNomadDynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.NewDataNomadDynamicHostVolumeCapabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNomadDynamicHostVolumeCapabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability">DataNomadDynamicHostVolumeCapability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```go
func AttachmentMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataNomadDynamicHostVolumeCapability
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeCapability">DataNomadDynamicHostVolumeCapability</a>

---


### DataNomadDynamicHostVolumeConstraintList <a name="DataNomadDynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.NewDataNomadDynamicHostVolumeConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNomadDynamicHostVolumeConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get"></a>

```go
func Get(index *f64) DataNomadDynamicHostVolumeConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataNomadDynamicHostVolumeConstraintOutputReference <a name="DataNomadDynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v10/datanomaddynamichostvolume"

datanomaddynamichostvolume.NewDataNomadDynamicHostVolumeConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNomadDynamicHostVolumeConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint">DataNomadDynamicHostVolumeConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() DataNomadDynamicHostVolumeConstraint
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadDynamicHostVolume.DataNomadDynamicHostVolumeConstraint">DataNomadDynamicHostVolumeConstraint</a>

---



