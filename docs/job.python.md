# `job` Submodule <a name="`job` Submodule" id="@cdktf/provider-nomad.job"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Job <a name="Job" id="@cdktf/provider-nomad.job.Job"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job nomad_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.Job.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.Job(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jobspec: str,
  consul_token: str = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  deregister_on_id_change: typing.Union[bool, IResolvable] = None,
  detach: typing.Union[bool, IResolvable] = None,
  hcl1: typing.Union[bool, IResolvable] = None,
  hcl2: JobHcl2 = None,
  id: str = None,
  json: typing.Union[bool, IResolvable] = None,
  policy_override: typing.Union[bool, IResolvable] = None,
  purge_on_destroy: typing.Union[bool, IResolvable] = None,
  read_allocation_ids: typing.Union[bool, IResolvable] = None,
  rerun_if_dead: typing.Union[bool, IResolvable] = None,
  timeouts: JobTimeouts = None,
  vault_token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.jobspec">jobspec</a></code> | <code>str</code> | Job specification. If you want to point to a file use the file() function. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.consulToken">consul_token</a></code> | <code>str</code> | The Consul token used to submit this job. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the job will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.deregisterOnIdChange">deregister_on_id_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the job will be deregistered when the job ID changes. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.detach">detach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the provider will return immediately after creating or updating, instead of monitoring. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.hcl1">hcl1</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the `jobspec` will be parsed using the HCL1 format. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.hcl2">hcl2</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a></code> | hcl2 block. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#id Job#id}. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.json">json</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the `jobspec` will be parsed as json instead of HCL. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.policyOverride">policy_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Override any soft-mandatory Sentinel policies that fail. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.purgeOnDestroy">purge_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to purge the job when the resource is destroyed. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.readAllocationIds">read_allocation_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#read_allocation_ids Job#read_allocation_ids}. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.rerunIfDead">rerun_if_dead</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, forces the job to run again on apply if it is currently dead. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.job.Job.Initializer.parameter.vaultToken">vault_token</a></code> | <code>str</code> | The Vault token used to submit this job. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jobspec`<sup>Required</sup> <a name="jobspec" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.jobspec"></a>

- *Type:* str

Job specification. If you want to point to a file use the file() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#jobspec Job#jobspec}

---

##### `consul_token`<sup>Optional</sup> <a name="consul_token" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.consulToken"></a>

- *Type:* str

The Consul token used to submit this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#consul_token Job#consul_token}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the job will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#deregister_on_destroy Job#deregister_on_destroy}

---

##### `deregister_on_id_change`<sup>Optional</sup> <a name="deregister_on_id_change" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.deregisterOnIdChange"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the job will be deregistered when the job ID changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#deregister_on_id_change Job#deregister_on_id_change}

---

##### `detach`<sup>Optional</sup> <a name="detach" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.detach"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the provider will return immediately after creating or updating, instead of monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#detach Job#detach}

---

##### `hcl1`<sup>Optional</sup> <a name="hcl1" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.hcl1"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed using the HCL1 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#hcl1 Job#hcl1}

---

##### `hcl2`<sup>Optional</sup> <a name="hcl2" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.hcl2"></a>

- *Type:* <a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a>

hcl2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#hcl2 Job#hcl2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#id Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.json"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed as json instead of HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#json Job#json}

---

##### `policy_override`<sup>Optional</sup> <a name="policy_override" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.policyOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Override any soft-mandatory Sentinel policies that fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#policy_override Job#policy_override}

---

##### `purge_on_destroy`<sup>Optional</sup> <a name="purge_on_destroy" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.purgeOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to purge the job when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#purge_on_destroy Job#purge_on_destroy}

---

##### `read_allocation_ids`<sup>Optional</sup> <a name="read_allocation_ids" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.readAllocationIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#read_allocation_ids Job#read_allocation_ids}.

---

##### `rerun_if_dead`<sup>Optional</sup> <a name="rerun_if_dead" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.rerunIfDead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, forces the job to run again on apply if it is currently dead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#rerun_if_dead Job#rerun_if_dead}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#timeouts Job#timeouts}

