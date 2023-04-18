# `provider`

Refer to the Terraform Registory for docs: [`nomad`](https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-nomad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadProvider <a name="NomadProvider" id="@cdktf/provider-nomad.provider.NomadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs nomad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProvider(
  scope: Construct,
  id: str,
  address: str,
  alias: str = None,
  ca_file: str = None,
  ca_pem: str = None,
  cert_file: str = None,
  cert_pem: str = None,
  consul_token: str = None,
  headers: typing.Union[IResolvable, typing.List[NomadProviderHeaders]] = None,
  http_auth: str = None,
  ignore_env_vars: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  key_file: str = None,
  key_pem: str = None,
  region: str = None,
  secret_id: str = None,
  vault_token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.address">address</a></code> | <code>str</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caFile">ca_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caPem">ca_pem</a></code> | <code>str</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certFile">cert_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certPem">cert_pem</a></code> | <code>str</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.consulToken">consul_token</a></code> | <code>str</code> | Consul token to validate Consul Connect Service Identity policies specified in the job file. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.httpAuth">http_auth</a></code> | <code>str</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.ignoreEnvVars">ignore_env_vars</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyFile">key_file</a></code> | <code>str</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyPem">key_pem</a></code> | <code>str</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.vaultToken">vault_token</a></code> | <code>str</code> | Vault token if policies are specified in the job file. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.address"></a>

- *Type:* str

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#address NomadProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#alias NomadProvider#alias}

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caFile"></a>

- *Type:* str

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ca_file NomadProvider#ca_file}

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.caPem"></a>

- *Type:* str

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ca_pem NomadProvider#ca_pem}

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certFile"></a>

- *Type:* str

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#cert_file NomadProvider#cert_file}

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.certPem"></a>

- *Type:* str

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#cert_pem NomadProvider#cert_pem}

---

##### `consul_token`<sup>Optional</sup> <a name="consul_token" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.consulToken"></a>

- *Type:* str

Consul token to validate Consul Connect Service Identity policies specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#consul_token NomadProvider#consul_token}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#headers NomadProvider#headers}

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.httpAuth"></a>

- *Type:* str

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#http_auth NomadProvider#http_auth}

---

##### `ignore_env_vars`<sup>Optional</sup> <a name="ignore_env_vars" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.ignoreEnvVars"></a>

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyFile"></a>

- *Type:* str

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#key_file NomadProvider#key_file}

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.keyPem"></a>

- *Type:* str

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#key_pem NomadProvider#key_pem}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.region"></a>

- *Type:* str

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#region NomadProvider#region}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.secretId"></a>

- *Type:* str

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#secret_id NomadProvider#secret_id}

---

##### `vault_token`<sup>Optional</sup> <a name="vault_token" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.vaultToken"></a>

- *Type:* str

Vault token if policies are specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#vault_token NomadProvider#vault_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaFile">reset_ca_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaPem">reset_ca_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertFile">reset_cert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertPem">reset_cert_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken">reset_consul_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth">reset_http_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars">reset_ignore_env_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile">reset_key_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem">reset_key_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken">reset_vault_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.provider.NomadProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.provider.NomadProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.provider.NomadProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-nomad.provider.NomadProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_ca_file` <a name="reset_ca_file" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaFile"></a>

```python
def reset_ca_file() -> None
```

##### `reset_ca_pem` <a name="reset_ca_pem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaPem"></a>

```python
def reset_ca_pem() -> None
```

##### `reset_cert_file` <a name="reset_cert_file" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertFile"></a>

```python
def reset_cert_file() -> None
```

##### `reset_cert_pem` <a name="reset_cert_pem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertPem"></a>

```python
def reset_cert_pem() -> None
```

##### `reset_consul_token` <a name="reset_consul_token" id="@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken"></a>

```python
def reset_consul_token() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-nomad.provider.NomadProvider.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_http_auth` <a name="reset_http_auth" id="@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth"></a>

```python
def reset_http_auth() -> None
```

##### `reset_ignore_env_vars` <a name="reset_ignore_env_vars" id="@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars"></a>

```python
def reset_ignore_env_vars() -> None
```

##### `reset_key_file` <a name="reset_key_file" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile"></a>

```python
def reset_key_file() -> None
```

##### `reset_key_pem` <a name="reset_key_pem" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem"></a>

```python
def reset_key_pem() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-nomad.provider.NomadProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktf/provider-nomad.provider.NomadProvider.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_vault_token` <a name="reset_vault_token" id="@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken"></a>

```python
def reset_vault_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput">ca_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput">ca_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput">cert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput">cert_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput">consul_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput">http_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput">ignore_env_vars_input</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput">key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput">key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput">vault_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFile">ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPem">ca_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFile">cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPem">cert_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulToken">consul_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth">http_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars">ignore_env_vars</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFile">key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPem">key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken">vault_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.provider.NomadProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.provider.NomadProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `ca_file_input`<sup>Optional</sup> <a name="ca_file_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput"></a>

```python
ca_file_input: str
```

- *Type:* str

---

##### `ca_pem_input`<sup>Optional</sup> <a name="ca_pem_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput"></a>

```python
ca_pem_input: str
```

- *Type:* str

---

##### `cert_file_input`<sup>Optional</sup> <a name="cert_file_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput"></a>

```python
cert_file_input: str
```

- *Type:* str

---

##### `cert_pem_input`<sup>Optional</sup> <a name="cert_pem_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput"></a>

```python
cert_pem_input: str
```

- *Type:* str

---

##### `consul_token_input`<sup>Optional</sup> <a name="consul_token_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput"></a>

```python
consul_token_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[NomadProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]

---

##### `http_auth_input`<sup>Optional</sup> <a name="http_auth_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput"></a>

```python
http_auth_input: str
```

- *Type:* str

---

##### `ignore_env_vars_input`<sup>Optional</sup> <a name="ignore_env_vars_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput"></a>

```python
ignore_env_vars_input: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `key_file_input`<sup>Optional</sup> <a name="key_file_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput"></a>

```python
key_file_input: str
```

- *Type:* str

---

##### `key_pem_input`<sup>Optional</sup> <a name="key_pem_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput"></a>

```python
key_pem_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `vault_token_input`<sup>Optional</sup> <a name="vault_token_input" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput"></a>

```python
vault_token_input: str
```

- *Type:* str

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProvider.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFile"></a>

```python
ca_file: str
```

- *Type:* str

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

---

##### `consul_token`<sup>Optional</sup> <a name="consul_token" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulToken"></a>

```python
consul_token: str
```

- *Type:* str

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProvider.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[NomadProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth"></a>

```python
http_auth: str
```

- *Type:* str

---

##### `ignore_env_vars`<sup>Optional</sup> <a name="ignore_env_vars" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars"></a>

```python
ignore_env_vars: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPem"></a>

```python
key_pem: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `vault_token`<sup>Optional</sup> <a name="vault_token" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken"></a>

```python
vault_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NomadProviderConfig <a name="NomadProviderConfig" id="@cdktf/provider-nomad.provider.NomadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProviderConfig(
  address: str,
  alias: str = None,
  ca_file: str = None,
  ca_pem: str = None,
  cert_file: str = None,
  cert_pem: str = None,
  consul_token: str = None,
  headers: typing.Union[IResolvable, typing.List[NomadProviderHeaders]] = None,
  http_auth: str = None,
  ignore_env_vars: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  key_file: str = None,
  key_pem: str = None,
  region: str = None,
  secret_id: str = None,
  vault_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.address">address</a></code> | <code>str</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile">ca_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem">ca_pem</a></code> | <code>str</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile">cert_file</a></code> | <code>str</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem">cert_pem</a></code> | <code>str</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken">consul_token</a></code> | <code>str</code> | Consul token to validate Consul Connect Service Identity policies specified in the job file. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth">http_auth</a></code> | <code>str</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars">ignore_env_vars</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile">key_file</a></code> | <code>str</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem">key_pem</a></code> | <code>str</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.region">region</a></code> | <code>str</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId">secret_id</a></code> | <code>str</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken">vault_token</a></code> | <code>str</code> | Vault token if policies are specified in the job file. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.address"></a>

```python
address: str
```

- *Type:* str

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#address NomadProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#alias NomadProvider#alias}

---

##### `ca_file`<sup>Optional</sup> <a name="ca_file" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile"></a>

```python
ca_file: str
```

- *Type:* str

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ca_file NomadProvider#ca_file}

---

##### `ca_pem`<sup>Optional</sup> <a name="ca_pem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem"></a>

```python
ca_pem: str
```

- *Type:* str

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ca_pem NomadProvider#ca_pem}

---

##### `cert_file`<sup>Optional</sup> <a name="cert_file" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile"></a>

```python
cert_file: str
```

- *Type:* str

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#cert_file NomadProvider#cert_file}

---

##### `cert_pem`<sup>Optional</sup> <a name="cert_pem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem"></a>

```python
cert_pem: str
```

- *Type:* str

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#cert_pem NomadProvider#cert_pem}

---

##### `consul_token`<sup>Optional</sup> <a name="consul_token" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken"></a>

```python
consul_token: str
```

- *Type:* str

Consul token to validate Consul Connect Service Identity policies specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#consul_token NomadProvider#consul_token}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[NomadProviderHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#headers NomadProvider#headers}

---

##### `http_auth`<sup>Optional</sup> <a name="http_auth" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth"></a>

```python
http_auth: str
```

- *Type:* str

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#http_auth NomadProvider#http_auth}

---

##### `ignore_env_vars`<sup>Optional</sup> <a name="ignore_env_vars" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars"></a>

```python
ignore_env_vars: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `key_file`<sup>Optional</sup> <a name="key_file" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile"></a>

```python
key_file: str
```

- *Type:* str

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#key_file NomadProvider#key_file}

---

##### `key_pem`<sup>Optional</sup> <a name="key_pem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem"></a>

```python
key_pem: str
```

- *Type:* str

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#key_pem NomadProvider#key_pem}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#region NomadProvider#region}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#secret_id NomadProvider#secret_id}

---

##### `vault_token`<sup>Optional</sup> <a name="vault_token" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken"></a>

```python
vault_token: str
```

- *Type:* str

Vault token if policies are specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#vault_token NomadProvider#vault_token}

---

### NomadProviderHeaders <a name="NomadProviderHeaders" id="@cdktf/provider-nomad.provider.NomadProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import provider

provider.NomadProviderHeaders(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name">name</a></code> | <code>str</code> | The header name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value">value</a></code> | <code>str</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#name NomadProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.19/docs#value NomadProvider#value}

---



