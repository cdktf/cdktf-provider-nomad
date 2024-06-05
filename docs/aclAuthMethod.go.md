# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-nomad.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method nomad_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.NewAclAuthMethod(scope Construct, id *string, config AclAuthMethodConfig) AclAuthMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat">ResetTokenNameFormat</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig"></a>

```go
func PutConfig(value AclAuthMethodConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId"></a>

```go
func ResetId()
```

##### `ResetTokenNameFormat` <a name="ResetTokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat"></a>

```go
func ResetTokenNameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.AclAuthMethod_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.AclAuthMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.AclAuthMethod_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.AclAuthMethod_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">MaxTokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">TokenLocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput">TokenNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality">TokenLocality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat">TokenNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config"></a>

```go
func Config() AclAuthMethodConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```go
func ConfigInput() AclAuthMethodConfigA
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTokenTtlInput`<sup>Optional</sup> <a name="MaxTokenTtlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```go
func MaxTokenTtlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TokenLocalityInput`<sup>Optional</sup> <a name="TokenLocalityInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```go
func TokenLocalityInput() *string
```

- *Type:* *string

---

##### `TokenNameFormatInput`<sup>Optional</sup> <a name="TokenNameFormatInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput"></a>

```go
func TokenNameFormatInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```go
func MaxTokenTtl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```go
func TokenLocality() *string
```

- *Type:* *string

---

##### `TokenNameFormat`<sup>Required</sup> <a name="TokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat"></a>

```go
func TokenNameFormat() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

&aclauthmethod.AclAuthMethodConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-nomad-go/nomad/v9.aclAuthMethod.AclAuthMethodConfigA,
	MaxTokenTtl: *string,
	Name: *string,
	TokenLocality: *string,
	Type: *string,
	Default: interface{},
	Id: *string,
	TokenNameFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*string</code> | Defines the maximum life of a token created by this method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name">Name</a></code> | <code>*string</code> | The identifier of the ACL Auth Method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">TokenLocality</a></code> | <code>*string</code> | Defines whether the ACL Auth Method creates a local or global token when performing SSO login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type">Type</a></code> | <code>*string</code> | ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default">Default</a></code> | <code>interface{}</code> | Defines whether this ACL Auth Method is to be set as default. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat">TokenNameFormat</a></code> | <code>*string</code> | Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```go
Config AclAuthMethodConfigA
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```go
MaxTokenTtl *string
```

- *Type:* *string

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```go
TokenLocality *string
```

