// https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy#description AclPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy#id AclPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for this policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy#name AclPolicy#name}
  */
  readonly name: string;
  /**
  * HCL or JSON representation of the rules to enforce on this policy. Use file() to specify a file as input.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy#rules_hcl AclPolicy#rules_hcl}
  */
  readonly rulesHcl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy nomad_acl_policy}
*/
export class AclPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/acl_policy nomad_acl_policy} Resource
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
        providerVersion: '1.4.20',
        providerVersionConstraint: '~> 1.4'
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rules_hcl: cdktf.stringToTerraform(this._rulesHcl),
    };
  }
}
