// https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclAuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines whether this ACL Auth Method is to be set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#default AclAuthMethod#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#id AclAuthMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the maximum life of a token created by this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}
  */
  readonly maxTokenTtl: string;
  /**
  * The identifier of the ACL Auth Method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#name AclAuthMethod#name}
  */
  readonly name: string;
  /**
  * Defines whether the ACL Auth Method creates a local or global token when performing SSO login. This field must be set to either "local" or "global".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}
  */
  readonly tokenLocality: string;
  /**
  * Defines the token format for the authenticated users. This can be lightly templated using HIL '${foo}' syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#token_name_format AclAuthMethod#token_name_format}
  */
  readonly tokenNameFormat?: string;
  /**
  * ACL Auth Method SSO workflow type. Currently, the only supported type is "OIDC."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#type AclAuthMethod#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#config AclAuthMethod#config}
  */
  readonly config: AclAuthMethodConfigA;
}
export interface AclAuthMethodConfigA {
  /**
  * A list of allowed values that can be used for the redirect URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#allowed_redirect_uris AclAuthMethod#allowed_redirect_uris}
  */
  readonly allowedRedirectUris?: string[];
  /**
  * List of auth claims that are valid for login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#bound_audiences AclAuthMethod#bound_audiences}
  */
  readonly boundAudiences?: string[];
  /**
  * The value against which to match the iss claim in a JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#bound_issuer AclAuthMethod#bound_issuer}
  */
  readonly boundIssuer?: string[];
  /**
  * Mappings of claims (key) that will be copied to a metadata field (value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#claim_mappings AclAuthMethod#claim_mappings}
  */
  readonly claimMappings?: { [key: string]: string };
  /**
  * Duration of leeway when validating all claims in the form of a time duration such as "5m" or "1h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#clock_skew_leeway AclAuthMethod#clock_skew_leeway}
  */
  readonly clockSkewLeeway?: string;
  /**
  * PEM encoded CA certs for use by the TLS client used to talk with the OIDC Discovery URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#discovery_ca_pem AclAuthMethod#discovery_ca_pem}
  */
  readonly discoveryCaPem?: string[];
  /**
  * Duration of leeway when validating expiration of a JWT in the form of a time duration such as "5m" or "1h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#expiration_leeway AclAuthMethod#expiration_leeway}
  */
  readonly expirationLeeway?: string;
  /**
  * PEM encoded CA cert for use by the TLS client used to talk with the JWKS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#jwks_ca_cert AclAuthMethod#jwks_ca_cert}
  */
  readonly jwksCaCert?: string;
  /**
  * JSON Web Key Sets url for authenticating signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#jwks_url AclAuthMethod#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * List of PEM-encoded public keys to use to authenticate signatures locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#jwt_validation_pub_keys AclAuthMethod#jwt_validation_pub_keys}
  */
  readonly jwtValidationPubKeys?: string[];
  /**
  * Mappings of list claims (key) that will be copied to a metadata field (value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#list_claim_mappings AclAuthMethod#list_claim_mappings}
  */
  readonly listClaimMappings?: { [key: string]: string };
  /**
  * Duration of leeway when validating not before values of a token in the form of a time duration such as "5m" or "1h".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#not_before_leeway AclAuthMethod#not_before_leeway}
  */
  readonly notBeforeLeeway?: string;
  /**
  * The OAuth Client ID configured with the OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#oidc_client_id AclAuthMethod#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * The OAuth Client Secret configured with the OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#oidc_client_secret AclAuthMethod#oidc_client_secret}
  */
  readonly oidcClientSecret?: string;
  /**
  * Nomad will not make a request to the identity provider to get OIDC UserInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#oidc_disable_userinfo AclAuthMethod#oidc_disable_userinfo}
  */
  readonly oidcDisableUserinfo?: boolean | cdktf.IResolvable;
  /**
  * The OIDC Discovery URL, without any .well-known component (base path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#oidc_discovery_url AclAuthMethod#oidc_discovery_url}
  */
  readonly oidcDiscoveryUrl?: string;
  /**
  * List of OIDC scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#oidc_scopes AclAuthMethod#oidc_scopes}
  */
  readonly oidcScopes?: string[];
  /**
  * A list of supported signing algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#signing_algs AclAuthMethod#signing_algs}
  */
  readonly signingAlgs?: string[];
}