---

##### `vault_token`<sup>Optional</sup> <a name="vault_token" id="@cdktf/provider-nomad.job.Job.Initializer.parameter.vaultToken"></a>

- *Type:* str

The Vault token used to submit this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#vault_token Job#vault_token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.Job.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-nomad.job.Job.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-nomad.job.Job.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-nomad.job.Job.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-nomad.job.Job.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-nomad.job.Job.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-nomad.job.Job.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-nomad.job.Job.putHcl2">put_hcl2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetConsulToken">reset_consul_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetDeregisterOnDestroy">reset_deregister_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetDeregisterOnIdChange">reset_deregister_on_id_change</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetDetach">reset_detach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetHcl1">reset_hcl1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetHcl2">reset_hcl2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetJson">reset_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetPolicyOverride">reset_policy_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetPurgeOnDestroy">reset_purge_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetReadAllocationIds">reset_read_allocation_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetRerunIfDead">reset_rerun_if_dead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.resetVaultToken">reset_vault_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.Job.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-nomad.job.Job.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-nomad.job.Job.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-nomad.job.Job.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-nomad.job.Job.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-nomad.job.Job.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-nomad.job.Job.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-nomad.job.Job.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-nomad.job.Job.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-nomad.job.Job.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-nomad.job.Job.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.job.Job.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.Job.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.Job.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.Job.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.Job.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.Job.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.Job.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.Job.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.Job.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.Job.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-nomad.job.Job.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-nomad.job.Job.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.job.Job.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.Job.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.Job.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-nomad.job.Job.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-nomad.job.Job.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-nomad.job.Job.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-nomad.job.Job.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-nomad.job.Job.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hcl2` <a name="put_hcl2" id="@cdktf/provider-nomad.job.Job.putHcl2"></a>

```python
def put_hcl2(
  allow_fs: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  vars: typing.Mapping[str] = None
) -> None
```

###### `allow_fs`<sup>Optional</sup> <a name="allow_fs" id="@cdktf/provider-nomad.job.Job.putHcl2.parameter.allowFs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, HCL2 file system functions will be enabled when parsing the `jobspec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#allow_fs Job#allow_fs}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-nomad.job.Job.putHcl2.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed as HCL2 instead of HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#enabled Job#enabled}

---

###### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-nomad.job.Job.putHcl2.parameter.vars"></a>

- *Type:* typing.Mapping[str]

Additional variables to use when templating the job with HCL2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#vars Job#vars}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-nomad.job.Job.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.job.Job.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#create Job#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-nomad.job.Job.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#update Job#update}.

---

##### `reset_consul_token` <a name="reset_consul_token" id="@cdktf/provider-nomad.job.Job.resetConsulToken"></a>

```python
def reset_consul_token() -> None
```

##### `reset_deregister_on_destroy` <a name="reset_deregister_on_destroy" id="@cdktf/provider-nomad.job.Job.resetDeregisterOnDestroy"></a>

```python
def reset_deregister_on_destroy() -> None
```

##### `reset_deregister_on_id_change` <a name="reset_deregister_on_id_change" id="@cdktf/provider-nomad.job.Job.resetDeregisterOnIdChange"></a>

```python
def reset_deregister_on_id_change() -> None
```

##### `reset_detach` <a name="reset_detach" id="@cdktf/provider-nomad.job.Job.resetDetach"></a>

```python
def reset_detach() -> None
```

##### `reset_hcl1` <a name="reset_hcl1" id="@cdktf/provider-nomad.job.Job.resetHcl1"></a>

```python
def reset_hcl1() -> None
```

##### `reset_hcl2` <a name="reset_hcl2" id="@cdktf/provider-nomad.job.Job.resetHcl2"></a>

```python
def reset_hcl2() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-nomad.job.Job.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_json` <a name="reset_json" id="@cdktf/provider-nomad.job.Job.resetJson"></a>

```python
def reset_json() -> None
```

##### `reset_policy_override` <a name="reset_policy_override" id="@cdktf/provider-nomad.job.Job.resetPolicyOverride"></a>

```python
def reset_policy_override() -> None
```

