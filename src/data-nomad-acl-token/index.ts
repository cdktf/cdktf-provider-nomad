// https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/acl_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNomadAclTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Non-sensitive identifier for this token.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/acl_token#accessor_id DataNomadAclToken#accessor_id}
  */
  readonly accessorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/acl_token#id DataNomadAclToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNomadAclTokenRoles {
}

export function dataNomadAclTokenRolesToTerraform(struct?: DataNomadAclTokenRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataNomadAclTokenRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNomadAclTokenRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNomadAclTokenRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNomadAclTokenRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataNomadAclTokenRolesOutputReference {
    return new DataNomadAclTokenRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/acl_token nomad_acl_token}
*/
export class DataNomadAclToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nomad_acl_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/nomad/1.4.20/docs/data-sources/acl_token nomad_acl_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNomadAclTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataNomadAclTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'nomad_acl_token',
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
    this._accessorId = config.accessorId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: false, optional: false, required: true
  private _accessorId?: string; 
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
  }
  public set accessorId(value: string) {
    this._accessorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorIdInput() {
    return this._accessorId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // expiration_ttl - computed: true, optional: false, required: false
  public get expirationTtl() {
    return this.getStringAttribute('expiration_ttl');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataNomadAclTokenRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessor_id: cdktf.stringToTerraform(this._accessorId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
