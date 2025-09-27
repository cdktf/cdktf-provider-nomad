/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NomadProviderConfig {
  /**
  * URL of the root of the target Nomad agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#address NomadProvider#address}
  */
  readonly address: string;
  /**
  * A path to a PEM-encoded certificate authority used to verify the remote agent's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ca_file NomadProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * PEM-encoded certificate authority used to verify the remote agent's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ca_pem NomadProvider#ca_pem}
  */
  readonly caPem?: string;
  /**
  * A path to a PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#cert_file NomadProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * PEM-encoded certificate provided to the remote agent; requires use of key_file or key_pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#cert_pem NomadProvider#cert_pem}
  */
  readonly certPem?: string;
  /**
  * HTTP basic auth configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#http_auth NomadProvider#http_auth}
  */
  readonly httpAuth?: string;
  /**
  * A set of environment variables that are ignored by the provider when configuring the Nomad API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#ignore_env_vars NomadProvider#ignore_env_vars}
  */
  readonly ignoreEnvVars?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * A path to a PEM-encoded private key, required if cert_file or cert_pem is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#key_file NomadProvider#key_file}
  */
  readonly keyFile?: string;
  /**
  * PEM-encoded private key, required if cert_file or cert_pem is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#key_pem NomadProvider#key_pem}
  */
  readonly keyPem?: string;
  /**
  * Region of the target Nomad agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#region NomadProvider#region}
  */
  readonly region?: string;
  /**
  * ACL token secret for API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#secret_id NomadProvider#secret_id}
  */
  readonly secretId?: string;
  /**
  * Skip TLS verification on client side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#skip_verify NomadProvider#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#alias NomadProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#auth_jwt NomadProvider#auth_jwt}
  */
  readonly authJwt?: NomadProviderAuthJwt;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#headers NomadProvider#headers}
  */
  readonly headers?: NomadProviderHeaders[] | cdktf.IResolvable;
}
export interface NomadProviderAuthJwt {
  /**
  * The name of the auth method to use for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#auth_method NomadProvider#auth_method}
  */
  readonly authMethod: string;
  /**
  * The externally issued authentication token to be exchanged for a Nomad ACL Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#login_token NomadProvider#login_token}
  */
  readonly loginToken: string;
}

export function nomadProviderAuthJwtToTerraform(struct?: NomadProviderAuthJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    login_token: cdktf.stringToTerraform(struct!.loginToken),
  }
}