##### `reset_purge_on_destroy` <a name="reset_purge_on_destroy" id="@cdktf/provider-nomad.job.Job.resetPurgeOnDestroy"></a>

```python
def reset_purge_on_destroy() -> None
```

##### `reset_read_allocation_ids` <a name="reset_read_allocation_ids" id="@cdktf/provider-nomad.job.Job.resetReadAllocationIds"></a>

```python
def reset_read_allocation_ids() -> None
```

##### `reset_rerun_if_dead` <a name="reset_rerun_if_dead" id="@cdktf/provider-nomad.job.Job.resetRerunIfDead"></a>

```python
def reset_rerun_if_dead() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-nomad.job.Job.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vault_token` <a name="reset_vault_token" id="@cdktf/provider-nomad.job.Job.resetVaultToken"></a>

```python
def reset_vault_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.Job.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-nomad.job.Job.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-nomad.job.Job.isConstruct"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.Job.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.job.Job.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-nomad.job.Job.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.Job.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.job.Job.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-nomad.job.Job.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.Job.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-nomad.job.Job.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-nomad.job.Job.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.Job.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-nomad.job.Job.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-nomad.job.Job.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Job to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-nomad.job.Job.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Job that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.job.Job.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Job to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.allocationIds">allocation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deploymentStatus">deployment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.hcl2">hcl2</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference">JobHcl2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.modifyIndex">modify_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.taskGroups">task_groups</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList">JobTaskGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference">JobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.consulTokenInput">consul_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deregisterOnDestroyInput">deregister_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deregisterOnIdChangeInput">deregister_on_id_change_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.detachInput">detach_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.hcl1Input">hcl1_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.hcl2Input">hcl2_input</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.jobspecInput">jobspec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.jsonInput">json_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.policyOverrideInput">policy_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.purgeOnDestroyInput">purge_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.readAllocationIdsInput">read_allocation_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.rerunIfDeadInput">rerun_if_dead_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.vaultTokenInput">vault_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.consulToken">consul_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.deregisterOnIdChange">deregister_on_id_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.detach">detach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.hcl1">hcl1</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.jobspec">jobspec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.json">json</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.policyOverride">policy_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.purgeOnDestroy">purge_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.readAllocationIds">read_allocation_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.rerunIfDead">rerun_if_dead</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.vaultToken">vault_token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-nomad.job.Job.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-nomad.job.Job.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.Job.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-nomad.job.Job.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-nomad.job.Job.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-nomad.job.Job.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-nomad.job.Job.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.job.Job.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.job.Job.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.job.Job.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.job.Job.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.job.Job.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.job.Job.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.job.Job.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocation_ids`<sup>Required</sup> <a name="allocation_ids" id="@cdktf/provider-nomad.job.Job.property.allocationIds"></a>

```python
allocation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-nomad.job.Job.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-nomad.job.Job.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `deployment_status`<sup>Required</sup> <a name="deployment_status" id="@cdktf/provider-nomad.job.Job.property.deploymentStatus"></a>

```python
deployment_status: str
```

- *Type:* str

---

##### `hcl2`<sup>Required</sup> <a name="hcl2" id="@cdktf/provider-nomad.job.Job.property.hcl2"></a>

```python
hcl2: JobHcl2OutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference">JobHcl2OutputReference</a>

---

##### `modify_index`<sup>Required</sup> <a name="modify_index" id="@cdktf/provider-nomad.job.Job.property.modifyIndex"></a>

```python
modify_index: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.job.Job.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-nomad.job.Job.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-nomad.job.Job.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-nomad.job.Job.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `task_groups`<sup>Required</sup> <a name="task_groups" id="@cdktf/provider-nomad.job.Job.property.taskGroups"></a>

```python
task_groups: JobTaskGroupsList
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsList">JobTaskGroupsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-nomad.job.Job.property.timeouts"></a>

