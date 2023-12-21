# `csiVolumeRegistration` Submodule <a name="`csiVolumeRegistration` Submodule" id="@cdktf/provider-nomad.csiVolumeRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsiVolumeRegistration <a name="CsiVolumeRegistration" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration nomad_csi_volume_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistration(scope Construct, id *string, config CsiVolumeRegistrationConfig) CsiVolumeRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig">CsiVolumeRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig">CsiVolumeRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability">PutCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest">PutTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability">ResetCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax">ResetCapacityMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin">ResetCapacityMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy">ResetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest">ResetTopologyRequest</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability"></a>

```go
func PutCapability(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putCapability.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions"></a>

```go
func PutMountOptions(value CsiVolumeRegistrationMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts"></a>

```go
func PutTimeouts(value CsiVolumeRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

---

##### `PutTopologyRequest` <a name="PutTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest"></a>

```go
func PutTopologyRequest(value CsiVolumeRegistrationTopologyRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `ResetCapability` <a name="ResetCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapability"></a>

```go
func ResetCapability()
```

##### `ResetCapacityMax` <a name="ResetCapacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMax"></a>

```go
func ResetCapacityMax()
```

##### `ResetCapacityMin` <a name="ResetCapacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetCapacityMin"></a>

```go
func ResetCapacityMin()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetContext"></a>

```go
func ResetContext()
```

##### `ResetDeregisterOnDestroy` <a name="ResetDeregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetDeregisterOnDestroy"></a>

```go
func ResetDeregisterOnDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopologyRequest` <a name="ResetTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.resetTopologyRequest"></a>

```go
func ResetTopologyRequest()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.CsiVolumeRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.CsiVolumeRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.CsiVolumeRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.CsiVolumeRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CsiVolumeRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CsiVolumeRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CsiVolumeRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes">CapacityMaxBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes">CapacityMinBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired">ControllerRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected">ControllersExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy">ControllersHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected">NodesExpected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy">NodesHealthy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider">PluginProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion">PluginProviderVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable">Schedulable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies">Topologies</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput">CapabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput">CapacityMaxInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput">CapacityMinInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput">ContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput">DeregisterOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput">SecretsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput">TopologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context">Context</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capability"></a>

```go
func Capability() CsiVolumeRegistrationCapabilityList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList">CsiVolumeRegistrationCapabilityList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `CapacityMaxBytes`<sup>Required</sup> <a name="CapacityMaxBytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxBytes"></a>

```go
func CapacityMaxBytes() *f64
```

- *Type:* *f64

---

##### `CapacityMinBytes`<sup>Required</sup> <a name="CapacityMinBytes" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinBytes"></a>

```go
func CapacityMinBytes() *f64
```

- *Type:* *f64

---

##### `ControllerRequired`<sup>Required</sup> <a name="ControllerRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllerRequired"></a>

```go
func ControllerRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ControllersExpected`<sup>Required</sup> <a name="ControllersExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersExpected"></a>

```go
func ControllersExpected() *f64
```

- *Type:* *f64

---

##### `ControllersHealthy`<sup>Required</sup> <a name="ControllersHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.controllersHealthy"></a>

```go
func ControllersHealthy() *f64
```

- *Type:* *f64

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptions"></a>

```go
func MountOptions() CsiVolumeRegistrationMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference">CsiVolumeRegistrationMountOptionsOutputReference</a>

---

##### `NodesExpected`<sup>Required</sup> <a name="NodesExpected" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesExpected"></a>

```go
func NodesExpected() *f64
```

- *Type:* *f64

---

##### `NodesHealthy`<sup>Required</sup> <a name="NodesHealthy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nodesHealthy"></a>

```go
func NodesHealthy() *f64
```

- *Type:* *f64

---

##### `PluginProvider`<sup>Required</sup> <a name="PluginProvider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProvider"></a>

```go
func PluginProvider() *string
```

- *Type:* *string

---

##### `PluginProviderVersion`<sup>Required</sup> <a name="PluginProviderVersion" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginProviderVersion"></a>

```go
func PluginProviderVersion() *string
```

- *Type:* *string

---

##### `Schedulable`<sup>Required</sup> <a name="Schedulable" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.schedulable"></a>

```go
func Schedulable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeouts"></a>

```go
func Timeouts() CsiVolumeRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference">CsiVolumeRegistrationTimeoutsOutputReference</a>

---

##### `Topologies`<sup>Required</sup> <a name="Topologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologies"></a>

```go
func Topologies() CsiVolumeRegistrationTopologiesList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList">CsiVolumeRegistrationTopologiesList</a>

---

##### `TopologyRequest`<sup>Required</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequest"></a>

```go
func TopologyRequest() CsiVolumeRegistrationTopologyRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference">CsiVolumeRegistrationTopologyRequestOutputReference</a>

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capabilityInput"></a>

```go
func CapabilityInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityMaxInput`<sup>Optional</sup> <a name="CapacityMaxInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMaxInput"></a>

```go
func CapacityMaxInput() *string
```

- *Type:* *string

---

##### `CapacityMinInput`<sup>Optional</sup> <a name="CapacityMinInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMinInput"></a>

```go
func CapacityMinInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.contextInput"></a>

```go
func ContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeregisterOnDestroyInput`<sup>Optional</sup> <a name="DeregisterOnDestroyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroyInput"></a>

```go
func DeregisterOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.mountOptionsInput"></a>

```go
func MountOptionsInput() CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secretsInput"></a>

```go
func SecretsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopologyRequestInput`<sup>Optional</sup> <a name="TopologyRequestInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.topologyRequestInput"></a>

```go
func TopologyRequestInput() CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMax"></a>

```go
func CapacityMax() *string
```

- *Type:* *string

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.capacityMin"></a>

```go
func CapacityMin() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.context"></a>

```go
func Context() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeregisterOnDestroy`<sup>Required</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.deregisterOnDestroy"></a>

```go
func DeregisterOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.secrets"></a>

```go
func Secrets() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CsiVolumeRegistrationCapability <a name="CsiVolumeRegistrationCapability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationCapability {
	AccessMode: *string,
	AttachmentMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode">AccessMode</a></code> | <code>*string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | The storage API that will be used by the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.accessMode"></a>

```go
AccessMode *string
```

- *Type:* *string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapability.property.attachmentMode"></a>

```go
AttachmentMode *string
```

- *Type:* *string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}

---

### CsiVolumeRegistrationConfig <a name="CsiVolumeRegistrationConfig" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalId: *string,
	Name: *string,
	PluginId: *string,
	VolumeId: *string,
	Capability: interface{},
	CapacityMax: *string,
	CapacityMin: *string,
	Context: *map[string]*string,
	DeregisterOnDestroy: interface{},
	Id: *string,
	MountOptions: github.com/cdktf/cdktf-provider-nomad-go/nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions,
	Namespace: *string,
	Parameters: *map[string]*string,
	Secrets: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-nomad-go/nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts,
	TopologyRequest: github.com/cdktf/cdktf-provider-nomad-go/nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | The ID of the physical volume from the storage provider. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name">Name</a></code> | <code>*string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId">VolumeId</a></code> | <code>*string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability">Capability</a></code> | <code>interface{}</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax">CapacityMax</a></code> | <code>*string</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin">CapacityMin</a></code> | <code>*string</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context">Context</a></code> | <code>*map[string]*string</code> | An optional key-value map of strings passed directly to the CSI plugin to validate the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy">DeregisterOnDestroy</a></code> | <code>interface{}</code> | If true, the volume will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets">Secrets</a></code> | <code>*map[string]*string</code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | topology_request block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

The ID of the physical volume from the storage provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The display name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}

---

##### `Capability`<sup>Optional</sup> <a name="Capability" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capability"></a>

```go
Capability interface{}
```

- *Type:* interface{}

capability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}

---

##### `CapacityMax`<sup>Optional</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMax"></a>

```go
CapacityMax *string
```

- *Type:* *string

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}

---

##### `CapacityMin`<sup>Optional</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.capacityMin"></a>

```go
CapacityMin *string
```

- *Type:* *string

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.context"></a>

```go
Context *map[string]*string
```

- *Type:* *map[string]*string

An optional key-value map of strings passed directly to the CSI plugin to validate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}

---

##### `DeregisterOnDestroy`<sup>Optional</sup> <a name="DeregisterOnDestroy" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.deregisterOnDestroy"></a>

```go
DeregisterOnDestroy interface{}
```

- *Type:* interface{}

If true, the volume will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.mountOptions"></a>

```go
MountOptions CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.secrets"></a>

```go
Secrets *map[string]*string
```

- *Type:* *map[string]*string

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.timeouts"></a>

```go
Timeouts CsiVolumeRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts">CsiVolumeRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}

---

##### `TopologyRequest`<sup>Optional</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationConfig.property.topologyRequest"></a>

```go
TopologyRequest CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}

---

### CsiVolumeRegistrationMountOptions <a name="CsiVolumeRegistrationMountOptions" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationMountOptions {
	FsType: *string,
	MountFlags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType">FsType</a></code> | <code>*string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags">MountFlags</a></code> | <code>*[]*string</code> | The flags passed to mount. |

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.fsType"></a>

```go
FsType *string
```

- *Type:* *string

The file system type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}

