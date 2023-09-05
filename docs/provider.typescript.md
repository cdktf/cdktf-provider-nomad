# `provider`

Refer to the Terraform Registory for docs: [`nomad`](https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-nomad.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadProvider <a name="NomadProvider" id="@cdktf/provider-nomad.provider.NomadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs nomad}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

new provider.NomadProvider(scope: Construct, id: string, config: NomadProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-nomad.provider.NomadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-nomad.provider.NomadProviderConfig">NomadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaFile">resetCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCaPem">resetCaPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertFile">resetCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetCertPem">resetCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken">resetConsulToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth">resetHttpAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars">resetIgnoreEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile">resetKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem">resetKeyPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify">resetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken">resetVaultToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-nomad.provider.NomadProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-nomad.provider.NomadProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-nomad.provider.NomadProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-nomad.provider.NomadProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCaFile` <a name="resetCaFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaFile"></a>

```typescript
public resetCaFile(): void
```

##### `resetCaPem` <a name="resetCaPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCaPem"></a>

```typescript
public resetCaPem(): void
```

##### `resetCertFile` <a name="resetCertFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertFile"></a>

```typescript
public resetCertFile(): void
```

##### `resetCertPem` <a name="resetCertPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetCertPem"></a>

```typescript
public resetCertPem(): void
```

##### `resetConsulToken` <a name="resetConsulToken" id="@cdktf/provider-nomad.provider.NomadProvider.resetConsulToken"></a>

```typescript
public resetConsulToken(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-nomad.provider.NomadProvider.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetHttpAuth` <a name="resetHttpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.resetHttpAuth"></a>

```typescript
public resetHttpAuth(): void
```

##### `resetIgnoreEnvVars` <a name="resetIgnoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.resetIgnoreEnvVars"></a>

```typescript
public resetIgnoreEnvVars(): void
```

##### `resetKeyFile` <a name="resetKeyFile" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyFile"></a>

```typescript
public resetKeyFile(): void
```

##### `resetKeyPem` <a name="resetKeyPem" id="@cdktf/provider-nomad.provider.NomadProvider.resetKeyPem"></a>

```typescript
public resetKeyPem(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-nomad.provider.NomadProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-nomad.provider.NomadProvider.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetSkipVerify` <a name="resetSkipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.resetSkipVerify"></a>

```typescript
public resetSkipVerify(): void
```

##### `resetVaultToken` <a name="resetVaultToken" id="@cdktf/provider-nomad.provider.NomadProvider.resetVaultToken"></a>

```typescript
public resetVaultToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-nomad.provider.NomadProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

provider.NomadProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

provider.NomadProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

provider.NomadProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.provider.NomadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput">caFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput">caPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput">certFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput">certPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput">consulTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput">httpAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput">ignoreEnvVarsInput</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput">keyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput">keyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput">skipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput">vaultTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caFile">caFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.caPem">caPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certFile">certFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.certPem">certPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.consulToken">consulToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth">httpAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars">ignoreEnvVars</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyFile">keyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.keyPem">keyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify">skipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken">vaultToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.provider.NomadProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-nomad.provider.NomadProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.provider.NomadProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-nomad.provider.NomadProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-nomad.provider.NomadProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-nomad.provider.NomadProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `caFileInput`<sup>Optional</sup> <a name="caFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFileInput"></a>

```typescript
public readonly caFileInput: string;
```

- *Type:* string

---

##### `caPemInput`<sup>Optional</sup> <a name="caPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPemInput"></a>

```typescript
public readonly caPemInput: string;
```

- *Type:* string

---

##### `certFileInput`<sup>Optional</sup> <a name="certFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFileInput"></a>

```typescript
public readonly certFileInput: string;
```

- *Type:* string

---

##### `certPemInput`<sup>Optional</sup> <a name="certPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPemInput"></a>

```typescript
public readonly certPemInput: string;
```

- *Type:* string

---

##### `consulTokenInput`<sup>Optional</sup> <a name="consulTokenInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulTokenInput"></a>

```typescript
public readonly consulTokenInput: string;
```

- *Type:* string

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | NomadProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

---

##### `httpAuthInput`<sup>Optional</sup> <a name="httpAuthInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuthInput"></a>

```typescript
public readonly httpAuthInput: string;
```

- *Type:* string

---

##### `ignoreEnvVarsInput`<sup>Optional</sup> <a name="ignoreEnvVarsInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVarsInput"></a>

```typescript
public readonly ignoreEnvVarsInput: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `keyFileInput`<sup>Optional</sup> <a name="keyFileInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFileInput"></a>

```typescript
public readonly keyFileInput: string;
```

- *Type:* string

---

##### `keyPemInput`<sup>Optional</sup> <a name="keyPemInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPemInput"></a>

```typescript
public readonly keyPemInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `skipVerifyInput`<sup>Optional</sup> <a name="skipVerifyInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerifyInput"></a>

```typescript
public readonly skipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vaultTokenInput`<sup>Optional</sup> <a name="vaultTokenInput" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultTokenInput"></a>

```typescript
public readonly vaultTokenInput: string;
```

- *Type:* string

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProvider.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.caFile"></a>

```typescript
public readonly caFile: string;
```

- *Type:* string

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.caPem"></a>

```typescript
public readonly caPem: string;
```

- *Type:* string

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

---

##### `consulToken`<sup>Optional</sup> <a name="consulToken" id="@cdktf/provider-nomad.provider.NomadProvider.property.consulToken"></a>

```typescript
public readonly consulToken: string;
```

- *Type:* string

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProvider.property.headers"></a>

```typescript
public readonly headers: IResolvable | NomadProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-nomad.provider.NomadProvider.property.httpAuth"></a>

```typescript
public readonly httpAuth: string;
```

- *Type:* string

---

##### `ignoreEnvVars`<sup>Optional</sup> <a name="ignoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProvider.property.ignoreEnvVars"></a>

```typescript
public readonly ignoreEnvVars: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-nomad.provider.NomadProvider.property.keyPem"></a>

```typescript
public readonly keyPem: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-nomad.provider.NomadProvider.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-nomad.provider.NomadProvider.property.skipVerify"></a>

```typescript
public readonly skipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vaultToken`<sup>Optional</sup> <a name="vaultToken" id="@cdktf/provider-nomad.provider.NomadProvider.property.vaultToken"></a>

```typescript
public readonly vaultToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.provider.NomadProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NomadProviderConfig <a name="NomadProviderConfig" id="@cdktf/provider-nomad.provider.NomadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

const nomadProviderConfig: provider.NomadProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.address">address</a></code> | <code>string</code> | URL of the root of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile">caFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem">caPem</a></code> | <code>string</code> | PEM-encoded certificate authority used to verify the remote agent's certificate. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile">certFile</a></code> | <code>string</code> | A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem">certPem</a></code> | <code>string</code> | PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken">consulToken</a></code> | <code>string</code> | Consul token to validate Consul Connect Service Identity policies specified in the job file. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]</code> | headers block. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth">httpAuth</a></code> | <code>string</code> | HTTP basic auth configuration. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars">ignoreEnvVars</a></code> | <code>{[ key: string ]: boolean \| cdktf.IResolvable}</code> | A set of environment variables that are ignored by the provider when configuring the Nomad API client. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile">keyFile</a></code> | <code>string</code> | A path to a PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem">keyPem</a></code> | <code>string</code> | PEM-encoded private key, required if cert_file or cert_pem is specified. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.region">region</a></code> | <code>string</code> | Region of the target Nomad agent. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId">secretId</a></code> | <code>string</code> | ACL token secret for API requests. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify">skipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip TLS verification on client side. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken">vaultToken</a></code> | <code>string</code> | Vault token if policies are specified in the job file. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

URL of the root of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#address NomadProvider#address}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#alias NomadProvider#alias}

---

##### `caFile`<sup>Optional</sup> <a name="caFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caFile"></a>

```typescript
public readonly caFile: string;
```

- *Type:* string

A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#ca_file NomadProvider#ca_file}

---

##### `caPem`<sup>Optional</sup> <a name="caPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.caPem"></a>

```typescript
public readonly caPem: string;
```

- *Type:* string

PEM-encoded certificate authority used to verify the remote agent's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#ca_pem NomadProvider#ca_pem}

---

##### `certFile`<sup>Optional</sup> <a name="certFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certFile"></a>

```typescript
public readonly certFile: string;
```

- *Type:* string

A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#cert_file NomadProvider#cert_file}

---

##### `certPem`<sup>Optional</sup> <a name="certPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#cert_pem NomadProvider#cert_pem}

---

##### `consulToken`<sup>Optional</sup> <a name="consulToken" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.consulToken"></a>

```typescript
public readonly consulToken: string;
```

- *Type:* string

Consul token to validate Consul Connect Service Identity policies specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#consul_token NomadProvider#consul_token}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.headers"></a>

```typescript
public readonly headers: IResolvable | NomadProviderHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders">NomadProviderHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#headers NomadProvider#headers}

---

##### `httpAuth`<sup>Optional</sup> <a name="httpAuth" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.httpAuth"></a>

```typescript
public readonly httpAuth: string;
```

- *Type:* string

HTTP basic auth configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#http_auth NomadProvider#http_auth}

---

##### `ignoreEnvVars`<sup>Optional</sup> <a name="ignoreEnvVars" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.ignoreEnvVars"></a>

```typescript
public readonly ignoreEnvVars: {[ key: string ]: boolean | IResolvable};
```

- *Type:* {[ key: string ]: boolean | cdktf.IResolvable}

A set of environment variables that are ignored by the provider when configuring the Nomad API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#ignore_env_vars NomadProvider#ignore_env_vars}

---

##### `keyFile`<sup>Optional</sup> <a name="keyFile" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyFile"></a>

```typescript
public readonly keyFile: string;
```

- *Type:* string

A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#key_file NomadProvider#key_file}

---

##### `keyPem`<sup>Optional</sup> <a name="keyPem" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.keyPem"></a>

```typescript
public readonly keyPem: string;
```

- *Type:* string

PEM-encoded private key, required if cert_file or cert_pem is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#key_pem NomadProvider#key_pem}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of the target Nomad agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#region NomadProvider#region}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

ACL token secret for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#secret_id NomadProvider#secret_id}

---

##### `skipVerify`<sup>Optional</sup> <a name="skipVerify" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.skipVerify"></a>

```typescript
public readonly skipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip TLS verification on client side.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#skip_verify NomadProvider#skip_verify}

---

##### `vaultToken`<sup>Optional</sup> <a name="vaultToken" id="@cdktf/provider-nomad.provider.NomadProviderConfig.property.vaultToken"></a>

```typescript
public readonly vaultToken: string;
```

- *Type:* string

Vault token if policies are specified in the job file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#vault_token NomadProvider#vault_token}

---

### NomadProviderHeaders <a name="NomadProviderHeaders" id="@cdktf/provider-nomad.provider.NomadProviderHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-nomad'

const nomadProviderHeaders: provider.NomadProviderHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name">name</a></code> | <code>string</code> | The header name. |
| <code><a href="#@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value">value</a></code> | <code>string</code> | The header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#name NomadProvider#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.provider.NomadProviderHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs#value NomadProvider#value}

---