```python
timeouts: JobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference">JobTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.job.Job.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `consul_token_input`<sup>Optional</sup> <a name="consul_token_input" id="@cdktf/provider-nomad.job.Job.property.consulTokenInput"></a>

```python
consul_token_input: str
```

- *Type:* str

---

##### `deregister_on_destroy_input`<sup>Optional</sup> <a name="deregister_on_destroy_input" id="@cdktf/provider-nomad.job.Job.property.deregisterOnDestroyInput"></a>

```python
deregister_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deregister_on_id_change_input`<sup>Optional</sup> <a name="deregister_on_id_change_input" id="@cdktf/provider-nomad.job.Job.property.deregisterOnIdChangeInput"></a>

```python
deregister_on_id_change_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detach_input`<sup>Optional</sup> <a name="detach_input" id="@cdktf/provider-nomad.job.Job.property.detachInput"></a>

```python
detach_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hcl1_input`<sup>Optional</sup> <a name="hcl1_input" id="@cdktf/provider-nomad.job.Job.property.hcl1Input"></a>

```python
hcl1_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hcl2_input`<sup>Optional</sup> <a name="hcl2_input" id="@cdktf/provider-nomad.job.Job.property.hcl2Input"></a>

```python
hcl2_input: JobHcl2
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-nomad.job.Job.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jobspec_input`<sup>Optional</sup> <a name="jobspec_input" id="@cdktf/provider-nomad.job.Job.property.jobspecInput"></a>

```python
jobspec_input: str
```

- *Type:* str

---

##### `json_input`<sup>Optional</sup> <a name="json_input" id="@cdktf/provider-nomad.job.Job.property.jsonInput"></a>

```python
json_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_override_input`<sup>Optional</sup> <a name="policy_override_input" id="@cdktf/provider-nomad.job.Job.property.policyOverrideInput"></a>

```python
policy_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_on_destroy_input`<sup>Optional</sup> <a name="purge_on_destroy_input" id="@cdktf/provider-nomad.job.Job.property.purgeOnDestroyInput"></a>

```python
purge_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_allocation_ids_input`<sup>Optional</sup> <a name="read_allocation_ids_input" id="@cdktf/provider-nomad.job.Job.property.readAllocationIdsInput"></a>

```python
read_allocation_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rerun_if_dead_input`<sup>Optional</sup> <a name="rerun_if_dead_input" id="@cdktf/provider-nomad.job.Job.property.rerunIfDeadInput"></a>

```python
rerun_if_dead_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-nomad.job.Job.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, JobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>]

---

##### `vault_token_input`<sup>Optional</sup> <a name="vault_token_input" id="@cdktf/provider-nomad.job.Job.property.vaultTokenInput"></a>

```python
vault_token_input: str
```

- *Type:* str

---

##### `consul_token`<sup>Required</sup> <a name="consul_token" id="@cdktf/provider-nomad.job.Job.property.consulToken"></a>

```python
consul_token: str
```

- *Type:* str

---

##### `deregister_on_destroy`<sup>Required</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.job.Job.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deregister_on_id_change`<sup>Required</sup> <a name="deregister_on_id_change" id="@cdktf/provider-nomad.job.Job.property.deregisterOnIdChange"></a>

```python
deregister_on_id_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detach`<sup>Required</sup> <a name="detach" id="@cdktf/provider-nomad.job.Job.property.detach"></a>

```python
detach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hcl1`<sup>Required</sup> <a name="hcl1" id="@cdktf/provider-nomad.job.Job.property.hcl1"></a>

```python
hcl1: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-nomad.job.Job.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `jobspec`<sup>Required</sup> <a name="jobspec" id="@cdktf/provider-nomad.job.Job.property.jobspec"></a>

```python
jobspec: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-nomad.job.Job.property.json"></a>

```python
json: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_override`<sup>Required</sup> <a name="policy_override" id="@cdktf/provider-nomad.job.Job.property.policyOverride"></a>

