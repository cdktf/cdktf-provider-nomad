// https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiVolumeRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to validate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * If true, the volume will be deregistered on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}
  */
  readonly deregisterOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The ID of the physical volume from the storage provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}
  */
  readonly name: string;
  /**
  * The namespace in which to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}
  */
  readonly namespace?: string;
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to configure the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The ID of the CSI plugin that manages this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}
  */
  readonly pluginId: string;
  /**
  * An optional key-value map of strings used as credentials for publishing and unpublishing volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * The unique ID of the volume, how jobs will refer to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}
  */
  readonly volumeId: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}
  */
  readonly capability?: CsiVolumeRegistrationCapability[] | cdktf.IResolvable;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}
  */
  readonly mountOptions?: CsiVolumeRegistrationMountOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}
  */
  readonly timeouts?: CsiVolumeRegistrationTimeouts;
  /**
  * topology_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}
  */
  readonly topologyRequest?: CsiVolumeRegistrationTopologyRequest;
}
export interface CsiVolumeRegistrationTopologies {
}

export function csiVolumeRegistrationTopologiesToTerraform(struct?: CsiVolumeRegistrationTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CsiVolumeRegistrationTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeRegistrationTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationTopologies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // segments - computed: true, optional: false, required: false
  private _segments = new cdktf.StringMap(this, "segments");
  public get segments() {
    return this._segments;
  }
}

export class CsiVolumeRegistrationTopologiesList extends cdktf.ComplexList {

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
  public get(index: number): CsiVolumeRegistrationTopologiesOutputReference {
    return new CsiVolumeRegistrationTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeRegistrationCapability {
  /**
  * Defines whether a volume should be available concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}
  */
  readonly accessMode: string;
  /**
  * The storage API that will be used by the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}
  */
  readonly attachmentMode: string;
}

export function csiVolumeRegistrationCapabilityToTerraform(struct?: CsiVolumeRegistrationCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    attachment_mode: cdktf.stringToTerraform(struct!.attachmentMode),
  }
}

export class CsiVolumeRegistrationCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeRegistrationCapability | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsiVolumeRegistrationCapability | cdktf.IResolvable | undefined) {
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

export class CsiVolumeRegistrationCapabilityList extends cdktf.ComplexList {
  public internalValue? : CsiVolumeRegistrationCapability[] | cdktf.IResolvable

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
  public get(index: number): CsiVolumeRegistrationCapabilityOutputReference {
    return new CsiVolumeRegistrationCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeRegistrationMountOptions {
  /**
  * The file system type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}
  */
  readonly fsType?: string;
  /**
  * The flags passed to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}
  */
  readonly mountFlags?: string[];
}

export function csiVolumeRegistrationMountOptionsToTerraform(struct?: CsiVolumeRegistrationMountOptionsOutputReference | CsiVolumeRegistrationMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    mount_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountFlags),
  }
}

export class CsiVolumeRegistrationMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeRegistrationMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._mountFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountFlags = this._mountFlags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationMountOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._mountFlags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._mountFlags = value.mountFlags;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // mount_flags - computed: false, optional: true, required: false
  private _mountFlags?: string[]; 
  public get mountFlags() {
    return this.getListAttribute('mount_flags');
  }
  public set mountFlags(value: string[]) {
    this._mountFlags = value;
  }
  public resetMountFlags() {
    this._mountFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountFlagsInput() {
    return this._mountFlags;
  }
}
export interface CsiVolumeRegistrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}
  */
  readonly delete?: string;
}

export function csiVolumeRegistrationTimeoutsToTerraform(struct?: CsiVolumeRegistrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CsiVolumeRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsiVolumeRegistrationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface CsiVolumeRegistrationTopologyRequestRequiredTopology {
  /**
  * Define attributes for the topology request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}
  */
  readonly segments: { [key: string]: string };
}

export function csiVolumeRegistrationTopologyRequestRequiredTopologyToTerraform(struct?: CsiVolumeRegistrationTopologyRequestRequiredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.segments),
  }
}

export class CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeRegistrationTopologyRequestRequiredTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationTopologyRequestRequiredTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segments = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments?: { [key: string]: string }; 
  public get segments() {
    return this.getStringMapAttribute('segments');
  }
  public set segments(value: { [key: string]: string }) {
    this._segments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments;
  }
}

export class CsiVolumeRegistrationTopologyRequestRequiredTopologyList extends cdktf.ComplexList {
  public internalValue? : CsiVolumeRegistrationTopologyRequestRequiredTopology[] | cdktf.IResolvable

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
  public get(index: number): CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference {
    return new CsiVolumeRegistrationTopologyRequestRequiredTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeRegistrationTopologyRequestRequired {
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}
  */
  readonly topology: CsiVolumeRegistrationTopologyRequestRequiredTopology[] | cdktf.IResolvable;
}

export function csiVolumeRegistrationTopologyRequestRequiredToTerraform(struct?: CsiVolumeRegistrationTopologyRequestRequiredOutputReference | CsiVolumeRegistrationTopologyRequestRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.listMapper(csiVolumeRegistrationTopologyRequestRequiredTopologyToTerraform, true)(struct!.topology),
  }
}

