// https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadDynamicHostVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Volume ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume#id DataNomadDynamicHostVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Volume namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume#namespace DataNomadDynamicHostVolume#namespace}
  */
  readonly namespace?: string;
}
export interface DataNomadDynamicHostVolumeCapability {
}

export function dataNomadDynamicHostVolumeCapabilityToTerraform(struct?: DataNomadDynamicHostVolumeCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNomadDynamicHostVolumeCapabilityToHclTerraform(struct?: DataNomadDynamicHostVolumeCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNomadDynamicHostVolumeCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNomadDynamicHostVolumeCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNomadDynamicHostVolumeCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_mode - computed: true, optional: false, required: false
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }

  // attachment_mode - computed: true, optional: false, required: false
  public get attachmentMode() {
    return this.getStringAttribute('attachment_mode');
  }
}

export class DataNomadDynamicHostVolumeCapabilityList extends cdktf.ComplexList {

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
  public get(index: number): DataNomadDynamicHostVolumeCapabilityOutputReference {
    return new DataNomadDynamicHostVolumeCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNomadDynamicHostVolumeConstraint {
}

export function dataNomadDynamicHostVolumeConstraintToTerraform(struct?: DataNomadDynamicHostVolumeConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNomadDynamicHostVolumeConstraintToHclTerraform(struct?: DataNomadDynamicHostVolumeConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNomadDynamicHostVolumeConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNomadDynamicHostVolumeConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNomadDynamicHostVolumeConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNomadDynamicHostVolumeConstraintList extends cdktf.ComplexList {

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
  public get(index: number): DataNomadDynamicHostVolumeConstraintOutputReference {
    return new DataNomadDynamicHostVolumeConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume nomad_dynamic_host_volume}
*/
export class DataNomadDynamicHostVolume extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_dynamic_host_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNomadDynamicHostVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNomadDynamicHostVolume to import
  * @param importFromId The id of the existing DataNomadDynamicHostVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNomadDynamicHostVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_dynamic_host_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/data-sources/dynamic_host_volume nomad_dynamic_host_volume} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadDynamicHostVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: DataNomadDynamicHostVolumeConfig) {
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
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capability - computed: true, optional: false, required: false
  private _capability = new DataNomadDynamicHostVolumeCapabilityList(this, "capability", false);
  public get capability() {
    return this._capability;
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }

  // capacity_bytes - computed: true, optional: false, required: false
  public get capacityBytes() {
    return this.getNumberAttribute('capacity_bytes');
  }

  // capacity_max - computed: true, optional: false, required: false
  public get capacityMax() {
    return this.getStringAttribute('capacity_max');
  }

  // capacity_max_bytes - computed: true, optional: false, required: false
  public get capacityMaxBytes() {
    return this.getNumberAttribute('capacity_max_bytes');
  }

  // capacity_min - computed: true, optional: false, required: false
  public get capacityMin() {
    return this.getStringAttribute('capacity_min');
  }

  // capacity_min_bytes - computed: true, optional: false, required: false
  public get capacityMinBytes() {
    return this.getNumberAttribute('capacity_min_bytes');
  }

  // constraint - computed: true, optional: false, required: false
  private _constraint = new DataNomadDynamicHostVolumeConstraintList(this, "constraint", false);
  public get constraint() {
    return this._constraint;
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_pool - computed: true, optional: false, required: false
  public get nodePool() {
    return this.getStringAttribute('node_pool');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // plugin_id - computed: true, optional: false, required: false
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