```python
policy_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `purge_on_destroy`<sup>Required</sup> <a name="purge_on_destroy" id="@cdktf/provider-nomad.job.Job.property.purgeOnDestroy"></a>

```python
purge_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_allocation_ids`<sup>Required</sup> <a name="read_allocation_ids" id="@cdktf/provider-nomad.job.Job.property.readAllocationIds"></a>

```python
read_allocation_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rerun_if_dead`<sup>Required</sup> <a name="rerun_if_dead" id="@cdktf/provider-nomad.job.Job.property.rerunIfDead"></a>

```python
rerun_if_dead: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vault_token`<sup>Required</sup> <a name="vault_token" id="@cdktf/provider-nomad.job.Job.property.vaultToken"></a>

```python
vault_token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.Job.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-nomad.job.Job.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### JobConfig <a name="JobConfig" id="@cdktf/provider-nomad.job.JobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  jobspec: str,
  consul_token: str = None,
  deregister_on_destroy: typing.Union[bool, IResolvable] = None,
  deregister_on_id_change: typing.Union[bool, IResolvable] = None,
  detach: typing.Union[bool, IResolvable] = None,
  hcl1: typing.Union[bool, IResolvable] = None,
  hcl2: JobHcl2 = None,
  id: str = None,
  json: typing.Union[bool, IResolvable] = None,
  policy_override: typing.Union[bool, IResolvable] = None,
  purge_on_destroy: typing.Union[bool, IResolvable] = None,
  read_allocation_ids: typing.Union[bool, IResolvable] = None,
  rerun_if_dead: typing.Union[bool, IResolvable] = None,
  timeouts: JobTimeouts = None,
  vault_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.jobspec">jobspec</a></code> | <code>str</code> | Job specification. If you want to point to a file use the file() function. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.consulToken">consul_token</a></code> | <code>str</code> | The Consul token used to submit this job. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.deregisterOnDestroy">deregister_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the job will be deregistered on destroy. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.deregisterOnIdChange">deregister_on_id_change</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the job will be deregistered when the job ID changes. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.detach">detach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the provider will return immediately after creating or updating, instead of monitoring. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.hcl1">hcl1</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the `jobspec` will be parsed using the HCL1 format. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.hcl2">hcl2</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a></code> | hcl2 block. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#id Job#id}. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.json">json</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the `jobspec` will be parsed as json instead of HCL. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.policyOverride">policy_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Override any soft-mandatory Sentinel policies that fail. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.purgeOnDestroy">purge_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to purge the job when the resource is destroyed. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.readAllocationIds">read_allocation_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#read_allocation_ids Job#read_allocation_ids}. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.rerunIfDead">rerun_if_dead</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, forces the job to run again on apply if it is currently dead. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-nomad.job.JobConfig.property.vaultToken">vault_token</a></code> | <code>str</code> | The Vault token used to submit this job. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-nomad.job.JobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-nomad.job.JobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-nomad.job.JobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-nomad.job.JobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-nomad.job.JobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-nomad.job.JobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-nomad.job.JobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `jobspec`<sup>Required</sup> <a name="jobspec" id="@cdktf/provider-nomad.job.JobConfig.property.jobspec"></a>

```python
jobspec: str
```

- *Type:* str

Job specification. If you want to point to a file use the file() function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#jobspec Job#jobspec}

---

##### `consul_token`<sup>Optional</sup> <a name="consul_token" id="@cdktf/provider-nomad.job.JobConfig.property.consulToken"></a>

```python
consul_token: str
```

- *Type:* str

The Consul token used to submit this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#consul_token Job#consul_token}

---

##### `deregister_on_destroy`<sup>Optional</sup> <a name="deregister_on_destroy" id="@cdktf/provider-nomad.job.JobConfig.property.deregisterOnDestroy"></a>

```python
deregister_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the job will be deregistered on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#deregister_on_destroy Job#deregister_on_destroy}

---

##### `deregister_on_id_change`<sup>Optional</sup> <a name="deregister_on_id_change" id="@cdktf/provider-nomad.job.JobConfig.property.deregisterOnIdChange"></a>

```python
deregister_on_id_change: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the job will be deregistered when the job ID changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#deregister_on_id_change Job#deregister_on_id_change}

---

##### `detach`<sup>Optional</sup> <a name="detach" id="@cdktf/provider-nomad.job.JobConfig.property.detach"></a>

