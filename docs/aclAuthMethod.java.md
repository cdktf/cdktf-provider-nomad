# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-nomad.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method nomad_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethod;

AclAuthMethod.Builder.create(Construct scope, java.lang.String id)
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
    .config(AclAuthMethodConfigA)
    .maxTokenTtl(java.lang.String)
    .name(java.lang.String)
    .tokenLocality(java.lang.String)
    .type(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .id(java.lang.String)
//  .tokenNameFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | Defines the maximum life of a token created by this method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The identifier of the ACL Auth Method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | Defines whether the ACL Auth Method creates a local or global token when performing SSO login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether this ACL Auth Method is to be set as default. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenNameFormat">tokenNameFormat</a></code> | <code>java.lang.String</code> | Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl"></a>

- *Type:* java.lang.String

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality"></a>

- *Type:* java.lang.String

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.type"></a>

- *Type:* java.lang.String

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.default"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tokenNameFormat`<sup>Optional</sup> <a name="tokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenNameFormat"></a>

- *Type:* java.lang.String

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat">resetTokenNameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig"></a>

```java
public void putConfig(AclAuthMethodConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetId"></a>

```java
public void resetId()
```

##### `resetTokenNameFormat` <a name="resetTokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.resetTokenNameFormat"></a>

```java
public void resetTokenNameFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethod;

AclAuthMethod.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethod;

AclAuthMethod.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethod;

AclAuthMethod.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethod;

AclAuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AclAuthMethod.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">maxTokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">tokenLocalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput">tokenNameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat">tokenNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.config"></a>

```java
public AclAuthMethodConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference">AclAuthMethodConfigAOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```java
public AclAuthMethodConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTokenTtlInput`<sup>Optional</sup> <a name="maxTokenTtlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```java
public java.lang.String getMaxTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tokenLocalityInput`<sup>Optional</sup> <a name="tokenLocalityInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```java
public java.lang.String getTokenLocalityInput();
```

- *Type:* java.lang.String

---

##### `tokenNameFormatInput`<sup>Optional</sup> <a name="tokenNameFormatInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormatInput"></a>

```java
public java.lang.String getTokenNameFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```java
public java.lang.String getMaxTokenTtl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```java
public java.lang.String getTokenLocality();
```

- *Type:* java.lang.String

---

##### `tokenNameFormat`<sup>Required</sup> <a name="tokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tokenNameFormat"></a>

```java
public java.lang.String getTokenNameFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethodConfig;

AclAuthMethodConfig.builder()
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
    .config(AclAuthMethodConfigA)
    .maxTokenTtl(java.lang.String)
    .name(java.lang.String)
    .tokenLocality(java.lang.String)
    .type(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .id(java.lang.String)
//  .tokenNameFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">maxTokenTtl</a></code> | <code>java.lang.String</code> | Defines the maximum life of a token created by this method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name">name</a></code> | <code>java.lang.String</code> | The identifier of the ACL Auth Method. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">tokenLocality</a></code> | <code>java.lang.String</code> | Defines whether the ACL Auth Method creates a local or global token when performing SSO login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type">type</a></code> | <code>java.lang.String</code> | ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.". |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines whether this ACL Auth Method is to be set as default. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat">tokenNameFormat</a></code> | <code>java.lang.String</code> | Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```java
public AclAuthMethodConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `maxTokenTtl`<sup>Required</sup> <a name="maxTokenTtl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```java
public java.lang.String getMaxTokenTtl();
```

- *Type:* java.lang.String

Defines the maximum life of a token created by this method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The identifier of the ACL Auth Method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `tokenLocality`<sup>Required</sup> <a name="tokenLocality" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```java
public java.lang.String getTokenLocality();
```

- *Type:* java.lang.String

Defines whether the ACL Auth Method creates a local or global token when performing SSO login.

This field must be set to either "local" or "global".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines whether this ACL Auth Method is to be set as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#default AclAuthMethod#default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tokenNameFormat`<sup>Optional</sup> <a name="tokenNameFormat" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfig.property.tokenNameFormat"></a>

```java
public java.lang.String getTokenNameFormat();
```

- *Type:* java.lang.String

Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}

---

### AclAuthMethodConfigA <a name="AclAuthMethodConfigA" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethodConfigA;

AclAuthMethodConfigA.builder()
    .allowedRedirectUris(java.util.List<java.lang.String>)
    .oidcClientId(java.lang.String)
    .oidcClientSecret(java.lang.String)
    .oidcDiscoveryUrl(java.lang.String)
//  .boundAudiences(java.util.List<java.lang.String>)
//  .claimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryCaPem(java.util.List<java.lang.String>)
//  .listClaimMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .oidcScopes(java.util.List<java.lang.String>)
//  .signingAlgs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed values that can be used for the redirect URI. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId">oidcClientId</a></code> | <code>java.lang.String</code> | The OAuth Client ID configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret">oidcClientSecret</a></code> | <code>java.lang.String</code> | The OAuth Client Secret configured with the OIDC provider. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>java.lang.String</code> | The OIDC Discovery URL, without any .well-known component (base path). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences">boundAudiences</a></code> | <code>java.util.List<java.lang.String></code> | List of auth claims that are valid for login. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mappings of claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem">discoveryCaPem</a></code> | <code>java.util.List<java.lang.String></code> | PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings">listClaimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mappings of list claims (key) that will be copied to a metadata field (value). |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes">oidcScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OIDC scopes. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs">signingAlgs</a></code> | <code>java.util.List<java.lang.String></code> | A list of supported signing algorithms. |

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed values that can be used for the redirect URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}

