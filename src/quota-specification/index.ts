// https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuotaSpecificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this quota specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#description QuotaSpecification#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#id QuotaSpecification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for this quota specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#name QuotaSpecification#name}
  */
  readonly name: string;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#limits QuotaSpecification#limits}
  */
  readonly limits: QuotaSpecificationLimits[] | cdktf.IResolvable;
}
export interface QuotaSpecificationLimitsRegionLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#cpu QuotaSpecification#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#memory_mb QuotaSpecification#memory_mb}
  */
  readonly memoryMb?: number;
}

export function quotaSpecificationLimitsRegionLimitToTerraform(struct?: QuotaSpecificationLimitsRegionLimitOutputReference | QuotaSpecificationLimitsRegionLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory_mb: cdktf.numberToTerraform(struct!.memoryMb),
  }
}

export class QuotaSpecificationLimitsRegionLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QuotaSpecificationLimitsRegionLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMb = this._memoryMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotaSpecificationLimitsRegionLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memoryMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memoryMb = value.memoryMb;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory_mb - computed: false, optional: true, required: false
  private _memoryMb?: number; 
  public get memoryMb() {
    return this.getNumberAttribute('memory_mb');
  }
  public set memoryMb(value: number) {
    this._memoryMb = value;
  }
  public resetMemoryMb() {
    this._memoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMbInput() {
    return this._memoryMb;
  }
}
export interface QuotaSpecificationLimits {
  /**
  * Region in which this limit has affect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#region QuotaSpecification#region}
  */
  readonly region: string;
  /**
  * region_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification#region_limit QuotaSpecification#region_limit}
  */
  readonly regionLimit: QuotaSpecificationLimitsRegionLimit;
}

export function quotaSpecificationLimitsToTerraform(struct?: QuotaSpecificationLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    region_limit: quotaSpecificationLimitsRegionLimitToTerraform(struct!.regionLimit),
  }
}

export class QuotaSpecificationLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QuotaSpecificationLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regionLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionLimit = this._regionLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuotaSpecificationLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._regionLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._regionLimit.internalValue = value.regionLimit;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_limit - computed: false, optional: false, required: true
  private _regionLimit = new QuotaSpecificationLimitsRegionLimitOutputReference(this, "region_limit");
  public get regionLimit() {
    return this._regionLimit;
  }
  public putRegionLimit(value: QuotaSpecificationLimitsRegionLimit) {
    this._regionLimit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionLimitInput() {
    return this._regionLimit.internalValue;
  }
}

export class QuotaSpecificationLimitsList extends cdktf.ComplexList {
  public internalValue? : QuotaSpecificationLimits[] | cdktf.IResolvable

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
  public get(index: number): QuotaSpecificationLimitsOutputReference {
    return new QuotaSpecificationLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification nomad_quota_specification}
*/
export class QuotaSpecification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_quota_specification";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/resources/quota_specification nomad_quota_specification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuotaSpecificationConfig
  */
  public constructor(scope: Construct, id: string, config: QuotaSpecificationConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_quota_specification',
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
    this._limits.internalValue = config.limits;
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

  // limits - computed: false, optional: false, required: true
  private _limits = new QuotaSpecificationLimitsList(this, "limits", true);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: QuotaSpecificationLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      limits: cdktf.listMapper(quotaSpecificationLimitsToTerraform, true)(this._limits.internalValue),
    };
  }
}