```python
detach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the provider will return immediately after creating or updating, instead of monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#detach Job#detach}

---

##### `hcl1`<sup>Optional</sup> <a name="hcl1" id="@cdktf/provider-nomad.job.JobConfig.property.hcl1"></a>

```python
hcl1: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed using the HCL1 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#hcl1 Job#hcl1}

---

##### `hcl2`<sup>Optional</sup> <a name="hcl2" id="@cdktf/provider-nomad.job.JobConfig.property.hcl2"></a>

```python
hcl2: JobHcl2
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a>

hcl2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#hcl2 Job#hcl2}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-nomad.job.JobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#id Job#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktf/provider-nomad.job.JobConfig.property.json"></a>

```python
json: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed as json instead of HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#json Job#json}

---

##### `policy_override`<sup>Optional</sup> <a name="policy_override" id="@cdktf/provider-nomad.job.JobConfig.property.policyOverride"></a>

```python
policy_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Override any soft-mandatory Sentinel policies that fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#policy_override Job#policy_override}

---

##### `purge_on_destroy`<sup>Optional</sup> <a name="purge_on_destroy" id="@cdktf/provider-nomad.job.JobConfig.property.purgeOnDestroy"></a>

```python
purge_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to purge the job when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#purge_on_destroy Job#purge_on_destroy}

---

##### `read_allocation_ids`<sup>Optional</sup> <a name="read_allocation_ids" id="@cdktf/provider-nomad.job.JobConfig.property.readAllocationIds"></a>

```python
read_allocation_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#read_allocation_ids Job#read_allocation_ids}.

---

##### `rerun_if_dead`<sup>Optional</sup> <a name="rerun_if_dead" id="@cdktf/provider-nomad.job.JobConfig.property.rerunIfDead"></a>

```python
rerun_if_dead: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, forces the job to run again on apply if it is currently dead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#rerun_if_dead Job#rerun_if_dead}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-nomad.job.JobConfig.property.timeouts"></a>

```python
timeouts: JobTimeouts
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#timeouts Job#timeouts}

---

##### `vault_token`<sup>Optional</sup> <a name="vault_token" id="@cdktf/provider-nomad.job.JobConfig.property.vaultToken"></a>

```python
vault_token: str
```

- *Type:* str

The Vault token used to submit this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#vault_token Job#vault_token}

---

### JobHcl2 <a name="JobHcl2" id="@cdktf/provider-nomad.job.JobHcl2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobHcl2.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobHcl2(
  allow_fs: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  vars: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2.property.allowFs">allow_fs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, HCL2 file system functions will be enabled when parsing the `jobspec`. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the `jobspec` will be parsed as HCL2 instead of HCL. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | Additional variables to use when templating the job with HCL2. |

---

##### `allow_fs`<sup>Optional</sup> <a name="allow_fs" id="@cdktf/provider-nomad.job.JobHcl2.property.allowFs"></a>

```python
allow_fs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, HCL2 file system functions will be enabled when parsing the `jobspec`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#allow_fs Job#allow_fs}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-nomad.job.JobHcl2.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the `jobspec` will be parsed as HCL2 instead of HCL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#enabled Job#enabled}

---

##### `vars`<sup>Optional</sup> <a name="vars" id="@cdktf/provider-nomad.job.JobHcl2.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional variables to use when templating the job with HCL2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#vars Job#vars}

---

### JobTaskGroups <a name="JobTaskGroups" id="@cdktf/provider-nomad.job.JobTaskGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobTaskGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroups()
```


### JobTaskGroupsTask <a name="JobTaskGroupsTask" id="@cdktf/provider-nomad.job.JobTaskGroupsTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobTaskGroupsTask.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTask()
```


### JobTaskGroupsTaskVolumeMounts <a name="JobTaskGroupsTaskVolumeMounts" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTaskVolumeMounts()
```


### JobTaskGroupsVolumes <a name="JobTaskGroupsVolumes" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsVolumes()
```


