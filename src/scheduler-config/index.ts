// https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config#id SchedulerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, tasks may exceed their reserved memory limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config#memory_oversubscription_enabled SchedulerConfig#memory_oversubscription_enabled}
  */
  readonly memoryOversubscriptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Options to enable preemption for various schedulers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config#preemption_config SchedulerConfig#preemption_config}
  */
  readonly preemptionConfig?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Specifies whether scheduler binpacks or spreads allocations on available nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config#scheduler_algorithm SchedulerConfig#scheduler_algorithm}
  */
  readonly schedulerAlgorithm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config nomad_scheduler_config}
*/
export class SchedulerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_scheduler_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchedulerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchedulerConfig to import
  * @param importFromId The id of the existing SchedulerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchedulerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_scheduler_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.0/docs/resources/scheduler_config nomad_scheduler_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SchedulerConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nomad_scheduler_config',
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
    this._memoryOversubscriptionEnabled = config.memoryOversubscriptionEnabled;
    this._preemptionConfig = config.preemptionConfig;
    this._schedulerAlgorithm = config.schedulerAlgorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // memory_oversubscription_enabled - computed: false, optional: true, required: false
  private _memoryOversubscriptionEnabled?: boolean | cdktf.IResolvable; 
  public get memoryOversubscriptionEnabled() {
    return this.getBooleanAttribute('memory_oversubscription_enabled');
  }
  public set memoryOversubscriptionEnabled(value: boolean | cdktf.IResolvable) {
    this._memoryOversubscriptionEnabled = value;
  }
  public resetMemoryOversubscriptionEnabled() {
    this._memoryOversubscriptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOversubscriptionEnabledInput() {
    return this._memoryOversubscriptionEnabled;
  }

  // preemption_config - computed: false, optional: true, required: false
  private _preemptionConfig?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get preemptionConfig() {
    return this.getBooleanMapAttribute('preemption_config');
  }
  public set preemptionConfig(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._preemptionConfig = value;
  }
  public resetPreemptionConfig() {
    this._preemptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionConfigInput() {
    return this._preemptionConfig;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      memory_oversubscription_enabled: cdktf.booleanToTerraform(this._memoryOversubscriptionEnabled),
      preemption_config: cdktf.hashMapper(cdktf.booleanToTerraform)(this._preemptionConfig),
      scheduler_algorithm: cdktf.stringToTerraform(this._schedulerAlgorithm),
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
      memory_oversubscription_enabled: {
        value: cdktf.booleanToHclTerraform(this._memoryOversubscriptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preemption_config: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._preemptionConfig),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      scheduler_algorithm: {
        value: cdktf.stringToHclTerraform(this._schedulerAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