---

##### `oidcClientId`<sup>Required</sup> <a name="oidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientId"></a>

```java
public java.lang.String getOidcClientId();
```

- *Type:* java.lang.String

The OAuth Client ID configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}

---

##### `oidcClientSecret`<sup>Required</sup> <a name="oidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcClientSecret"></a>

```java
public java.lang.String getOidcClientSecret();
```

- *Type:* java.lang.String

The OAuth Client Secret configured with the OIDC provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}

---

##### `oidcDiscoveryUrl`<sup>Required</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcDiscoveryUrl"></a>

```java
public java.lang.String getOidcDiscoveryUrl();
```

- *Type:* java.lang.String

The OIDC Discovery URL, without any .well-known component (base path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}

---

##### `boundAudiences`<sup>Optional</sup> <a name="boundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.boundAudiences"></a>

```java
public java.util.List<java.lang.String> getBoundAudiences();
```

- *Type:* java.util.List<java.lang.String>

List of auth claims that are valid for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mappings of claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}

---

##### `discoveryCaPem`<sup>Optional</sup> <a name="discoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.discoveryCaPem"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPem();
```

- *Type:* java.util.List<java.lang.String>

PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}

---

##### `listClaimMappings`<sup>Optional</sup> <a name="listClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.listClaimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mappings of list claims (key) that will be copied to a metadata field (value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}

---

##### `oidcScopes`<sup>Optional</sup> <a name="oidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.oidcScopes"></a>

```java
public java.util.List<java.lang.String> getOidcScopes();
```

- *Type:* java.util.List<java.lang.String>

List of OIDC scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}

---

##### `signingAlgs`<sup>Optional</sup> <a name="signingAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA.property.signingAlgs"></a>

```java
public java.util.List<java.lang.String> getSigningAlgs();
```

- *Type:* java.util.List<java.lang.String>

A list of supported signing algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.1/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodConfigAOutputReference <a name="AclAuthMethodConfigAOutputReference" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.acl_auth_method.AclAuthMethodConfigAOutputReference;

new AclAuthMethodConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences">resetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings">resetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem">resetDiscoveryCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings">resetListClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes">resetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs">resetSigningAlgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoundAudiences` <a name="resetBoundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetBoundAudiences"></a>