### JobTimeouts <a name="JobTimeouts" id="@cdktf/provider-nomad.job.JobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-nomad.job.JobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#create Job#create}. |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#update Job#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-nomad.job.JobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#create Job#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-nomad.job.JobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/job#update Job#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### JobHcl2OutputReference <a name="JobHcl2OutputReference" id="@cdktf/provider-nomad.job.JobHcl2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobHcl2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.resetAllowFs">reset_allow_fs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.resetVars">reset_vars</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_fs` <a name="reset_allow_fs" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.resetAllowFs"></a>

```python
def reset_allow_fs() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_vars` <a name="reset_vars" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.resetVars"></a>

```python
def reset_vars() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.allowFsInput">allow_fs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.varsInput">vars_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.allowFs">allow_fs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.vars">vars</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobHcl2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_fs_input`<sup>Optional</sup> <a name="allow_fs_input" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.allowFsInput"></a>

```python
allow_fs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vars_input`<sup>Optional</sup> <a name="vars_input" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.varsInput"></a>

```python
vars_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allow_fs`<sup>Required</sup> <a name="allow_fs" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.allowFs"></a>

```python
allow_fs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vars`<sup>Required</sup> <a name="vars" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.vars"></a>

```python
vars: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobHcl2OutputReference.property.internalValue"></a>

```python
internal_value: JobHcl2
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobHcl2">JobHcl2</a>

---


### JobTaskGroupsList <a name="JobTaskGroupsList" id="@cdktf/provider-nomad.job.JobTaskGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.job.JobTaskGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.job.JobTaskGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.job.JobTaskGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.job.JobTaskGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobTaskGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.job.JobTaskGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobTaskGroupsOutputReference <a name="JobTaskGroupsOutputReference" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.task">task</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList">JobTaskGroupsTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList">JobTaskGroupsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroups">JobTaskGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.meta"></a>

```python
meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `task`<sup>Required</sup> <a name="task" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.task"></a>

```python
task: JobTaskGroupsTaskList
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList">JobTaskGroupsTaskList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.volumes"></a>

```python
volumes: JobTaskGroupsVolumesList
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList">JobTaskGroupsVolumesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobTaskGroupsOutputReference.property.internalValue"></a>

```python
internal_value: JobTaskGroups
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroups">JobTaskGroups</a>

---


### JobTaskGroupsTaskList <a name="JobTaskGroupsTaskList" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobTaskGroupsTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobTaskGroupsTaskOutputReference <a name="JobTaskGroupsTaskOutputReference" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList">JobTaskGroupsTaskVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTask">JobTaskGroupsTask</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.meta"></a>

```python
meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.volumeMounts"></a>

```python
volume_mounts: JobTaskGroupsTaskVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList">JobTaskGroupsTaskVolumeMountsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskOutputReference.property.internalValue"></a>

```python
internal_value: JobTaskGroupsTask
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsTask">JobTaskGroupsTask</a>

---


### JobTaskGroupsTaskVolumeMountsList <a name="JobTaskGroupsTaskVolumeMountsList" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTaskVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobTaskGroupsTaskVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobTaskGroupsTaskVolumeMountsOutputReference <a name="JobTaskGroupsTaskVolumeMountsOutputReference" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsTaskVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.readOnly">read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.volume">volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMounts">JobTaskGroupsTaskVolumeMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.readOnly"></a>

```python
read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.volume"></a>

```python
volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: JobTaskGroupsTaskVolumeMounts
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsTaskVolumeMounts">JobTaskGroupsTaskVolumeMounts</a>

---


### JobTaskGroupsVolumesList <a name="JobTaskGroupsVolumesList" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> JobTaskGroupsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### JobTaskGroupsVolumesOutputReference <a name="JobTaskGroupsVolumesOutputReference" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTaskGroupsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.readOnly">read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumes">JobTaskGroupsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.readOnly"></a>

```python
read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobTaskGroupsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: JobTaskGroupsVolumes
```

- *Type:* <a href="#@cdktf/provider-nomad.job.JobTaskGroupsVolumes">JobTaskGroupsVolumes</a>

---


### JobTimeoutsOutputReference <a name="JobTimeoutsOutputReference" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_nomad import job

job.JobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-nomad.job.JobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, JobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-nomad.job.JobTimeouts">JobTimeouts</a>]

---