- *Type:* *string

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TokenNameFormat`<sup>Optional</sup> <a name="TokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat"></a>

```go
TokenNameFormat *string
```

- *Type:* *string

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

### AclAuthMethodConfigA <a name="AclAuthMethodConfigA" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

&aclauthmethod.AclAuthMethodConfigA {
	AllowedRedirectUris: *[]*string,
	BoundAudiences: *[]*string,
	BoundIssuer: *[]*string,
	ClaimMappings: *map[string]*string,
	ClockSkewLeeway: *string,
	DiscoveryCaPem: *[]*string,
	ExpirationLeeway: *string,
	JwksCaCert: *string,
	JwksUrl: *string,
	JwtValidationPubKeys: *[]*string,
	ListClaimMappings: *map[string]*string,
	NotBeforeLeeway: *string,
	OidcClientId: *string,
	OidcClientSecret: *string,
	OidcDisableUserinfo: interface{},
	OidcDiscoveryUrl: *string,
	OidcScopes: *[]*string,
	SigningAlgs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>*[]*string</code> | A list of allowed values that can be used for the redirect URI. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences">BoundAudiences</a></code> | <code>*[]*string</code> | List of auth claims that are valid for login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer">BoundIssuer</a></code> | <code>*[]*string</code> | The value against which to match the iss claim in a JWT. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings">ClaimMappings</a></code> | <code>*map[string]*string</code> | Mappings of claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>*string</code> | Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>*[]*string</code> | PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway">ExpirationLeeway</a></code> | <code>*string</code> | Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert">JwksCaCert</a></code> | <code>*string</code> | PEM encoded CA cert for use by the TLS client used to talk with the JWKS server. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | JSON Web Key Sets url for authenticating signatures. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys">JwtValidationPubKeys</a></code> | <code>*[]*string</code> | List of PEM-encoded public keys to use to authenticate signatures locally. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings">ListClaimMappings</a></code> | <code>*map[string]*string</code> | Mappings of list claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>*string</code> | Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId">OidcClientId</a></code> | <code>*string</code> | The OAuth Client ID configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret">OidcClientSecret</a></code> | <code>*string</code> | The OAuth Client Secret configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo">OidcDisableUserinfo</a></code> | <code>interface{}</code> | Nomad will not make a request to the identity provider to get OIDC UserInfo. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>*string</code> | The OIDC Discovery URL, without any .well-known component (base path). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes">OidcScopes</a></code> | <code>*[]*string</code> | List of OIDC scopes. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs">SigningAlgs</a></code> | <code>*[]*string</code> | A list of supported signing algorithms. |

---

##### `AllowedRedirectUris`<sup>Optional</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris"></a>

```go
AllowedRedirectUris *[]*string
```

- *Type:* *[]*string

A list of allowed values that can be used for the redirect URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}

---

##### `BoundAudiences`<sup>Optional</sup> <a name="BoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences"></a>

```go
BoundAudiences *[]*string
```

- *Type:* *[]*string

List of auth claims that are valid for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}

---

##### `BoundIssuer`<sup>Optional</sup> <a name="BoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundIssuer"></a>

```go
BoundIssuer *[]*string
```

- *Type:* *[]*string

The value against which to match the iss claim in a JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#bound_issuer AclAuthMethod#bound_issuer}

---

##### `ClaimMappings`<sup>Optional</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings"></a>

```go
ClaimMappings *map[string]*string
```

- *Type:* *map[string]*string

Mappings of claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}

---

##### `ClockSkewLeeway`<sup>Optional</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.clockSkewLeeway"></a>

```go
ClockSkewLeeway *string
```

- *Type:* *string

Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#clock_skew_leeway AclAuthMethod#clock_skew_leeway}

---

##### `DiscoveryCaPem`<sup>Optional</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem"></a>

```go
DiscoveryCaPem *[]*string
```

- *Type:* *[]*string

PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}

---

##### `ExpirationLeeway`<sup>Optional</sup> <a name="ExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.expirationLeeway"></a>

```go
ExpirationLeeway *string
```

- *Type:* *string

Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#expiration_leeway AclAuthMethod#expiration_leeway}

---

##### `JwksCaCert`<sup>Optional</sup> <a name="JwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksCaCert"></a>

```go
JwksCaCert *string
```

- *Type:* *string

PEM encoded CA cert for use by the TLS client used to talk with the JWKS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#jwks_ca_cert AclAuthMethod#jwks_ca_cert}

---

##### `JwksUrl`<sup>Optional</sup> <a name="JwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwksUrl"></a>

```go
JwksUrl *string
```

- *Type:* *string

JSON Web Key Sets url for authenticating signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#jwks_url AclAuthMethod#jwks_url}

---

##### `JwtValidationPubKeys`<sup>Optional</sup> <a name="JwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.jwtValidationPubKeys"></a>

```go
JwtValidationPubKeys *[]*string
```

- *Type:* *[]*string

List of PEM-encoded public keys to use to authenticate signatures locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#jwt_validation_pub_keys AclAuthMethod#jwt_validation_pub_keys}

---

##### `ListClaimMappings`<sup>Optional</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings"></a>

```go
ListClaimMappings *map[string]*string
```

- *Type:* *map[string]*string

Mappings of list claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}

---

##### `NotBeforeLeeway`<sup>Optional</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.notBeforeLeeway"></a>

```go
NotBeforeLeeway *string
```

- *Type:* *string

Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#not_before_leeway AclAuthMethod#not_before_leeway}

---

##### `OidcClientId`<sup>Optional</sup> <a name="OidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId"></a>

```go
OidcClientId *string
```

- *Type:* *string

The OAuth Client ID configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}

---

##### `OidcClientSecret`<sup>Optional</sup> <a name="OidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret"></a>

```go
OidcClientSecret *string
```

- *Type:* *string

The OAuth Client Secret configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}

---

##### `OidcDisableUserinfo`<sup>Optional</sup> <a name="OidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDisableUserinfo"></a>

```go
OidcDisableUserinfo interface{}
```

- *Type:* interface{}

Nomad will not make a request to the identity provider to get OIDC UserInfo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#oidc_disable_userinfo AclAuthMethod#oidc_disable_userinfo}

---

##### `OidcDiscoveryUrl`<sup>Optional</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl"></a>

```go
OidcDiscoveryUrl *string
```

- *Type:* *string

The OIDC Discovery URL, without any .well-known component (base path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}

---

##### `OidcScopes`<sup>Optional</sup> <a name="OidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes"></a>

```go
OidcScopes *[]*string
```

- *Type:* *[]*string

List of OIDC scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}

---

##### `SigningAlgs`<sup>Optional</sup> <a name="SigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs"></a>

```go
SigningAlgs *[]*string
```

- *Type:* *[]*string

A list of supported signing algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodConfigAOutputReference <a name="AclAuthMethodConfigAOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-nomad-go/nomad/v9/aclauthmethod"

aclauthmethod.NewAclAuthMethodConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AclAuthMethodConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris">ResetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences">ResetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer">ResetBoundIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings">ResetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway">ResetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem">ResetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway">ResetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert">ResetJwksCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl">ResetJwksUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys">ResetJwtValidationPubKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings">ResetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway">ResetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId">ResetOidcClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret">ResetOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo">ResetOidcDisableUserinfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl">ResetOidcDiscoveryUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes">ResetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs">ResetSigningAlgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRedirectUris` <a name="ResetAllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetAllowedRedirectUris"></a>

