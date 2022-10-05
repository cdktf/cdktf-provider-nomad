// https://www.terraform.io/docs/providers/nomad/r/acl_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the token should be replicated to all regions or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/acl_token#global AclToken#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/acl_token#id AclToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Human-readable name for this token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/acl_token#name AclToken#name}
  */
  readonly name?: string;
  /**
  * The ACL policies to associate with the token, if it's a 'client' type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/acl_token#policies AclToken#policies}
  */
  readonly policies?: string[];
  /**
  * The type of token to create, 'client' or 'management'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/acl_token#type AclToken#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/nomad/r/acl_token nomad_acl_token}
*/
export class AclToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/nomad/r/acl_token nomad_acl_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclTokenConfig
  */
  public constructor(scope: Construct, id: string, config: AclTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_acl_token',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '1.4.18',
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
    this._global = config.global;
    this._id = config.id;
    this._name = config.name;
    this._policies = config.policies;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: true, optional: false, required: false
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable; 
  public get global() {
    return this.getBooleanAttribute('global');
  }
  public set global(value: boolean | cdktf.IResolvable) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global: cdktf.booleanToTerraform(this._global),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
