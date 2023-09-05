# `nomad_scheduler_config`

Refer to the Terraform Registory for docs: [`nomad_scheduler_config`](https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config).

# `schedulerConfig` Submodule <a name="`schedulerConfig` Submodule" id="@cdktf/provider-nomad.schedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerConfig <a name="SchedulerConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config nomad_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new SchedulerConfig(Construct Scope, string Id, SchedulerConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig">SchedulerConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig">SchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled">ResetMemoryOversubscriptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig">ResetPreemptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm">ResetSchedulerAlgorithm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMemoryOversubscriptionEnabled` <a name="ResetMemoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled"></a>

```csharp
private void ResetMemoryOversubscriptionEnabled()
```

##### `ResetPreemptionConfig` <a name="ResetPreemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig"></a>

```csharp
private void ResetPreemptionConfig()
```

##### `ResetSchedulerAlgorithm` <a name="ResetSchedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm"></a>

```csharp
private void ResetSchedulerAlgorithm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

SchedulerConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

SchedulerConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

SchedulerConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput">MemoryOversubscriptionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput">PreemptionConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput">SchedulerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled">MemoryOversubscriptionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig">PreemptionConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm">SchedulerAlgorithm</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemoryOversubscriptionEnabledInput`<sup>Optional</sup> <a name="MemoryOversubscriptionEnabledInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput"></a>

```csharp
public object MemoryOversubscriptionEnabledInput { get; }
```

- *Type:* object

---

##### `PreemptionConfigInput`<sup>Optional</sup> <a name="PreemptionConfigInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> PreemptionConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SchedulerAlgorithmInput`<sup>Optional</sup> <a name="SchedulerAlgorithmInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput"></a>

```csharp
public string SchedulerAlgorithmInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemoryOversubscriptionEnabled`<sup>Required</sup> <a name="MemoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled"></a>

```csharp
public object MemoryOversubscriptionEnabled { get; }
```

- *Type:* object

---

##### `PreemptionConfig`<sup>Required</sup> <a name="PreemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> PreemptionConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `SchedulerAlgorithm`<sup>Required</sup> <a name="SchedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm"></a>

```csharp
public string SchedulerAlgorithm { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerConfigConfig <a name="SchedulerConfigConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Nomad;

new SchedulerConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    object MemoryOversubscriptionEnabled = null,
    System.Collections.Generic.IDictionary<string, object> PreemptionConfig = null,
    string SchedulerAlgorithm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled">MemoryOversubscriptionEnabled</a></code> | <code>object</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig">PreemptionConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm">SchedulerAlgorithm</a></code> | <code>string</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MemoryOversubscriptionEnabled`<sup>Optional</sup> <a name="MemoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled"></a>

```csharp
public object MemoryOversubscriptionEnabled { get; set; }
```

- *Type:* object

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `PreemptionConfig`<sup>Optional</sup> <a name="PreemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> PreemptionConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `SchedulerAlgorithm`<sup>Optional</sup> <a name="SchedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm"></a>

```csharp
public string SchedulerAlgorithm { get; set; }
```

- *Type:* string

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---



