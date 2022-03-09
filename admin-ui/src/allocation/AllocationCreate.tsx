import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AllocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="PEP Package" source="pepPackage" />
        <TextInput label="VIN" source="vin" />
      </SimpleForm>
    </Create>
  );
};
