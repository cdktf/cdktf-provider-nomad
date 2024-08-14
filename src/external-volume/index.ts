// https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines how large the volume can be. The storage provider may return a volume that is smaller than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#capacity_max ExternalVolume#capacity_max}
  */
  readonly capacityMax?: string;
  /**
  * Defines how small the volume can be. The storage provider may return a volume that is larger than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#capacity_min ExternalVolume#capacity_min}
  */
  readonly capacityMin?: string;
  /**
  * The volume ID to clone when creating this volume. Storage provider must support cloning. Conflicts with 'snapshot_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#clone_id ExternalVolume#clone_id}
  */
  readonly cloneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#id ExternalVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#name ExternalVolume#name}
  */
  readonly name: string;
  /**
  * The namespace in which to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#namespace ExternalVolume#namespace}
  */
  readonly namespace?: string;
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to configure the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#parameters ExternalVolume#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The ID of the CSI plugin that manages this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#plugin_id ExternalVolume#plugin_id}
  */
  readonly pluginId: string;
  /**
  * An optional key-value map of strings used as credentials for publishing and unpublishing volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#secrets ExternalVolume#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * The snapshot ID to restore when creating this volume. Storage provider must support snapshots. Conflicts with 'clone_id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#snapshot_id ExternalVolume#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * The type of the volume. Currently, only 'csi' is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#type ExternalVolume#type}
  */
  readonly type?: string;
  /**
  * The unique ID of the volume, how jobs will refer to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#volume_id ExternalVolume#volume_id}
  */
  readonly volumeId: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#capability ExternalVolume#capability}
  */
  readonly capability: ExternalVolumeCapability[] | cdktf.IResolvable;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#mount_options ExternalVolume#mount_options}
  */
  readonly mountOptions?: ExternalVolumeMountOptions;
  /**
  * topology_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#topology_request ExternalVolume#topology_request}
  */
  readonly topologyRequest?: ExternalVolumeTopologyRequest;
}
export interface ExternalVolumeTopologies {
}

