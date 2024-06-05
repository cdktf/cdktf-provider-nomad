# `schedulerConfig` Submodule <a name="`schedulerConfig` Submodule" id="@cdktf/provider-nomad.schedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerConfig <a name="SchedulerConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config nomad_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfig;

SchedulerConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .memoryOversubscriptionEnabled(java.lang.Boolean)
//  .memoryOversubscriptionEnabled(IResolvable)
//  .preemptionConfig(java.util.Map<java.lang.String, java.lang.Boolean)
//  .preemptionConfig(IResolvable>)
//  .schedulerAlgorithm(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.memoryOversubscriptionEnabled">memoryOversubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.preemptionConfig">preemptionConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryOversubscriptionEnabled`<sup>Optional</sup> <a name="memoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.memoryOversubscriptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `preemptionConfig`<sup>Optional</sup> <a name="preemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.preemptionConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `schedulerAlgorithm`<sup>Optional</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.Initializer.parameter.schedulerAlgorithm"></a>

- *Type:* java.lang.String

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled">resetMemoryOversubscriptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig">resetPreemptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm">resetSchedulerAlgorithm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMemoryOversubscriptionEnabled` <a name="resetMemoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetMemoryOversubscriptionEnabled"></a>

```java
public void resetMemoryOversubscriptionEnabled()
```

##### `resetPreemptionConfig` <a name="resetPreemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetPreemptionConfig"></a>

```java
public void resetPreemptionConfig()
```

##### `resetSchedulerAlgorithm` <a name="resetSchedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.resetSchedulerAlgorithm"></a>

```java
public void resetSchedulerAlgorithm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfig;

SchedulerConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfig;

SchedulerConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfig;

SchedulerConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfig;

SchedulerConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SchedulerConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SchedulerConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput">memoryOversubscriptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput">preemptionConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput">schedulerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled">memoryOversubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig">preemptionConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memoryOversubscriptionEnabledInput`<sup>Optional</sup> <a name="memoryOversubscriptionEnabledInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabledInput"></a>

```java
public java.lang.Object getMemoryOversubscriptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preemptionConfigInput`<sup>Optional</sup> <a name="preemptionConfigInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfigInput"></a>

```java
public java.lang.Object getPreemptionConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `schedulerAlgorithmInput`<sup>Optional</sup> <a name="schedulerAlgorithmInput" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithmInput"></a>

```java
public java.lang.String getSchedulerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memoryOversubscriptionEnabled`<sup>Required</sup> <a name="memoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.memoryOversubscriptionEnabled"></a>

```java
public java.lang.Object getMemoryOversubscriptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preemptionConfig`<sup>Required</sup> <a name="preemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.preemptionConfig"></a>

```java
public java.lang.Object getPreemptionConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `schedulerAlgorithm`<sup>Required</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.schedulerAlgorithm"></a>

```java
public java.lang.String getSchedulerAlgorithm();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerConfigConfig <a name="SchedulerConfigConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.scheduler_config.SchedulerConfigConfig;

SchedulerConfigConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .memoryOversubscriptionEnabled(java.lang.Boolean)
//  .memoryOversubscriptionEnabled(IResolvable)
//  .preemptionConfig(java.util.Map<java.lang.String, java.lang.Boolean)
//  .preemptionConfig(IResolvable>)
//  .schedulerAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#id SchedulerConfig#id}. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled">memoryOversubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, tasks may exceed their reserved memory limit. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig">preemptionConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Options to enable preemption for various schedulers. |
| <code><a href="#@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm">schedulerAlgorithm</a></code> | <code>java.lang.String</code> | Specifies whether scheduler binpacks or spreads allocations on available nodes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#id SchedulerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memoryOversubscriptionEnabled`<sup>Optional</sup> <a name="memoryOversubscriptionEnabled" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.memoryOversubscriptionEnabled"></a>

```java
public java.lang.Object getMemoryOversubscriptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, tasks may exceed their reserved memory limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}

---

##### `preemptionConfig`<sup>Optional</sup> <a name="preemptionConfig" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.preemptionConfig"></a>

```java
public java.lang.Object getPreemptionConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Options to enable preemption for various schedulers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}

---

##### `schedulerAlgorithm`<sup>Optional</sup> <a name="schedulerAlgorithm" id="@cdktf/provider-nomad.schedulerConfig.SchedulerConfigConfig.property.schedulerAlgorithm"></a>

```java
public java.lang.String getSchedulerAlgorithm();
```

- *Type:* java.lang.String

Specifies whether scheduler binpacks or spreads allocations on available nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}

---



