// https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Consul token used to submit this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#consul_token Job#consul_token}
  */
  readonly consulToken?: string;
  /**
  * If true, the job will be deregistered on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#deregister_on_destroy Job#deregister_on_destroy}
  */
  readonly deregisterOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * If true, the job will be deregistered when the job ID changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#deregister_on_id_change Job#deregister_on_id_change}
  */
  readonly deregisterOnIdChange?: boolean | cdktf.IResolvable;
  /**
  * If true, the provider will return immediately after creating or updating, instead of monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#detach Job#detach}
  */
  readonly detach?: boolean | cdktf.IResolvable;
  /**
  * If true, the `jobspec` will be parsed using the HCL1 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#hcl1 Job#hcl1}
  */
  readonly hcl1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#id Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Job specification. If you want to point to a file use the file() function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#jobspec Job#jobspec}
  */
  readonly jobspec: string;
  /**
  * If true, the `jobspec` will be parsed as json instead of HCL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#json Job#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * Override any soft-mandatory Sentinel policies that fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#policy_override Job#policy_override}
  */
  readonly policyOverride?: boolean | cdktf.IResolvable;
  /**
  * Whether to purge the job when the resource is destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#purge_on_destroy Job#purge_on_destroy}
  */
  readonly purgeOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#read_allocation_ids Job#read_allocation_ids}
  */
  readonly readAllocationIds?: boolean | cdktf.IResolvable;
  /**
  * If true, forces the job to run again on apply if it is currently dead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#rerun_if_dead Job#rerun_if_dead}
  */
  readonly rerunIfDead?: boolean | cdktf.IResolvable;
  /**
  * The Vault token used to submit this job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#vault_token Job#vault_token}
  */
  readonly vaultToken?: string;
  /**
  * hcl2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#hcl2 Job#hcl2}
  */
  readonly hcl2?: JobHcl2;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#timeouts Job#timeouts}
  */
  readonly timeouts?: JobTimeouts;
}
export interface JobTaskGroupsTaskVolumeMounts {
}

