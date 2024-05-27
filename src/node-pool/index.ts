/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#description NodePool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#id NodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata associated with the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#meta NodePool#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique name for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#name NodePool#name}
  */
  readonly name: string;
  /**
  * scheduler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#scheduler_config NodePool#scheduler_config}
  */
  readonly schedulerConfig?: NodePoolSchedulerConfig;
}
export interface NodePoolSchedulerConfig {
  /**
  * If true, the node pool will have memory oversubscription enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#memory_oversubscription NodePool#memory_oversubscription}
  */
  readonly memoryOversubscription?: string;
  /**
  * The scheduler algorithm to use in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#scheduler_algorithm NodePool#scheduler_algorithm}
  */
  readonly schedulerAlgorithm?: string;
}

export function nodePoolSchedulerConfigToTerraform(struct?: NodePoolSchedulerConfigOutputReference | NodePoolSchedulerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_oversubscription: cdktf.stringToTerraform(struct!.memoryOversubscription),
    scheduler_algorithm: cdktf.stringToTerraform(struct!.schedulerAlgorithm),
  }
}


export function nodePoolSchedulerConfigToHclTerraform(struct?: NodePoolSchedulerConfigOutputReference | NodePoolSchedulerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_oversubscription: {
      value: cdktf.stringToHclTerraform(struct!.memoryOversubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.schedulerAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodePoolSchedulerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodePoolSchedulerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryOversubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOversubscription = this._memoryOversubscription;
    }
    if (this._schedulerAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerAlgorithm = this._schedulerAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodePoolSchedulerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryOversubscription = undefined;
      this._schedulerAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryOversubscription = value.memoryOversubscription;
      this._schedulerAlgorithm = value.schedulerAlgorithm;
    }
  }

  // memory_oversubscription - computed: false, optional: true, required: false
  private _memoryOversubscription?: string; 
  public get memoryOversubscription() {
    return this.getStringAttribute('memory_oversubscription');
  }
  public set memoryOversubscription(value: string) {
    this._memoryOversubscription = value;
  }
  public resetMemoryOversubscription() {
    this._memoryOversubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOversubscriptionInput() {
    return this._memoryOversubscription;
  }

  // scheduler_algorithm - computed: false, optional: true, required: false
  private _schedulerAlgorithm?: string; 
  public get schedulerAlgorithm() {
    return this.getStringAttribute('scheduler_algorithm');
  }
  public set schedulerAlgorithm(value: string) {
    this._schedulerAlgorithm = value;
  }
  public resetSchedulerAlgorithm() {
    this._schedulerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerAlgorithmInput() {
    return this._schedulerAlgorithm;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool nomad_node_pool}
*/
export class NodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodePool to import
  * @param importFromId The id of the existing NodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/node_pool nomad_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: NodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_node_pool',
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
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._schedulerConfig.internalValue = config.schedulerConfig;
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

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // scheduler_config - computed: false, optional: true, required: false
  private _schedulerConfig = new NodePoolSchedulerConfigOutputReference(this, "scheduler_config");
  public get schedulerConfig() {
    return this._schedulerConfig;
  }
  public putSchedulerConfig(value: NodePoolSchedulerConfig) {
    this._schedulerConfig.internalValue = value;
  }
  public resetSchedulerConfig() {
    this._schedulerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerConfigInput() {
    return this._schedulerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      scheduler_config: nodePoolSchedulerConfigToTerraform(this._schedulerConfig.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._meta),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_config: {
        value: nodePoolSchedulerConfigToHclTerraform(this._schedulerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodePoolSchedulerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
