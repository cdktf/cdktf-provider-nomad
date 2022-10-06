// https://www.terraform.io/docs/providers/nomad/r/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * Quota to set for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#quota Namespace#quota}
  */
  readonly quota?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/nomad/r/namespace nomad_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_namespace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/nomad/r/namespace nomad_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_namespace',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._quota = config.quota;
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

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      quota: cdktf.stringToTerraform(this._quota),
    };
  }
}
