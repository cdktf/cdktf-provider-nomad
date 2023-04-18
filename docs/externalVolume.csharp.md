# `nomad_external_volume`

Refer to the Terraform Registory for docs: [`nomad_external_volume`](https://www.terraform.io/docs/providers/nomad/r/external_volume).

# `externalVolume` Submodule <a name="`externalVolume` Submodule" id="@cdktf/provider-nomad.externalVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalVolume <a name="ExternalVolume" id="@cdktf/provider-nomad.externalVolume.ExternalVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/nomad/r/external_volume nomad_external_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolume(Construct Scope, string Id, ExternalVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig">ExternalVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCapability` <a name="PutCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability"></a>

```csharp
private void PutCapability(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putCapability.parameter.value"></a>

- *Type:* object

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions"></a>

```csharp
private void PutMountOptions(ExternalVolumeMountOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `PutTopologyRequest` <a name="PutTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest"></a>

```csharp
private void PutTopologyRequest(ExternalVolumeTopologyRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.putTopologyRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `ResetCapacityMax` <a name="ResetCapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMax"></a>

```csharp
private void ResetCapacityMax()
```

##### `ResetCapacityMin` <a name="ResetCapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCapacityMin"></a>

```csharp
private void ResetCapacityMin()
```

##### `ResetCloneId` <a name="ResetCloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetCloneId"></a>

```csharp
private void ResetCloneId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetMountOptions"></a>

```csharp
private void ResetMountOptions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSecrets"></a>

```csharp
private void ResetSecrets()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetTopologyRequest` <a name="ResetTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetTopologyRequest"></a>

```csharp
private void ResetTopologyRequest()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

ExternalVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

ExternalVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

ExternalVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability">Capability</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired">ControllerRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected">ControllersExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy">ControllersHealthy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected">NodesExpected</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy">NodesHealthy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider">PluginProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion">PluginProviderVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable">Schedulable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies">Topologies</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput">CapabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput">CapacityMaxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput">CapacityMinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput">CloneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput">PluginIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput">SecretsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput">TopologyRequestInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax">CapacityMax</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin">CapacityMin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId">CloneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capability"></a>

```csharp
public ExternalVolumeCapabilityList Capability { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList">ExternalVolumeCapabilityList</a>

---

##### `ControllerRequired`<sup>Required</sup> <a name="ControllerRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllerRequired"></a>

```csharp
public IResolvable ControllerRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ControllersExpected`<sup>Required</sup> <a name="ControllersExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersExpected"></a>

```csharp
public double ControllersExpected { get; }
```

- *Type:* double

---

##### `ControllersHealthy`<sup>Required</sup> <a name="ControllersHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.controllersHealthy"></a>

```csharp
public double ControllersHealthy { get; }
```

- *Type:* double

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptions"></a>

```csharp
public ExternalVolumeMountOptionsOutputReference MountOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference">ExternalVolumeMountOptionsOutputReference</a>

---

##### `NodesExpected`<sup>Required</sup> <a name="NodesExpected" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesExpected"></a>

```csharp
public double NodesExpected { get; }
```

- *Type:* double

---

##### `NodesHealthy`<sup>Required</sup> <a name="NodesHealthy" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nodesHealthy"></a>

```csharp
public double NodesHealthy { get; }
```

- *Type:* double

---

##### `PluginProvider`<sup>Required</sup> <a name="PluginProvider" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProvider"></a>

```csharp
public string PluginProvider { get; }
```

- *Type:* string

---

##### `PluginProviderVersion`<sup>Required</sup> <a name="PluginProviderVersion" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginProviderVersion"></a>

```csharp
public string PluginProviderVersion { get; }
```

- *Type:* string

---

##### `Schedulable`<sup>Required</sup> <a name="Schedulable" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.schedulable"></a>

```csharp
public IResolvable Schedulable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Topologies`<sup>Required</sup> <a name="Topologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologies"></a>

```csharp
public ExternalVolumeTopologiesList Topologies { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList">ExternalVolumeTopologiesList</a>

---

##### `TopologyRequest`<sup>Required</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequest"></a>

```csharp
public ExternalVolumeTopologyRequestOutputReference TopologyRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference">ExternalVolumeTopologyRequestOutputReference</a>

---

##### `CapabilityInput`<sup>Optional</sup> <a name="CapabilityInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capabilityInput"></a>

```csharp
public object CapabilityInput { get; }
```

- *Type:* object

---

##### `CapacityMaxInput`<sup>Optional</sup> <a name="CapacityMaxInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMaxInput"></a>

```csharp
public string CapacityMaxInput { get; }
```

- *Type:* string

---

##### `CapacityMinInput`<sup>Optional</sup> <a name="CapacityMinInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMinInput"></a>

```csharp
public string CapacityMinInput { get; }
```

- *Type:* string

---

##### `CloneIdInput`<sup>Optional</sup> <a name="CloneIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneIdInput"></a>

```csharp
public string CloneIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.mountOptionsInput"></a>

```csharp
public ExternalVolumeMountOptions MountOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginIdInput"></a>

```csharp
public string PluginIdInput { get; }
```

- *Type:* string

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secretsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecretsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `TopologyRequestInput`<sup>Optional</sup> <a name="TopologyRequestInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.topologyRequestInput"></a>

```csharp
public ExternalVolumeTopologyRequest TopologyRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `CapacityMax`<sup>Required</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMax"></a>

```csharp
public string CapacityMax { get; }
```

- *Type:* string

---

##### `CapacityMin`<sup>Required</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.capacityMin"></a>

```csharp
public string CapacityMin { get; }
```

- *Type:* string

---

##### `CloneId`<sup>Required</sup> <a name="CloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.cloneId"></a>

```csharp
public string CloneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.externalVolume.ExternalVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalVolumeCapability <a name="ExternalVolumeCapability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeCapability {
    string AccessMode,
    string AttachmentMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode">AccessMode</a></code> | <code>string</code> | Defines whether a volume should be available concurrently. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | The storage API that will be used by the volume. |

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.accessMode"></a>

```csharp
public string AccessMode { get; set; }
```

- *Type:* string

Defines whether a volume should be available concurrently.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#access_mode ExternalVolume#access_mode}

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapability.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; set; }
```

- *Type:* string

The storage API that will be used by the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#attachment_mode ExternalVolume#attachment_mode}

---

### ExternalVolumeConfig <a name="ExternalVolumeConfig" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Capability,
    string Name,
    string PluginId,
    string VolumeId,
    string CapacityMax = null,
    string CapacityMin = null,
    string CloneId = null,
    string Id = null,
    ExternalVolumeMountOptions MountOptions = null,
    string Namespace = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    System.Collections.Generic.IDictionary<string, string> Secrets = null,
    string SnapshotId = null,
    ExternalVolumeTopologyRequest TopologyRequest = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability">Capability</a></code> | <code>object</code> | capability block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name">Name</a></code> | <code>string</code> | The display name of the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId">PluginId</a></code> | <code>string</code> | The ID of the CSI plugin that manages this volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId">VolumeId</a></code> | <code>string</code> | The unique ID of the volume, how jobs will refer to the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax">CapacityMax</a></code> | <code>string</code> | Defines how large the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin">CapacityMin</a></code> | <code>string</code> | Defines how small the volume can be. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId">CloneId</a></code> | <code>string</code> | The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace in which to create the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An optional key-value map of strings passed directly to the CSI plugin to configure the volume. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets">Secrets</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An optional key-value map of strings used as credentials for publishing and unpublishing volumes. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest">TopologyRequest</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | topology_request block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type">Type</a></code> | <code>string</code> | The type of the volume. Currently, only 'csi' is supported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capability`<sup>Required</sup> <a name="Capability" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capability"></a>

```csharp
public object Capability { get; set; }
```

- *Type:* object

capability block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capability ExternalVolume#capability}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The display name of the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#name ExternalVolume#name}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.pluginId"></a>

```csharp
public string PluginId { get; set; }
```

- *Type:* string

The ID of the CSI plugin that manages this volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#plugin_id ExternalVolume#plugin_id}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

The unique ID of the volume, how jobs will refer to the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#volume_id ExternalVolume#volume_id}

---

##### `CapacityMax`<sup>Optional</sup> <a name="CapacityMax" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMax"></a>

```csharp
public string CapacityMax { get; set; }
```

- *Type:* string

Defines how large the volume can be.

The storage provider may return a volume that is smaller than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_max ExternalVolume#capacity_max}

---

##### `CapacityMin`<sup>Optional</sup> <a name="CapacityMin" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.capacityMin"></a>

```csharp
public string CapacityMin { get; set; }
```

- *Type:* string

Defines how small the volume can be.

The storage provider may return a volume that is larger than this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#capacity_min ExternalVolume#capacity_min}

---

##### `CloneId`<sup>Optional</sup> <a name="CloneId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.cloneId"></a>

```csharp
public string CloneId { get; set; }
```

- *Type:* string

The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#clone_id ExternalVolume#clone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#id ExternalVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.mountOptions"></a>

```csharp
public ExternalVolumeMountOptions MountOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#mount_options ExternalVolume#mount_options}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace in which to create the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#namespace ExternalVolume#namespace}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An optional key-value map of strings passed directly to the CSI plugin to configure the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#parameters ExternalVolume#parameters}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.secrets"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Secrets { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An optional key-value map of strings used as credentials for publishing and unpublishing volumes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#secrets ExternalVolume#secrets}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#snapshot_id ExternalVolume#snapshot_id}

---

##### `TopologyRequest`<sup>Optional</sup> <a name="TopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.topologyRequest"></a>

```csharp
public ExternalVolumeTopologyRequest TopologyRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

topology_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology_request ExternalVolume#topology_request}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the volume. Currently, only 'csi' is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#type ExternalVolume#type}

---

### ExternalVolumeMountOptions <a name="ExternalVolumeMountOptions" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeMountOptions {
    string FsType = null,
    string[] MountFlags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType">FsType</a></code> | <code>string</code> | The file system type. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags">MountFlags</a></code> | <code>string[]</code> | The flags passed to mount. |

---

##### `FsType`<sup>Optional</sup> <a name="FsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.fsType"></a>

```csharp
public string FsType { get; set; }
```

- *Type:* string

The file system type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#fs_type ExternalVolume#fs_type}

---

##### `MountFlags`<sup>Optional</sup> <a name="MountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions.property.mountFlags"></a>

```csharp
public string[] MountFlags { get; set; }
```

- *Type:* string[]

The flags passed to mount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#mount_flags ExternalVolume#mount_flags}

---

### ExternalVolumeTopologies <a name="ExternalVolumeTopologies" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologies {

};
```


### ExternalVolumeTopologyRequest <a name="ExternalVolumeTopologyRequest" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequest {
    ExternalVolumeTopologyRequestPreferred Preferred = null,
    ExternalVolumeTopologyRequestRequired Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred">Preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | preferred block. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | required block. |

---

##### `Preferred`<sup>Optional</sup> <a name="Preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.preferred"></a>

```csharp
public ExternalVolumeTopologyRequestPreferred Preferred { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

preferred block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#preferred ExternalVolume#preferred}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest.property.required"></a>

```csharp
public ExternalVolumeTopologyRequestRequired Required { get; set; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

required block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#required ExternalVolume#required}

---

### ExternalVolumeTopologyRequestPreferred <a name="ExternalVolumeTopologyRequestPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestPreferred {
    object Topology
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology">Topology</a></code> | <code>object</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred.property.topology"></a>

```csharp
public object Topology { get; set; }
```

- *Type:* object

topology block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestPreferredTopology <a name="ExternalVolumeTopologyRequestPreferredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestPreferredTopology {
    System.Collections.Generic.IDictionary<string, string> Segments
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Define the attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopology.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#segments ExternalVolume#segments}

---

### ExternalVolumeTopologyRequestRequired <a name="ExternalVolumeTopologyRequestRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestRequired {
    object Topology
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology">Topology</a></code> | <code>object</code> | topology block. |

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired.property.topology"></a>

```csharp
public object Topology { get; set; }
```

- *Type:* object

topology block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#topology ExternalVolume#topology}

---

### ExternalVolumeTopologyRequestRequiredTopology <a name="ExternalVolumeTopologyRequestRequiredTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestRequiredTopology {
    System.Collections.Generic.IDictionary<string, string> Segments
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Define the attributes for the topology request. |

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopology.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Define the attributes for the topology request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/external_volume#segments ExternalVolume#segments}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalVolumeCapabilityList <a name="ExternalVolumeCapabilityList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeCapabilityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get"></a>

```csharp
private ExternalVolumeCapabilityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalVolumeCapabilityOutputReference <a name="ExternalVolumeCapabilityOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeCapabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput">AccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput">AttachmentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode">AttachmentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessModeInput`<sup>Optional</sup> <a name="AccessModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessModeInput"></a>

```csharp
public string AccessModeInput { get; }
```

- *Type:* string

---

##### `AttachmentModeInput`<sup>Optional</sup> <a name="AttachmentModeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentModeInput"></a>

```csharp
public string AttachmentModeInput { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `AttachmentMode`<sup>Required</sup> <a name="AttachmentMode" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.attachmentMode"></a>

```csharp
public string AttachmentMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeCapabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalVolumeMountOptionsOutputReference <a name="ExternalVolumeMountOptionsOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeMountOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFsType` <a name="ResetFsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetFsType"></a>

```csharp
private void ResetFsType()
```

##### `ResetMountFlags` <a name="ResetMountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.resetMountFlags"></a>

```csharp
private void ResetMountFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput">FsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput">MountFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType">FsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags">MountFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FsTypeInput`<sup>Optional</sup> <a name="FsTypeInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsTypeInput"></a>

```csharp
public string FsTypeInput { get; }
```

- *Type:* string

---

##### `MountFlagsInput`<sup>Optional</sup> <a name="MountFlagsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlagsInput"></a>

```csharp
public string[] MountFlagsInput { get; }
```

- *Type:* string[]

---

##### `FsType`<sup>Required</sup> <a name="FsType" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.fsType"></a>

```csharp
public string FsType { get; }
```

- *Type:* string

---

##### `MountFlags`<sup>Required</sup> <a name="MountFlags" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.mountFlags"></a>

```csharp
public string[] MountFlags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptionsOutputReference.property.internalValue"></a>

```csharp
public ExternalVolumeMountOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeMountOptions">ExternalVolumeMountOptions</a>

---


### ExternalVolumeTopologiesList <a name="ExternalVolumeTopologiesList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get"></a>

```csharp
private ExternalVolumeTopologiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ExternalVolumeTopologiesOutputReference <a name="ExternalVolumeTopologiesOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments">Segments</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.segments"></a>

```csharp
public StringMap Segments { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologiesOutputReference.property.internalValue"></a>

```csharp
public ExternalVolumeTopologies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologies">ExternalVolumeTopologies</a>

---


### ExternalVolumeTopologyRequestOutputReference <a name="ExternalVolumeTopologyRequestOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreferred` <a name="PutPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred"></a>

```csharp
private void PutPreferred(ExternalVolumeTopologyRequestPreferred Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putPreferred.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `PutRequired` <a name="PutRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired"></a>

```csharp
private void PutRequired(ExternalVolumeTopologyRequestRequired Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `ResetPreferred` <a name="ResetPreferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetPreferred"></a>

```csharp
private void ResetPreferred()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred">Preferred</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required">Required</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput">PreferredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput">RequiredInput</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Preferred`<sup>Required</sup> <a name="Preferred" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferred"></a>

```csharp
public ExternalVolumeTopologyRequestPreferredOutputReference Preferred { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference">ExternalVolumeTopologyRequestPreferredOutputReference</a>

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.required"></a>

```csharp
public ExternalVolumeTopologyRequestRequiredOutputReference Required { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference">ExternalVolumeTopologyRequestRequiredOutputReference</a>

---

##### `PreferredInput`<sup>Optional</sup> <a name="PreferredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.preferredInput"></a>

```csharp
public ExternalVolumeTopologyRequestPreferred PreferredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.requiredInput"></a>

```csharp
public ExternalVolumeTopologyRequestRequired RequiredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestOutputReference.property.internalValue"></a>

```csharp
public ExternalVolumeTopologyRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequest">ExternalVolumeTopologyRequest</a>

---


### ExternalVolumeTopologyRequestPreferredOutputReference <a name="ExternalVolumeTopologyRequestPreferredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestPreferredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology"></a>

```csharp
private void PutTopology(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.putTopology.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topology"></a>

```csharp
public ExternalVolumeTopologyRequestPreferredTopologyList Topology { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList">ExternalVolumeTopologyRequestPreferredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.topologyInput"></a>

```csharp
public object TopologyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredOutputReference.property.internalValue"></a>

```csharp
public ExternalVolumeTopologyRequestPreferred InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferred">ExternalVolumeTopologyRequestPreferred</a>

---


### ExternalVolumeTopologyRequestPreferredTopologyList <a name="ExternalVolumeTopologyRequestPreferredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestPreferredTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get"></a>

```csharp
private ExternalVolumeTopologyRequestPreferredTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalVolumeTopologyRequestPreferredTopologyOutputReference <a name="ExternalVolumeTopologyRequestPreferredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestPreferredTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segmentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SegmentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestPreferredTopologyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalVolumeTopologyRequestRequiredOutputReference <a name="ExternalVolumeTopologyRequestRequiredOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestRequiredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTopology` <a name="PutTopology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology"></a>

```csharp
private void PutTopology(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.putTopology.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology">Topology</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput">TopologyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Topology`<sup>Required</sup> <a name="Topology" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topology"></a>

```csharp
public ExternalVolumeTopologyRequestRequiredTopologyList Topology { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList">ExternalVolumeTopologyRequestRequiredTopologyList</a>

---

##### `TopologyInput`<sup>Optional</sup> <a name="TopologyInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.topologyInput"></a>

```csharp
public object TopologyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredOutputReference.property.internalValue"></a>

```csharp
public ExternalVolumeTopologyRequestRequired InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequired">ExternalVolumeTopologyRequestRequired</a>

---


### ExternalVolumeTopologyRequestRequiredTopologyList <a name="ExternalVolumeTopologyRequestRequiredTopologyList" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestRequiredTopologyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get"></a>

```csharp
private ExternalVolumeTopologyRequestRequiredTopologyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ExternalVolumeTopologyRequestRequiredTopologyOutputReference <a name="ExternalVolumeTopologyRequestRequiredTopologyOutputReference" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new ExternalVolumeTopologyRequestRequiredTopologyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput">SegmentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments">Segments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentsInput`<sup>Optional</sup> <a name="SegmentsInput" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segmentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SegmentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.segments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Segments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-nomad.externalVolume.ExternalVolumeTopologyRequestRequiredTopologyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