export function jobTaskGroupsTaskVolumeMountsToTerraform(struct?: JobTaskGroupsTaskVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobTaskGroupsTaskVolumeMountsToHclTerraform(struct?: JobTaskGroupsTaskVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobTaskGroupsTaskVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskGroupsTaskVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGroupsTaskVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}

export class JobTaskGroupsTaskVolumeMountsList extends cdktf.ComplexList {

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
  public get(index: number): JobTaskGroupsTaskVolumeMountsOutputReference {
    return new JobTaskGroupsTaskVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskGroupsTask {
}

export function jobTaskGroupsTaskToTerraform(struct?: JobTaskGroupsTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobTaskGroupsTaskToHclTerraform(struct?: JobTaskGroupsTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobTaskGroupsTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskGroupsTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGroupsTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new JobTaskGroupsTaskVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class JobTaskGroupsTaskList extends cdktf.ComplexList {

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
  public get(index: number): JobTaskGroupsTaskOutputReference {
    return new JobTaskGroupsTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskGroupsVolumes {
}

export function jobTaskGroupsVolumesToTerraform(struct?: JobTaskGroupsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobTaskGroupsVolumesToHclTerraform(struct?: JobTaskGroupsVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobTaskGroupsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskGroupsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGroupsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class JobTaskGroupsVolumesList extends cdktf.ComplexList {

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
  public get(index: number): JobTaskGroupsVolumesOutputReference {
    return new JobTaskGroupsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobTaskGroups {
}

export function jobTaskGroupsToTerraform(struct?: JobTaskGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobTaskGroupsToHclTerraform(struct?: JobTaskGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobTaskGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobTaskGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTaskGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // task - computed: true, optional: false, required: false
  private _task = new JobTaskGroupsTaskList(this, "task", false);
  public get task() {
    return this._task;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new JobTaskGroupsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class JobTaskGroupsList extends cdktf.ComplexList {

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
  public get(index: number): JobTaskGroupsOutputReference {
    return new JobTaskGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobHcl2 {
  /**
  * If true, HCL2 file system functions will be enabled when parsing the `jobspec`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#allow_fs Job#allow_fs}
  */
  readonly allowFs?: boolean | cdktf.IResolvable;
  /**
  * If true, the `jobspec` will be parsed as HCL2 instead of HCL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#enabled Job#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Additional variables to use when templating the job with HCL2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#vars Job#vars}
  */
  readonly vars?: { [key: string]: string };
}

export function jobHcl2ToTerraform(struct?: JobHcl2OutputReference | JobHcl2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_fs: cdktf.booleanToTerraform(struct!.allowFs),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vars),
  }
}


export function jobHcl2ToHclTerraform(struct?: JobHcl2OutputReference | JobHcl2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_fs: {
      value: cdktf.booleanToHclTerraform(struct!.allowFs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobHcl2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobHcl2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFs = this._allowFs;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobHcl2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowFs = undefined;
      this._enabled = undefined;
      this._vars = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowFs = value.allowFs;
      this._enabled = value.enabled;
      this._vars = value.vars;
    }
  }

  // allow_fs - computed: false, optional: true, required: false
  private _allowFs?: boolean | cdktf.IResolvable; 
  public get allowFs() {
    return this.getBooleanAttribute('allow_fs');
  }
  public set allowFs(value: boolean | cdktf.IResolvable) {
    this._allowFs = value;
  }
  public resetAllowFs() {
    this._allowFs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFsInput() {
    return this._allowFs;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}
export interface JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#create Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#update Job#update}
  */
  readonly update?: string;
}

export function jobTimeoutsToTerraform(struct?: JobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function jobTimeoutsToHclTerraform(struct?: JobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job nomad_job}
*/
export class Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Job resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Job to import
  * @param importFromId The id of the existing Job that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Job to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/job nomad_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobConfig
  */
  public constructor(scope: Construct, id: string, config: JobConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_job',
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
    this._consulToken = config.consulToken;
    this._deregisterOnDestroy = config.deregisterOnDestroy;
    this._deregisterOnIdChange = config.deregisterOnIdChange;
    this._detach = config.detach;
    this._hcl1 = config.hcl1;
    this._id = config.id;
    this._jobspec = config.jobspec;
    this._json = config.json;
    this._policyOverride = config.policyOverride;
    this._purgeOnDestroy = config.purgeOnDestroy;
    this._readAllocationIds = config.readAllocationIds;
    this._rerunIfDead = config.rerunIfDead;
    this._vaultToken = config.vaultToken;
    this._hcl2.internalValue = config.hcl2;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_ids - computed: true, optional: false, required: false
  public get allocationIds() {
    return this.getListAttribute('allocation_ids');
  }

  // consul_token - computed: false, optional: true, required: false
  private _consulToken?: string; 
  public get consulToken() {
    return this.getStringAttribute('consul_token');
  }
  public set consulToken(value: string) {
    this._consulToken = value;
  }
  public resetConsulToken() {
    this._consulToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulTokenInput() {
    return this._consulToken;
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return cdktf.Fn.tolist(this.getListAttribute('datacenters'));
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // deregister_on_destroy - computed: false, optional: true, required: false
  private _deregisterOnDestroy?: boolean | cdktf.IResolvable; 
  public get deregisterOnDestroy() {
    return this.getBooleanAttribute('deregister_on_destroy');
  }
  public set deregisterOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deregisterOnDestroy = value;
  }
  public resetDeregisterOnDestroy() {
    this._deregisterOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterOnDestroyInput() {
    return this._deregisterOnDestroy;
  }

  // deregister_on_id_change - computed: false, optional: true, required: false
  private _deregisterOnIdChange?: boolean | cdktf.IResolvable; 
  public get deregisterOnIdChange() {
    return this.getBooleanAttribute('deregister_on_id_change');
  }
  public set deregisterOnIdChange(value: boolean | cdktf.IResolvable) {
    this._deregisterOnIdChange = value;
  }
  public resetDeregisterOnIdChange() {
    this._deregisterOnIdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregisterOnIdChangeInput() {
    return this._deregisterOnIdChange;
  }

  // detach - computed: false, optional: true, required: false
  private _detach?: boolean | cdktf.IResolvable; 
  public get detach() {
    return this.getBooleanAttribute('detach');
  }
  public set detach(value: boolean | cdktf.IResolvable) {
    this._detach = value;
  }
  public resetDetach() {
    this._detach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachInput() {
    return this._detach;
  }

  // hcl1 - computed: false, optional: true, required: false
  private _hcl1?: boolean | cdktf.IResolvable; 
  public get hcl1() {
    return this.getBooleanAttribute('hcl1');
  }
  public set hcl1(value: boolean | cdktf.IResolvable) {
    this._hcl1 = value;
  }
  public resetHcl1() {
    this._hcl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcl1Input() {
    return this._hcl1;
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

  // jobspec - computed: false, optional: false, required: true
  private _jobspec?: string; 
  public get jobspec() {
    return this.getStringAttribute('jobspec');
  }
  public set jobspec(value: string) {
    this._jobspec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobspecInput() {
    return this._jobspec;
  }

  // json - computed: false, optional: true, required: false
  private _json?: boolean | cdktf.IResolvable; 
  public get json() {
    return this.getBooleanAttribute('json');
  }
  public set json(value: boolean | cdktf.IResolvable) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // modify_index - computed: true, optional: false, required: false
  public get modifyIndex() {
    return this.getStringAttribute('modify_index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // policy_override - computed: false, optional: true, required: false
  private _policyOverride?: boolean | cdktf.IResolvable; 
  public get policyOverride() {
    return this.getBooleanAttribute('policy_override');
  }
  public set policyOverride(value: boolean | cdktf.IResolvable) {
    this._policyOverride = value;
  }
  public resetPolicyOverride() {
    this._policyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOverrideInput() {
    return this._policyOverride;
  }

  // purge_on_destroy - computed: false, optional: true, required: false
  private _purgeOnDestroy?: boolean | cdktf.IResolvable; 
  public get purgeOnDestroy() {
    return this.getBooleanAttribute('purge_on_destroy');
  }
  public set purgeOnDestroy(value: boolean | cdktf.IResolvable) {
    this._purgeOnDestroy = value;
  }
  public resetPurgeOnDestroy() {
    this._purgeOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeOnDestroyInput() {
    return this._purgeOnDestroy;
  }

  // read_allocation_ids - computed: false, optional: true, required: false
  private _readAllocationIds?: boolean | cdktf.IResolvable; 
  public get readAllocationIds() {
    return this.getBooleanAttribute('read_allocation_ids');
  }
  public set readAllocationIds(value: boolean | cdktf.IResolvable) {
    this._readAllocationIds = value;
  }
  public resetReadAllocationIds() {
    this._readAllocationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAllocationIdsInput() {
    return this._readAllocationIds;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rerun_if_dead - computed: false, optional: true, required: false
  private _rerunIfDead?: boolean | cdktf.IResolvable; 
  public get rerunIfDead() {
    return this.getBooleanAttribute('rerun_if_dead');
  }
  public set rerunIfDead(value: boolean | cdktf.IResolvable) {
    this._rerunIfDead = value;
  }
  public resetRerunIfDead() {
    this._rerunIfDead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rerunIfDeadInput() {
    return this._rerunIfDead;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_groups - computed: true, optional: false, required: false
  private _taskGroups = new JobTaskGroupsList(this, "task_groups", false);
  public get taskGroups() {
    return this._taskGroups;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vault_token - computed: false, optional: true, required: false
  private _vaultToken?: string; 
  public get vaultToken() {
    return this.getStringAttribute('vault_token');
  }
  public set vaultToken(value: string) {
    this._vaultToken = value;
  }
  public resetVaultToken() {
    this._vaultToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTokenInput() {
    return this._vaultToken;
  }

  // hcl2 - computed: false, optional: true, required: false
  private _hcl2 = new JobHcl2OutputReference(this, "hcl2");
  public get hcl2() {
    return this._hcl2;
  }
  public putHcl2(value: JobHcl2) {
    this._hcl2.internalValue = value;
  }
  public resetHcl2() {
    this._hcl2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcl2Input() {
    return this._hcl2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consul_token: cdktf.stringToTerraform(this._consulToken),
      deregister_on_destroy: cdktf.booleanToTerraform(this._deregisterOnDestroy),
      deregister_on_id_change: cdktf.booleanToTerraform(this._deregisterOnIdChange),
      detach: cdktf.booleanToTerraform(this._detach),
      hcl1: cdktf.booleanToTerraform(this._hcl1),
      id: cdktf.stringToTerraform(this._id),
      jobspec: cdktf.stringToTerraform(this._jobspec),
      json: cdktf.booleanToTerraform(this._json),
      policy_override: cdktf.booleanToTerraform(this._policyOverride),
      purge_on_destroy: cdktf.booleanToTerraform(this._purgeOnDestroy),
      read_allocation_ids: cdktf.booleanToTerraform(this._readAllocationIds),
      rerun_if_dead: cdktf.booleanToTerraform(this._rerunIfDead),
      vault_token: cdktf.stringToTerraform(this._vaultToken),
      hcl2: jobHcl2ToTerraform(this._hcl2.internalValue),
      timeouts: jobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consul_token: {
        value: cdktf.stringToHclTerraform(this._consulToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deregister_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deregisterOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deregister_on_id_change: {
        value: cdktf.booleanToHclTerraform(this._deregisterOnIdChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      detach: {
        value: cdktf.booleanToHclTerraform(this._detach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hcl1: {
        value: cdktf.booleanToHclTerraform(this._hcl1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jobspec: {
        value: cdktf.stringToHclTerraform(this._jobspec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json: {
        value: cdktf.booleanToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_override: {
        value: cdktf.booleanToHclTerraform(this._policyOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      purge_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._purgeOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_allocation_ids: {
        value: cdktf.booleanToHclTerraform(this._readAllocationIds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rerun_if_dead: {
        value: cdktf.booleanToHclTerraform(this._rerunIfDead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vault_token: {
        value: cdktf.stringToHclTerraform(this._vaultToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcl2: {
        value: jobHcl2ToHclTerraform(this._hcl2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobHcl2List",
      },
      timeouts: {
        value: jobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