export class CsiVolumeRegistrationTopologyRequestRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeRegistrationTopologyRequestRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationTopologyRequestRequired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topology.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topology.internalValue = value.topology;
    }
  }

  // topology - computed: false, optional: false, required: true
  private _topology = new CsiVolumeRegistrationTopologyRequestRequiredTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: CsiVolumeRegistrationTopologyRequestRequiredTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface CsiVolumeRegistrationTopologyRequest {
  /**
  * required block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}
  */
  readonly required?: CsiVolumeRegistrationTopologyRequestRequired;
}

export function csiVolumeRegistrationTopologyRequestToTerraform(struct?: CsiVolumeRegistrationTopologyRequestOutputReference | CsiVolumeRegistrationTopologyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: csiVolumeRegistrationTopologyRequestRequiredToTerraform(struct!.required),
  }
}

export class CsiVolumeRegistrationTopologyRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeRegistrationTopologyRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeRegistrationTopologyRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._required.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._required.internalValue = value.required;
    }
  }

  // required - computed: false, optional: true, required: false
  private _required = new CsiVolumeRegistrationTopologyRequestRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: CsiVolumeRegistrationTopologyRequestRequired) {
    this._required.internalValue = value;
  }
  public resetRequired() {
    this._required.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration nomad_csi_volume_registration}
*/
export class CsiVolumeRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_csi_volume_registration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume_registration nomad_csi_volume_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsiVolumeRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: CsiVolumeRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_csi_volume_registration',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.0.0',
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
    this._context = config.context;
    this._deregisterOnDestroy = config.deregisterOnDestroy;
    this._externalId = config.externalId;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._parameters = config.parameters;
    this._pluginId = config.pluginId;
    this._secrets = config.secrets;
    this._volumeId = config.volumeId;
    this._capability.internalValue = config.capability;
    this._mountOptions.internalValue = config.mountOptions;
    this._timeouts.internalValue = config.timeouts;
    this._topologyRequest.internalValue = config.topologyRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // nodes_expected - computed: true, optional: false, required: false
  public get nodesExpected() {
    return this.getNumberAttribute('nodes_expected');
  }

  // nodes_healthy - computed: true, optional: false, required: false
  public get nodesHealthy() {
    return this.getNumberAttribute('nodes_healthy');
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

  // plugin_provider - computed: true, optional: false, required: false
  public get pluginProvider() {
    return this.getStringAttribute('plugin_provider');
  }

  // plugin_provider_version - computed: true, optional: false, required: false
  public get pluginProviderVersion() {
    return this.getStringAttribute('plugin_provider_version');
  }

  // schedulable - computed: true, optional: false, required: false
  public get schedulable() {
    return this.getBooleanAttribute('schedulable');
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: { [key: string]: string }; 
  public get secrets() {
    return this.getStringMapAttribute('secrets');
  }
  public set secrets(value: { [key: string]: string }) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // topologies - computed: true, optional: false, required: false
  private _topologies = new CsiVolumeRegistrationTopologiesList(this, "topologies", false);
  public get topologies() {
    return this._topologies;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // capability - computed: false, optional: true, required: false
  private _capability = new CsiVolumeRegistrationCapabilityList(this, "capability", true);
  public get capability() {
    return this._capability;
  }
  public putCapability(value: CsiVolumeRegistrationCapability[] | cdktf.IResolvable) {
    this._capability.internalValue = value;
  }
  public resetCapability() {
    this._capability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new CsiVolumeRegistrationMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: CsiVolumeRegistrationMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsiVolumeRegistrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsiVolumeRegistrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topology_request - computed: false, optional: true, required: false
  private _topologyRequest = new CsiVolumeRegistrationTopologyRequestOutputReference(this, "topology_request");
  public get topologyRequest() {
    return this._topologyRequest;
  }
  public putTopologyRequest(value: CsiVolumeRegistrationTopologyRequest) {
    this._topologyRequest.internalValue = value;
  }
  public resetTopologyRequest() {
    this._topologyRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyRequestInput() {
    return this._topologyRequest.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.hashMapper(cdktf.stringToTerraform)(this._context),
      deregister_on_destroy: cdktf.booleanToTerraform(this._deregisterOnDestroy),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      secrets: cdktf.hashMapper(cdktf.stringToTerraform)(this._secrets),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      capability: cdktf.listMapper(csiVolumeRegistrationCapabilityToTerraform, true)(this._capability.internalValue),
      mount_options: csiVolumeRegistrationMountOptionsToTerraform(this._mountOptions.internalValue),
      timeouts: csiVolumeRegistrationTimeoutsToTerraform(this._timeouts.internalValue),
      topology_request: csiVolumeRegistrationTopologyRequestToTerraform(this._topologyRequest.internalValue),
    };
  }
}
