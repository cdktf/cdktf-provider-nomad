# `data_nomad_plugin`

Refer to the Terraform Registory for docs: [`data_nomad_plugin`](https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin).

# `dataNomadPlugin` Submodule <a name="`dataNomadPlugin` Submodule" id="@cdktf/provider-nomad.dataNomadPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNomadPlugin <a name="DataNomadPlugin" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin nomad_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.NewDataNomadPlugin(scope Construct, id *string, config DataNomadPluginConfig) DataNomadPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig">DataNomadPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig">DataNomadPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetWaitForHealthy">ResetWaitForHealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetWaitForRegistration">ResetWaitForRegistration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetId"></a>

```go
func ResetId()
```

##### `ResetWaitForHealthy` <a name="ResetWaitForHealthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetWaitForHealthy"></a>

```go
func ResetWaitForHealthy()
```

##### `ResetWaitForRegistration` <a name="ResetWaitForRegistration" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.resetWaitForRegistration"></a>

```go
func ResetWaitForRegistration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.DataNomadPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.DataNomadPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.DataNomadPlugin_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllerRequired">ControllerRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllersExpected">ControllersExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllersHealthy">ControllersHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList">DataNomadPluginNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodesExpected">NodesExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodesHealthy">NodesHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginProvider">PluginProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginProviderVersion">PluginProviderVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForHealthyInput">WaitForHealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForRegistrationInput">WaitForRegistrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForHealthy">WaitForHealthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForRegistration">WaitForRegistration</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ControllerRequired`<sup>Required</sup> <a name="ControllerRequired" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllerRequired"></a>

```go
func ControllerRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ControllersExpected`<sup>Required</sup> <a name="ControllersExpected" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllersExpected"></a>

```go
func ControllersExpected() *f64
```

- *Type:* *f64

---

##### `ControllersHealthy`<sup>Required</sup> <a name="ControllersHealthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.controllersHealthy"></a>

```go
func ControllersHealthy() *f64
```

- *Type:* *f64

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodes"></a>

```go
func Nodes() DataNomadPluginNodesList
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList">DataNomadPluginNodesList</a>

---

##### `NodesExpected`<sup>Required</sup> <a name="NodesExpected" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodesExpected"></a>

```go
func NodesExpected() *f64
```

- *Type:* *f64

---

##### `NodesHealthy`<sup>Required</sup> <a name="NodesHealthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.nodesHealthy"></a>

```go
func NodesHealthy() *f64
```

- *Type:* *f64

---

##### `PluginProvider`<sup>Required</sup> <a name="PluginProvider" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginProvider"></a>

```go
func PluginProvider() *string
```

- *Type:* *string

---

##### `PluginProviderVersion`<sup>Required</sup> <a name="PluginProviderVersion" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginProviderVersion"></a>

```go
func PluginProviderVersion() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `WaitForHealthyInput`<sup>Optional</sup> <a name="WaitForHealthyInput" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForHealthyInput"></a>

```go
func WaitForHealthyInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForRegistrationInput`<sup>Optional</sup> <a name="WaitForRegistrationInput" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForRegistrationInput"></a>

```go
func WaitForRegistrationInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `WaitForHealthy`<sup>Required</sup> <a name="WaitForHealthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForHealthy"></a>

```go
func WaitForHealthy() interface{}
```

- *Type:* interface{}

---

##### `WaitForRegistration`<sup>Required</sup> <a name="WaitForRegistration" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.waitForRegistration"></a>

```go
func WaitForRegistration() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNomadPluginConfig <a name="DataNomadPluginConfig" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

&datanomadplugin.DataNomadPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PluginId: *string,
	Id: *string,
	WaitForHealthy: interface{},
	WaitForRegistration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin#id DataNomadPlugin#id}. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.waitForHealthy">WaitForHealthy</a></code> | <code>interface{}</code> | Wait for to be backed by a specified number of controllers. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.waitForRegistration">WaitForRegistration</a></code> | <code>interface{}</code> | Wait for the plugin to be registered in Noamd. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin#plugin_id DataNomadPlugin#plugin_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin#id DataNomadPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `WaitForHealthy`<sup>Optional</sup> <a name="WaitForHealthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.waitForHealthy"></a>

```go
WaitForHealthy interface{}
```

- *Type:* interface{}

Wait for to be backed by a specified number of controllers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin#wait_for_healthy DataNomadPlugin#wait_for_healthy}

---

##### `WaitForRegistration`<sup>Optional</sup> <a name="WaitForRegistration" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginConfig.property.waitForRegistration"></a>

```go
WaitForRegistration interface{}
```

- *Type:* interface{}

Wait for the plugin to be registered in Noamd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/plugin#wait_for_registration DataNomadPlugin#wait_for_registration}

---

### DataNomadPluginNodes <a name="DataNomadPluginNodes" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

&datanomadplugin.DataNomadPluginNodes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataNomadPluginNodesList <a name="DataNomadPluginNodesList" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.NewDataNomadPluginNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataNomadPluginNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.get"></a>

```go
func Get(index *f64) DataNomadPluginNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataNomadPluginNodesOutputReference <a name="DataNomadPluginNodesOutputReference" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v6/datanomadplugin"

datanomadplugin.NewDataNomadPluginNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataNomadPluginNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.healthy">Healthy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.healthyDescription">HealthyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodes">DataNomadPluginNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Healthy`<sup>Required</sup> <a name="Healthy" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.healthy"></a>

```go
func Healthy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HealthyDescription`<sup>Required</sup> <a name="HealthyDescription" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.healthyDescription"></a>

```go
func HealthyDescription() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataNomadPluginNodes
```

- *Type:* <a href="#@cdktf/provider-nomad.dataNomadPlugin.DataNomadPluginNodes">DataNomadPluginNodes</a>

---



