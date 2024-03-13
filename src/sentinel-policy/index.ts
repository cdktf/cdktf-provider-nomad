/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#description SentinelPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies the enforcement level of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#enforcement_level SentinelPolicy#enforcement_level}
  */
  readonly enforcementLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#id SentinelPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#name SentinelPolicy#name}
  */
  readonly name: string;
  /**
  * The Sentinel policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#policy SentinelPolicy#policy}
  */
  readonly policy: string;
  /**
  * Specifies the scope for this policy. Only 'submit-job' is currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#scope SentinelPolicy#scope}
  */
  readonly scope: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy nomad_sentinel_policy}
*/
export class SentinelPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_sentinel_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelPolicy to import
  * @param importFromId The id of the existing SentinelPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_sentinel_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/sentinel_policy nomad_sentinel_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_sentinel_policy',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.2.0',
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
    this._enforcementLevel = config.enforcementLevel;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._scope = config.scope;
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

  // enforcement_level - computed: false, optional: false, required: true
  private _enforcementLevel?: string; 
  public get enforcementLevel() {
    return this.getStringAttribute('enforcement_level');
  }
  public set enforcementLevel(value: string) {
    this._enforcementLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementLevelInput() {
    return this._enforcementLevel;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enforcement_level: cdktf.stringToTerraform(this._enforcementLevel),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_level: {
        value: cdktf.stringToHclTerraform(this._enforcementLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
