# `dynamicHostVolume` Submodule <a name="`dynamicHostVolume` Submodule" id="@cdktf/provider-nomad.dynamicHostVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicHostVolume <a name="DynamicHostVolume" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume nomad_dynamic_host_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.NewDynamicHostVolume(scope Construct, id *string, config DynamicHostVolumeConfig) DynamicHostVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig">DynamicHostVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint">PutConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax">ResetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin">ResetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId">ResetNodeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool">ResetNodePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability"></a>

```go
func PutCapability(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putCapability.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConstraint` <a name="PutConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint"></a>

```go
func PutConstraint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.putConstraint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityMax` <a name="ResetCapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMax"></a>

```go
func ResetCapacityMax()
```

##### `ResetCapacityMin` <a name="ResetCapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetCapacityMin"></a>

```go
func ResetCapacityMin()
```

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNodeId` <a name="ResetNodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodeId"></a>

```go
func ResetNodeId()
```

##### `ResetNodePool` <a name="ResetNodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetNodePool"></a>

```go
func ResetNodePool()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.resetParameters"></a>

```go
func ResetParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.DynamicHostVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.DynamicHostVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.DynamicHostVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.DynamicHostVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DynamicHostVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DynamicHostVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DynamicHostVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes">CapacityBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes">CapacityMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes">CapacityMinBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint">Constraint</a></code> | <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput">CapabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput">CapacityMaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput">CapacityMinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput">ConstraintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput">NodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput">NodePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId">NodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool">NodePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capability"></a>

```go
func Capability() DynamicHostVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList">DynamicHostVolumeCapabilityList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `CapacityBytes`<sup>Required</sup> <a name="CapacityBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityBytes"></a>

```go
func CapacityBytes() *f64
```

- *Type:* *f64

---

##### `CapacityMaxBytes`<sup>Required</sup> <a name="CapacityMaxBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxBytes"></a>

```go
func CapacityMaxBytes() *f64
```

- *Type:* *f64

---

##### `CapacityMinBytes`<sup>Required</sup> <a name="CapacityMinBytes" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinBytes"></a>

```go
func CapacityMinBytes() *f64
```

- *Type:* *f64

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraint"></a>

```go
func Constraint() DynamicHostVolumeConstraintList
```

- *Type:* <a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList">DynamicHostVolumeConstraintList</a>

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capabilityInput"></a>

```go
func CapabilityInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityMaxInput`<sup>Optional</sup> <a name="CapacityMaxInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMaxInput"></a>

```go
func CapacityMaxInput() *string
```

- *Type:* *string

---

##### `CapacityMinInput`<sup>Optional</sup> <a name="CapacityMinInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMinInput"></a>

```go
func CapacityMinInput() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.constraintInput"></a>

```go
func ConstraintInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NodeIdInput`<sup>Optional</sup> <a name="NodeIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeIdInput"></a>

```go
func NodeIdInput() *string
```

- *Type:* *string

---

##### `NodePoolInput`<sup>Optional</sup> <a name="NodePoolInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePoolInput"></a>

```go
func NodePoolInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMax"></a>

```go
func CapacityMax() *string
```

- *Type:* *string

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.capacityMin"></a>

```go
func CapacityMin() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodeId"></a>

```go
func NodeId() *string
```

- *Type:* *string

---

##### `NodePool`<sup>Required</sup> <a name="NodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.nodePool"></a>

```go
func NodePool() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicHostVolumeCapability <a name="DynamicHostVolumeCapability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

&dynamichostvolume.DynamicHostVolumeCapability {
	AccessMode: *string,
	AttachmentMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode">AccessMode</a></code> | <code>*string</code> | An access mode available for the volume. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | An attachment mode available for the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

An access mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#access_mode DynamicHostVolume#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapability.property.attachmentMode"></a>

```go
AttachmentMode *string
```

- *Type:* *string

An attachment mode available for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#attachment_mode DynamicHostVolume#attachment_mode}

---

### DynamicHostVolumeConfig <a name="DynamicHostVolumeConfig" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

&dynamichostvolume.DynamicHostVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Capability: interface{},
	Name: *string,
	PluginId: *string,
	CapacityMax: *string,
	CapacityMin: *string,
	Constraint: interface{},
	Namespace: *string,
	NodeId: *string,
	NodePool: *string,
	Parameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability">Capability</a></code> | <code>interface{}</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Volume name. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | Plugin ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | Requested maximum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | Requested minimum capacity. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint">Constraint</a></code> | <code>interface{}</code> | constraint block. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Volume namespace. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId">NodeId</a></code> | <code>*string</code> | Node ID. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool">NodePool</a></code> | <code>*string</code> | Node pool. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Parameters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capability"></a>

```go
Capability interface{}
```

- *Type:* interface{}

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

Plugin ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}

---

##### `CapacityMax`<sup>Optional</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMax"></a>

```go
CapacityMax *string
```

- *Type:* *string

Requested maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}

---

##### `CapacityMin`<sup>Optional</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.capacityMin"></a>

```go
CapacityMin *string
```

- *Type:* *string

Requested minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.constraint"></a>

```go
Constraint interface{}
```

- *Type:* interface{}

constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Volume namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}

---

##### `NodeId`<sup>Optional</sup> <a name="NodeId" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodeId"></a>

```go
NodeId *string
```

- *Type:* *string

Node ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}

---

##### `NodePool`<sup>Optional</sup> <a name="NodePool" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.nodePool"></a>

```go
NodePool *string
```

- *Type:* *string

Node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}

---

### DynamicHostVolumeConstraint <a name="DynamicHostVolumeConstraint" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

&dynamichostvolume.DynamicHostVolumeConstraint {
	Attribute: *string,
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute">Attribute</a></code> | <code>*string</code> | An attribute to check to constrain volume placement. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator">Operator</a></code> | <code>*string</code> | The operator to use for comparison. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value">Value</a></code> | <code>*string</code> | The requested value of the attribute. |

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

An attribute to check to constrain volume placement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#attribute DynamicHostVolume#attribute}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

The operator to use for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#operator DynamicHostVolume#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraint.property.value"></a>

```go
Value *string
```

- *Type:* *string

The requested value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#value DynamicHostVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicHostVolumeCapabilityList <a name="DynamicHostVolumeCapabilityList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.NewDynamicHostVolumeCapabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamicHostVolumeCapabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get"></a>

```go
func Get(index *f64) DynamicHostVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamicHostVolumeCapabilityOutputReference <a name="DynamicHostVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.NewDynamicHostVolumeCapabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamicHostVolumeCapabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```go
func AttachmentModeInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.attachmentMode"></a>

```go
func AttachmentMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeCapabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamicHostVolumeConstraintList <a name="DynamicHostVolumeConstraintList" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.NewDynamicHostVolumeConstraintList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DynamicHostVolumeConstraintList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get"></a>

```go
func Get(index *f64) DynamicHostVolumeConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DynamicHostVolumeConstraintOutputReference <a name="DynamicHostVolumeConstraintOutputReference" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/dynamichostvolume"

dynamichostvolume.NewDynamicHostVolumeConstraintOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DynamicHostVolumeConstraintOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.dynamicHostVolume.DynamicHostVolumeConstraintOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