export function aclAuthMethodConfigAToTerraform(struct?: AclAuthMethodConfigAOutputReference | AclAuthMethodConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRedirectUris),
    bound_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundAudiences),
    bound_issuer: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundIssuer),
    claim_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.claimMappings),
    clock_skew_leeway: cdktf.stringToTerraform(struct!.clockSkewLeeway),
    discovery_ca_pem: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveryCaPem),
    expiration_leeway: cdktf.stringToTerraform(struct!.expirationLeeway),
    jwks_ca_cert: cdktf.stringToTerraform(struct!.jwksCaCert),
    jwks_url: cdktf.stringToTerraform(struct!.jwksUrl),
    jwt_validation_pub_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jwtValidationPubKeys),
    list_claim_mappings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.listClaimMappings),
    not_before_leeway: cdktf.stringToTerraform(struct!.notBeforeLeeway),
    oidc_client_id: cdktf.stringToTerraform(struct!.oidcClientId),
    oidc_client_secret: cdktf.stringToTerraform(struct!.oidcClientSecret),
    oidc_disable_userinfo: cdktf.booleanToTerraform(struct!.oidcDisableUserinfo),
    oidc_discovery_url: cdktf.stringToTerraform(struct!.oidcDiscoveryUrl),
    oidc_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oidcScopes),
    signing_algs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signingAlgs),
  }
}


