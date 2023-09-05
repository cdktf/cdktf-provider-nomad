// https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines how large the volume can be. The storage provider may return a volume that is smaller than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_max CsiVolume#capacity_max}
  */
  readonly capacityMax?: string;
  /**
  * Defines how small the volume can be. The storage provider may return a volume that is larger than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capacity_min CsiVolume#capacity_min}
  */
  readonly capacityMin?: string;
  /**
  * The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#clone_id CsiVolume#clone_id}
  */
  readonly cloneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#id CsiVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#name CsiVolume#name}
  */
  readonly name: string;
  /**
  * The namespace in which to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#namespace CsiVolume#namespace}
  */
  readonly namespace?: string;
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to configure the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#parameters CsiVolume#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The ID of the CSI plugin that manages this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#plugin_id CsiVolume#plugin_id}
  */
  readonly pluginId: string;
  /**
  * An optional key-value map of strings used as credentials for publishing and unpublishing volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#secrets CsiVolume#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#snapshot_id CsiVolume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The unique ID of the volume, how jobs will refer to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#volume_id CsiVolume#volume_id}
  */
  readonly volumeId: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#capability CsiVolume#capability}
  */
  readonly capability: CsiVolumeCapability[] | cdktf.IResolvable;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_options CsiVolume#mount_options}
  */
  readonly mountOptions?: CsiVolumeMountOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#timeouts CsiVolume#timeouts}
  */
  readonly timeouts?: CsiVolumeTimeouts;
  /**
  * topology_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology_request CsiVolume#topology_request}
  */
  readonly topologyRequest?: CsiVolumeTopologyRequest;
}
export interface CsiVolumeTopologies {
}

export function csiVolumeTopologiesToTerraform(struct?: CsiVolumeTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CsiVolumeTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeTopologies | undefined) {
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

export class CsiVolumeTopologiesList extends cdktf.ComplexList {

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
  public get(index: number): CsiVolumeTopologiesOutputReference {
    return new CsiVolumeTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeCapability {
  /**
  * Defines whether a volume should be available concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#access_mode CsiVolume#access_mode}
  */
  readonly accessMode: string;
  /**
  * The storage API that will be used by the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#attachment_mode CsiVolume#attachment_mode}
  */
  readonly attachmentMode: string;
}

export function csiVolumeCapabilityToTerraform(struct?: CsiVolumeCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    attachment_mode: cdktf.stringToTerraform(struct!.attachmentMode),
  }
}

export class CsiVolumeCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeCapability | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsiVolumeCapability | cdktf.IResolvable | undefined) {
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

export class CsiVolumeCapabilityList extends cdktf.ComplexList {
  public internalValue? : CsiVolumeCapability[] | cdktf.IResolvable

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
  public get(index: number): CsiVolumeCapabilityOutputReference {
    return new CsiVolumeCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeMountOptions {
  /**
  * The file system type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#fs_type CsiVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * The flags passed to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#mount_flags CsiVolume#mount_flags}
  */
  readonly mountFlags?: string[];
}

export function csiVolumeMountOptionsToTerraform(struct?: CsiVolumeMountOptionsOutputReference | CsiVolumeMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    mount_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountFlags),
  }
}

export class CsiVolumeMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeMountOptions | undefined {
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

  public set internalValue(value: CsiVolumeMountOptions | undefined) {
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
export interface CsiVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#create CsiVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#delete CsiVolume#delete}
  */
  readonly delete?: string;
}

export function csiVolumeTimeoutsToTerraform(struct?: CsiVolumeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CsiVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsiVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsiVolumeTimeouts | cdktf.IResolvable | undefined) {
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
export interface CsiVolumeTopologyRequestPreferredTopology {
  /**
  * Define the attributes for the topology request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}
  */
  readonly segments: { [key: string]: string };
}

export function csiVolumeTopologyRequestPreferredTopologyToTerraform(struct?: CsiVolumeTopologyRequestPreferredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.segments),
  }
}

export class CsiVolumeTopologyRequestPreferredTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeTopologyRequestPreferredTopology | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsiVolumeTopologyRequestPreferredTopology | cdktf.IResolvable | undefined) {
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

export class CsiVolumeTopologyRequestPreferredTopologyList extends cdktf.ComplexList {
  public internalValue? : CsiVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable

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
  public get(index: number): CsiVolumeTopologyRequestPreferredTopologyOutputReference {
    return new CsiVolumeTopologyRequestPreferredTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeTopologyRequestPreferred {
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}
  */
  readonly topology: CsiVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable;
}

export function csiVolumeTopologyRequestPreferredToTerraform(struct?: CsiVolumeTopologyRequestPreferredOutputReference | CsiVolumeTopologyRequestPreferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.listMapper(csiVolumeTopologyRequestPreferredTopologyToTerraform, true)(struct!.topology),
  }
}

export class CsiVolumeTopologyRequestPreferredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeTopologyRequestPreferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeTopologyRequestPreferred | undefined) {
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
  private _topology = new CsiVolumeTopologyRequestPreferredTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: CsiVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface CsiVolumeTopologyRequestRequiredTopology {
  /**
  * Define the attributes for the topology request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#segments CsiVolume#segments}
  */
  readonly segments: { [key: string]: string };
}

export function csiVolumeTopologyRequestRequiredTopologyToTerraform(struct?: CsiVolumeTopologyRequestRequiredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.segments),
  }
}

export class CsiVolumeTopologyRequestRequiredTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsiVolumeTopologyRequestRequiredTopology | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsiVolumeTopologyRequestRequiredTopology | cdktf.IResolvable | undefined) {
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

export class CsiVolumeTopologyRequestRequiredTopologyList extends cdktf.ComplexList {
  public internalValue? : CsiVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable

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
  public get(index: number): CsiVolumeTopologyRequestRequiredTopologyOutputReference {
    return new CsiVolumeTopologyRequestRequiredTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsiVolumeTopologyRequestRequired {
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#topology CsiVolume#topology}
  */
  readonly topology: CsiVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable;
}

export function csiVolumeTopologyRequestRequiredToTerraform(struct?: CsiVolumeTopologyRequestRequiredOutputReference | CsiVolumeTopologyRequestRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.listMapper(csiVolumeTopologyRequestRequiredTopologyToTerraform, true)(struct!.topology),
  }
}

export class CsiVolumeTopologyRequestRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeTopologyRequestRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeTopologyRequestRequired | undefined) {
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
  private _topology = new CsiVolumeTopologyRequestRequiredTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: CsiVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface CsiVolumeTopologyRequest {
  /**
  * preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#preferred CsiVolume#preferred}
  */
  readonly preferred?: CsiVolumeTopologyRequestPreferred;
  /**
  * required block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume#required CsiVolume#required}
  */
  readonly required?: CsiVolumeTopologyRequestRequired;
}

export function csiVolumeTopologyRequestToTerraform(struct?: CsiVolumeTopologyRequestOutputReference | CsiVolumeTopologyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred: csiVolumeTopologyRequestPreferredToTerraform(struct!.preferred),
    required: csiVolumeTopologyRequestRequiredToTerraform(struct!.required),
  }
}

export class CsiVolumeTopologyRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsiVolumeTopologyRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred?.internalValue;
    }
    if (this._required?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsiVolumeTopologyRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferred.internalValue = undefined;
      this._required.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferred.internalValue = value.preferred;
      this._required.internalValue = value.required;
    }
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred = new CsiVolumeTopologyRequestPreferredOutputReference(this, "preferred");
  public get preferred() {
    return this._preferred;
  }
  public putPreferred(value: CsiVolumeTopologyRequestPreferred) {
    this._preferred.internalValue = value;
  }
  public resetPreferred() {
    this._preferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required = new CsiVolumeTopologyRequestRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: CsiVolumeTopologyRequestRequired) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume nomad_csi_volume}
*/
export class CsiVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_csi_volume";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.0.0/docs/resources/csi_volume nomad_csi_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsiVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: CsiVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_csi_volume',
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
    this._capacityMax = config.capacityMax;
    this._capacityMin = config.capacityMin;
    this._cloneId = config.cloneId;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._parameters = config.parameters;
    this._pluginId = config.pluginId;
    this._secrets = config.secrets;
    this._snapshotId = config.snapshotId;
    this._volumeId = config.volumeId;
    this._capability.internalValue = config.capability;
    this._mountOptions.internalValue = config.mountOptions;
    this._timeouts.internalValue = config.timeouts;
    this._topologyRequest.internalValue = config.topologyRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // clone_id - computed: false, optional: true, required: false
  private _cloneId?: string; 
  public get cloneId() {
    return this.getStringAttribute('clone_id');
  }
  public set cloneId(value: string) {
    this._cloneId = value;
  }
  public resetCloneId() {
    this._cloneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneIdInput() {
    return this._cloneId;
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

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // topologies - computed: true, optional: false, required: false
  private _topologies = new CsiVolumeTopologiesList(this, "topologies", false);
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

  // capability - computed: false, optional: false, required: true
  private _capability = new CsiVolumeCapabilityList(this, "capability", true);
  public get capability() {
    return this._capability;
  }
  public putCapability(value: CsiVolumeCapability[] | cdktf.IResolvable) {
    this._capability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new CsiVolumeMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: CsiVolumeMountOptions) {
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
  private _timeouts = new CsiVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsiVolumeTimeouts) {
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
  private _topologyRequest = new CsiVolumeTopologyRequestOutputReference(this, "topology_request");
  public get topologyRequest() {
    return this._topologyRequest;
  }
  public putTopologyRequest(value: CsiVolumeTopologyRequest) {
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
      capacity_max: cdktf.stringToTerraform(this._capacityMax),
      capacity_min: cdktf.stringToTerraform(this._capacityMin),
      clone_id: cdktf.stringToTerraform(this._cloneId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      secrets: cdktf.hashMapper(cdktf.stringToTerraform)(this._secrets),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      capability: cdktf.listMapper(csiVolumeCapabilityToTerraform, true)(this._capability.internalValue),
      mount_options: csiVolumeMountOptionsToTerraform(this._mountOptions.internalValue),
      timeouts: csiVolumeTimeoutsToTerraform(this._timeouts.internalValue),
      topology_request: csiVolumeTopologyRequestToTerraform(this._topologyRequest.internalValue),
    };
  }
}
