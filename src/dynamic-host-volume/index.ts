/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicHostVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Requested maximum capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capacity_max DynamicHostVolume#capacity_max}
  */
  readonly capacityMax?: string;
  /**
  * Requested minimum capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capacity_min DynamicHostVolume#capacity_min}
  */
  readonly capacityMin?: string;
  /**
  * Volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#name DynamicHostVolume#name}
  */
  readonly name: string;
  /**
  * Volume namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#namespace DynamicHostVolume#namespace}
  */
  readonly namespace?: string;
  /**
  * Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#node_id DynamicHostVolume#node_id}
  */
  readonly nodeId?: string;
  /**
  * Node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#node_pool DynamicHostVolume#node_pool}
  */
  readonly nodePool?: string;
  /**
  * Parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#parameters DynamicHostVolume#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#plugin_id DynamicHostVolume#plugin_id}
  */
  readonly pluginId: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#capability DynamicHostVolume#capability}
  */
  readonly capability: DynamicHostVolumeCapability[] | cdktf.IResolvable;
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#constraint DynamicHostVolume#constraint}
  */
  readonly constraint?: DynamicHostVolumeConstraint[] | cdktf.IResolvable;
}
export interface DynamicHostVolumeCapability {
  /**
  * An access mode available for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#access_mode DynamicHostVolume#access_mode}
  */
  readonly accessMode: string;
  /**
  * An attachment mode available for the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#attachment_mode DynamicHostVolume#attachment_mode}
  */
  readonly attachmentMode: string;
}

export function dynamicHostVolumeCapabilityToTerraform(struct?: DynamicHostVolumeCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    attachment_mode: cdktf.stringToTerraform(struct!.attachmentMode),
  }
}


export function dynamicHostVolumeCapabilityToHclTerraform(struct?: DynamicHostVolumeCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attachment_mode: {
      value: cdktf.stringToHclTerraform(struct!.attachmentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicHostVolumeCapabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamicHostVolumeCapability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._attachmentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentMode = this._attachmentMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicHostVolumeCapability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._attachmentMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._attachmentMode = value.attachmentMode;
    }
  }

  // access_mode - computed: false, optional: false, required: true
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // attachment_mode - computed: false, optional: false, required: true
  private _attachmentMode?: string; 
  public get attachmentMode() {
    return this.getStringAttribute('attachment_mode');
  }
  public set attachmentMode(value: string) {
    this._attachmentMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentModeInput() {
    return this._attachmentMode;
  }
}

export class DynamicHostVolumeCapabilityList extends cdktf.ComplexList {
  public internalValue? : DynamicHostVolumeCapability[] | cdktf.IResolvable

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
  public get(index: number): DynamicHostVolumeCapabilityOutputReference {
    return new DynamicHostVolumeCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DynamicHostVolumeConstraint {
  /**
  * An attribute to check to constrain volume placement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#attribute DynamicHostVolume#attribute}
  */
  readonly attribute: string;
  /**
  * The operator to use for comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#operator DynamicHostVolume#operator}
  */
  readonly operator?: string;
  /**
  * The requested value of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#value DynamicHostVolume#value}
  */
  readonly value?: string;
}

export function dynamicHostVolumeConstraintToTerraform(struct?: DynamicHostVolumeConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dynamicHostVolumeConstraintToHclTerraform(struct?: DynamicHostVolumeConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicHostVolumeConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DynamicHostVolumeConstraint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicHostVolumeConstraint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DynamicHostVolumeConstraintList extends cdktf.ComplexList {
  public internalValue? : DynamicHostVolumeConstraint[] | cdktf.IResolvable

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
  public get(index: number): DynamicHostVolumeConstraintOutputReference {
    return new DynamicHostVolumeConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume nomad_dynamic_host_volume}
*/
export class DynamicHostVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_dynamic_host_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicHostVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicHostVolume to import
  * @param importFromId The id of the existing DynamicHostVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicHostVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_dynamic_host_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/dynamic_host_volume nomad_dynamic_host_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicHostVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicHostVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_dynamic_host_volume',
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
    this._capacityMax = config.capacityMax;
    this._capacityMin = config.capacityMin;
    this._name = config.name;
    this._namespace = config.namespace;
    this._nodeId = config.nodeId;
    this._nodePool = config.nodePool;
    this._parameters = config.parameters;
    this._pluginId = config.pluginId;
    this._capability.internalValue = config.capability;
    this._constraint.internalValue = config.constraint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // capacity_bytes - computed: true, optional: false, required: false
  public get capacityBytes() {
    return this.getNumberAttribute('capacity_bytes');
  }

  // capacity_max - computed: false, optional: true, required: false
  private _capacityMax?: string; 
  public get capacityMax() {
    return this.getStringAttribute('capacity_max');
  }
  public set capacityMax(value: string) {
    this._capacityMax = value;
  }
  public resetCapacityMax() {
    this._capacityMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMaxInput() {
    return this._capacityMax;
  }

  // capacity_max_bytes - computed: true, optional: false, required: false
  public get capacityMaxBytes() {
    return this.getNumberAttribute('capacity_max_bytes');
  }

  // capacity_min - computed: false, optional: true, required: false
  private _capacityMin?: string; 
  public get capacityMin() {
    return this.getStringAttribute('capacity_min');
  }
  public set capacityMin(value: string) {
    this._capacityMin = value;
  }
  public resetCapacityMin() {
    this._capacityMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityMinInput() {
    return this._capacityMin;
  }

  // capacity_min_bytes - computed: true, optional: false, required: false
  public get capacityMinBytes() {
    return this.getNumberAttribute('capacity_min_bytes');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_pool - computed: true, optional: true, required: false
  private _nodePool?: string; 
  public get nodePool() {
    return this.getStringAttribute('node_pool');
  }
  public set nodePool(value: string) {
    this._nodePool = value;
  }
  public resetNodePool() {
    this._nodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // capability - computed: false, optional: false, required: true
  private _capability = new DynamicHostVolumeCapabilityList(this, "capability", false);
  public get capability() {
    return this._capability;
  }
  public putCapability(value: DynamicHostVolumeCapability[] | cdktf.IResolvable) {
    this._capability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // constraint - computed: false, optional: true, required: false
  private _constraint = new DynamicHostVolumeConstraintList(this, "constraint", false);
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: DynamicHostVolumeConstraint[] | cdktf.IResolvable) {
    this._constraint.internalValue = value;
  }
  public resetConstraint() {
    this._constraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_max: cdktf.stringToTerraform(this._capacityMax),
      capacity_min: cdktf.stringToTerraform(this._capacityMin),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      node_id: cdktf.stringToTerraform(this._nodeId),
      node_pool: cdktf.stringToTerraform(this._nodePool),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      capability: cdktf.listMapper(dynamicHostVolumeCapabilityToTerraform, true)(this._capability.internalValue),
      constraint: cdktf.listMapper(dynamicHostVolumeConstraintToTerraform, true)(this._constraint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_max: {
        value: cdktf.stringToHclTerraform(this._capacityMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_min: {
        value: cdktf.stringToHclTerraform(this._capacityMin),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool: {
        value: cdktf.stringToHclTerraform(this._nodePool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      plugin_id: {
        value: cdktf.stringToHclTerraform(this._pluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability: {
        value: cdktf.listMapperHcl(dynamicHostVolumeCapabilityToHclTerraform, true)(this._capability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamicHostVolumeCapabilityList",
      },
      constraint: {
        value: cdktf.listMapperHcl(dynamicHostVolumeConstraintToHclTerraform, true)(this._constraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DynamicHostVolumeConstraintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
