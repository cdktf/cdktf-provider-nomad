# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktf/provider-nomad.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktf/provider-nomad.externalVolume.ExternalVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume nomad_external_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolume(scope Construct, id *string, config ExternalVolumeConfig) ExternalVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest">PutTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax">ResetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin">ResetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId">ResetCloneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest">ResetTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability"></a>

```go
func PutCapability(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions"></a>

```go
func PutMountOptions(value ExternalVolumeMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `PutTopologyRequest` <a name="PutTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest"></a>

```go
func PutTopologyRequest(value ExternalVolumeTopologyRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `ResetCapacityMax` <a name="ResetCapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax"></a>

```go
func ResetCapacityMax()
```

##### `ResetCapacityMin` <a name="ResetCapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin"></a>

```go
func ResetCapacityMin()
```

##### `ResetCloneId` <a name="ResetCloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId"></a>

```go
func ResetCloneId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetTopologyRequest` <a name="ResetTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest"></a>

```go
func ResetTopologyRequest()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.ExternalVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.ExternalVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.ExternalVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.ExternalVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExternalVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExternalVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExternalVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired">ControllerRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected">ControllersExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy">ControllersHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected">NodesExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy">NodesHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider">PluginProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion">PluginProviderVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable">Schedulable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies">Topologies</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput">CapabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput">CapacityMaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput">CapacityMinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput">CloneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput">SecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput">TopologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId">CloneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability"></a>

```go
func Capability() ExternalVolumeCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a>

---

##### `ControllerRequired`<sup>Required</sup> <a name="ControllerRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired"></a>

```go
func ControllerRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ControllersExpected`<sup>Required</sup> <a name="ControllersExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected"></a>

```go
func ControllersExpected() *f64
```

- *Type:* *f64

---

##### `ControllersHealthy`<sup>Required</sup> <a name="ControllersHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy"></a>

```go
func ControllersHealthy() *f64
```

- *Type:* *f64

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions"></a>

```go
func MountOptions() ExternalVolumeMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a>

---

##### `NodesExpected`<sup>Required</sup> <a name="NodesExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected"></a>

```go
func NodesExpected() *f64
```

- *Type:* *f64

---

##### `NodesHealthy`<sup>Required</sup> <a name="NodesHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy"></a>

```go
func NodesHealthy() *f64
```

- *Type:* *f64

---

##### `PluginProvider`<sup>Required</sup> <a name="PluginProvider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider"></a>

```go
func PluginProvider() *string
```

- *Type:* *string

---

##### `PluginProviderVersion`<sup>Required</sup> <a name="PluginProviderVersion" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion"></a>

```go
func PluginProviderVersion() *string
```

- *Type:* *string

---

##### `Schedulable`<sup>Required</sup> <a name="Schedulable" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable"></a>

```go
func Schedulable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Topologies`<sup>Required</sup> <a name="Topologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies"></a>

```go
func Topologies() ExternalVolumeTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a>

---

##### `TopologyRequest`<sup>Required</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest"></a>

```go
func TopologyRequest() ExternalVolumeTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a>

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput"></a>

```go
func CapabilityInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityMaxInput`<sup>Optional</sup> <a name="CapacityMaxInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput"></a>

```go
func CapacityMaxInput() *string
```

- *Type:* *string

---

##### `CapacityMinInput`<sup>Optional</sup> <a name="CapacityMinInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput"></a>

```go
func CapacityMinInput() *string
```

- *Type:* *string

---

##### `CloneIdInput`<sup>Optional</sup> <a name="CloneIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput"></a>

```go
func CloneIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput"></a>

```go
func MountOptionsInput() ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput"></a>

```go
func SecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `TopologyRequestInput`<sup>Optional</sup> <a name="TopologyRequestInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput"></a>

```go
func TopologyRequestInput() ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax"></a>

```go
func CapacityMax() *string
```

- *Type:* *string

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin"></a>

```go
func CapacityMin() *string
```

- *Type:* *string

---

##### `CloneId`<sup>Required</sup> <a name="CloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId"></a>

```go
func CloneId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets"></a>

```go
func Secrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeCapability <a name="ExternalVolumeCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeCapability {
	AccessMode: *string,
	AttachmentMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode">AccessMode</a></code> | <code>*string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | The storage API that will be used by the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#access_mode ExternalVolume#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode"></a>

```go
AttachmentMode *string
```

- *Type:* *string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#attachment_mode ExternalVolume#attachment_mode}

---

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeConfig {
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
	VolumeId: *string,
	CapacityMax: *string,
	CapacityMin: *string,
	CloneId: *string,
	Id: *string,
	MountOptions: github.com/cdktf/cdktf-provider-nomad-go/nomad/v9.externalVolume.ExternalVolumeMountOptions,
	Namespace: *string,
	Parameters: *map[string]*string,
	Secrets: *map[string]*string,
	SnapshotId: *string,
	TopologyRequest: github.com/cdktf/cdktf-provider-nomad-go/nomad/v9.externalVolume.ExternalVolumeTopologyRequest,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability">Capability</a></code> | <code>interface{}</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name">Name</a></code> | <code>*string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId">VolumeId</a></code> | <code>*string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId">CloneId</a></code> | <code>*string</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type">Type</a></code> | <code>*string</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability"></a>

```go
Capability interface{}
```

- *Type:* interface{}

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#capability ExternalVolume#capability}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#name ExternalVolume#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#volume_id ExternalVolume#volume_id}

---

##### `CapacityMax`<sup>Optional</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax"></a>

```go
CapacityMax *string
```

- *Type:* *string

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `CapacityMin`<sup>Optional</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin"></a>

```go
CapacityMin *string
```

- *Type:* *string

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `CloneId`<sup>Optional</sup> <a name="CloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId"></a>

```go
CloneId *string
```

- *Type:* *string

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#clone_id ExternalVolume#clone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions"></a>

```go
MountOptions ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#mount_options ExternalVolume#mount_options}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#namespace ExternalVolume#namespace}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#parameters ExternalVolume#parameters}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets"></a>

```go
Secrets *map[string]*string
```

- *Type:* *map[string]*string

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#secrets ExternalVolume#secrets}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `TopologyRequest`<sup>Optional</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest"></a>

```go
TopologyRequest ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#topology_request ExternalVolume#topology_request}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#type ExternalVolume#type}

---

### ExternalVolumeMountOptions <a name="ExternalVolumeMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeMountOptions {
	FsType: *string,
	MountFlags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType">FsType</a></code> | <code>*string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags">MountFlags</a></code> | <code>*[]*string</code> | The flags passed to mount. |

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType"></a>

```go
FsType *string
```

- *Type:* *string

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#fs_type ExternalVolume#fs_type}

---

##### `MountFlags`<sup>Optional</sup> <a name="MountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags"></a>

```go
MountFlags *[]*string
```

- *Type:* *[]*string

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#mount_flags ExternalVolume#mount_flags}

---

### ExternalVolumeTopologies <a name="ExternalVolumeTopologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologies {

}
```


### ExternalVolumeTopologyRequest <a name="ExternalVolumeTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologyRequest {
	Preferred: github.com/cdktf/cdktf-provider-nomad-go/nomad/v9.externalVolume.ExternalVolumeTopologyRequestPreferred,
	Required: github.com/cdktf/cdktf-provider-nomad-go/nomad/v9.externalVolume.ExternalVolumeTopologyRequestRequired,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred">Preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `Preferred`<sup>Optional</sup> <a name="Preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred"></a>

```go
Preferred ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#preferred ExternalVolume#preferred}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required"></a>

```go
Required ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#required ExternalVolume#required}

---

### ExternalVolumeTopologyRequestPreferred <a name="ExternalVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologyRequestPreferred {
	Topology: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology">Topology</a></code> | <code>interface{}</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology"></a>

```go
Topology interface{}
```

- *Type:* interface{}

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestPreferredTopology <a name="ExternalVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologyRequestPreferredTopology {
	Segments: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments">Segments</a></code> | <code>*map[string]*string</code> | Define the attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments"></a>

```go
Segments *map[string]*string
```

- *Type:* *map[string]*string

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#segments ExternalVolume#segments}

---

### ExternalVolumeTopologyRequestRequired <a name="ExternalVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologyRequestRequired {
	Topology: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology">Topology</a></code> | <code>interface{}</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology"></a>

```go
Topology interface{}
```

- *Type:* interface{}

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestRequiredTopology <a name="ExternalVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

&externalvolume.ExternalVolumeTopologyRequestRequiredTopology {
	Segments: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments">Segments</a></code> | <code>*map[string]*string</code> | Define the attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments"></a>

```go
Segments *map[string]*string
```

- *Type:* *map[string]*string

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/external_volume#segments ExternalVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeCapabilityList <a name="ExternalVolumeCapabilityList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeCapabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalVolumeCapabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get"></a>

```go
func Get(index *f64) ExternalVolumeCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalVolumeCapabilityOutputReference <a name="ExternalVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeCapabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalVolumeCapabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```go
func AttachmentModeInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode"></a>

```go
func AttachmentMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalVolumeMountOptionsOutputReference <a name="ExternalVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalVolumeMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags">ResetMountFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType"></a>

```go
func ResetFsType()
```

##### `ResetMountFlags` <a name="ResetMountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags"></a>

```go
func ResetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput">MountFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType">FsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags">MountFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```go
func FsTypeInput() *string
```

- *Type:* *string

---

##### `MountFlagsInput`<sup>Optional</sup> <a name="MountFlagsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```go
func MountFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType"></a>

```go
func FsType() *string
```

- *Type:* *string

---

##### `MountFlags`<sup>Required</sup> <a name="MountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags"></a>

```go
func MountFlags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalVolumeMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---


### ExternalVolumeTopologiesList <a name="ExternalVolumeTopologiesList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalVolumeTopologiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get"></a>

```go
func Get(index *f64) ExternalVolumeTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ExternalVolumeTopologiesOutputReference <a name="ExternalVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalVolumeTopologiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments">Segments</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments"></a>

```go
func Segments() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalVolumeTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a>

---


### ExternalVolumeTopologyRequestOutputReference <a name="ExternalVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalVolumeTopologyRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred">PutPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired">PutRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred">ResetPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreferred` <a name="PutPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred"></a>

```go
func PutPreferred(value ExternalVolumeTopologyRequestPreferred)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `PutRequired` <a name="PutRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired"></a>

```go
func PutRequired(value ExternalVolumeTopologyRequestRequired)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `ResetPreferred` <a name="ResetPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred"></a>

```go
func ResetPreferred()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred">Preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput">PreferredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput">RequiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Preferred`<sup>Required</sup> <a name="Preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred"></a>

```go
func Preferred() ExternalVolumeTopologyRequestPreferredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required"></a>

```go
func Required() ExternalVolumeTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a>

---

##### `PreferredInput`<sup>Optional</sup> <a name="PreferredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```go
func PreferredInput() ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```go
func RequiredInput() ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalVolumeTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---


### ExternalVolumeTopologyRequestPreferredOutputReference <a name="ExternalVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestPreferredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalVolumeTopologyRequestPreferredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology">PutTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```go
func PutTopology(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```go
func Topology() ExternalVolumeTopologyRequestPreferredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```go
func TopologyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalVolumeTopologyRequestPreferred
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---


### ExternalVolumeTopologyRequestPreferredTopologyList <a name="ExternalVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestPreferredTopologyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalVolumeTopologyRequestPreferredTopologyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get"></a>

```go
func Get(index *f64) ExternalVolumeTopologyRequestPreferredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalVolumeTopologyRequestPreferredTopologyOutputReference <a name="ExternalVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestPreferredTopologyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalVolumeTopologyRequestPreferredTopologyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">Segments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```go
func SegmentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```go
func Segments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalVolumeTopologyRequestRequiredOutputReference <a name="ExternalVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestRequiredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalVolumeTopologyRequestRequiredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology">PutTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```go
func PutTopology(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```go
func Topology() ExternalVolumeTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```go
func TopologyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalVolumeTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---


### ExternalVolumeTopologyRequestRequiredTopologyList <a name="ExternalVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestRequiredTopologyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalVolumeTopologyRequestRequiredTopologyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get"></a>

```go
func Get(index *f64) ExternalVolumeTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ExternalVolumeTopologyRequestRequiredTopologyOutputReference <a name="ExternalVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/externalvolume"

externalvolume.NewExternalVolumeTopologyRequestRequiredTopologyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalVolumeTopologyRequestRequiredTopologyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">Segments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```go
func SegmentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```go
func Segments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