---

##### `MountFlags`<sup>Optional</sup> <a name="MountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions.property.mountFlags"></a>

```go
MountFlags *[]*string
```

- *Type:* *[]*string

The flags passed to mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}

---

### CsiVolumeRegistrationTimeouts <a name="CsiVolumeRegistrationTimeouts" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}.

---

### CsiVolumeRegistrationTopologies <a name="CsiVolumeRegistrationTopologies" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationTopologies {

}
```


### CsiVolumeRegistrationTopologyRequest <a name="CsiVolumeRegistrationTopologyRequest" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationTopologyRequest {
	Required: github.com/cdktf/cdktf-provider-nomad-go/nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | required block. |

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest.property.required"></a>

```go
Required CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}

---

### CsiVolumeRegistrationTopologyRequestRequired <a name="CsiVolumeRegistrationTopologyRequestRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationTopologyRequestRequired {
	Topology: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology">Topology</a></code> | <code>interface{}</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired.property.topology"></a>

```go
Topology interface{}
```

- *Type:* interface{}

topology block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}

---

### CsiVolumeRegistrationTopologyRequestRequiredTopology <a name="CsiVolumeRegistrationTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

&csivolumeregistration.CsiVolumeRegistrationTopologyRequestRequiredTopology {
	Segments: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments">Segments</a></code> | <code>*map[string]*string</code> | Define attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopology.property.segments"></a>

```go
Segments *map[string]*string
```

- *Type:* *map[string]*string

Define attributes for the topology request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### CsiVolumeRegistrationCapabilityList <a name="CsiVolumeRegistrationCapabilityList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationCapabilityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsiVolumeRegistrationCapabilityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get"></a>

```go
func Get(index *f64) CsiVolumeRegistrationCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsiVolumeRegistrationCapabilityOutputReference <a name="CsiVolumeRegistrationCapabilityOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationCapabilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsiVolumeRegistrationCapabilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessModeInput"></a>

```go
func AccessModeInput() *string
```

- *Type:* *string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentModeInput"></a>

```go
func AttachmentModeInput() *string
```

- *Type:* *string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.attachmentMode"></a>

```go
func AttachmentMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationCapabilityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsiVolumeRegistrationMountOptionsOutputReference <a name="CsiVolumeRegistrationMountOptionsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsiVolumeRegistrationMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType">ResetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags">ResetMountFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetFsType"></a>

```go
func ResetFsType()
```

##### `ResetMountFlags` <a name="ResetMountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.resetMountFlags"></a>

```go
func ResetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput">MountFlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType">FsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags">MountFlags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsTypeInput"></a>

```go
func FsTypeInput() *string
```

- *Type:* *string

---

##### `MountFlagsInput`<sup>Optional</sup> <a name="MountFlagsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlagsInput"></a>

```go
func MountFlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.fsType"></a>

```go
func FsType() *string
```

- *Type:* *string

---

##### `MountFlags`<sup>Required</sup> <a name="MountFlags" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.mountFlags"></a>

```go
func MountFlags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CsiVolumeRegistrationMountOptions
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationMountOptions">CsiVolumeRegistrationMountOptions</a>

---


### CsiVolumeRegistrationTimeoutsOutputReference <a name="CsiVolumeRegistrationTimeoutsOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsiVolumeRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsiVolumeRegistrationTopologiesList <a name="CsiVolumeRegistrationTopologiesList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsiVolumeRegistrationTopologiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get"></a>

```go
func Get(index *f64) CsiVolumeRegistrationTopologiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CsiVolumeRegistrationTopologiesOutputReference <a name="CsiVolumeRegistrationTopologiesOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsiVolumeRegistrationTopologiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments">Segments</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.segments"></a>

```go
func Segments() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CsiVolumeRegistrationTopologies
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologies">CsiVolumeRegistrationTopologies</a>

---


### CsiVolumeRegistrationTopologyRequestOutputReference <a name="CsiVolumeRegistrationTopologyRequestOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologyRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsiVolumeRegistrationTopologyRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired">PutRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequired` <a name="PutRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired"></a>

```go
func PutRequired(value CsiVolumeRegistrationTopologyRequestRequired)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput">RequiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.required"></a>

```go
func Required() CsiVolumeRegistrationTopologyRequestRequiredOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference">CsiVolumeRegistrationTopologyRequestRequiredOutputReference</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.requiredInput"></a>

```go
func RequiredInput() CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() CsiVolumeRegistrationTopologyRequest
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequest">CsiVolumeRegistrationTopologyRequest</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologyRequestRequiredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsiVolumeRegistrationTopologyRequestRequiredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology">PutTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology"></a>

```go
func PutTopology(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topology"></a>

```go
func Topology() CsiVolumeRegistrationTopologyRequestRequiredTopologyList
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList">CsiVolumeRegistrationTopologyRequestRequiredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```go
func TopologyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredOutputReference.property.internalValue"></a>

```go
func InternalValue() CsiVolumeRegistrationTopologyRequestRequired
```

- *Type:* <a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequired">CsiVolumeRegistrationTopologyRequestRequired</a>

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyList <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologyRequestRequiredTopologyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsiVolumeRegistrationTopologyRequestRequiredTopologyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get"></a>

```go
func Get(index *f64) CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference <a name="CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/csivolumeregistration"

csivolumeregistration.NewCsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments">Segments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```go
func SegmentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```go
func Segments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.csiVolumeRegistration.CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



