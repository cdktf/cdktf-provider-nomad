// https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiVolumeRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines how large the volume can be. The storage provider may return a volume that is smaller than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#capacity_max CsiVolumeRegistration#capacity_max}
  */
  readonly capacityMax?: string;
  /**
  * Defines how small the volume can be. The storage provider may return a volume that is larger than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#capacity_min CsiVolumeRegistration#capacity_min}
  */
  readonly capacityMin?: string;
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to validate the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#context CsiVolumeRegistration#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * If true, the volume will be deregistered on destroy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#deregister_on_destroy CsiVolumeRegistration#deregister_on_destroy}
  */
  readonly deregisterOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The ID of the physical volume from the storage provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#external_id CsiVolumeRegistration#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#id CsiVolumeRegistration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#name CsiVolumeRegistration#name}
  */
  readonly name: string;
  /**
  * The namespace in which to create the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#namespace CsiVolumeRegistration#namespace}
  */
  readonly namespace?: string;
  /**
  * An optional key-value map of strings passed directly to the CSI plugin to configure the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#parameters CsiVolumeRegistration#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The ID of the CSI plugin that manages this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#plugin_id CsiVolumeRegistration#plugin_id}
  */
  readonly pluginId: string;
  /**
  * An optional key-value map of strings used as credentials for publishing and unpublishing volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#secrets CsiVolumeRegistration#secrets}
  */
  readonly secrets?: { [key: string]: string };
  /**
  * The unique ID of the volume, how jobs will refer to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#volume_id CsiVolumeRegistration#volume_id}
  */
  readonly volumeId: string;
  /**
  * capability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#capability CsiVolumeRegistration#capability}
  */
  readonly capability?: CsiVolumeRegistrationCapability[] | cdktf.IResolvable;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#mount_options CsiVolumeRegistration#mount_options}
  */
  readonly mountOptions?: CsiVolumeRegistrationMountOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#timeouts CsiVolumeRegistration#timeouts}
  */
  readonly timeouts?: CsiVolumeRegistrationTimeouts;
  /**
  * topology_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#topology_request CsiVolumeRegistration#topology_request}
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


export function csiVolumeRegistrationTopologiesToHclTerraform(struct?: CsiVolumeRegistrationTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#access_mode CsiVolumeRegistration#access_mode}
  */
  readonly accessMode: string;
  /**
  * The storage API that will be used by the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#attachment_mode CsiVolumeRegistration#attachment_mode}
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


export function csiVolumeRegistrationCapabilityToHclTerraform(struct?: CsiVolumeRegistrationCapability | cdktf.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#fs_type CsiVolumeRegistration#fs_type}
  */
  readonly fsType?: string;
  /**
  * The flags passed to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#mount_flags CsiVolumeRegistration#mount_flags}
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


export function csiVolumeRegistrationMountOptionsToHclTerraform(struct?: CsiVolumeRegistrationMountOptionsOutputReference | CsiVolumeRegistrationMountOptions): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#create CsiVolumeRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#delete CsiVolumeRegistration#delete}
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


export function csiVolumeRegistrationTimeoutsToHclTerraform(struct?: CsiVolumeRegistrationTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#segments CsiVolumeRegistration#segments}
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


export function csiVolumeRegistrationTopologyRequestRequiredTopologyToHclTerraform(struct?: CsiVolumeRegistrationTopologyRequestRequiredTopology | cdktf.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#topology CsiVolumeRegistration#topology}
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


export function csiVolumeRegistrationTopologyRequestRequiredToHclTerraform(struct?: CsiVolumeRegistrationTopologyRequestRequiredOutputReference | CsiVolumeRegistrationTopologyRequestRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology: {
      value: cdktf.listMapperHcl(csiVolumeRegistrationTopologyRequestRequiredTopologyToHclTerraform, true)(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "CsiVolumeRegistrationTopologyRequestRequiredTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#required CsiVolumeRegistration#required}
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


export function csiVolumeRegistrationTopologyRequestToHclTerraform(struct?: CsiVolumeRegistrationTopologyRequestOutputReference | CsiVolumeRegistrationTopologyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: csiVolumeRegistrationTopologyRequestRequiredToHclTerraform(struct!.required),
      isBlock: true,
      type: "list",
      storageClassType: "CsiVolumeRegistrationTopologyRequestRequiredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration nomad_csi_volume_registration}
*/
export class CsiVolumeRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_csi_volume_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsiVolumeRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsiVolumeRegistration to import
  * @param importFromId The id of the existing CsiVolumeRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsiVolumeRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_csi_volume_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/resources/csi_volume_registration nomad_csi_volume_registration} Resource
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
    this._capacityMax = config.capacityMax;
    this._capacityMin = config.capacityMin;
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

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
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
      capacity_max: cdktf.stringToTerraform(this._capacityMax),
      capacity_min: cdktf.stringToTerraform(this._capacityMin),
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
      context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._context),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deregister_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deregisterOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      volume_id: {
        value: cdktf.stringToHclTerraform(this._volumeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capability: {
        value: cdktf.listMapperHcl(csiVolumeRegistrationCapabilityToHclTerraform, true)(this._capability.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CsiVolumeRegistrationCapabilityList",
      },
      mount_options: {
        value: csiVolumeRegistrationMountOptionsToHclTerraform(this._mountOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsiVolumeRegistrationMountOptionsList",
      },
      timeouts: {
        value: csiVolumeRegistrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsiVolumeRegistrationTimeouts",
      },
      topology_request: {
        value: csiVolumeRegistrationTopologyRequestToHclTerraform(this._topologyRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsiVolumeRegistrationTopologyRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