export function nomadProviderAuthJwtToHclTerraform(struct?: NomadProviderAuthJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_token: {
      value: cdktf.stringToHclTerraform(struct!.loginToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface NomadProviderHeaders {
  /**
  * The header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#name NomadProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#value NomadProvider#value}
  */
  readonly value: string;
}

export function nomadProviderHeadersToTerraform(struct?: NomadProviderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nomadProviderHeadersToHclTerraform(struct?: NomadProviderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs nomad}
*/
export class NomadProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NomadProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NomadProvider to import
  * @param importFromId The id of the existing NomadProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NomadProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.5.1/docs nomad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NomadProviderConfig
  */
  public constructor(scope: Construct, id: string, config: NomadProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad',
      terraformGeneratorMetadata: {
        providerName: 'nomad',
        providerVersion: '2.5.1',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'nomad'
    });
    this._address = config.address;
    this._caFile = config.caFile;
    this._caPem = config.caPem;
    this._certFile = config.certFile;
    this._certPem = config.certPem;
    this._httpAuth = config.httpAuth;
    this._ignoreEnvVars = config.ignoreEnvVars;
    this._keyFile = config.keyFile;
    this._keyPem = config.keyPem;
    this._region = config.region;
    this._secretId = config.secretId;
    this._skipVerify = config.skipVerify;
    this._alias = config.alias;
    this._authJwt = config.authJwt;
    this._headers = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_pem - computed: false, optional: true, required: false
  private _caPem?: string; 
  public get caPem() {
    return this._caPem;
  }
  public set caPem(value: string | undefined) {
    this._caPem = value;
  }
  public resetCaPem() {
    this._caPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPemInput() {
    return this._caPem;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this._certFile;
  }
  public set certFile(value: string | undefined) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // cert_pem - computed: false, optional: true, required: false
  private _certPem?: string; 
  public get certPem() {
    return this._certPem;
  }
  public set certPem(value: string | undefined) {
    this._certPem = value;
  }
  public resetCertPem() {
    this._certPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPemInput() {
    return this._certPem;
  }

  // http_auth - computed: false, optional: true, required: false
  private _httpAuth?: string; 
  public get httpAuth() {
    return this._httpAuth;
  }
  public set httpAuth(value: string | undefined) {
    this._httpAuth = value;
  }
  public resetHttpAuth() {
    this._httpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthInput() {
    return this._httpAuth;
  }

  // ignore_env_vars - computed: false, optional: true, required: false
  private _ignoreEnvVars?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get ignoreEnvVars() {
    return this._ignoreEnvVars;
  }
  public set ignoreEnvVars(value: { [key: string]: (boolean | cdktf.IResolvable) } | undefined) {
    this._ignoreEnvVars = value;
  }
  public resetIgnoreEnvVars() {
    this._ignoreEnvVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEnvVarsInput() {
    return this._ignoreEnvVars;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this._keyFile;
  }
  public set keyFile(value: string | undefined) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pem - computed: false, optional: true, required: false
  private _keyPem?: string; 
  public get keyPem() {
    return this._keyPem;
  }
  public set keyPem(value: string | undefined) {
    this._keyPem = value;
  }
  public resetKeyPem() {
    this._keyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPemInput() {
    return this._keyPem;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string | undefined) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this._skipVerify;
  }
  public set skipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth_jwt - computed: false, optional: true, required: false
  private _authJwt?: NomadProviderAuthJwt; 
  public get authJwt() {
    return this._authJwt;
  }
  public set authJwt(value: NomadProviderAuthJwt | undefined) {
    this._authJwt = value;
  }
  public resetAuthJwt() {
    this._authJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authJwtInput() {
    return this._authJwt;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: NomadProviderHeaders[] | cdktf.IResolvable; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: NomadProviderHeaders[] | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      ca_file: cdktf.stringToTerraform(this._caFile),
      ca_pem: cdktf.stringToTerraform(this._caPem),
      cert_file: cdktf.stringToTerraform(this._certFile),
      cert_pem: cdktf.stringToTerraform(this._certPem),
      http_auth: cdktf.stringToTerraform(this._httpAuth),
      ignore_env_vars: cdktf.hashMapper(cdktf.booleanToTerraform)(this._ignoreEnvVars),
      key_file: cdktf.stringToTerraform(this._keyFile),
      key_pem: cdktf.stringToTerraform(this._keyPem),
      region: cdktf.stringToTerraform(this._region),
      secret_id: cdktf.stringToTerraform(this._secretId),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      alias: cdktf.stringToTerraform(this._alias),
      auth_jwt: nomadProviderAuthJwtToTerraform(this._authJwt),
      headers: cdktf.listMapper(nomadProviderHeadersToTerraform, true)(this._headers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_pem: {
        value: cdktf.stringToHclTerraform(this._caPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file: {
        value: cdktf.stringToHclTerraform(this._certFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_pem: {
        value: cdktf.stringToHclTerraform(this._certPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_auth: {
        value: cdktf.stringToHclTerraform(this._httpAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_env_vars: {
        value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(this._ignoreEnvVars),
        isBlock: false,
        type: "map",
        storageClassType: "booleanMap",
      },
      key_file: {
        value: cdktf.stringToHclTerraform(this._keyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pem: {
        value: cdktf.stringToHclTerraform(this._keyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_verify: {
        value: cdktf.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_jwt: {
        value: nomadProviderAuthJwtToHclTerraform(this._authJwt),
        isBlock: true,
        type: "list",
        storageClassType: "NomadProviderAuthJwtList",
      },
      headers: {
        value: cdktf.listMapperHcl(nomadProviderHeadersToHclTerraform, true)(this._headers),
        isBlock: true,
        type: "list",
        storageClassType: "NomadProviderHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
