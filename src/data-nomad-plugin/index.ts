/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin#id DataNomadPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin#plugin_id DataNomadPlugin#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Wait for to be backed by a specified number of controllers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin#wait_for_healthy DataNomadPlugin#wait_for_healthy}
  */
  readonly waitForHealthy?: boolean | cdktf.IResolvable;
  /**
  * Wait for the plugin to be registered in Noamd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin#wait_for_registration DataNomadPlugin#wait_for_registration}
  */
  readonly waitForRegistration?: boolean | cdktf.IResolvable;
}
export interface DataNomadPluginNodes {
}

export function dataNomadPluginNodesToTerraform(struct?: DataNomadPluginNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNomadPluginNodesToHclTerraform(struct?: DataNomadPluginNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNomadPluginNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataNomadPluginNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNomadPluginNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // healthy_description - computed: true, optional: false, required: false
  public get healthyDescription() {
    return this.getStringAttribute('healthy_description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNomadPluginNodesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataNomadPluginNodesOutputReference {
    return new DataNomadPluginNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin nomad_plugin}
*/
export class DataNomadPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNomadPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNomadPlugin to import
  * @param importFromId The id of the existing DataNomadPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNomadPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/plugin nomad_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataNomadPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_plugin',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.5.0',
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
    this._id = config.id;
    this._pluginId = config.pluginId;
    this._waitForHealthy = config.waitForHealthy;
    this._waitForRegistration = config.waitForRegistration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_required - computed: true, optional: false, required: false
  public get controllerRequired() {
    return this.getBooleanAttribute('controller_required');
  }

  // controllers_expected - computed: true, optional: false, required: false
  public get controllersExpected() {
    return this.getNumberAttribute('controllers_expected');
  }

  // controllers_healthy - computed: true, optional: false, required: false
  public get controllersHealthy() {
    return this.getNumberAttribute('controllers_healthy');
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

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataNomadPluginNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // nodes_expected - computed: true, optional: false, required: false
  public get nodesExpected() {
    return this.getNumberAttribute('nodes_expected');
  }

  // nodes_healthy - computed: true, optional: false, required: false
  public get nodesHealthy() {
    return this.getNumberAttribute('nodes_healthy');
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // plugin_provider - computed: true, optional: false, required: false
  public get pluginProvider() {
    return this.getStringAttribute('plugin_provider');
  }

  // plugin_provider_version - computed: true, optional: false, required: false
  public get pluginProviderVersion() {
    return this.getStringAttribute('plugin_provider_version');
  }

  // wait_for_healthy - computed: false, optional: true, required: false
  private _waitForHealthy?: boolean | cdktf.IResolvable; 
  public get waitForHealthy() {
    return this.getBooleanAttribute('wait_for_healthy');
  }
  public set waitForHealthy(value: boolean | cdktf.IResolvable) {
    this._waitForHealthy = value;
  }
  public resetWaitForHealthy() {
    this._waitForHealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForHealthyInput() {
    return this._waitForHealthy;
  }

  // wait_for_registration - computed: false, optional: true, required: false
  private _waitForRegistration?: boolean | cdktf.IResolvable; 
  public get waitForRegistration() {
    return this.getBooleanAttribute('wait_for_registration');
  }
  public set waitForRegistration(value: boolean | cdktf.IResolvable) {
    this._waitForRegistration = value;
  }
  public resetWaitForRegistration() {
    this._waitForRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRegistrationInput() {
    return this._waitForRegistration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      wait_for_healthy: cdktf.booleanToTerraform(this._waitForHealthy),
      wait_for_registration: cdktf.booleanToTerraform(this._waitForRegistration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_id: {
        value: cdktf.stringToHclTerraform(this._pluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_healthy: {
        value: cdktf.booleanToHclTerraform(this._waitForHealthy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_registration: {
        value: cdktf.booleanToHclTerraform(this._waitForRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
