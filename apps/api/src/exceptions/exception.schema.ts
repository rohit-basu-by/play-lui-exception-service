import * as mongoose from 'mongoose';


export const ExceptionSchema = new mongoose.Schema({
    TENANT_ID: String,
    SOURCE_ID: String,
    TITLE: String,
    DESCRIPTION: String,
    EXT_FIELDS: String,
    STATUS: String,
    SEVERITY: String,
    REFERENCE_ID: String,
    REF_TYPE: String,
    NAV_PROPS: String,
    SUB_TITLE: String,
    READ_BY: String,
    DELETED_BY: String,
    CREATED_DATE: Date,
    LAST_MODIFIED_DATE: Date
}, { timestamps: { createdAt: 'CREATED_DATE', updatedAt: 'LAST_MODIFIED_AT' } });