```go
func ResetAllowedRedirectUris()
```

##### `ResetBoundAudiences` <a name="ResetBoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences"></a>

```go
func ResetBoundAudiences()
```

##### `ResetBoundIssuer` <a name="ResetBoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundIssuer"></a>

```go
func ResetBoundIssuer()
```

##### `ResetClaimMappings` <a name="ResetClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings"></a>

```go
func ResetClaimMappings()
```

##### `ResetClockSkewLeeway` <a name="ResetClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClockSkewLeeway"></a>

```go
func ResetClockSkewLeeway()
```

##### `ResetDiscoveryCaPem` <a name="ResetDiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem"></a>

```go
func ResetDiscoveryCaPem()
```

##### `ResetExpirationLeeway` <a name="ResetExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetExpirationLeeway"></a>

```go
func ResetExpirationLeeway()
```

##### `ResetJwksCaCert` <a name="ResetJwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksCaCert"></a>

```go
func ResetJwksCaCert()
```

##### `ResetJwksUrl` <a name="ResetJwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwksUrl"></a>

```go
func ResetJwksUrl()
```

##### `ResetJwtValidationPubKeys` <a name="ResetJwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetJwtValidationPubKeys"></a>

```go
func ResetJwtValidationPubKeys()
```

##### `ResetListClaimMappings` <a name="ResetListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings"></a>

```go
func ResetListClaimMappings()
```

##### `ResetNotBeforeLeeway` <a name="ResetNotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetNotBeforeLeeway"></a>

```go
func ResetNotBeforeLeeway()
```

##### `ResetOidcClientId` <a name="ResetOidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientId"></a>

```go
func ResetOidcClientId()
```

##### `ResetOidcClientSecret` <a name="ResetOidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcClientSecret"></a>

```go
func ResetOidcClientSecret()
```

##### `ResetOidcDisableUserinfo` <a name="ResetOidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDisableUserinfo"></a>

```go
func ResetOidcDisableUserinfo()
```

##### `ResetOidcDiscoveryUrl` <a name="ResetOidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcDiscoveryUrl"></a>

```go
func ResetOidcDiscoveryUrl()
```

##### `ResetOidcScopes` <a name="ResetOidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes"></a>

```go
func ResetOidcScopes()
```

##### `ResetSigningAlgs` <a name="ResetSigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs"></a>

```go
func ResetSigningAlgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput">AllowedRedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput">BoundAudiencesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput">BoundIssuerInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput">ClaimMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput">ClockSkewLeewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput">DiscoveryCaPemInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput">ExpirationLeewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput">JwksCaCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput">JwksUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput">JwtValidationPubKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput">ListClaimMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput">NotBeforeLeewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput">OidcClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput">OidcClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput">OidcDisableUserinfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput">OidcDiscoveryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput">OidcScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput">SigningAlgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris">AllowedRedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences">BoundAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer">BoundIssuer</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings">ClaimMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway">ClockSkewLeeway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem">DiscoveryCaPem</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway">ExpirationLeeway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert">JwksCaCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl">JwksUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys">JwtValidationPubKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings">ListClaimMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway">NotBeforeLeeway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId">OidcClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret">OidcClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo">OidcDisableUserinfo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl">OidcDiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes">OidcScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs">SigningAlgs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRedirectUrisInput`<sup>Optional</sup> <a name="AllowedRedirectUrisInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput"></a>

```go
func AllowedRedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundAudiencesInput`<sup>Optional</sup> <a name="BoundAudiencesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput"></a>

```go
func BoundAudiencesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIssuerInput`<sup>Optional</sup> <a name="BoundIssuerInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuerInput"></a>

```go
func BoundIssuerInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClaimMappingsInput`<sup>Optional</sup> <a name="ClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput"></a>

```go
func ClaimMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClockSkewLeewayInput`<sup>Optional</sup> <a name="ClockSkewLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeewayInput"></a>

```go
func ClockSkewLeewayInput() *string
```

- *Type:* *string

---

##### `DiscoveryCaPemInput`<sup>Optional</sup> <a name="DiscoveryCaPemInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput"></a>

```go
func DiscoveryCaPemInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExpirationLeewayInput`<sup>Optional</sup> <a name="ExpirationLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeewayInput"></a>

```go
func ExpirationLeewayInput() *string
```

