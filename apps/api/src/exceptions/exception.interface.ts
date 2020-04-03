import { Document } from 'mongoose';

interface IPpaginator {
    paginate(): void;
}
export interface Exception extends Document, IPpaginator {
    readonly _id: string;
    readonly TENANT_ID: string,
    readonly SOURCE_ID: string,
    readonly TITLE: string,
    readonly DESCRIPTION: string,
    readonly EXT_FIELDS: string,
    readonly STATUS: string,
    readonly SEVERITY: string,
    readonly REFERENCE_ID: string,
    readonly REF_TYPE: string,
    readonly NAV_PROPS: string,
    readonly SUB_TITLE: string,
    readonly READ_BY: string,
    readonly DELETED_BY: string,
    readonly CREATED_DATE: Date,
    readonly LAST_MODIFIED_DATE: Date
}