export function aclAuthMethodConfigAToHclTerraform(struct?: AclAuthMethodConfigAOutputReference | AclAuthMethodConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRedirectUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bound_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bound_issuer: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundIssuer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    claim_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.claimMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    clock_skew_leeway: {
      value: cdktf.stringToHclTerraform(struct!.clockSkewLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_ca_pem: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveryCaPem),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expiration_leeway: {
      value: cdktf.stringToHclTerraform(struct!.expirationLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.jwksCaCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_url: {
      value: cdktf.stringToHclTerraform(struct!.jwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_validation_pub_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jwtValidationPubKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    list_claim_mappings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.listClaimMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    not_before_leeway: {
      value: cdktf.stringToHclTerraform(struct!.notBeforeLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oidcClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.oidcClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_disable_userinfo: {
      value: cdktf.booleanToHclTerraform(struct!.oidcDisableUserinfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oidc_discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.oidcDiscoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oidcScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signing_algs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signingAlgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AclAuthMethodConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AclAuthMethodConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRedirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRedirectUris = this._allowedRedirectUris;
    }
    if (this._boundAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundAudiences = this._boundAudiences;
    }
    if (this._boundIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundIssuer = this._boundIssuer;
    }
    if (this._claimMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMappings = this._claimMappings;
    }
    if (this._clockSkewLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSkewLeeway = this._clockSkewLeeway;
    }
    if (this._discoveryCaPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryCaPem = this._discoveryCaPem;
    }
    if (this._expirationLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationLeeway = this._expirationLeeway;
    }
    if (this._jwksCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksCaCert = this._jwksCaCert;
    }
    if (this._jwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUrl = this._jwksUrl;
    }
    if (this._jwtValidationPubKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidationPubKeys = this._jwtValidationPubKeys;
    }
    if (this._listClaimMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.listClaimMappings = this._listClaimMappings;
    }
    if (this._notBeforeLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBeforeLeeway = this._notBeforeLeeway;
    }
    if (this._oidcClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcClientId = this._oidcClientId;
    }
    if (this._oidcClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcClientSecret = this._oidcClientSecret;
    }
    if (this._oidcDisableUserinfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcDisableUserinfo = this._oidcDisableUserinfo;
    }
    if (this._oidcDiscoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcDiscoveryUrl = this._oidcDiscoveryUrl;
    }
    if (this._oidcScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcScopes = this._oidcScopes;
    }
    if (this._signingAlgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgs = this._signingAlgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclAuthMethodConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedRedirectUris = undefined;
      this._boundAudiences = undefined;
      this._boundIssuer = undefined;
      this._claimMappings = undefined;
      this._clockSkewLeeway = undefined;
      this._discoveryCaPem = undefined;
      this._expirationLeeway = undefined;
      this._jwksCaCert = undefined;
      this._jwksUrl = undefined;
      this._jwtValidationPubKeys = undefined;
      this._listClaimMappings = undefined;
      this._notBeforeLeeway = undefined;
      this._oidcClientId = undefined;
      this._oidcClientSecret = undefined;
      this._oidcDisableUserinfo = undefined;
      this._oidcDiscoveryUrl = undefined;
      this._oidcScopes = undefined;
      this._signingAlgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedRedirectUris = value.allowedRedirectUris;
      this._boundAudiences = value.boundAudiences;
      this._boundIssuer = value.boundIssuer;
      this._claimMappings = value.claimMappings;
      this._clockSkewLeeway = value.clockSkewLeeway;
      this._discoveryCaPem = value.discoveryCaPem;
      this._expirationLeeway = value.expirationLeeway;
      this._jwksCaCert = value.jwksCaCert;
      this._jwksUrl = value.jwksUrl;
      this._jwtValidationPubKeys = value.jwtValidationPubKeys;
      this._listClaimMappings = value.listClaimMappings;
      this._notBeforeLeeway = value.notBeforeLeeway;
      this._oidcClientId = value.oidcClientId;
      this._oidcClientSecret = value.oidcClientSecret;
      this._oidcDisableUserinfo = value.oidcDisableUserinfo;
      this._oidcDiscoveryUrl = value.oidcDiscoveryUrl;
      this._oidcScopes = value.oidcScopes;
      this._signingAlgs = value.signingAlgs;
    }
  }

  // allowed_redirect_uris - computed: false, optional: true, required: false
  private _allowedRedirectUris?: string[]; 
  public get allowedRedirectUris() {
    return this.getListAttribute('allowed_redirect_uris');
  }
  public set allowedRedirectUris(value: string[]) {
    this._allowedRedirectUris = value;
  }
  public resetAllowedRedirectUris() {
    this._allowedRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUrisInput() {
    return this._allowedRedirectUris;
  }

  // bound_audiences - computed: false, optional: true, required: false
  private _boundAudiences?: string[]; 
  public get boundAudiences() {
    return this.getListAttribute('bound_audiences');
  }
  public set boundAudiences(value: string[]) {
    this._boundAudiences = value;
  }
  public resetBoundAudiences() {
    this._boundAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAudiencesInput() {
    return this._boundAudiences;
  }

  // bound_issuer - computed: false, optional: true, required: false
  private _boundIssuer?: string[]; 
  public get boundIssuer() {
    return this.getListAttribute('bound_issuer');
  }
  public set boundIssuer(value: string[]) {
    this._boundIssuer = value;
  }
  public resetBoundIssuer() {
    this._boundIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIssuerInput() {
    return this._boundIssuer;
  }

  // claim_mappings - computed: false, optional: true, required: false
  private _claimMappings?: { [key: string]: string }; 
  public get claimMappings() {
    return this.getStringMapAttribute('claim_mappings');
  }
  public set claimMappings(value: { [key: string]: string }) {
    this._claimMappings = value;
  }
  public resetClaimMappings() {
    this._claimMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMappingsInput() {
    return this._claimMappings;
  }

  // clock_skew_leeway - computed: false, optional: true, required: false
  private _clockSkewLeeway?: string; 
  public get clockSkewLeeway() {
    return this.getStringAttribute('clock_skew_leeway');
  }
  public set clockSkewLeeway(value: string) {
    this._clockSkewLeeway = value;
  }
  public resetClockSkewLeeway() {
    this._clockSkewLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewLeewayInput() {
    return this._clockSkewLeeway;
  }

  // discovery_ca_pem - computed: false, optional: true, required: false
  private _discoveryCaPem?: string[]; 
  public get discoveryCaPem() {
    return this.getListAttribute('discovery_ca_pem');
  }
  public set discoveryCaPem(value: string[]) {
    this._discoveryCaPem = value;
  }
  public resetDiscoveryCaPem() {
    this._discoveryCaPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCaPemInput() {
    return this._discoveryCaPem;
  }

  // expiration_leeway - computed: false, optional: true, required: false
  private _expirationLeeway?: string; 
  public get expirationLeeway() {
    return this.getStringAttribute('expiration_leeway');
  }
  public set expirationLeeway(value: string) {
    this._expirationLeeway = value;
  }
  public resetExpirationLeeway() {
    this._expirationLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationLeewayInput() {
    return this._expirationLeeway;
  }

  // jwks_ca_cert - computed: false, optional: true, required: false
  private _jwksCaCert?: string; 
  public get jwksCaCert() {
    return this.getStringAttribute('jwks_ca_cert');
  }
  public set jwksCaCert(value: string) {
    this._jwksCaCert = value;
  }
  public resetJwksCaCert() {
    this._jwksCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksCaCertInput() {
    return this._jwksCaCert;
  }

  // jwks_url - computed: false, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }

  // jwt_validation_pub_keys - computed: false, optional: true, required: false
  private _jwtValidationPubKeys?: string[]; 
  public get jwtValidationPubKeys() {
    return this.getListAttribute('jwt_validation_pub_keys');
  }
  public set jwtValidationPubKeys(value: string[]) {
    this._jwtValidationPubKeys = value;
  }
  public resetJwtValidationPubKeys() {
    this._jwtValidationPubKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationPubKeysInput() {
    return this._jwtValidationPubKeys;
  }

  // list_claim_mappings - computed: false, optional: true, required: false
  private _listClaimMappings?: { [key: string]: string }; 
  public get listClaimMappings() {
    return this.getStringMapAttribute('list_claim_mappings');
  }
  public set listClaimMappings(value: { [key: string]: string }) {
    this._listClaimMappings = value;
  }
  public resetListClaimMappings() {
    this._listClaimMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listClaimMappingsInput() {
    return this._listClaimMappings;
  }

  // not_before_leeway - computed: false, optional: true, required: false
  private _notBeforeLeeway?: string; 
  public get notBeforeLeeway() {
    return this.getStringAttribute('not_before_leeway');
  }
  public set notBeforeLeeway(value: string) {
    this._notBeforeLeeway = value;
  }
  public resetNotBeforeLeeway() {
    this._notBeforeLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeLeewayInput() {
    return this._notBeforeLeeway;
  }

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: false, optional: true, required: false
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  public resetOidcClientSecret() {
    this._oidcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_disable_userinfo - computed: false, optional: true, required: false
  private _oidcDisableUserinfo?: boolean | cdktf.IResolvable; 
  public get oidcDisableUserinfo() {
    return this.getBooleanAttribute('oidc_disable_userinfo');
  }
  public set oidcDisableUserinfo(value: boolean | cdktf.IResolvable) {
    this._oidcDisableUserinfo = value;
  }
  public resetOidcDisableUserinfo() {
    this._oidcDisableUserinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDisableUserinfoInput() {
    return this._oidcDisableUserinfo;
  }

  // oidc_discovery_url - computed: false, optional: true, required: false
  private _oidcDiscoveryUrl?: string; 
  public get oidcDiscoveryUrl() {
    return this.getStringAttribute('oidc_discovery_url');
  }
  public set oidcDiscoveryUrl(value: string) {
    this._oidcDiscoveryUrl = value;
  }
  public resetOidcDiscoveryUrl() {
    this._oidcDiscoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcDiscoveryUrlInput() {
    return this._oidcDiscoveryUrl;
  }

  // oidc_scopes - computed: false, optional: true, required: false
  private _oidcScopes?: string[]; 
  public get oidcScopes() {
    return this.getListAttribute('oidc_scopes');
  }
  public set oidcScopes(value: string[]) {
    this._oidcScopes = value;
  }
  public resetOidcScopes() {
    this._oidcScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopesInput() {
    return this._oidcScopes;
  }

  // signing_algs - computed: false, optional: true, required: false
  private _signingAlgs?: string[]; 
  public get signingAlgs() {
    return this.getListAttribute('signing_algs');
  }
  public set signingAlgs(value: string[]) {
    this._signingAlgs = value;
  }
  public resetSigningAlgs() {
    this._signingAlgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgsInput() {
    return this._signingAlgs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method nomad_acl_auth_method}
*/
export class AclAuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_auth_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclAuthMethod to import
  * @param importFromId The id of the existing AclAuthMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclAuthMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nomad_acl_auth_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/2.4.0/docs/resources/acl_auth_method nomad_acl_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclAuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AclAuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_acl_auth_method',
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
    this._default = config.default;
    this._id = config.id;
    this._maxTokenTtl = config.maxTokenTtl;
    this._name = config.name;
    this._tokenLocality = config.tokenLocality;
    this._tokenNameFormat = config.tokenNameFormat;
    this._type = config.type;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // max_token_ttl - computed: false, optional: false, required: true
  private _maxTokenTtl?: string; 
  public get maxTokenTtl() {
    return this.getStringAttribute('max_token_ttl');
  }
  public set maxTokenTtl(value: string) {
    this._maxTokenTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenTtlInput() {
    return this._maxTokenTtl;
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

  // token_locality - computed: false, optional: false, required: true
  private _tokenLocality?: string; 
  public get tokenLocality() {
    return this.getStringAttribute('token_locality');
  }
  public set tokenLocality(value: string) {
    this._tokenLocality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocalityInput() {
    return this._tokenLocality;
  }

  // token_name_format - computed: false, optional: true, required: false
  private _tokenNameFormat?: string; 
  public get tokenNameFormat() {
    return this.getStringAttribute('token_name_format');
  }
  public set tokenNameFormat(value: string) {
    this._tokenNameFormat = value;
  }
  public resetTokenNameFormat() {
    this._tokenNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameFormatInput() {
    return this._tokenNameFormat;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // config - computed: false, optional: false, required: true
  private _config = new AclAuthMethodConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AclAuthMethodConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      id: cdktf.stringToTerraform(this._id),
      max_token_ttl: cdktf.stringToTerraform(this._maxTokenTtl),
      name: cdktf.stringToTerraform(this._name),
      token_locality: cdktf.stringToTerraform(this._tokenLocality),
      token_name_format: cdktf.stringToTerraform(this._tokenNameFormat),
      type: cdktf.stringToTerraform(this._type),
      config: aclAuthMethodConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_token_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTokenTtl),
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
      token_locality: {
        value: cdktf.stringToHclTerraform(this._tokenLocality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name_format: {
        value: cdktf.stringToHclTerraform(this._tokenNameFormat),
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
      config: {
        value: aclAuthMethodConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AclAuthMethodConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