- *Type:* *string

---

##### `JwksCaCertInput`<sup>Optional</sup> <a name="JwksCaCertInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCertInput"></a>

```go
func JwksCaCertInput() *string
```

- *Type:* *string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrlInput"></a>

```go
func JwksUrlInput() *string
```

- *Type:* *string

---

##### `JwtValidationPubKeysInput`<sup>Optional</sup> <a name="JwtValidationPubKeysInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeysInput"></a>

```go
func JwtValidationPubKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListClaimMappingsInput`<sup>Optional</sup> <a name="ListClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput"></a>

```go
func ListClaimMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotBeforeLeewayInput`<sup>Optional</sup> <a name="NotBeforeLeewayInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeewayInput"></a>

```go
func NotBeforeLeewayInput() *string
```

- *Type:* *string

---

##### `OidcClientIdInput`<sup>Optional</sup> <a name="OidcClientIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput"></a>

```go
func OidcClientIdInput() *string
```

- *Type:* *string

---

##### `OidcClientSecretInput`<sup>Optional</sup> <a name="OidcClientSecretInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput"></a>

```go
func OidcClientSecretInput() *string
```

- *Type:* *string

---

##### `OidcDisableUserinfoInput`<sup>Optional</sup> <a name="OidcDisableUserinfoInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfoInput"></a>

```go
func OidcDisableUserinfoInput() interface{}
```

- *Type:* interface{}

---

##### `OidcDiscoveryUrlInput`<sup>Optional</sup> <a name="OidcDiscoveryUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput"></a>

```go
func OidcDiscoveryUrlInput() *string
```

- *Type:* *string

---

##### `OidcScopesInput`<sup>Optional</sup> <a name="OidcScopesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput"></a>

```go
func OidcScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SigningAlgsInput`<sup>Optional</sup> <a name="SigningAlgsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput"></a>

```go
func SigningAlgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRedirectUris`<sup>Required</sup> <a name="AllowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris"></a>

```go
func AllowedRedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `BoundAudiences`<sup>Required</sup> <a name="BoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences"></a>

```go
func BoundAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `BoundIssuer`<sup>Required</sup> <a name="BoundIssuer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundIssuer"></a>

```go
func BoundIssuer() *[]*string
```

- *Type:* *[]*string

---

##### `ClaimMappings`<sup>Required</sup> <a name="ClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings"></a>

```go
func ClaimMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClockSkewLeeway`<sup>Required</sup> <a name="ClockSkewLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.clockSkewLeeway"></a>

```go
func ClockSkewLeeway() *string
```

- *Type:* *string

---

##### `DiscoveryCaPem`<sup>Required</sup> <a name="DiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem"></a>

```go
func DiscoveryCaPem() *[]*string
```

- *Type:* *[]*string

---

##### `ExpirationLeeway`<sup>Required</sup> <a name="ExpirationLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.expirationLeeway"></a>

```go
func ExpirationLeeway() *string
```

- *Type:* *string

---

##### `JwksCaCert`<sup>Required</sup> <a name="JwksCaCert" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksCaCert"></a>

```go
func JwksCaCert() *string
```

- *Type:* *string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwksUrl"></a>

```go
func JwksUrl() *string
```

- *Type:* *string

---

##### `JwtValidationPubKeys`<sup>Required</sup> <a name="JwtValidationPubKeys" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.jwtValidationPubKeys"></a>

```go
func JwtValidationPubKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ListClaimMappings`<sup>Required</sup> <a name="ListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings"></a>

```go
func ListClaimMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NotBeforeLeeway`<sup>Required</sup> <a name="NotBeforeLeeway" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.notBeforeLeeway"></a>

```go
func NotBeforeLeeway() *string
```

- *Type:* *string

---

##### `OidcClientId`<sup>Required</sup> <a name="OidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId"></a>

```go
func OidcClientId() *string
```

- *Type:* *string

---

##### `OidcClientSecret`<sup>Required</sup> <a name="OidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret"></a>

```go
func OidcClientSecret() *string
```

- *Type:* *string

---

##### `OidcDisableUserinfo`<sup>Required</sup> <a name="OidcDisableUserinfo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDisableUserinfo"></a>

```go
func OidcDisableUserinfo() interface{}
```

- *Type:* interface{}

---

##### `OidcDiscoveryUrl`<sup>Required</sup> <a name="OidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl"></a>

```go
func OidcDiscoveryUrl() *string
```

- *Type:* *string

---

##### `OidcScopes`<sup>Required</sup> <a name="OidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes"></a>

```go
func OidcScopes() *[]*string
```

- *Type:* *[]*string

---

##### `SigningAlgs`<sup>Required</sup> <a name="SigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs"></a>

```go
func SigningAlgs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() AclAuthMethodConfigA
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---



