import { updateRecord } from "lightning/uiRecordApi";

const addNumbertoField = (id, value) => {


    const fields = {};

    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[NAME_FIELD.fieldApiName] = this.name;

    const recordInput = {
      fields: fields
    };

    updateRecord(recordInput).then((record) => {
      console.log(record);
    });
}


export {addNumbertoField}
