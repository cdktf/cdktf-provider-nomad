// https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadPluginsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins#id DataNomadPlugins#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Volume Type (currently only 'csi')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins#type DataNomadPlugins#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins nomad_plugins}
*/
export class DataNomadPlugins extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_plugins";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNomadPlugins resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNomadPlugins to import
  * @param importFromId The id of the existing DataNomadPlugins that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNomadPlugins to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_plugins", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.2.0/docs/data-sources/plugins nomad_plugins} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadPluginsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNomadPluginsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nomad_plugins',
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
    this._id = config.id;
    this._type = config.type;
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

  // plugins - computed: true, optional: false, required: false
  private _plugins = new cdktf.StringMapList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
