# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-nomad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadProvider <a name="NomadProvider" id="@cdktf/provider-nomad.provider.NomadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs nomad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProvider;

NomadProvider.Builder.create(Construct scope, java.lang.String id)
    .address(java.lang.String)
//  .alias(java.lang.String)
//  .authJwt(NomadProviderAuthJwt)
//  .caFile(java.lang.String)
//  .caPem(java.lang.String)
//  .certFile(java.lang.String)
//  .certPem(java.lang.String)
//  .headers(IResolvable|java.util.List<NomadProviderHeaders>)
//  .httpAuth(java.lang.String)
//  .ignoreEnvVars(java.util.Map<java.lang.String, java.lang.Boolean|IResolvable>)
//  .keyFile(java.lang.String)
//  .keyPem(java.lang.String)
//  .region(java.lang.String)
//  .secretId(java.lang.String)
//  .skipVerify(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caFile">caFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caPem">caPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certFile">certFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certPem">certPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.ignoreEnvVars">ignoreEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|com.hashicorp.cdktf.IResolvable></code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyFile">keyFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyPem">keyPem</a></code> | <code>java.lang.String</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip TLS verification on client side. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.address"></a>

- *Type:* java.lang.String

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#address NomadProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#alias NomadProvider#alias}

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.authJwt"></a>

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#auth_jwt NomadProvider#auth_jwt}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ca_file NomadProvider#ca_file}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caPem"></a>

- *Type:* java.lang.String

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ca_pem NomadProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#cert_file NomadProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certPem"></a>

- *Type:* java.lang.String

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#cert_pem NomadProvider#cert_pem}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.headers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#headers NomadProvider#headers}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.httpAuth"></a>

- *Type:* java.lang.String

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#http_auth NomadProvider#http_auth}

---

##### `ignoreEnvVars`<sup>Optional</sup> <a name="ignoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.ignoreEnvVars"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|com.hashicorp.cdktf.IResolvable>

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyFile"></a>

- *Type:* java.lang.String

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#key_file NomadProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyPem"></a>

- *Type:* java.lang.String

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#key_pem NomadProvider#key_pem}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#region NomadProvider#region}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#secret_id NomadProvider#secret_id}

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.skipVerify"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip TLS verification on client side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#skip_verify NomadProvider#skip_verify}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAuthJwt">resetAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaPem">resetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertFile">resetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertPem">resetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth">resetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars">resetIgnoreEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile">resetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem">resetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify">resetSkipVerify</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.provider.NomadProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-nomad.provider.NomadProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuthJwt` <a name="resetAuthJwt" id="@cdktf/provider-nomad.provider.NomadProvider.resetAuthJwt"></a>

```java
public void resetAuthJwt()
```

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaFile"></a>

```java
public void resetCaFile()
```

##### `resetCaPem` <a name="resetCaPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaPem"></a>

```java
public void resetCaPem()
```

##### `resetCertFile` <a name="resetCertFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertFile"></a>

```java
public void resetCertFile()
```

##### `resetCertPem` <a name="resetCertPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertPem"></a>

```java
public void resetCertPem()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-nomad.provider.NomadProvider.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHttpAuth` <a name="resetHttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth"></a>

```java
public void resetHttpAuth()
```

##### `resetIgnoreEnvVars` <a name="resetIgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars"></a>

```java
public void resetIgnoreEnvVars()
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile"></a>

```java
public void resetKeyFile()
```

##### `resetKeyPem` <a name="resetKeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem"></a>

```java
public void resetKeyPem()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-nomad.provider.NomadProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-nomad.provider.NomadProvider.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSkipVerify` <a name="resetSkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify"></a>

```java
public void resetSkipVerify()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProvider;

NomadProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProvider;

NomadProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProvider;

NomadProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProvider;

NomadProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NomadProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NomadProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NomadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.provider.NomadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NomadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.authJwtInput">authJwtInput</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput">caFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput">caPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput">certFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput">certPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput">httpAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput">ignoreEnvVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput">keyFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput">keyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput">skipVerifyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFile">caFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPem">caPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFile">certFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPem">certPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars">ignoreEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPem">keyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.provider.NomadProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.provider.NomadProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authJwtInput`<sup>Optional</sup> <a name="authJwtInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.authJwtInput"></a>

```java
public NomadProviderAuthJwt getAuthJwtInput();
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput"></a>

```java
public java.lang.String getCaFileInput();
```

- *Type:* java.lang.String

---

##### `caPemInput`<sup>Optional</sup> <a name="caPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput"></a>

```java
public java.lang.String getCaPemInput();
```

- *Type:* java.lang.String

---

##### `certFileInput`<sup>Optional</sup> <a name="certFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput"></a>

```java
public java.lang.String getCertFileInput();
```

- *Type:* java.lang.String

---

##### `certPemInput`<sup>Optional</sup> <a name="certPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput"></a>

```java
public java.lang.String getCertPemInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.headersInput"></a>

```java
public IResolvable|java.util.List<NomadProviderHeaders> getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>>

---

##### `httpAuthInput`<sup>Optional</sup> <a name="httpAuthInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput"></a>

```java
public java.lang.String getHttpAuthInput();
```

- *Type:* java.lang.String

---

##### `ignoreEnvVarsInput`<sup>Optional</sup> <a name="ignoreEnvVarsInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getIgnoreEnvVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|com.hashicorp.cdktf.IResolvable>

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput"></a>

```java
public java.lang.String getKeyFileInput();
```

- *Type:* java.lang.String

---

##### `keyPemInput`<sup>Optional</sup> <a name="keyPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput"></a>

```java
public java.lang.String getKeyPemInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `skipVerifyInput`<sup>Optional</sup> <a name="skipVerifyInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipVerifyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProvider.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-nomad.provider.NomadProvider.property.authJwt"></a>

