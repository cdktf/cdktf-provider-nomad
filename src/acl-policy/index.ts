// https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#description AclPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#id AclPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#name AclPolicy#name}
  */
  readonly name: string;
  /**
  * HCL or JSON representation of the rules to enforce on this policy. Use file() to specify a file as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#rules_hcl AclPolicy#rules_hcl}
  */
  readonly rulesHcl: string;
  /**
  * job_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#job_acl AclPolicy#job_acl}
  */
  readonly jobAcl?: AclPolicyJobAcl;
}
export interface AclPolicyJobAcl {
  /**
  * Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#group AclPolicy#group}
  */
  readonly group?: string;
  /**
  * Job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#job_id AclPolicy#job_id}
  */
  readonly jobId: string;
  /**
  * Namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#namespace AclPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#task AclPolicy#task}
  */
  readonly task?: string;
}

export function aclPolicyJobAclToTerraform(struct?: AclPolicyJobAclOutputReference | AclPolicyJobAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    job_id: cdktf.stringToTerraform(struct!.jobId),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    task: cdktf.stringToTerraform(struct!.task),
  }
}

export class AclPolicyJobAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AclPolicyJobAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jobId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobId = this._jobId;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclPolicyJobAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._jobId = undefined;
      this._namespace = undefined;
      this._task = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._jobId = value.jobId;
      this._namespace = value.namespace;
      this._task = value.task;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // task - computed: false, optional: true, required: false
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy nomad_acl_policy}
*/
export class AclPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclPolicy to import
  * @param importFromId The id of the existing AclPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_acl_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.1.0/docs/resources/acl_policy nomad_acl_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AclPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_acl_policy',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.1.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._rulesHcl = config.rulesHcl;
    this._jobAcl.internalValue = config.jobAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rules_hcl - computed: false, optional: false, required: true
  private _rulesHcl?: string; 
  public get rulesHcl() {
    return this.getStringAttribute('rules_hcl');
  }
  public set rulesHcl(value: string) {
    this._rulesHcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesHclInput() {
    return this._rulesHcl;
  }

  // job_acl - computed: false, optional: true, required: false
  private _jobAcl = new AclPolicyJobAclOutputReference(this, "job_acl");
  public get jobAcl() {
    return this._jobAcl;
  }
  public putJobAcl(value: AclPolicyJobAcl) {
    this._jobAcl.internalValue = value;
  }
  public resetJobAcl() {
    this._jobAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAclInput() {
    return this._jobAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules_hcl: cdktf.stringToTerraform(this._rulesHcl),
      job_acl: aclPolicyJobAclToTerraform(this._jobAcl.internalValue),
    };
  }
}
