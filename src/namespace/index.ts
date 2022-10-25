// https://www.terraform.io/docs/providers/nomad/r/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata associated with the namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#meta Namespace#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Unique name for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * Quota to set for this namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#quota Namespace#quota}
  */
  readonly quota?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#capabilities Namespace#capabilities}
  */
  readonly capabilities?: NamespaceCapabilities;
}
export interface NamespaceCapabilities {
  /**
  * Disabled task drivers for the namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#disabled_task_drivers Namespace#disabled_task_drivers}
  */
  readonly disabledTaskDrivers?: string[];
  /**
  * Enabled task drivers for the namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/r/namespace#enabled_task_drivers Namespace#enabled_task_drivers}
  */
  readonly enabledTaskDrivers?: string[];
}

export function namespaceCapabilitiesToTerraform(struct?: NamespaceCapabilitiesOutputReference | NamespaceCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_task_drivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledTaskDrivers),
    enabled_task_drivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledTaskDrivers),
  }
}

export class NamespaceCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledTaskDrivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledTaskDrivers = this._disabledTaskDrivers;
    }
    if (this._enabledTaskDrivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledTaskDrivers = this._enabledTaskDrivers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledTaskDrivers = undefined;
      this._enabledTaskDrivers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledTaskDrivers = value.disabledTaskDrivers;
      this._enabledTaskDrivers = value.enabledTaskDrivers;
    }
  }

  // disabled_task_drivers - computed: false, optional: true, required: false
  private _disabledTaskDrivers?: string[]; 
  public get disabledTaskDrivers() {
    return this.getListAttribute('disabled_task_drivers');
  }
  public set disabledTaskDrivers(value: string[]) {
    this._disabledTaskDrivers = value;
  }
  public resetDisabledTaskDrivers() {
    this._disabledTaskDrivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledTaskDriversInput() {
    return this._disabledTaskDrivers;
  }

  // enabled_task_drivers - computed: false, optional: true, required: false
  private _enabledTaskDrivers?: string[]; 
  public get enabledTaskDrivers() {
    return this.getListAttribute('enabled_task_drivers');
  }
  public set enabledTaskDrivers(value: string[]) {
    this._enabledTaskDrivers = value;
  }
  public resetEnabledTaskDrivers() {
    this._enabledTaskDrivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledTaskDriversInput() {
    return this._enabledTaskDrivers;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/nomad/r/namespace nomad_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_namespace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/nomad/r/namespace nomad_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_namespace',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '1.4.19',
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
    this._meta = config.meta;
    this._name = config.name;
    this._quota = config.quota;
    this._capabilities.internalValue = config.capabilities;
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

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new NamespaceCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: NamespaceCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
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
      quota: cdktf.stringToTerraform(this._quota),
      capabilities: namespaceCapabilitiesToTerraform(this._capabilities.internalValue),
    };
  }
}
