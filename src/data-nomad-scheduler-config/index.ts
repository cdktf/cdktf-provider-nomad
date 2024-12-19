// https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/data-sources/scheduler_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadSchedulerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/data-sources/scheduler_config#id DataNomadSchedulerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/data-sources/scheduler_config nomad_scheduler_config}
*/
export class DataNomadSchedulerConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_scheduler_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNomadSchedulerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNomadSchedulerConfig to import
  * @param importFromId The id of the existing DataNomadSchedulerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/data-sources/scheduler_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNomadSchedulerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_scheduler_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/data-sources/scheduler_config nomad_scheduler_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadSchedulerConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNomadSchedulerConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nomad_scheduler_config',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.4.0',
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

  // memory_oversubscription_enabled - computed: true, optional: false, required: false
  public get memoryOversubscriptionEnabled() {
    return this.getBooleanAttribute('memory_oversubscription_enabled');
  }

  // preemption_config - computed: true, optional: false, required: false
  private _preemptionConfig = new cdktf.BooleanMap(this, "preemption_config");
  public get preemptionConfig() {
    return this._preemptionConfig;
  }

  // scheduler_algorithm - computed: true, optional: false, required: false
  public get schedulerAlgorithm() {
    return this.getStringAttribute('scheduler_algorithm');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
