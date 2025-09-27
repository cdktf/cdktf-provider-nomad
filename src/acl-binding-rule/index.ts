/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclBindingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the auth method for which this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#auth_method AclBindingRule#auth_method}
  */
  readonly authMethod: string;
  /**
  * Target of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#bind_name AclBindingRule#bind_name}
  */
  readonly bindName?: string;
  /**
  * Adjusts how this binding rule is applied at login time. Valid values are "role" and "policy".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#bind_type AclBindingRule#bind_type}
  */
  readonly bindType: string;
  /**
  * Description for this ACL binding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#description AclBindingRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#id AclBindingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean expression that matches against verified identity attributes returned from the auth method during login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#selector AclBindingRule#selector}
  */
  readonly selector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule nomad_acl_binding_rule}
*/
export class AclBindingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_binding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclBindingRule to import
  * @param importFromId The id of the existing AclBindingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclBindingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_acl_binding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs/resources/acl_binding_rule nomad_acl_binding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclBindingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AclBindingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_acl_binding_rule',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.5.1',
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
    this._authMethod = config.authMethod;
    this._bindName = config.bindName;
    this._bindType = config.bindType;
    this._description = config.description;
    this._id = config.id;
    this._selector = config.selector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // bind_name - computed: false, optional: true, required: false
  private _bindName?: string; 
  public get bindName() {
    return this.getStringAttribute('bind_name');
  }
  public set bindName(value: string) {
    this._bindName = value;
  }
  public resetBindName() {
    this._bindName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindNameInput() {
    return this._bindName;
  }

  // bind_type - computed: false, optional: false, required: true
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

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

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      bind_name: cdktf.stringToTerraform(this._bindName),
      bind_type: cdktf.stringToTerraform(this._bindType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      selector: cdktf.stringToTerraform(this._selector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_name: {
        value: cdktf.stringToHclTerraform(this._bindName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
