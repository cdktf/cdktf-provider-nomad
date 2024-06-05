# `dataNomadNodePool` Submodule <a name="`dataNomadNodePool` Submodule" id="@cdktf/provider-nomad.dataNomadNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadNodePool <a name="DataNomadNodePool" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pool nomad_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.NewDataNomadNodePool(scope Construct, id *string, config DataNomadNodePoolConfig) DataNomadNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig">DataNomadNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig">DataNomadNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataNomadNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.DataNomadNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.DataNomadNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.DataNomadNodePool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.DataNomadNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataNomadNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataNomadNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataNomadNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataNomadNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.meta">Meta</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList">DataNomadNodePoolSchedulerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.meta"></a>

```go
func Meta() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.schedulerConfig"></a>

```go
func SchedulerConfig() DataNomadNodePoolSchedulerConfigList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList">DataNomadNodePoolSchedulerConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadNodePoolConfig <a name="DataNomadNodePoolConfig" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

&datanomadnodepool.DataNomadNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for this node pool. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pool#id DataNomadNodePool#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pool#name DataNomadNodePool#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/data-sources/node_pool#id DataNomadNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNomadNodePoolSchedulerConfig <a name="DataNomadNodePoolSchedulerConfig" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

&datanomadnodepool.DataNomadNodePoolSchedulerConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadNodePoolSchedulerConfigList <a name="DataNomadNodePoolSchedulerConfigList" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.NewDataNomadNodePoolSchedulerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNomadNodePoolSchedulerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.get"></a>

```go
func Get(index *f64) DataNomadNodePoolSchedulerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataNomadNodePoolSchedulerConfigOutputReference <a name="DataNomadNodePoolSchedulerConfigOutputReference" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/datanomadnodepool"

datanomadnodepool.NewDataNomadNodePoolSchedulerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNomadNodePoolSchedulerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.memoryOversubscription">MemoryOversubscription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.schedulerAlgorithm">SchedulerAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfig">DataNomadNodePoolSchedulerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryOversubscription`<sup>Required</sup> <a name="MemoryOversubscription" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.memoryOversubscription"></a>

```go
func MemoryOversubscription() *string
```

- *Type:* *string

---

##### `SchedulerAlgorithm`<sup>Required</sup> <a name="SchedulerAlgorithm" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.schedulerAlgorithm"></a>

```go
func SchedulerAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataNomadNodePoolSchedulerConfig
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadNodePool.DataNomadNodePoolSchedulerConfig">DataNomadNodePoolSchedulerConfig</a>

---