export function externalVolumeTopologiesToTerraform(struct?: ExternalVolumeTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeTopologiesToHclTerraform(struct?: ExternalVolumeTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeTopologies | undefined) {
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

export class ExternalVolumeTopologiesList extends cdktf.ComplexList {

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
  public get(index: number): ExternalVolumeTopologiesOutputReference {
    return new ExternalVolumeTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeCapability {
  /**
  * Defines whether a volume should be available concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#access_mode ExternalVolume#access_mode}
  */
  readonly accessMode: string;
  /**
  * The storage API that will be used by the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#attachment_mode ExternalVolume#attachment_mode}
  */
  readonly attachmentMode: string;
}

export function externalVolumeCapabilityToTerraform(struct?: ExternalVolumeCapability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    attachment_mode: cdktf.stringToTerraform(struct!.attachmentMode),
  }
}


export function externalVolumeCapabilityToHclTerraform(struct?: ExternalVolumeCapability | cdktf.IResolvable): any {
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

export class ExternalVolumeCapabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeCapability | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalVolumeCapability | cdktf.IResolvable | undefined) {
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

export class ExternalVolumeCapabilityList extends cdktf.ComplexList {
  public internalValue? : ExternalVolumeCapability[] | cdktf.IResolvable

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
  public get(index: number): ExternalVolumeCapabilityOutputReference {
    return new ExternalVolumeCapabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeMountOptions {
  /**
  * The file system type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#fs_type ExternalVolume#fs_type}
  */
  readonly fsType?: string;
  /**
  * The flags passed to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#mount_flags ExternalVolume#mount_flags}
  */
  readonly mountFlags?: string[];
}

export function externalVolumeMountOptionsToTerraform(struct?: ExternalVolumeMountOptionsOutputReference | ExternalVolumeMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    mount_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountFlags),
  }
}


export function externalVolumeMountOptionsToHclTerraform(struct?: ExternalVolumeMountOptionsOutputReference | ExternalVolumeMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mountFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalVolumeMountOptions | undefined {
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

  public set internalValue(value: ExternalVolumeMountOptions | undefined) {
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
export interface ExternalVolumeTopologyRequestPreferredTopology {
  /**
  * Define the attributes for the topology request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#segments ExternalVolume#segments}
  */
  readonly segments: { [key: string]: string };
}

export function externalVolumeTopologyRequestPreferredTopologyToTerraform(struct?: ExternalVolumeTopologyRequestPreferredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.segments),
  }
}


export function externalVolumeTopologyRequestPreferredTopologyToHclTerraform(struct?: ExternalVolumeTopologyRequestPreferredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.segments),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTopologyRequestPreferredTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeTopologyRequestPreferredTopology | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalVolumeTopologyRequestPreferredTopology | cdktf.IResolvable | undefined) {
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

export class ExternalVolumeTopologyRequestPreferredTopologyList extends cdktf.ComplexList {
  public internalValue? : ExternalVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable

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
  public get(index: number): ExternalVolumeTopologyRequestPreferredTopologyOutputReference {
    return new ExternalVolumeTopologyRequestPreferredTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeTopologyRequestPreferred {
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#topology ExternalVolume#topology}
  */
  readonly topology: ExternalVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable;
}

export function externalVolumeTopologyRequestPreferredToTerraform(struct?: ExternalVolumeTopologyRequestPreferredOutputReference | ExternalVolumeTopologyRequestPreferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.listMapper(externalVolumeTopologyRequestPreferredTopologyToTerraform, true)(struct!.topology),
  }
}


export function externalVolumeTopologyRequestPreferredToHclTerraform(struct?: ExternalVolumeTopologyRequestPreferredOutputReference | ExternalVolumeTopologyRequestPreferred): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology: {
      value: cdktf.listMapperHcl(externalVolumeTopologyRequestPreferredTopologyToHclTerraform, true)(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalVolumeTopologyRequestPreferredTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTopologyRequestPreferredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalVolumeTopologyRequestPreferred | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeTopologyRequestPreferred | undefined) {
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
  private _topology = new ExternalVolumeTopologyRequestPreferredTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ExternalVolumeTopologyRequestPreferredTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface ExternalVolumeTopologyRequestRequiredTopology {
  /**
  * Define the attributes for the topology request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#segments ExternalVolume#segments}
  */
  readonly segments: { [key: string]: string };
}

export function externalVolumeTopologyRequestRequiredTopologyToTerraform(struct?: ExternalVolumeTopologyRequestRequiredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.segments),
  }
}


export function externalVolumeTopologyRequestRequiredTopologyToHclTerraform(struct?: ExternalVolumeTopologyRequestRequiredTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.segments),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTopologyRequestRequiredTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeTopologyRequestRequiredTopology | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalVolumeTopologyRequestRequiredTopology | cdktf.IResolvable | undefined) {
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

export class ExternalVolumeTopologyRequestRequiredTopologyList extends cdktf.ComplexList {
  public internalValue? : ExternalVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable

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
  public get(index: number): ExternalVolumeTopologyRequestRequiredTopologyOutputReference {
    return new ExternalVolumeTopologyRequestRequiredTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeTopologyRequestRequired {
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#topology ExternalVolume#topology}
  */
  readonly topology: ExternalVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable;
}

export function externalVolumeTopologyRequestRequiredToTerraform(struct?: ExternalVolumeTopologyRequestRequiredOutputReference | ExternalVolumeTopologyRequestRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.listMapper(externalVolumeTopologyRequestRequiredTopologyToTerraform, true)(struct!.topology),
  }
}


export function externalVolumeTopologyRequestRequiredToHclTerraform(struct?: ExternalVolumeTopologyRequestRequiredOutputReference | ExternalVolumeTopologyRequestRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology: {
      value: cdktf.listMapperHcl(externalVolumeTopologyRequestRequiredTopologyToHclTerraform, true)(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalVolumeTopologyRequestRequiredTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTopologyRequestRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalVolumeTopologyRequestRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeTopologyRequestRequired | undefined) {
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
  private _topology = new ExternalVolumeTopologyRequestRequiredTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: ExternalVolumeTopologyRequestRequiredTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}
export interface ExternalVolumeTopologyRequest {
  /**
  * preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#preferred ExternalVolume#preferred}
  */
  readonly preferred?: ExternalVolumeTopologyRequestPreferred;
  /**
  * required block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#required ExternalVolume#required}
  */
  readonly required?: ExternalVolumeTopologyRequestRequired;
}

export function externalVolumeTopologyRequestToTerraform(struct?: ExternalVolumeTopologyRequestOutputReference | ExternalVolumeTopologyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred: externalVolumeTopologyRequestPreferredToTerraform(struct!.preferred),
    required: externalVolumeTopologyRequestRequiredToTerraform(struct!.required),
  }
}


export function externalVolumeTopologyRequestToHclTerraform(struct?: ExternalVolumeTopologyRequestOutputReference | ExternalVolumeTopologyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred: {
      value: externalVolumeTopologyRequestPreferredToHclTerraform(struct!.preferred),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalVolumeTopologyRequestPreferredList",
    },
    required: {
      value: externalVolumeTopologyRequestRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalVolumeTopologyRequestRequiredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeTopologyRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalVolumeTopologyRequest | undefined {
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

  public set internalValue(value: ExternalVolumeTopologyRequest | undefined) {
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
  private _preferred = new ExternalVolumeTopologyRequestPreferredOutputReference(this, "preferred");
  public get preferred() {
    return this._preferred;
  }
  public putPreferred(value: ExternalVolumeTopologyRequestPreferred) {
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
  private _required = new ExternalVolumeTopologyRequestRequiredOutputReference(this, "required");
  public get required() {
    return this._required;
  }
  public putRequired(value: ExternalVolumeTopologyRequestRequired) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume nomad_external_volume}
*/
export class ExternalVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_external_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalVolume to import
  * @param importFromId The id of the existing ExternalVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_external_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.3.1/docs/resources/external_volume nomad_external_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_external_volume',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.3.1',
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
    this._type = config.type;
    this._volumeId = config.volumeId;
    this._capability.internalValue = config.capability;
    this._mountOptions.internalValue = config.mountOptions;
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
  private _topologies = new ExternalVolumeTopologiesList(this, "topologies", false);
  public get topologies() {
    return this._topologies;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
  private _capability = new ExternalVolumeCapabilityList(this, "capability", true);
  public get capability() {
    return this._capability;
  }
  public putCapability(value: ExternalVolumeCapability[] | cdktf.IResolvable) {
    this._capability.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability.internalValue;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions = new ExternalVolumeMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: ExternalVolumeMountOptions) {
    this._mountOptions.internalValue = value;
  }
  public resetMountOptions() {
    this._mountOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }

  // topology_request - computed: false, optional: true, required: false
  private _topologyRequest = new ExternalVolumeTopologyRequestOutputReference(this, "topology_request");
  public get topologyRequest() {
    return this._topologyRequest;
  }
  public putTopologyRequest(value: ExternalVolumeTopologyRequest) {
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
      type: cdktf.stringToTerraform(this._type),
      volume_id: cdktf.stringToTerraform(this._volumeId),
      capability: cdktf.listMapper(externalVolumeCapabilityToTerraform, true)(this._capability.internalValue),
      mount_options: externalVolumeMountOptionsToTerraform(this._mountOptions.internalValue),
      topology_request: externalVolumeTopologyRequestToTerraform(this._topologyRequest.internalValue),
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
      clone_id: {
        value: cdktf.stringToHclTerraform(this._cloneId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      secrets: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secrets),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability: {
        value: cdktf.listMapperHcl(externalVolumeCapabilityToHclTerraform, true)(this._capability.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ExternalVolumeCapabilityList",
      },
      mount_options: {
        value: externalVolumeMountOptionsToHclTerraform(this._mountOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalVolumeMountOptionsList",
      },
      topology_request: {
        value: externalVolumeTopologyRequestToHclTerraform(this._topologyRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalVolumeTopologyRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