```java
public NomadProviderAuthJwt getAuthJwt();
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProvider.property.headers"></a>

```java
public IResolvable|java.util.List<NomadProviderHeaders> getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>>

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth"></a>

```java
public java.lang.String getHttpAuth();
```

- *Type:* java.lang.String

---

##### `ignoreEnvVars`<sup>Optional</sup> <a name="ignoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getIgnoreEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|com.hashicorp.cdktf.IResolvable>

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPem"></a>

```java
public java.lang.String getKeyPem();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify"></a>

```java
public java.lang.Boolean|IResolvable getSkipVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NomadProviderAuthJwt <a name="NomadProviderAuthJwt" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProviderAuthJwt;

NomadProviderAuthJwt.builder()
    .authMethod(java.lang.String)
    .loginToken(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.authMethod">authMethod</a></code> | <code>java.lang.String</code> | The name of the auth method to use for login. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.loginToken">loginToken</a></code> | <code>java.lang.String</code> | The externally issued authentication token to be exchanged for a Nomad ACL Token. |

---

##### `authMethod`<sup>Required</sup> <a name="authMethod" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.authMethod"></a>

```java
public java.lang.String getAuthMethod();
```

- *Type:* java.lang.String

The name of the auth method to use for login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#auth_method NomadProvider#auth_method}

---

##### `loginToken`<sup>Required</sup> <a name="loginToken" id="@cdktf/provider-nomad.provider.NomadProviderAuthJwt.property.loginToken"></a>

```java
public java.lang.String getLoginToken();
```

- *Type:* java.lang.String

The externally issued authentication token to be exchanged for a Nomad ACL Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#login_token NomadProvider#login_token}

---

### NomadProviderConfig <a name="NomadProviderConfig" id="@cdktf/provider-nomad.provider.NomadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProviderConfig;

NomadProviderConfig.builder()
    .address(java.lang.String)
//  .alias(java.lang.String)
//  .authJwt(NomadProviderAuthJwt)
//  .caFile(java.lang.String)
//  .caPem(java.lang.String)
//  .certFile(java.lang.String)
//  .certPem(java.lang.String)
//  .headers(IResolvable|java.util.List<NomadProviderHeaders>)
//  .httpAuth(java.lang.String)
//  .ignoreEnvVars(java.util.Map<java.lang.String, java.lang.Boolean|IResolvable>)
//  .keyFile(java.lang.String)
//  .keyPem(java.lang.String)
//  .region(java.lang.String)
//  .secretId(java.lang.String)
//  .skipVerify(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.address">address</a></code> | <code>java.lang.String</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.authJwt">authJwt</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a></code> | auth_jwt block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile">caFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem">caPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile">certFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem">certPem</a></code> | <code>java.lang.String</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth">httpAuth</a></code> | <code>java.lang.String</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars">ignoreEnvVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean\|com.hashicorp.cdktf.IResolvable></code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile">keyFile</a></code> | <code>java.lang.String</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem">keyPem</a></code> | <code>java.lang.String</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify">skipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip TLS verification on client side. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#address NomadProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#alias NomadProvider#alias}

---

##### `authJwt`<sup>Optional</sup> <a name="authJwt" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.authJwt"></a>

```java
public NomadProviderAuthJwt getAuthJwt();
```

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderAuthJwt">NomadProviderAuthJwt</a>

auth_jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#auth_jwt NomadProvider#auth_jwt}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile"></a>

```java
public java.lang.String getCaFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ca_file NomadProvider#ca_file}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem"></a>

```java
public java.lang.String getCaPem();
```

- *Type:* java.lang.String

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ca_pem NomadProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile"></a>

```java
public java.lang.String getCertFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#cert_file NomadProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem"></a>

```java
public java.lang.String getCertPem();
```

- *Type:* java.lang.String

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#cert_pem NomadProvider#cert_pem}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers"></a>

```java
public IResolvable|java.util.List<NomadProviderHeaders> getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#headers NomadProvider#headers}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth"></a>

```java
public java.lang.String getHttpAuth();
```

- *Type:* java.lang.String

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#http_auth NomadProvider#http_auth}

---

##### `ignoreEnvVars`<sup>Optional</sup> <a name="ignoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean|IResolvable> getIgnoreEnvVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean|com.hashicorp.cdktf.IResolvable>

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile"></a>

```java
public java.lang.String getKeyFile();
```

- *Type:* java.lang.String

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#key_file NomadProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem"></a>

```java
public java.lang.String getKeyPem();
```

- *Type:* java.lang.String

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#key_pem NomadProvider#key_pem}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#region NomadProvider#region}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#secret_id NomadProvider#secret_id}

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify"></a>

```java
public java.lang.Boolean|IResolvable getSkipVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip TLS verification on client side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#skip_verify NomadProvider#skip_verify}

---

### NomadProviderHeaders <a name="NomadProviderHeaders" id="@cdktf/provider-nomad.provider.NomadProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.nomad.provider.NomadProviderHeaders;

NomadProviderHeaders.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name">name</a></code> | <code>java.lang.String</code> | The header name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value">value</a></code> | <code>java.lang.String</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#name NomadProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.2/docs#value NomadProvider#value}

---



