/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadJobParserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable setting any unset fields to their default values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser#canonicalize DataNomadJobParser#canonicalize}
  */
  readonly canonicalize?: boolean | cdktf.IResolvable;
  /**
  * Specifies the HCL definition of the job encoded in a JSON string.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser#hcl DataNomadJobParser#hcl}
  */
  readonly hcl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser#id DataNomadJobParser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser nomad_job_parser}
*/
export class DataNomadJobParser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_job_parser";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/job_parser nomad_job_parser} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadJobParserConfig
  */
  public constructor(scope: Construct, id: string, config: DataNomadJobParserConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_job_parser',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '1.4.20',
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
    this._canonicalize = config.canonicalize;
    this._hcl = config.hcl;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonicalize - computed: false, optional: true, required: false
  private _canonicalize?: boolean | cdktf.IResolvable; 
  public get canonicalize() {
    return this.getBooleanAttribute('canonicalize');
  }
  public set canonicalize(value: boolean | cdktf.IResolvable) {
    this._canonicalize = value;
  }
  public resetCanonicalize() {
    this._canonicalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalizeInput() {
    return this._canonicalize;
  }

  // hcl - computed: false, optional: false, required: true
  private _hcl?: string; 
  public get hcl() {
    return this.getStringAttribute('hcl');
  }
  public set hcl(value: string) {
    this._hcl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hclInput() {
    return this._hcl;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      canonicalize: cdktf.booleanToTerraform(this._canonicalize),
      hcl: cdktf.stringToTerraform(this._hcl),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
