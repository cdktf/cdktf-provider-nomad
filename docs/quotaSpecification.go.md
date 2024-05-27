# `quotaSpecification` Submodule <a name="`quotaSpecification` Submodule" id="@cdktf/provider-nomad.quotaSpecification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaSpecification <a name="QuotaSpecification" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification nomad_quota_specification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.NewQuotaSpecification(scope Construct, id *string, config QuotaSpecificationConfig) QuotaSpecification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig">QuotaSpecificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits"></a>

```go
func PutLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.putLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.QuotaSpecification_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.QuotaSpecification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.QuotaSpecification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.QuotaSpecification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuotaSpecification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuotaSpecification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuotaSpecification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuotaSpecification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limits"></a>

```go
func Limits() QuotaSpecificationLimitsList
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList">QuotaSpecificationLimitsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaSpecificationConfig <a name="QuotaSpecificationConfig" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

&quotaspecification.QuotaSpecificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Limits: interface{},
	Name: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits">Limits</a></code> | <code>interface{}</code> | limits block. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description">Description</a></code> | <code>*string</code> | Description for this quota specification. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#id QuotaSpecification#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.limits"></a>

```go
Limits interface{}
```

- *Type:* interface{}

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#limits QuotaSpecification#limits}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#name QuotaSpecification#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description for this quota specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#description QuotaSpecification#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#id QuotaSpecification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### QuotaSpecificationLimits <a name="QuotaSpecificationLimits" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

&quotaspecification.QuotaSpecificationLimits {
	Region: *string,
	RegionLimit: github.com/cdktf/cdktf-provider-nomad-go/nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region">Region</a></code> | <code>*string</code> | Region in which this limit has affect. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit">RegionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | region_limit block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region in which this limit has affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#region QuotaSpecification#region}

---

##### `RegionLimit`<sup>Required</sup> <a name="RegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimits.property.regionLimit"></a>

```go
RegionLimit QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

region_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#region_limit QuotaSpecification#region_limit}

---

### QuotaSpecificationLimitsRegionLimit <a name="QuotaSpecificationLimitsRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

&quotaspecification.QuotaSpecificationLimitsRegionLimit {
	Cpu: *f64,
	MemoryMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu">Cpu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.cpu"></a>

```go
Cpu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#cpu QuotaSpecification#cpu}.

---

##### `MemoryMb`<sup>Optional</sup> <a name="MemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit.property.memoryMb"></a>

```go
MemoryMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuotaSpecificationLimitsList <a name="QuotaSpecificationLimitsList" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.NewQuotaSpecificationLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuotaSpecificationLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get"></a>

```go
func Get(index *f64) QuotaSpecificationLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuotaSpecificationLimitsOutputReference <a name="QuotaSpecificationLimitsOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.NewQuotaSpecificationLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuotaSpecificationLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit">PutRegionLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRegionLimit` <a name="PutRegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit"></a>

```go
func PutRegionLimit(value QuotaSpecificationLimitsRegionLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.putRegionLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit">RegionLimit</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput">RegionLimitInput</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionLimit`<sup>Required</sup> <a name="RegionLimit" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimit"></a>

```go
func RegionLimit() QuotaSpecificationLimitsRegionLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference">QuotaSpecificationLimitsRegionLimitOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RegionLimitInput`<sup>Optional</sup> <a name="RegionLimitInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.regionLimitInput"></a>

```go
func RegionLimitInput() QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuotaSpecificationLimitsRegionLimitOutputReference <a name="QuotaSpecificationLimitsRegionLimitOutputReference" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/quotaspecification"

quotaspecification.NewQuotaSpecificationLimitsRegionLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuotaSpecificationLimitsRegionLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb">ResetMemoryMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemoryMb` <a name="ResetMemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.resetMemoryMb"></a>

```go
func ResetMemoryMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput">CpuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput">MemoryMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu">Cpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb">MemoryMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpuInput"></a>

```go
func CpuInput() *f64
```

- *Type:* *f64

---

##### `MemoryMbInput`<sup>Optional</sup> <a name="MemoryMbInput" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMbInput"></a>

```go
func MemoryMbInput() *f64
```

- *Type:* *f64

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.cpu"></a>

```go
func Cpu() *f64
```

- *Type:* *f64

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.memoryMb"></a>

```go
func MemoryMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() QuotaSpecificationLimitsRegionLimit
```

- *Type:* <a href="#@cdktf/provider-nomad.quotaSpecification.QuotaSpecificationLimitsRegionLimit">QuotaSpecificationLimitsRegionLimit</a>

---



