import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AllocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="PEP Package" source="pepPackage" />
        <TextInput label="VIN" source="vin" />
      </SimpleForm>
    </Edit>
  );
};