```java
public void resetBoundAudiences()
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetClaimMappings"></a>

```java
public void resetClaimMappings()
```

##### `resetDiscoveryCaPem` <a name="resetDiscoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetDiscoveryCaPem"></a>

```java
public void resetDiscoveryCaPem()
```

##### `resetListClaimMappings` <a name="resetListClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetListClaimMappings"></a>

```java
public void resetListClaimMappings()
```

##### `resetOidcScopes` <a name="resetOidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetOidcScopes"></a>

```java
public void resetOidcScopes()
```

##### `resetSigningAlgs` <a name="resetSigningAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.resetSigningAlgs"></a>

```java
public void resetSigningAlgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput">boundAudiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput">claimMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput">discoveryCaPemInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput">listClaimMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput">oidcClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput">oidcClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput">oidcDiscoveryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput">oidcScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput">signingAlgsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences">boundAudiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings">claimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem">discoveryCaPem</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings">listClaimMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId">oidcClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret">oidcClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl">oidcDiscoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes">oidcScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs">signingAlgs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundAudiencesInput`<sup>Optional</sup> <a name="boundAudiencesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiencesInput"></a>

```java
public java.util.List<java.lang.String> getBoundAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryCaPemInput`<sup>Optional</sup> <a name="discoveryCaPemInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPemInput"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPemInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listClaimMappingsInput`<sup>Optional</sup> <a name="listClaimMappingsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oidcClientIdInput`<sup>Optional</sup> <a name="oidcClientIdInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientIdInput"></a>

```java
public java.lang.String getOidcClientIdInput();
```

- *Type:* java.lang.String

---

##### `oidcClientSecretInput`<sup>Optional</sup> <a name="oidcClientSecretInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecretInput"></a>

```java
public java.lang.String getOidcClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryUrlInput`<sup>Optional</sup> <a name="oidcDiscoveryUrlInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrlInput"></a>

```java
public java.lang.String getOidcDiscoveryUrlInput();
```

- *Type:* java.lang.String

---

##### `oidcScopesInput`<sup>Optional</sup> <a name="oidcScopesInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopesInput"></a>

```java
public java.util.List<java.lang.String> getOidcScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signingAlgsInput`<sup>Optional</sup> <a name="signingAlgsInput" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgsInput"></a>

```java
public java.util.List<java.lang.String> getSigningAlgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.allowedRedirectUris"></a>

```java
public java.util.List<java.lang.String> getAllowedRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundAudiences`<sup>Required</sup> <a name="boundAudiences" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.boundAudiences"></a>

```java
public java.util.List<java.lang.String> getBoundAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.claimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryCaPem`<sup>Required</sup> <a name="discoveryCaPem" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.discoveryCaPem"></a>

```java
public java.util.List<java.lang.String> getDiscoveryCaPem();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listClaimMappings`<sup>Required</sup> <a name="listClaimMappings" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.listClaimMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getListClaimMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oidcClientId`<sup>Required</sup> <a name="oidcClientId" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientId"></a>

```java
public java.lang.String getOidcClientId();
```

- *Type:* java.lang.String

---

##### `oidcClientSecret`<sup>Required</sup> <a name="oidcClientSecret" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcClientSecret"></a>

```java
public java.lang.String getOidcClientSecret();
```

- *Type:* java.lang.String

---

##### `oidcDiscoveryUrl`<sup>Required</sup> <a name="oidcDiscoveryUrl" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcDiscoveryUrl"></a>

```java
public java.lang.String getOidcDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `oidcScopes`<sup>Required</sup> <a name="oidcScopes" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.oidcScopes"></a>

```java
public java.util.List<java.lang.String> getOidcScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `signingAlgs`<sup>Required</sup> <a name="signingAlgs" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.signingAlgs"></a>

```java
public java.util.List<java.lang.String> getSigningAlgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigAOutputReference.property.internalValue"></a>

```java
public AclAuthMethodConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-nomad.aclAuthMethod.AclAuthMethodConfigA">AclAuthMethodConfigA</a>

---



