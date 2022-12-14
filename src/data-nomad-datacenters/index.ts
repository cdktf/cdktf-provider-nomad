// https://www.terraform.io/docs/providers/nomad/d/datacenters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadDatacentersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/d/datacenters#id DataNomadDatacenters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, this flag will ignore nodes that are down when listing datacenters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/d/datacenters#ignore_down_nodes DataNomadDatacenters#ignore_down_nodes}
  */
  readonly ignoreDownNodes?: boolean | cdktf.IResolvable;
  /**
  * Prefix value used for filtering results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/nomad/d/datacenters#prefix DataNomadDatacenters#prefix}
  */
  readonly prefix?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/nomad/d/datacenters nomad_datacenters}
*/
export class DataNomadDatacenters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_datacenters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/nomad/d/datacenters nomad_datacenters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadDatacentersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNomadDatacentersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nomad_datacenters',
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
    this._id = config.id;
    this._ignoreDownNodes = config.ignoreDownNodes;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getListAttribute('datacenters');
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

  // ignore_down_nodes - computed: false, optional: true, required: false
  private _ignoreDownNodes?: boolean | cdktf.IResolvable; 
  public get ignoreDownNodes() {
    return this.getBooleanAttribute('ignore_down_nodes');
  }
  public set ignoreDownNodes(value: boolean | cdktf.IResolvable) {
    this._ignoreDownNodes = value;
  }
  public resetIgnoreDownNodes() {
    this._ignoreDownNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDownNodesInput() {
    return this._ignoreDownNodes;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_down_nodes: cdktf.booleanToTerraform(this._ignoreDownNodes),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }
}
